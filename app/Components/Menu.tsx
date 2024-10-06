import Link from "next/link";

export const Menu = () => {
  return (
    <div className="flex justify-around w-full h-16 bg-gray-200">
      <Link href="#">Home</Link>
      <Link href="#">Items 2</Link>
      <Link href="#">Items 3</Link>
      <Link href="#">Contact </Link>
    </div>
  );
};
