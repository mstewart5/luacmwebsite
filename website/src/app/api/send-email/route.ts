import nodemailer from "nodemailer";

/**
 * Send mail POST requests to this route.
 */
async function POST(request) { // Prevent exporting the function since this is disabled
//export async function POST(request) {
  const { name, email, subject, message } = await request.json();

  /*
   * You need some sort of .env file at the root of the Next.js project with the
   * following variables defined:
   * 
   * SMTP_HOST=smtp.gmail.com
   * SMTP_PORT=465
   * SMTP_USER=<your_email>@gmail.com
   * SMTP_PASSWORD=<app_password>
   */
  const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: process.env.SMTP_PORT,
	auth: {
	  user: process.env.SMTP_USER,
	  pass: process.env.SMTP_PASSWORD,
	},
	secure: true
  });

  const toEmail: string = "acm@lamar.edu";
  const mailOptions = {
	to: [toEmail],
	from: email,
	subject: subject + " - \"" + name + "\" " + email,
	html: `<p>${message}</p>`,
  };

  const info = await transporter.sendMail(mailOptions);

  console.log("Message sent: %s", info.messageId);
  
  return new Response(JSON.stringify({ message: "Mail sent!" }, { status: 200 }));
}
