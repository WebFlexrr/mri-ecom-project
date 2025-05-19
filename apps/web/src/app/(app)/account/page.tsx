'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner'; // Use sonner for toast notifications
import { User, Mail, Lock, Eye, EyeOff, LogOut, MapPin, ShoppingBag, Heart, CreditCard, Settings } from 'lucide-react';

// Assuming these components exist in your project
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// Define types for form data and password visibility
type FormData = {
    name: string;
    email: string;
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
};

type ShowPassword = {
    current: boolean;
    new: boolean;
    confirm: boolean;
};

// Mock user data
const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
};

const AccountPage: React.FC = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<string>('profile');
    const [formData, setFormData] = useState<FormData>({
        name: userData.name,
        email: userData.email,
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });
    const [showPassword, setShowPassword] = useState<ShowPassword>({
        current: false,
        new: false,
        confirm: false,
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSaveProfile = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            toast.success("Profile updated", {
                description: "Your profile information has been updated successfully.",
            });
            setIsLoading(false);
        }, 1000);
    };

    const handleChangePassword = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate passwords
        if (formData.newPassword !== formData.confirmPassword) {
            toast.error("Passwords don't match", {
                description: "New password and confirm password must match.",
            });
            return;
        }

        if (formData.newPassword.length < 8) {
            toast.error("Password too short", {
                description: "Password must be at least 8 characters long.",
            });
            return;
        }

        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            toast.success("Password changed", {
                description: "Your password has been changed successfully.",
            });

            setFormData((prev) => ({
                ...prev,
                currentPassword: '',
                newPassword: '',
                confirmPassword: '',
            }));

            setIsLoading(false);
        }, 1000);
    };

    const handleLogout = () => {
        toast.success("Logged out", {
            description: "You have been logged out successfully.",
        });
        router.push('/');
    };

    // Account menu items
    const menuItems = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'orders', label: 'Orders', icon: ShoppingBag, link: '/account/orders' },
        { id: 'addresses', label: 'Addresses', icon: MapPin, link: '/account/addresses' },
        { id: 'wishlist', label: 'Wishlist', icon: Heart, link: '/wishlist' },
        { id: 'payment', label: 'Payment Methods', icon: CreditCard, link: '/account/payment' },
        { id: 'settings', label: 'Settings', icon: Settings, link: '/account/settings' },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-24">
                <div className="container mx-auto px-4 py-12">
                    <h1 className="text-3xl font-semibold mb-10">My Account</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Sidebar Navigation */}
                        <aside className="lg:sticky lg:top-24">
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                                <div className="p-6 border-b border-gray-200 flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
                                        <User className="h-8 w-8 text-gray-500" />
                                    </div>
                                    <div>
                                        <h2 className="font-medium">{userData.name}</h2>
                                        <p className="text-sm text-gray-500">{userData.email}</p>
                                    </div>
                                </div>

                                <nav className="p-4">
                                    <ul className="space-y-1">
                                        {menuItems.map((item) => (
                                            <li key={item.id}>
                                                {item.link ? (
                                                    <Link
                                                        href={item.link}
                                                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === item.id
                                                            ? 'bg-purple-600 text-white'
                                                            : 'hover:bg-gray-100 text-gray-800'
                                                            }`}
                                                    >
                                                        <item.icon className="h-5 w-5" />
                                                        <span>{item.label}</span>
                                                    </Link>
                                                ) : (
                                                    <button
                                                        onClick={() => setActiveTab(item.id)}
                                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === item.id
                                                            ? 'bg-purple-600 text-white'
                                                            : 'hover:bg-gray-100 text-gray-800'
                                                            }`}
                                                    >
                                                        <item.icon className="h-5 w-5" />
                                                        <span>{item.label}</span>
                                                    </button>
                                                )}
                                            </li>
                                        ))}

                                        <li className="pt-2 mt-2 border-t border-gray-200">
                                            <button
                                                onClick={handleLogout}
                                                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                                            >
                                                <LogOut className="h-5 w-5" />
                                                <span>Logout</span>
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            {activeTab === 'profile' && (
                                <div className="bg-white rounded-xl shadow-sm p-6">
                                    <h2 className="text-xl font-medium mb-6">Profile Information</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Personal Information */}
                                        <div>
                                            <h3 className="text-lg font-medium mb-4">Personal Information</h3>

                                            <form onSubmit={handleSaveProfile} className="space-y-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="name">Full Name</Label>
                                                    <div className="relative">
                                                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                                                        <Input
                                                            id="name"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleInputChange}
                                                            className="pl-10"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="email">Email Address</Label>
                                                    <div className="relative">
                                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                                                        <Input
                                                            id="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            className="pl-10"
                                                        />
                                                    </div>
                                                </div>

                                                <Button type="submit" disabled={isLoading}>
                                                    {isLoading ? 'Saving...' : 'Save Changes'}
                                                </Button>
                                            </form>
                                        </div>

                                        {/* Change Password */}
                                        <div>
                                            <h3 className="text-lg font-medium mb-4">Change Password</h3>

                                            <form onSubmit={handleChangePassword} className="space-y-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="currentPassword">Current Password</Label>
                                                    <div className="relative">
                                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                                                        <Input
                                                            id="currentPassword"
                                                            name="currentPassword"
                                                            type={showPassword.current ? 'text' : 'password'}
                                                            value={formData.currentPassword}
                                                            onChange={handleInputChange}
                                                            className="pl-10"
                                                        />
                                                        <button
                                                            type="button"
                                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                                            onClick={() => setShowPassword({ ...showPassword, current: !showPassword.current })}
                                                        >
                                                            {showPassword.current ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="newPassword">New Password</Label>
                                                    <div className="relative">
                                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                                                        <Input
                                                            id="newPassword"
                                                            name="newPassword"
                                                            type={showPassword.new ? 'text' : 'password'}
                                                            value={formData.newPassword}
                                                            onChange={handleInputChange}
                                                            className="pl-10"
                                                        />
                                                        <button
                                                            type="button"
                                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                                            onClick={() => setShowPassword({ ...showPassword, new: !showPassword.new })}
                                                        >
                                                            {showPassword.new ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                                                    <div className="relative">
                                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                                                        <Input
                                                            id="confirmPassword"
                                                            name="confirmPassword"
                                                            type={showPassword.confirm ? 'text' : 'password'}
                                                            value={formData.confirmPassword}
                                                            onChange={handleInputChange}
                                                            className={`pl-10 ${formData.confirmPassword && formData.newPassword !== formData.confirmPassword
                                                                ? 'border-red-500 focus-visible:ring-red-300'
                                                                : ''
                                                                }`}
                                                        />
                                                        <button
                                                            type="button"
                                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                                            onClick={() => setShowPassword({ ...showPassword, confirm: !showPassword.confirm })}
                                                        >
                                                            {showPassword.confirm ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                                        </button>
                                                    </div>
                                                    {formData.confirmPassword && formData.newPassword !== formData.confirmPassword && (
                                                        <p className="text-red-500 text-xs">Passwords don't match</p>
                                                    )}
                                                </div>

                                                <Button
                                                    type="submit"
                                                    disabled={
                                                        isLoading ||
                                                        !formData.currentPassword ||
                                                        !formData.newPassword ||
                                                        formData.newPassword !== formData.confirmPassword
                                                    }
                                                >
                                                    {isLoading ? 'Updating...' : 'Update Password'}
                                                </Button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AccountPage;