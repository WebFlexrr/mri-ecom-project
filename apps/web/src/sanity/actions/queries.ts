import { defineQuery } from "next-sanity";
// //Metadata Queriers
// export const HOME_PAGE_METADATA_QUERY =
// 	defineQuery(`*[_type=="pages" && route=="/" ][0]{
//   name,route,seo,_id,_type,_createdAt,_updatedAt
// }`);
// export const WORK_PAGE_METADATA_QUERY =
// 	defineQuery(`*[_type=="pages" && route=="/work" ][0]{
//   name,route,seo,_id,_type,_createdAt,_updatedAt
// }`);
// export const BLOGS_PAGE_METADATA_QUERY =
// 	defineQuery(`*[_type=="pages" && route=="/blogs" ][0]{
//   name,route,seo,_id,_type,_createdAt,_updatedAt
// }`);

//project Query
export const PRODUCTS_QUERY = defineQuery(`*[_type=="products"]{
  _rev,
colors,
size,
_type,
_createdAt,
tagline,
seo,
slug,
images,
price,
name,
_updatedAt,
_id,
stock,
}`);

export const SINGLE_PROJECT_QUERY = (slug: string) =>
	defineQuery(`*[_type=="products" && slug.current == "${slug}"][0]{
  _rev,
colors,
size,
_type,
_createdAt,
tagline,
seo,
description,
material,
additionalInfo,
slug,
images,
price,
name,
_updatedAt,
_id,
stock,
}`);

export const BLOG_QUERY = defineQuery(`*[_type=="blogs"]`);

export const FAQ_Query = defineQuery(
	`*[_type=="faq"]{id,question,ans,content,_updatedAt}`
);

export const PLANS_Query =
	defineQuery(`*[_type=="plans"]{id,name,highlighted,description,
  price,
  service{
    serviceName,
      isSelected
  }[],
  bookingLink
}`);

export const FEEDBACK_Query = defineQuery(`*[_type=="feedback" ]{
      _id,
      clientName,
      "slug":slug.current,
      clientPosition,
      rating,
      message,
      "image":image.asset->url,
      _type
    }`);

export const PRIVACY_POLICY_QUERY = defineQuery(`*[_type=="privacyPolicy"][0]`);

export const TERMS_CONDITIONS_QUERY = defineQuery(
	`*[_type=="termsConditions"][0]`
);

export const REFUND_POLICY_QUERY = defineQuery(`*[_type=="refundPolicy"][0]`);

export const GET_SINGLE_BLOG_QUERY = (slug: string) => {
	return defineQuery(`*[_type=="blogs" && slug.current == "${slug}"][0]`);
};
