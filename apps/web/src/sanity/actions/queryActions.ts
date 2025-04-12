"use server";


import { Products } from "@/types/sanity";
import { sanityFetch } from "../lib/client";
import {

	PRODUCTS_QUERY,
	
	SINGLE_PROJECT_QUERY,
} from "./queries";


//Projects
export const getProducts = async () =>
	await sanityFetch<Products[]>({ query: PRODUCTS_QUERY });

export const getProductDetails = async (slug: string) =>
	await sanityFetch<Products>({ query: SINGLE_PROJECT_QUERY(slug) });

//Blogs
// export const getBlogs = async () =>
// 	await sanityFetch<Blogs[]>({ query: BLOG_QUERY });

// export const getSingleBlog = async (slug: string) =>
// 	await sanityFetch<Blogs>({
// 		query: GET_SINGLE_BLOG_QUERY(slug),
// 	});
