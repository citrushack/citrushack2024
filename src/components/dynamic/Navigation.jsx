"use client";

import { useState } from "react";
import LOGO from "@/public/LOGO.svg";
import Image from "next/image";
import Link from "next/link";
import { TABS } from "@/data/dynamic/Navigation";
import { usePathname } from "next/navigation";
import { CONFIG } from "@/data/Config";
import { BiSolidDownArrow } from "react-icons/bi";
import { MdMenu } from "react-icons/md";

const Navigation = () => {
  const [expand, setExpand] = useState(false);
  const pathName = usePathname();
  const [tabs, setTabs] = useState(TABS[pathName.split("/")[1]]);

  return (
    <>
      <div className="flex lg:hidden w-full bg-citrus-green-100 h-12 items-center fixed z-20 justify-between px-4">
        <div
          className="flex items-center hover:cursor-pointer w-full"
          onClick={() => setExpand(!expand)}
        >
          <Image src={LOGO} className="h-8 w-fit" alt={`${CONFIG.name} Logo`} />
          <div className="text-citrus-green-200 font-racing text-xl font-semibold">
            {pathName.split("/")[2].toUpperCase()}
          </div>
        </div>
        <MdMenu
          className="text-white text-3xl hover:cursor-pointer"
          onClick={() => setExpand(!expand)}
        />
      </div>
      <div
        className={`z-10 lg:flex lg:w-[12%] ${
          expand ? "left-0 h-screen w-1/2 fixed pt-5" : `hidden`
        }`}
      >
        <div className="bg-citrus-green-100 h-full flex flex-col justify-between items-center w-full">
          <div className="hidden lg:flex items-center my-3">
            <Image
              src={LOGO}
              className="mx-2 w-full h-full px-6"
              alt={`${CONFIG.name} Logo`}
            />
          </div>
          <div className="w-full flex flex-col items-center h-full">
            {Object.entries(tabs)
              .filter(([title]) => title !== " " && title !== "dropdown")
              .map(([title, subTabs], index) => (
                <div key={index} className="w-full">
                  <p
                    className={`text-white text-xl font-poppin font-bold w-full px-2 mb-0 flex items-center justify-between hover:cursor-pointer ${subTabs.mt}`}
                    onClick={() =>
                      setTabs({
                        ...tabs,
                        [title]: { ...subTabs, expand: !subTabs.expand },
                      })
                    }
                  >
                    {title}
                    {tabs.dropdown && (
                      <BiSolidDownArrow
                        className={`text-sm duration-300 ${
                          subTabs.expand && "rotate-180"
                        }`}
                      />
                    )}
                  </p>
                  {(subTabs.expand || !tabs.dropdown) &&
                    subTabs.tabs.map((tab, index) => (
                      <Link
                        key={index}
                        href={tab.link}
                        className="no-underline p-0 w-full"
                      >
                        <div
                          onClick={() => setExpand(false)}
                          className={`w-full flex [&>*]:text-white items-center justify-start py-1 pl-[10%] ${
                            pathName.endsWith(tab.link)
                              ? "bg-citrus-green-200"
                              : "[&>*]:hover:text-citrus-green-200"
                          }`}
                        >
                          {tab.icon}
                          <p className="text-lg m-0">{tab.name}</p>
                        </div>
                      </Link>
                    ))}
                </div>
              ))}
          </div>
          <div className="w-full flex flex-col items-center mb-3">
            {tabs[" "].map((tab, index) => (
              <Link
                key={index}
                href={tab.link}
                onClick={() => tab.onClick()}
                className="no-underline w-full"
              >
                <div
                  onClick={() => setExpand(false)}
                  className={`w-full flex [&>*]:text-white items-center justify-start pl-[10%] py-1 ${
                    pathName.endsWith(tab.link)
                      ? "bg-citrus-green-200"
                      : "[&>*]:hover:text-citrus-green-200"
                  }`}
                >
                  {tab.icon}
                  <div className="text-lg">{tab.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
