import { Lato } from "next/font/google";
import Link from "next/link";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
  variable: "--font-lato",
});

export const Menu = () => {
  return (
    <div
      className={`${lato.variable} font-sans flex justify-around items-center w-full h-16 bg-gray-100 border shadow-sm shadow-gray-300 text-gray-500`}
    >
      <ul className="menu flex justify-around items-center w-full h-full relative text-lg tracking-wider">
        <li className="bg-transparent ">
          <Link href="">Home</Link>
        </li>
        <li>
          <Link href="/naturopathie">La Naturopathie</Link>
        </li>
        <li>
          <Link href="#">Les Services</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
