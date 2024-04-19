import Image from "next/image";
import Menu from "../public/assets/svg/menu.svg";
import BlackLogo from "../public/assets/lws-logo-black.svg";
import Avatar from "../public/assets/svg/avatar.svg";
import SoppingCart from "../public/assets/svg/shopping-Cart.svg";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
      <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
        <div className="flex gap-2 items-center">
          <Image src={Menu} alt="Menu" className=" w-5 h-5 lg:hidden mr-10" />

          <Link href="/">
            <Image src={BlackLogo} alt="Logo" className="h-10 ml-[-30%]" />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
        <Image
          src={Avatar}
          alt=""
          className="hidden lg:block w-[18px] h-[18px]"
        />
        <Image src={SoppingCart} alt="Shoping Cart" className="block w-5 h-5" />
      </div>
    </nav>
  );
}
