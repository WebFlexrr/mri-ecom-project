"use server";

import { client } from "@/sanity/lib/client";

export const purchaseOrderActions = async ({


	
	email,
      firstName,
      lastName,
      address,
      city,
      state,
      zipCode,
    subtotal,
    shipping,

    total,
}: {
	message?: string | undefined;
	
	 email:string,
      firstName:string,
      lastName:string,
      address:string,
      city:string,
      state:string,
      zipCode:string,
    subtotal:number,
    shipping:number,

    total:number,
    
    
      
 

}) => {
	// console.log({
	// 	message,
	// 	fullName,
	// 	email,
	// });

	const queryDoc = {
		_type: "order",
		email,
      firstName,
      lastName,
      address,
      city,
      state,
      zipCode,
    subtotal,
    shipping,

    total,
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
