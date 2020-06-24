

    var mailer = require("nodemailer");

    let fromEmail = "622BB";
    let subject = "Testare Nodemailer";
    let text = "Te drek de panacotar";
    let nume = "Node";

    var Transport = mailer.createTransport({
        service: "Gmail",
        auth: {
            user: "nicolageorge04@gmail.com",
            pass: "Dorfstunde1244"
        }
    });

    var mail = {
        from: fromEmail,
        to: "nicola_george1999@yahoo.com",
        subject: subject,
        text: text,
        html: `<h4> Hai ca ${nume} merge </h4> </br> ${text}.`
    }

    Transport.sendMail(mail, function(error, response){
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + response.message);
        }

        smtpTransport.close();
    });

