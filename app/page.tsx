'use client'
import Image from "next/image";
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
            <div className="bg-primary flex justify-center items-center p-5">
                <div className="max-w-156.25">
                    <Image className=" h-auto" width={1000} height={500} src={loginCover} alt="login cover"/>
                    <div className="text-white text-center">
                        <h2 className="text-[40px] font-extrabold mb-3 leading-tight">Welcome to ShipNow</h2>
                        <p className="text-base font-normal">Manage your shipments, fleet, and warehouse in one smart dashboard.</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center p-5">
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
                        <div className="mb-4">
                            <label htmlFor="password" className="input-field-title">Password</label>
                            <input id="password" {...register('password')} className="input-field-control" type="password" placeholder="Enter your password" />
                            {errors.password && <p className="error-message">{errors.password?.message}</p>}
                        </div>
                        <div className="flex items-center justify-between mb-8">
                            <div className="input-field-checkbox p-0">
                                <div className="custom-checkbox w-3 h-3">
                                    <input type="checkbox" id="checkbox2" className="custom-checkbox-field"/>
                                    <i className="fa-solid fa-check custom-checkbox-icon leading-[9px] text-[9px] rounded-[3px] border-[#6E7191]"></i>
                                </div>
                                <label htmlFor="checkbox2" className="db-field-label text-xs text-heading">remember me</label>
                            </div>
                            <Link href="forgot-password.html" className="capitalize text-xs font-medium transition text-primary hover:underline">Forgot Password</Link>
                        </div>
                        <button className="w-full h-11 text-base font-semibold bg-[#333333] text-[#FEFEFE] rounded-lg">Login</button>
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="text-xs text-[#6E7191]">Don’t have an account?</span>
                            <Link href="signup.html" className="text-xs font-medium text-primary">SignUp</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;