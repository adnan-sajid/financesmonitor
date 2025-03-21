import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
    return (
        <Link href="/">
            <div className="items-center hidden lg:flex">
                <Image src="/logo.svg" alt="Logo" height={28} width={28}/>
                <p className="font-semibold text-blue-700 text-2xl ml-2.5">
                    Finance Monitor
                </p>
            </div>
        </Link>
    );
};