import Image from "next/image";
import React from "react";

function Header() {
  return (
    <>
      <div className="bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[20px]">
        <Image
          src={"/fulllogo.png"}
          width={100}
          height={100}
          alt="logo"
          className="object-contain w-[150px]"
        />
      </div>
    </>
  );
}

export default Header;
