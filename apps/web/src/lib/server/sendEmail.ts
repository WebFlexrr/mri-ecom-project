"use server";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import ContactUsEmail from "../../../emails/ContactUsEmail";
import ForOwnEmail from "../../../emails/ForOwnEmail";

export const sendEmailActions = async (formData: {
	message?: string | undefined;
	fullName: string;
	email: string;
}) => {
	const body = formData;
	console.log(body);

	try {
		const transporter = nodemailer.createTransport({
			host: "smtp.hostinger.com",
			port:
				process.env.NODEMAILER_PORT === undefined
					? process.env.NODEMAILER_PORT
					: 465,
			secure: true, // Use `true` for port 465, `false` for all other ports
			auth: {
				user: process.env.NODEMAILER_USERNAME,
				pass: process.env.NODEMAILER_PASSWORD,
			},
		});

		// send mail with defined transport object
		const forClient = await transporter.sendMail({
			from: `business@webflexrr.com <business@webflexrr.com>`, // sender address
			to: body.email, // list of receivers
			subject: "Thanks for Contacted Us", // Subject line

			// text: "Hello world?", // plain text body
			html: await render(
				ContactUsEmail({
					firstName: body.fullName,
				}),
				{ pretty: true }
			),
		});

		const forOwn = await transporter.sendMail({
			from: `business@webflexrr.com <business@webflexrr.com>`, // sender address
			to: `business@webflexrr.com`, // list of receivers
			subject: "A new prospect send a message", // Subject line
			html: await render(
				ForOwnEmail({
					firstName: body.fullName,
					lastName: body.fullName,
					email: body.email,
					companyName: "",
					additionalMessage: body.message!,
				}),
				{ pretty: true }
			),
		});

		console.log(forClient);
		console.log(forOwn);

		return forClient;
	} catch (error) {
		console.log(error);
		return error;
	}
};
