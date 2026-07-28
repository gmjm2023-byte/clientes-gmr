<?php
$PIXEL_ID     = '1506764230633309';
$ACCESS_TOKEN = 'EAAqb2L97sZAkBR4lmhZA59WumU79Tb5owYoMaen7okVTyKlEKSffhL9Wfhj7af2I5bu4xRdVsAhqwHZA7G3PJroH8eZCh1nKFGyEZClcusINIUY2K6rt6RPnz80VZAeeGnTAWNSNpNzE542k2FolSAKmgtFI2va5rzfd4ZBWNvCJY1XHgXJRUjkyxS3l3g1cQZDZD';

header('Content-Type: application/json');

if (strpos($PIXEL_ID, '[') !== false || strpos($ACCESS_TOKEN, '[') !== false) {
    http_response_code(503);
    echo '{"error":"pixel not configured"}';
    exit;
}

$input    = json_decode(file_get_contents('php://input'), true) ?? [];
$event_id = $input['event_id'] ?? ('ld_' . time() . '_' . mt_rand(1000, 9999));

$ip = $_SERVER['HTTP_CF_CONNECTING_IP']
   ?? $_SERVER['HTTP_X_FORWARDED_FOR']
   ?? $_SERVER['REMOTE_ADDR']
   ?? '';

$event = [
    'event_name'       => 'Lead',
    'event_time'       => time(),
    'action_source'    => 'website',
    'event_source_url' => $input['url'] ?? '',
    'event_id'         => $event_id,
    'user_data'        => array_filter([
        'client_ip_address' => $ip,
        'client_user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? '',
        'fbc'               => $input['fbc'] ?? '',
        'fbp'               => $input['fbp'] ?? '',
    ])
];

$payload = json_encode(['data' => [$event], 'access_token' => $ACCESS_TOKEN]);
$url     = "https://graph.facebook.com/v20.0/{$PIXEL_ID}/events";

$ch = curl_init($url);
curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => $payload,
    CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT        => 6,
    CURLOPT_SSL_VERIFYPEER => true,
]);
$result = curl_exec($ch);
$code   = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

echo json_encode(['sent' => true, 'fb_status' => $code]);
