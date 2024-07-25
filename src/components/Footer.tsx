import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative bg-gray-100 text-sm mt-24 py-24
    "
    >
      {/* top  */}
      <div className="flex flex-col  md:flex-row justify-between gap-24">
        {/* left  */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">Shoppy</div>
          </Link>
          <p>318, Arenja Corner, Sector 17, Vashi , Mumbai </p>
          <span className="font-semibold">kumaranofficial7@gmail.com</span>
          <span className="font-semibold">+91 9944476135111</span>
          <div className="">
            <Image
              src="https://i.pinimg.com/564x/3a/31/69/3a3169489b0d54fdc9ab7e700051f42c.jpg"
              alt=""
              height={200}
              width={200}
              className="rounded-md"
            />
          </div>
        </div>
        {/* center   */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col gap-8">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-8">
              <Link href="/">About Us</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Affiliates</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-8">
              <Link href="/">New Arrivals</Link>
              <Link href="/">Accessories</Link>
              <Link href="/">Men</Link>
              <Link href="/">Women</Link>
              <Link href="/">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-8">
              <Link href="/">Customer Service</Link>
              <Link href="/">My Account</Link>
              <Link href="/">Find a Store</Link>
              <Link href="/">Legal & Privacy </Link>
              <Link href="/">Gift Card</Link>
            </div>
          </div>
        </div>
        {/* right  */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1>SUBSCRIBE</h1>
          <p>
            Be the first to get the latest new about trends, promotions, and
            much more!
          </p>
          <div className="flex ">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4 rounded-l-md outline-none"
            />
            <button className="w-1/4 rounded-r-md  bg-primary text-white">
              JOIN
            </button>
          </div>
          <span className="text-semibold">Secure payments</span>
          <div className="relative">
            <Image
              src="/payments.png"
              alt=""
              height={200}
              width={200}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
      {/* bottom   */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">&copy; 2024 Shoppy Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div>
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">Tamil | English</span>
          </div>
          <div>
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$ INR </span>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Footer;
