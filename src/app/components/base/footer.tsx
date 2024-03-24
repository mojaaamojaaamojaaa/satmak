"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { lexendZetta } from "@/app/font";
import Link from "next/link";

const Footer = () => {
  //現在の年を取得。権利表記に使用
  const [currentYear, setCurrentYear] = useState(0);
  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    setCurrentYear(year);
  }, []);

  return (
    <footer className="border-t-2  border-black p-3  md:pt-6  ">
      <div
        className={`container mx-auto flex justify-between items-center flex-col md:flex-row`}
      >
        <div className={` ${lexendZetta} text-sm mb-4 md:mb-0 font-bold `}>
          © {currentYear} satmak
        </div>
        <div className=" flex mb-2 md:mb-0 ">
          <Image
            src="https://res.cloudinary.com/dgcbaydpp/image/upload/v1707534641/mojabassoonIcon_au7ieo.png"
            width={40}
            height={40}
            alt="Moja Logo"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
