"use server";
import { client } from "@/sanity/lib/client";
import { CartItem } from "@/store/useCartStore";
import { v4 as uuidv4 } from 'uuid'

export const purchaseOrderActions = async ({
	email,
  firstName,
  lastName,
  address,
  city,
  state,
  zipCode,
  shippingMethod,
  cart,totalAmount


 
}: {
	
	 email:string,
      firstName:string,
      lastName:string,
      address:string,
      city:string,
      state:string,
      zipCode:string,
      shippingMethod:string,
      cart:CartItem[],
      totalAmount:number
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
      shippingMethod,
      items:cart.map(item => {
          return {
            _type: 'item',
              _key: uuidv4(),
            product: {
              _type: 'reference',
              _ref: item.productId, // pass the Sanity _id of the product
            },
            productName: item.productName,
            size: item.size,
            color: item.color,
            quantity: item.quantity,
            price: item.price
          }}),
      status:'pending',
      totalAmount,
		createdAt: new Date().toISOString(),
	};

	try {
		const data = await client.create(queryDoc);
console.log("Sented Data",data)

return data._id
		
	} catch (error) {
		console.log(error);
		return error;
	}
};
