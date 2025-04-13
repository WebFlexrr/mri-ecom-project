/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch'
  background?: string
  foreground?: string
  population?: number
  title?: string
}

export type SanityImagePalette = {
  _type: 'sanity.imagePalette'
  darkMuted?: SanityImagePaletteSwatch
  lightVibrant?: SanityImagePaletteSwatch
  darkVibrant?: SanityImagePaletteSwatch
  vibrant?: SanityImagePaletteSwatch
  dominant?: SanityImagePaletteSwatch
  lightMuted?: SanityImagePaletteSwatch
  muted?: SanityImagePaletteSwatch
}

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions'
  height?: number
  width?: number
  aspectRatio?: number
}

export type SanityFileAsset = {
  _id: string
  _type: 'sanity.fileAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  source?: SanityAssetSourceData
}

export type Geopoint = {
  _type: 'geopoint'
  lat?: number
  lng?: number
  alt?: number
}

export type Products = {
  _id: string
  _type: 'products'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  slug?: Slug
  tagline?: string
  price?: number
  images: Array<string>
  description?: string
  material?: string
  additionalInfo?: string
  size: Array<string>
  colors: Array<{
    color?: Color
    name?: string
    _type: 'Color Parameter'
    _key: string
  }>
  originalPrice?:number;
  features?: Array<string>
  benefits?: Array<string>
  category?: string
  purposes?: Array<string>
  badges?: Array<string>
  stock?: number
  seo?: SeoMetaFields
}

export type Slug = {
  _type: 'slug'
  current?: string
  source?: string
}

export type Order = {
  _id: string
  _type: 'order'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  email?: string
  message?: string
  createdAt?: string
}

export type Color = {
  _type: 'color'
  hex?: string
  alpha?: number
  hsl?: HslaColor
  hsv?: HsvaColor
  rgb?: RgbaColor
}

export type RgbaColor = {
  _type: 'rgbaColor'
  r?: number
  g?: number
  b?: number
  a?: number
}

export type HsvaColor = {
  _type: 'hsvaColor'
  h?: number
  s?: number
  v?: number
  a?: number
}

export type HslaColor = {
  _type: 'hslaColor'
  h?: number
  s?: number
  l?: number
  a?: number
}

export type MetaTag = {
  _type: 'metaTag'
  metaAttributes?: Array<
    {
      _key: string
    } & MetaAttribute
  >
}

export type MetaAttribute = {
  _type: 'metaAttribute'
  attributeKey?: string
  attributeType?: 'string' | 'image'
  attributeValueImage?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    media?: unknown
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  attributeValueString?: string
}

export type SeoMetaFields = {
  _type: 'seoMetaFields'
  nofollowAttributes?: boolean
  metaTitle?: string
  metaDescription?: string
  metaImage?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    media?: unknown
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  seoKeywords?: Array<string>
  openGraph?: OpenGraph
  additionalMetaTags?: Array<
    {
      _key: string
    } & MetaTag
  >
  twitter?: Twitter
}

export type Twitter = {
  _type: 'twitter'
  cardType?: string
  creator?: string
  site?: string
  handle?: string
}

export type OpenGraph = {
  _type: 'openGraph'
  url?: string
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    media?: unknown
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  title?: string
  description?: string
  siteName?: string
}

export type SanityImageCrop = {
  _type: 'sanity.imageCrop'
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot'
  x?: number
  y?: number
  height?: number
  width?: number
}

export type SanityImageAsset = {
  _id: string
  _type: 'sanity.imageAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  metadata?: SanityImageMetadata
  source?: SanityAssetSourceData
}

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData'
  name?: string
  id?: string
  url?: string
}

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata'
  location?: Geopoint
  dimensions?: SanityImageDimensions
  palette?: SanityImagePalette
  lqip?: string
  blurHash?: string
  hasAlpha?: boolean
  isOpaque?: boolean
}

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | Products
  | Slug
  | Order
  | Color
  | RgbaColor
  | HsvaColor
  | HslaColor
  | MetaTag
  | MetaAttribute
  | SeoMetaFields
  | Twitter
  | OpenGraph
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
export declare const internalGroqTypeReferenceTo: unique symbol
