<?php

function ip_info($ip = NULL, $purpose = "location", $deep_detect = TRUE) {
    $output = NULL;
    if (filter_var($ip, FILTER_VALIDATE_IP) === FALSE) {
        $ip = $_SERVER["REMOTE_ADDR"];
        if ($deep_detect) {
            if (filter_var(@$_SERVER['HTTP_X_FORWARDED_FOR'], FILTER_VALIDATE_IP))
                $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
            if (filter_var(@$_SERVER['HTTP_CLIENT_IP'], FILTER_VALIDATE_IP))
                $ip = $_SERVER['HTTP_CLIENT_IP'];
        }
    }
    $purpose    = str_replace(array("name", "\n", "\t", " ", "-", "_"), NULL, strtolower(trim($purpose)));
    $support    = array("country", "countrycode", "state", "region", "city", "location", "address");
    $continents = array(
        "AF" => "Africa",
        "AN" => "Antarctica",
        "AS" => "Asia",
        "EU" => "Europe",
        "OC" => "Australia (Oceania)",
        "NA" => "North America",
        "SA" => "South America"
    );
    if (filter_var($ip, FILTER_VALIDATE_IP) && in_array($purpose, $support)) {
        $ipdat = @json_decode(file_get_contents("http://www.geoplugin.net/json.gp?ip=" . $ip));
        if (@strlen(trim($ipdat->geoplugin_countryCode)) == 2) {
            switch ($purpose) {
                case "location":
                    $output = array(
                        "city"           => @$ipdat->geoplugin_city,
                        "state"          => @$ipdat->geoplugin_regionName,
                        "country"        => @$ipdat->geoplugin_countryName,
                        "country_code"   => @$ipdat->geoplugin_countryCode,
                        "continent"      => @$continents[strtoupper($ipdat->geoplugin_continentCode)],
                        "continent_code" => @$ipdat->geoplugin_continentCode
                    );
                    break;
                case "address":
                    $address = array($ipdat->geoplugin_countryName);
                    if (@strlen($ipdat->geoplugin_regionName) >= 1)
                        $address[] = $ipdat->geoplugin_regionName;
                    if (@strlen($ipdat->geoplugin_city) >= 1)
                        $address[] = $ipdat->geoplugin_city;
                    $output = implode(", ", array_reverse($address));
                    break;
                case "city":
                    $output = @$ipdat->geoplugin_city;
                    break;
                case "state":
                    $output = @$ipdat->geoplugin_regionName;
                    break;
                case "region":
                    $output = @$ipdat->geoplugin_regionName;
                    break;
                case "country":
                    $output = @$ipdat->geoplugin_countryName;
                    break;
                case "countrycode":
                    $output = @$ipdat->geoplugin_countryCode;
                    break;
            }
        }
    }
    return $output;
}

/*
echo ip_info("Visitor", "Country")."<br>";
echo ip_info("Visitor", "Country Code")."<br>";
echo ip_info("Visitor", "State")."<br>";
echo ip_info("Visitor", "City")."<br>";
echo ip_info("Visitor", "Address")."<br>";
echo $_SERVER["REMOTE_ADDR"]."<br>";
print_r(ip_info("Visitor", "Location"))."<br>";
*/

/*
function getUTCOffset($timezone)
{
    $current   = timezone_open($timezone);
    $utcTime  = new \DateTime('now', new \DateTimeZone('UTC'));
    $offsetInSecs =  $current->getOffset($utcTime);
    $hoursAndSec = gmdate('H:i', abs($offsetInSecs));
    return stripos($offsetInSecs, '-') === false ? "+{$hoursAndSec}" : "-{$hoursAndSec}";
}
*/

//echo getUTCOffset("America/Mexico_City");

function convertZone($datetime, $offset){
    $date = new DateTime($datetime, new DateTimeZone('UTC'));
    $date->setTimezone(new DateTimeZone($offset));
    return $date->format('l\, jS F Y \a\t g:i A');
}

function readDate($date){
    $newdate = date_create($date);
    // return date_format($newdate, "l\, jS F Y");
    return date_format($newdate, "d - m - Y");
}

function rMonth($date){
    $month = date_create($date);
    return date_format($month, "F");
}

function rYear($date){
    $month = date_create($date);
    return date_format($month, "Y");
}

function difDates($odate, $ndate){
    $od = date_create($odate);
    $nd = date_create($ndate);
    $interval = date_diff($od, $nd);
    return $interval->format('%R%a');
}

?>