import { type ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import imageUrlBuilder from "@sanity/image-url";
import { type SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "../lib/client";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

export const imageUrlFor = (source: SanityImageSource): ImageUrlBuilder => {
	return builder.image(source);
};
