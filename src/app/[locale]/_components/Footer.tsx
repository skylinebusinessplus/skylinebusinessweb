"use client";
import { navItems } from "../../../../lib/constanst";
import { FaLocationDot, FaLine } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";

const Pagefooter = () => {
  return (
    <div className="w-full py-10 bg-main mainpadding">
      <div className="w-full h-12 ">
        <img
          src="/logo.png"
          alt=""
          className="object-contain h-full mx-auto "
        />
      </div>

      <div className="flex justify-center gap-5 mt-10 ">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-white hover:text-second"
          >
            {item.name}
          </a>
        ))}
      </div>
      <hr className="mt-5 " />
      <div className="flex flex-row items-center justify-center py-8 space-x-5 max-md:flex-col max-md:space-y-5">
        <button
          className="flex items-center justify-center space-x-3 text-center text-white"
          onClick={() => {
            window.open("tel:089-899-2495");
          }}
        >
          <BsTelephoneFill />
          <span>โทร : 089-899-2495</span>
        </button>
        <button
          className="flex items-center justify-center space-x-3 text-center text-white"
          onClick={() => {
            window.open("https://line.me/ti/p/mrton12");
          }}
        >
          <FaLine />
          <span>Line Id : mrton12</span>
        </button>
        <div className="flex items-center">
          <FaLocationDot className="block mr-3 text-xl text-white max-sm:hidden" />
          <p className="text-white max-sm:text-center ">
            บริษัท สกายไลน์ บิสสิเนสพลัส จำกัด{" "}
            <br className="hidden max-sm:block" /> (สำนักงานใหญ่)
            <br />
            1328 ถนนเจริญกรุง แขวงบางรัก เขตบางรัก กทม 10500
          </p>
        </div>
      </div>
      <hr className="" />
      <div className="flex flex-row items-center justify-between py-5 mt-5 rounded-full max-md:flex-col px-7 bg-mainLight">
        <div className="flex space-x-3 max-md:hidden ">
          <button
            className="p-2 rounded-full bg-second"
            onClick={() => {
              window.open("https://line.me/ti/p/mrton12");
            }}
          >
            <FaLine className="text-2xl text-dark" />
          </button>
          <button
            className="p-2 rounded-full bg-second"
            onClick={() => {
              window.open("tel:089-899-2495");
            }}
          >
            <BsTelephoneFill className="text-2xl text-dark" />
          </button>
        </div>
        <p className="text-center text-white ">
          Copyright © 2024 www.skylinebusinessplus.com | All Rights Reserved.
        </p>
        <div className="text-white">
          <span> Privacy Policy</span>
          <span className="mx-3 ">|</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </div>
  );
};

export default Pagefooter;
