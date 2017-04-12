<?php

if(!$_POST) exit;

// Email verification, do not edit.
function isEmail($email_booking ) {
	return(preg_match("/^[-_.[:alnum:]]+@((([[:alnum:]]|[[:alnum:]][[:alnum:]-]*[[:alnum:]])\.)+(ad|ae|aero|af|ag|ai|al|am|an|ao|aq|ar|arpa|as|at|au|aw|az|ba|bb|bd|be|bf|bg|bh|bi|biz|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|com|coop|cr|cs|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|in|info|int|io|iq|ir|is|it|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|museum|mv|mw|mx|my|mz|na|name|nc|ne|net|nf|ng|ni|nl|no|np|nr|nt|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|pro|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)$|(([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5])\.){3}([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5]))$/i",$email_booking ));
}

if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

$sender_name     = $_POST['sender_name'];
$check_in     = $_POST['check_in'];
$check_out    = $_POST['check_out'];
$room_type = $_POST['room_type'];
$adults    = $_POST['adults'];
$children   = $_POST['children'];
$name_booking   = $_POST['name_booking'];
$email_booking   = $_POST['email_booking'];
$telephone_booking   = $_POST['telephone_booking'];
$verify_booking   = $_POST['verify_booking'];

if(trim($check_in) == '') {
	echo '<div class="error_message">Enter check in date.</div>';
	exit();
} else if(trim($check_out ) == '') {
	echo '<div class="error_message">Enter check out date.</div>';
	exit();
} else if(trim($room_type ) == '') {
	echo '<div class="error_message">Please select room type</div>';
	exit();
} else if(trim($adults ) == '') {
	echo '<div class="error_message">Enter adults number.</div>';
	exit();
} else if(trim($name_booking ) == '') {
	echo '<div class="error_message">Enter your Name and Last name.</div>';
	exit();
} else if(trim($email_booking) == '') {
	echo '<div class="error_message">Please enter a valid email address.</div>';
	exit();
} else if(!isEmail($email_booking)) {
	echo '<div class="error_message">You have enter an invalid e-mail address, try again.</div>';
	exit();
} else if(trim($telephone_booking) == '') {
	echo '<div class="error_message">Please enter a valid phone number.</div>';
	exit();
} else if(!is_numeric($telephone_booking)) {
	echo '<div class="error_message">Phone number can only contain numbers.</div>';
	exit();
} else if(!isset($verify_booking) || trim($verify_booking) == '') {
	echo '<div class="error_message"> Please enter the verification number.</div>';
	exit();
} else if(trim($verify_booking) != '4') {
	echo '<div class="error_message">The verification number you entered is incorrect.</div>';
	exit();
}
//$address = "HERE your email address";
$address = "info@domain.com";


// Below the subject of the email
$e_subject = 'You\'ve been contacted by ' . $name_booking . '.';

// You can change this if you feel that you need to.
$e_body = "You have been contacted by $name_booking from $sender_name with additional message as follows." . PHP_EOL . PHP_EOL;
$e_content = "Check in: $check_in\nCheck out: $check_out\nRoom Type: $room_type\nNumber of adults: $adults\nNumber of child: $children" . PHP_EOL . PHP_EOL;
$e_reply = "You can contact $name_booking via email: $email_booking or by phone $telephone_booking";

$msg = wordwrap( $e_body . $e_content . $e_reply, 70 );

$headers = "From: $email_booking" . PHP_EOL;
$headers .= "Reply-To: $email_booking" . PHP_EOL;
$headers .= "MIME-Version: 1.0" . PHP_EOL;
$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;

$user = "$email_booking";
$usersubject = "Thank You";
$userheaders = "From: info@domain.com\n";
$userheaders .= "MIME-Version: 1.0" . PHP_EOL;
$userheaders .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
$userheaders .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;
$usermessage = "Thank you for contact $sender_name. We will reply shortly with more details. Here a summary of your request: \n\n$e_content.  \n\n Call 0034 434324  for further information.";
mail($user,$usersubject,$usermessage,$userheaders);

if(mail($address, $e_subject, $msg, $headers)) {

	// Success message
	echo "<div id='success_page' style='padding:20px 0 40px 0; text-align:center; '>";
	echo "<div style='font-size:90px; font-weight:normal; margin-bottom:20px;'><i class='icon_set_1_icon-76'></i></div>";
	echo "<strong >Email Sent.</strong><br>";
	echo "Thank you <strong>$name_booking</strong>,<br> your message has been submitted. We will contact you shortly.";
	echo "</div>";

} else {

	echo 'ERROR!';

}
