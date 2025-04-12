"use client"
import React, { FC, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import { getProductById, getRelatedProducts } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Heart, } from "lucide-react";
// import ProductGrid from "@/components/ProductGrid";
// import { useParams } from "next/navigation";
// import Link from "next/link";

import { toast } from "sonner";
import { Products } from '@/types/sanity';
// import { imageUrlFor } from "@/sanity/config/SanityImageUrl";
// import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
// import { urlFor } from '@/sanity/imageBuilder';
// import { Product } from "@/types/product";
import { useRouter } from "next/navigation";
// import { useStore } from "@/store/useStore";

import { useBuyNowStore } from '@/store/buyNowStore';
import Image from "next/image";
import { Badge } from "@/components/ui/badge";



interface ProductDetailsProps {
    productDetails: Products
}
const ProductDetails: FC<ProductDetailsProps> = ({ productDetails }) => {
    // const { id } = useParams<{ id: string }>();
    // const params = useParams<{ id: string; }>();

    // console.log("Params==>", params)
    const [selectedImage, setSelectedImage] = useState(0);
    // const [quantity, setQuantity] = useState(1);

    // const product = params.id ? getProductById(params.id) : undefined;
    const product = productDetails;
    // const relatedProducts = params.id ? getRelatedProducts(params.id) : [];

    // const { addToCart } = useStore();
    const { setProduct } = useBuyNowStore();
    const router = useRouter();

    // if (!product) {
    //     return (
    //         <div className="min-h-screen flex flex-col">
    //             <Header />
    //             <main className="flex-grow flex items-center justify-center">
    //                 <div className="text-center">
    //                     <h1 className="text-2xl font-medium mb-4">Product Not Found</h1>
    //                     <p className="text-bloom-gray mb-6">
    //                         The product you&apos;re looking for doesn&apos;t exist or has been
    //                         removed.
    //                     </p>
    //                     <Link href="/products">
    //                         <Button className="btn-primary">Back to Shop</Button>
    //                     </Link>
    //                 </div>
    //             </main>
    //             <Footer />
    //         </div>
    //     );
    // }

    // const handleAddToCart = () => {
    //     if (product) {
    //         addToCart(product, quantity);
    //         toast.success(`${product.name || 'Product'} added to your cart`);
    //     } else {
    //         toast.error('Failed to add product to cart');
    //     }
    // };

     const handleAddToWishlist = () => {
         toast.success(`${product.name} added to your wishlist`);
     };

    const handleBuyNow = () => {
        if (product) {
            setProduct(product);
            router.push('/checkout');
        } else {
            toast.error('Failed to proceed to checkout');
        }
    };

    // const decreaseQuantity = () => {
    //     if (quantity > 1) {
    //         setQuantity(quantity - 1);
    //     }
    // };

    // const increaseQuantity = () => {
    //     if (quantity < product.stock!) {
    //         setQuantity(quantity + 1);
    //     }
    // };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pb-32">
                <div className="w-full  lg:max-w-6xl mx-auto py-10 px-4 md:px-10">
                    <div className="flex flex-col lg:flex-row gap-10">
                        {/* Product Images */}
                        <div className="lg:w-1/2">
                            {product.images && product.images.length > 0 && (
                                <div className="mb-4 rounded-xl overflow-hidden">
                                    <Image
                                        src={product.images[selectedImage]}
                                        alt={product.name || ""}
                                        width={400}
                                        height={0}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            )}

                            <div className="flex gap-3 overflow-x-auto pb-2">
                                {product.images && product.images.map((image, index) => (
                                    <button
                                        key={index}
                                        className={`rounded-lg overflow-hidden border-2 min-w-[70px] h-[70px] ${selectedImage === index
                                            ? "border-bloom-coral"
                                            : "border-transparent"
                                            }`}
                                        onClick={() => setSelectedImage(index)}
                                        title={`View image ${index + 1}`}
                                    >
                                        <Image
                                            src={image}
                                            width={400}
                                            height={0}
                                            alt={`${product.name} view ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="lg:w-1/2">
                            {/* Badges */}
                            {product.badges && product.badges.length > 0 && (
                                <div className="flex gap-2 mb-3">
                                    {product.badges.includes("bestseller") && (
                                        <span className="badge badge-bestseller">Bestseller</span>
                                    )}
                                    {product.badges.includes("new") && (
                                        <span className="badge badge-new">New</span>
                                    )}
                                    {product.badges.includes("limited") && (
                                        <span className="badge badge-limited">Limited Stock</span>
                                    )}
                                </div>
                            )}

                            {/* Title */}
                            <h1 className="text-3xl font-medium mb-2">{product.name}</h1>
                            <p className="text-xl text-bloom-gray mb-6">{product.tagline}</p>
                            <Image
                                src="/size-charts.jpg"
                                alt="Size Chart"
                                width={100}
                                height={0}
                                className="w-full h-auto object-cover"
                            />

                            {/* Size */}
                            <div className="my-6 flex flex-col gap-3 ">
                                <div className="text-xl ">
                                    Sizes

                                </div>
                                <div className="flex  gap-3">

                                {product.size && product.size.map((size)=><Badge key={size} className="text-xl px-10">{size.toUpperCase()}</Badge>)
                                    // <span className="text-2xl font-medium">
                                    //     ₹{product.price?.toFixed(2)}
                                    // </span>
                                }
                                </div>
                                {/* {product.discountPrice ? (
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl font-medium">
                                            ${product.discountPrice?.toFixed(2)}
                                        </span>
                                        <span className="text-bloom-gray line-through">
                                            ${product.price?.toFixed(2)}
                                        </span>
                                    </div>
                                ) : (
                                    <span className="text-2xl font-medium">
                                        ${product.price?.toFixed(2)}
                                    </span>
                                )} */}
                            </div>
                            {/* Size */}
                            <div className="my-6 flex flex-col gap-3 ">
                                <div className="text-xl ">
                                    Color

                                </div>
                                <div className="flex  gap-3">

                                    {product.colors && product.colors.map((color) => <div key={color._key} className={`text-xl p-1 rounded-full border border-black flex items-center justify-center  w-7 h-7 bg-[${color.color?.hex}]`}>

                                    <div className={`text-xl border rounded-full border-black  w-5 h-5 bg-[${color.color?.hex}]`}></div>
                                </div>
                            )
                                    // <span className="text-2xl font-medium">
                                    //     ₹{product.price?.toFixed(2)}
                                    // </span>
                                }
                                </div>
                                {/* {product.discountPrice ? (
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl font-medium">
                                            ${product.discountPrice?.toFixed(2)}
                                        </span>
                                        <span className="text-bloom-gray line-through">
                                            ${product.price?.toFixed(2)}
                                        </span>
                                    </div>
                                ) : (
                                    <span className="text-2xl font-medium">
                                        ${product.price?.toFixed(2)}
                                    </span>
                                )} */}
                            </div>
                            {/* Price */}
                            <div className="mb-6">
                                {product.price &&
                                    <span className="text-2xl font-medium">
                                        ₹{product.price?.toFixed(2)}
                                    </span>
                                }
                                {/* {product.discountPrice ? (
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl font-medium">
                                            ${product.discountPrice?.toFixed(2)}
                                        </span>
                                        <span className="text-bloom-gray line-through">
                                            ${product.price?.toFixed(2)}
                                        </span>
                                    </div>
                                ) : (
                                    <span className="text-2xl font-medium">
                                        ${product.price?.toFixed(2)}
                                    </span>
                                )} */}
                            </div>

                            {/* Rating summary */}
                            {/* <div className="flex items-center gap-1 mb-6">
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            size={16}
                                            className={
                                                star <=
                                                    Math.round(
                                                        product.reviews.reduce(
                                                            (acc, review) => acc + review.rating,
                                                            0
                                                        ) / product.reviews.length
                                                    )
                                                    ? "fill-bloom-coral text-bloom-coral"
                                                    : "text-bloom-gray/40"
                                            }
                                        />
                                    ))}
                                </div>
                                <span className="text-bloom-gray ml-1">
                                    ({product.reviews.length}{" "}
                                    {product.reviews.length === 1 ? "review" : "reviews"})
                                </span>
                            </div> */}






                            {/* Benefits
                            <div className="mb-8">
                                <h3 className="font-medium mb-3">How This Will Help You:</h3>
                                <ul className="space-y-2">
                                    {product.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <Check
                                                size={18}
                                                className="text-bloom-coral mt-0.5 flex-shrink-0"
                                            />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div> */}

                            {/* Add to cart */}
                            <div className="mb-8">
                                {/* <div className="flex items-center gap-4 mb-4">
                                    <div className="flex items-center border rounded-full overflow-hidden">
                                        <button
                                            className="px-3 py-2 bg-bloom-pink/20 text-bloom-dark"
                                            onClick={decreaseQuantity}
                                            title="Decrease quantity"
                                        >
                                            -
                                        </button>
                                        <span className="px-4 py-2">{quantity}</span>
                                        <button
                                            className="px-3 py-2 bg-bloom-pink/20 text-bloom-dark"
                                            onClick={increaseQuantity}
                                            title="Increase quantity"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <Button className="btn-primary" onClick={handleAddToCart}>
                                        Add to Cart
                                    </Button>
                                </div> */}
                                <Button variant="outline" onClick={handleAddToWishlist}>
                                    <Heart size={16} className="mr-2" /> Add to Wishlist
                                </Button>
                            </div>

                            {/* Add to Cart and Buy Now */}
                            <div className="flex gap-4 mt-6">
                                {/* <Button className="btn-primary" onClick={handleAddToCart}>
                                    Add to Cart
                                </Button> */}
                                <Button className="w-full" onClick={handleBuyNow}>
                                    Buy Now
                                </Button>
                            </div>

                            {/* Description */}
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Description</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-bloom-gray mb-6">{product.description}</p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Material & Care</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-bloom-gray mb-6">{product.material}</p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Additional Information</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-bloom-gray mb-6">{product.additionalInfo}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            {/* Features */}
                            {/* <div className="mb-8">
                                <h3 className="font-medium mb-3">What&apos;s Included:</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {product.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <ChevronRight
                                                size={16}
                                                className="text-bloom-coral mt-1 flex-shrink-0"
                                            />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div> */}
                        </div>
                    </div>

                    {/* Reviews */}
                    {/* <section className="mt-16 mb-10">
                        <h2 className="text-2xl font-medium mb-6">Customer Experiences</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {product.reviews.map((review) => (
                                <div
                                    key={review.id}
                                    className="bg-white p-6 rounded-xl shadow-sm"
                                >
                                    <div className="flex justify-between mb-2">
                                        <h4 className="font-medium">{review.userName}</h4>
                                        <div className="flex">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star
                                                    key={star}
                                                    size={14}
                                                    className={
                                                        star <= review.rating
                                                            ? "fill-bloom-coral text-bloom-coral"
                                                            : "text-bloom-gray/40"
                                                    }
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-sm text-bloom-gray mb-2">
                                        {new Date(review.date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </p>
                                    <p className="text-bloom-dark">{review.comment}</p>
                                </div>
                            ))}

                            {product.reviews.length === 0 && (
                                <div className="col-span-2 text-center py-8">
                                    <p className="text-bloom-gray">
                                        No reviews yet. Be the first to share your experience!
                                    </p>
                                </div>
                            )}
                        </div>
                    </section> */}

                    {/* Related Products */}
                    {/* {relatedProducts.length > 0 && (
                        <section className="mt-16">
                            <h2 className="text-2xl font-medium mb-8">You Might Also Love</h2>
                            <ProductGrid products={relatedProducts} />
                        </section>
                    )} */}
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default ProductDetails
