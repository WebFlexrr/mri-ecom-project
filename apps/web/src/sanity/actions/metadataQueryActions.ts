"use server";
import { Pages } from "@/types/sanity";
import { sanityFetch } from "../lib/client";
import { HOME_PAGE_METADATA_QUERY, WORK_PAGE_METADATA_QUERY } from "./queries";

export const getHomePageMetadata = async () =>
	await sanityFetch<Pages>({
		query: HOME_PAGE_METADATA_QUERY,
		revalidate: 172800,
	});

export const getWorkPageMetadata = async () =>
	await sanityFetch<Pages>({
		query: WORK_PAGE_METADATA_QUERY,
		revalidate: 172800,
	});

export const getBlogPageMetadata = async () =>
	await sanityFetch<Pages>({
		query: WORK_PAGE_METADATA_QUERY,
		revalidate: 172800,
	});
