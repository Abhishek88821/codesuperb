<?php

$secretKey = '6LeljxEqAAAAAOSH54wVGOalAdVzemteBrHU7cQe';

$postData = $valErr = $statusMsg = '';
$status = 'error';

$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$mobile = $_POST['mobile'] ?? '';
$purpose = $_POST['purpose'] ?? '';    
$messages=$_POST['message'] ?? '';


$headers = "From: smtp@pankajkaushik.com";
$content = 'Contact Enquiry';
require_once('mailer/class.phpmailer.php');
$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'ssl';
$mail->Host = "email-smtp.ap-south-1.amazonaws.com";
$mail->Port = 465;
$mail->IsHTML(true);
$mail->Username = "AKIAVWFYMK7K3PFRJ74H";
$mail->Password = "BK/KZXUiutn6g8mSLuxxQC1VOvaHqVVGQn8Cu8UDsl7I";
$mail->SetFrom('smtp@aspireindia.com', "Credible Solution Pvt. Ltd.");
$mail->AddReplyTo("jhaabhishek88821@gmail.com", "Credible Solution Pvt. Ltd."); 
$mail->AddAddress('jhaabhishek88821@gmail.com',"Credible Solution Pvt. Ltd.");
 

$mail->Subject    = "Contact Enquiry";
$mail->AltBody    = "Message here...";
$message ="Message here...";
$message ="<html><body>";
$message .= '<h2 style="background:linear-gradient(145deg, #b753ff , #00efff); color:#fff; padding:20px 20px; border-bottom:2px solid black;">iFlow India  (Contact Us)</h2>';
$message .='<table rules="all" style="border-color: #666; text-align:center;" cellpadding="10" >';
$message .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" .$name ."</td></tr>";
$message .= "<tr><td><strong>Mobile No.:</strong> </td><td>" . $mobile . "</td></tr>";
$message .= "<tr style='background: #eee;' ><td><strong>E-mail address:</strong> </td><td>" . $email . "</td></tr>";
$message .= "<tr><td><strong>Purpose:</strong> </td><td>" . $purpose . "</td></tr>";
$message .= "<tr style='background: #eee;' ><td><strong>Message:</strong> </td><td>" . $messages . "</td></tr>";

$(isset($_POST['inn_submit_frm'])) {
  
if(empty($valErr)) {
  if(isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response'])) {
    $api_url = 'https://www.google.com/recaptcha/api/siteverify';
    $resq_data = array(
      'secret' => $secretKey,
      'response' => $_POST['g-recaptcha-response'],
      'remoteip' => $_SERVER['REMOTE_ADDR']
    );

    $curlConfig = array(
      CURLOPT_URL => $api_url,
      CURLOPT_POST => true,
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_POSTFIELDS => $resq_data
    );

    $ch = curl_init();
    curl_setopt_array($ch, $curlConfig);
    $response = curl_exec($ch);
    curl_close($ch);

    $responseData = json_decode($response);

    if($responseData->success) {

      $mail->MsgHTML($message);
      if($mail->send() == true){
        echo '<body style="margin: 0;padding: 0;" >';
      echo '<div class="" style="background-color: #000; height: 100%; display: flex; align-items: center; justify-content: center;" >';
      echo '<div class="img-div" style="display: block; text-align: center;" >';
      echo '<img src="https://logosbynick.com/wp-content/uploads/2021/01/animated-gif.gif" style="width: 100px;" />';
      echo '<span style="display: block;color: #fff;margin-top: 45px;font-family:Montserrat, sans-serif; font-weight: 100;font-size: 38px;letter-spacing: 2px;padding:0 100px;display: block;" >Enquiry has been submitted successfully</span>';
      echo '</div>';
      echo '</div>';
      echo '</body>';
      
      header("Refresh: 1; URL=https://crediblesolution.com/");
      
      }else{
        echo 'Error in sending details';
      }

    } else {
      $statusMsg = 'The reCAPTCHA verification failed, please try again.';
    }
  } else {
    $statusMsg = 'Something went wrong, please try again.';
  }
} else {
  $valErr = !empty($valErr)?'<br/>'.trim($valErr, '<br />'):'';
  $statusMsg = 'Please fill all the mandatory field:'.$valErr;
}
};

?>