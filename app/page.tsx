'use client'
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import loginCover from "@/public/images/login.png"
import fabimage from "@/public/images/fabicon.png"
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginInput, loginSchema } from "@/lib/schemas/loginSchema";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const {register,handleSubmit,formState: { errors, isSubmitting },} = useForm<loginInput>({resolver:zodResolver(loginSchema)})
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)

    const onSubmit = () => {
        try{
            router.push('/dashboard')
        }
        catch{
            alert('something went wrong')
        }
    }
    return (
        <div className="grid h-screen md:grid-cols-2 grid-flow-dense">
            <div className="bg-primary flex justify-center items-center p-5 py-30 max-sm:h-screen">
                <div className="max-w-156.25">
                    <Image className=" h-auto" width={1000} height={500} src={loginCover} alt="login cover"/>
                    <div className="text-white text-center max-w-115 w-full mx-auto">
                        <h2 className="text-[40px] font-extrabold mb-3 leading-tight">Welcome to ShipNow</h2>
                        <p className="text-base font-normal">Manage your shipments, fleet, and warehouse in one smart dashboard.</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center p-5 py-30 max-sm:h-screen">
                <div className="w-full max-w-[400px]">
                    <div className="flex flex-col gap-2 items-center mb-8">
                        <Image className="w-10 h-10 mb-6" width={40} height={40} src={fabimage} alt="fabicon"/>
                        <h1 className="text-2xl font-bold">Welcome Back</h1>
                        <p className="text-sm font-normal text-paragraph text-center">Log in to continue managing your logistics with ShipNow</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label htmlFor="email" className="input-field-title">Email Address</label>
                            <input id="email" {...register('email')} className="input-field-control" type="email" placeholder="Enter your email address" />
                            {errors.email && <p className="error-message">{errors.email.message}</p>}
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className="input-field-title">Password</label>
                            <div className="relative">
                                <input
                                    id="password"
                                    {...register('password')}
                                    className="input-field-control pr-10"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-paragraph"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                    tabIndex={-1}
                                >
                                    {showPassword ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                                            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                                            <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                                            <line x1="2" y1="2" x2="22" y2="22" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {errors.password && <p className="error-message">{errors.password?.message}</p>}
                        </div>
                        <div className="flex items-center justify-between mb-8">
                            <div className="input-field-checkbox p-0">
                                <div className="custom-checkbox">
                                    <input type="checkbox" id="remember" className="custom-checkbox-field"/>
                                    <i className="icon-check custom-checkbox-icon"></i>
                                </div>
                                <label htmlFor="remember" className="db-field-label text-[11px] text-paragraph capitalize leading-tight">remember me</label>
                            </div>
                            <Link href="#" className="capitalize text-[11px] font-semibold transition text-primary hover:underline">Forgot Password</Link>
                        </div>
                        <button className="login-btn">Login</button>
                        <div className="flex items-center justify-center gap-1">
                            <span className="text-xs text-paragraph">Don’t have an account?</span>
                            <Link href="#" className="text-xs font-semibold text-primary">Register</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;