import Link from "next/link"

const DashboardFooter = () =>{
    return (
        <footer className="db-footer">
            <div className="text-center md:text-left">
                <span className="text-xs font-semibold">Copyright © 2025 Peterdraw</span>
            </div>
            <nav className="flex items-center gap-4">
                <Link href="#" className="text-xs text-paragraph">Privacy Policy</Link>
                <Link href="#" className="text-xs text-paragraph">Term and conditions</Link>
                <Link href="#" className="text-xs text-paragraph">Contact</Link>
            </nav>
            <div className="flex gap-3 items-center lg:ml-auto">
                <i className="icon-facebook text-2xl text-paragraph"></i>
                <i className="icon-x text-2xl text-paragraph"></i>
                <i className="icon-instagram text-2xl text-paragraph"></i>
                <i className="icon-youtube text-2xl text-paragraph"></i>
                <i className="icon-linkedin text-2xl text-paragraph"></i>
            </div>
        </footer>
    )
}

export default DashboardFooter