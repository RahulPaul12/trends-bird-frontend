import Image from "next/image";
import loginCover from "@/public/images/login.png"
import fabimage from "@/public/images/fabicon.png"
const LoginPage = () => {
    return (
        <div className="grid h-screen md:grid-cols-2">
            <div className="bg-primary flex justify-center items-center">
                <div className="max-w-[625px]">
                    <Image className=" h-auto" width={1000} height={500} src={loginCover} alt="login cover"/>
                    <div className="text-white text-center">
                        <h2 className="text-[40px] font-extrabold mb-3">Welcome to ShipNow</h2>
                        <p className="text-base font-normal">Manage your shipments, fleet, and warehouse in one smart dashboard.</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center p-5">
                <div className="w-full">
                    <div className="flex flex-col gap-2 items-center mb-8">
                        <Image className="w-10 h-10 mb-6" width={40} height={40} src={fabimage} alt="fabicon"/>
                        <h1 className="text-2xl font-bold">Welcome Back</h1>
                        <p className="text-sm font-normal text-paragraph">Log in to continue managing your logistics with ShipNow</p>
                    </div>
                    <form className="max-w-[400px] w-full ">
                        <div className="">
                            <label htmlFor="email">Email address</label>
                            <input type="email" placeholder="Enter your email address" />
                        </div>
                        <div className="">
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Enter your password" />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default LoginPage;