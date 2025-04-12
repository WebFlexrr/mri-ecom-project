import { createClient, type QueryParams } from "next-sanity";

import { apiVersion, dataset, projectId } from "../config/sanity-config";

export const client = createClient({
	projectId,
	dataset,
	apiVersion, // https://www.sanity.io/docs/api-versioning
	useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
	token: process.env.SANITY_WRITE_TOKEN,
});

export async function sanityFetch<T>({
	query,
	params = {},
	revalidate = 1800, // default revalidation time in seconds
	tags = [],
}: {
	query: string;
	params?: QueryParams;
	revalidate?: number | false;
	tags?: string[];
}): Promise<T> {
	return client.fetch<T>(query, params, {
		// cache: 'no-store',
		next: {
			revalidate: tags.length ? false : revalidate, // for simple, time-based revalidation
			tags, // for tag-based revalidation
		},
	});
}
