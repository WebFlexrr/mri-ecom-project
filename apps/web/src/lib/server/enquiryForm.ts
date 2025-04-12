"use server";

import { client } from "@/sanity/lib/client";

export const submitFormActions = async ({
	message,
	fullName,
	email,
}: {
	message?: string | undefined;
	fullName: string;
	email: string;
}) => {
	console.log({
		message,
		fullName,
		email,
	});

	const queryDoc = {
		_type: "enquiry",
		name: fullName,
		email,
		message,
		createdAt: new Date().toISOString(),
	};

	try {
		await client.create(queryDoc);

		alert("Message send");
	} catch (error) {
		console.log(error);
		return error;
	}
};
