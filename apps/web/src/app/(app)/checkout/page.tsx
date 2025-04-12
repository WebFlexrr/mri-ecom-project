"use client"
import React, { useState, useEffect } from 'react';
// import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

// import { useAppStore } from '@/store';
// import { getProductById } from '@/data/products';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/cartStore';
import Link from 'next/link';
import Header from '@/components/Header';
import { useBuyNowStore } from '@/store/buyNowStore';
import { purchaseOrderActions } from '@/lib/server/purchaseOrder';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Products } from '@/types/sanity';

// Update CartItem type to include color and size
export interface CartItem {
  productId: string;
  quantity: number;
  color?: string;
  size?: string;
}

// Define a Zod schema for form validation
const schema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  address: z.string().min(1, { message: 'Address is required' }),
  city: z.string().min(1, { message: 'City is required' }),
  state: z.string().min(1, { message: 'State is required' }),
  zipCode: z.string().min(5, { message: 'ZIP Code is required' }),
  cardNumber: z.string().optional(),
  expiryDate: z.string().optional(),
  cvv: z.string().optional(),
  nameOnCard: z.string().optional(),
});

// Define a TypeScript interface for form data
interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  nameOnCard?: string;
  upi?: string;
}

const Checkout = () => {
  // Checkout steps
  const steps = ["Information", "Shipping", "Payment"];
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleting, setIsCompleting] = useState(false);
  // const navigate = useNavigate();
  const router = useRouter()

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: 'user@example.com',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      nameOnCard: '',
      upi: '',
    },
  });

  const { cart } = useCartStore();
  const { product: buyNowProduct } = useBuyNowStore();

  useEffect(() => {
    // If cart and buyNowProduct are both empty, redirect to cart page
    if (cart.length === 0 && !buyNowProduct) {
      router.push('/cart');
      toast.error("Your cart is empty");
    }
  }, [cart, buyNowProduct, router]);

  const calculateSubtotal = (): number => {
    if (buyNowProduct) {
      return buyNowProduct.price || 0;
    }
    return cart.reduce((total, item) => {
      const product = {} as Products
      return total + (product?.price || 0) * item.quantity;
    }, 0);
  };

  const subtotal: number = calculateSubtotal();
  const shipping: number = 0; // Free shipping
  const tax: number = subtotal * 0.1; // 10% tax
  const total: number = subtotal + shipping + tax;

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);
    handleCompletePurchase(data);
  };

  const handleCompletePurchase = (data: FormData) => {
    setIsCompleting(true);

    purchaseOrderActions({
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      city: data.city,
      state: data.state,
      zipCode: data.zipCode,
      subtotal,
      shipping,
      total,
    });

    // Simulate processing with a loading screen
    setTimeout(() => {
      toast.success("Order placed successfully!");
      router.push('/thank-you');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">

      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        {/* Checkout Progress */}
        <div className="mb-8">
          <div className="flex justify-between relative mb-4">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center z-10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2
                    ${index < currentStep
                      ? 'bg-primary-600 border-primary-600 text-white'
                      : index === currentStep
                        ? 'border-primary-600 text-primary-600'
                        : 'border-gray-300 text-gray-300'
                    }`}
                >
                  {index < currentStep ? (
                    <CheckCircle2 size={16} />
                  ) : (
                    index + 1
                  )}
                </div>
                <span className={`text-sm mt-2 ${index <= currentStep ? 'text-primary-600 font-medium' : 'text-gray-400'}`}>
                  {step}
                </span>
              </div>
            ))}
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 -z-0">
              <div
                className="h-full bg-primary-600 transition-all"
                style={{ width: `${(currentStep) * 50}%` }}
              />
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Information Step */}
            {currentStep === 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <Input {...field} placeholder="your@email.com" />
                      )}
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                  </div>

                  <div className="flex items-center space-x-2 text-sm">
                    <input type="checkbox" id="createAccount" className="rounded border-gray-300" title="Create an account" />
                    <Label htmlFor="createAccount">Create an account for faster checkout next time</Label>
                  </div>

                  <div className="pt-4">
                    <CardTitle className="mb-4">Shipping Address</CardTitle>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Controller
                          name="firstName"
                          control={control}
                          render={({ field }) => (
                            <Input {...field} placeholder="John" />
                          )}
                        />
                        {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Controller
                          name="lastName"
                          control={control}
                          render={({ field }) => (
                            <Input {...field} placeholder="Doe" />
                          )}
                        />
                        {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
                      </div>
                    </div>
                    <div className="space-y-2 mt-4">
                      <Label htmlFor="address">Address</Label>
                      <Controller
                        name="address"
                        control={control}
                        render={({ field }) => (
                          <Input {...field} placeholder="123 Main St" />
                        )}
                      />
                      {errors.address && <p className="text-red-500">{errors.address.message}</p>}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Controller
                          name="city"
                          control={control}
                          render={({ field }) => (
                            <Input {...field} placeholder="San Francisco" />
                          )}
                        />
                        {errors.city && <p className="text-red-500">{errors.city.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Controller
                          name="state"
                          control={control}
                          render={({ field }) => (
                            <Input {...field} placeholder="California" />
                          )}
                        />
                        {errors.state && <p className="text-red-500">{errors.state.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Controller
                          name="zipCode"
                          control={control}
                          render={({ field }) => (
                            <Input {...field} placeholder="94103" />
                          )}
                        />
                        {errors.zipCode && <p className="text-red-500">{errors.zipCode.message}</p>}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button onClick={handleNextStep} className=" hover:bg-primary-700">
                    Continue to Shipping
                    <ChevronRight className="ml-2" size={16} />
                  </Button>
                </CardFooter>
              </Card>
            )}

            {/* Shipping Step */}
            {currentStep === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Method</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border rounded-md p-4 bg-primary-50">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="shipping-standard"
                          name="shipping-method"
                          className="mr-3"
                          defaultChecked
                          title="Standard Shipping"
                        />
                        <div>
                          <Label htmlFor="shipping-standard" className="font-medium">Standard Shipping</Label>
                          <p className="text-sm text-gray-500">Delivery in 3-5 business days</p>
                        </div>
                      </div>
                      <span>Free</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={handlePreviousStep}>
                    Back to Information
                  </Button>
                  <Button onClick={handleNextStep} className=" hover:bg-primary-700">
                    Continue to Payment
                    <ChevronRight className="ml-2" size={16} />
                  </Button>
                </CardFooter>
              </Card>
            )}

            {/* Payment Step */}
            {currentStep === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="upi">UPI ID</Label>
                    <Controller<FormData>
                      name="upi"
                      control={control}
                      render={({ field }) => (
                        <Input {...field} placeholder="example@upi" />
                      )}
                    />
                  </div>

                  <div className="flex items-center space-x-2 mt-4">
                    <input type="checkbox" id="cod" className="rounded border-gray-300" title="Cash on Delivery" />
                    <Label htmlFor="cod">Cash on Delivery</Label>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={handlePreviousStep}>
                    Back to Shipping
                  </Button>
                  <Button
                    type="submit"
                    className=""
                  >
                    {isCompleting ? "Processing..." : "Complete Purchase"}
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Order Summary</span>
                  <span className="text-sm font-normal text-primary-600 hover:underline">
                    <Link href="/cart">Edit Cart</Link>
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="max-h-60 overflow-auto space-y-3">
                  {cart.map((item) => {
                    const product = {}as Products;
                    if (!product) return null;

                    return (
                      <div key={item.productId} className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                          {/* <Image
                            src={product.images[0]! || ""}
                            alt={product.name || ""}
                            width={1000}
                            height={0}
                            className="w-full h-full object-cover"
                          /> */}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium line-clamp-1">{product.name}</p>
                          <p className="text-sm text-gray-500">
                            {/* {item.color} / {item.size} / Qty: {item.quantity} */}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">
                            ${(product.price! * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>

                  <div className="pt-2 mt-2">
                    <div className="flex justify-between items-center border-t border-b py-2 font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Discount code"
                    className="w-full p-2.5 border rounded-md"
                  />
                  <Button variant="outline" className="w-full mt-2">
                    Apply Discount
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </form>

        <div className="flex justify-center items-center h-screen">
          {isCompleting && (
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
          )}
        </div>
      </div>

    </div>
  );
};


export default Checkout;
