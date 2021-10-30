import nodeMailer from "nodemailer";

const testAccount = {
    user: "hiogaptk@gmail.com",
    pass: "26435422wa"
}

let transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: testAccount.user, 
        pass: testAccount.pass, 
    },
    });
)

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log("We gud fi go");
    }
});

