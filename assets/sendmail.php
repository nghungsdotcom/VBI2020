<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if(isset($_POST['submit'])){
        //$name=$_POST['name']; // Get Name value from HTML Form
        $mobile=$_POST['tel'];  // Get Mobile No
       // $email=$_POST['email'];  // Get Email Value
       // $message=$_POST['tinnhan']; // Get Message Value
         
         
        $mail = new PHPMailer();
         
        $mail->IsSMTP();
        //Set SMTP host name                          
        $mail->Host = "smtp.office365.com";
        //Set this to true if SMTP host requires authentication to send email
        $mail->SMTPAuth = true;                          
        //Provide username and password     
        $mail->Username = "vbi@nghungs.com";                 
        $mail->Password = "Hanoi@12345";                           
        //If SMTP requires TLS encryption then set it
        $mail->SMTPSecure = "tls";                           
        //Set TCP port to connect to 
        $mail->Port = 587;  
        $mail->From = "vbi@nghungs.com";
        $mail->FromName = "Form VBI";
        $mail->addAddress("nghungs18@gmail.com", "VBI Tiên phong công nghệ");
        $mail->CharSet = "utf-8";
        //$mail->AddCC ($email);
        $mail->IsHTML(true);
        $mail->Subject = "Đăng ký thông tin từ VBI Landing"; // This is your subject
         
        // HTML Message Starts here
         
        $mail->Body = "
        <html>
            <body>
                <table style='width:600px;'>
                    <tbody>
                        <tr>
                            <td style='width:150px'><strong>Tên: </strong></td>
                            <td style='width:400px'>$name</td>
                        </tr>
                        <tr>
                            <td style='width:150px'><strong>Email: </strong></td>
                            <td style='width:400px'>$email</td>
                        </tr>
                        <tr>
                            <td style='width:150px'><strong>Số điện thoại: </strong></td>
                            <td style='width:400px'>$mobile</td>
                        </tr>
                        <tr>
                            <td style='width:150px'><strong>Tin nhắn: </strong></td>
                            <td style='width:400px'>$message</td>
                        </tr>
                    </tbody>
                </table>
            </body>
        </html>
        ";
        // HTML Message Ends here
         
             
        if(!$mail->Send()) {
            // Message if mail has been sent
            echo "
			<script>
                alert('Gửi tin thất bại, vui lòng thử lại.');
            </script>";
        }

    }
?>