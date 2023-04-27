import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";
import * as Icons from "@/components/global/Icons";

const Navbar: React.FC = () => {
  const router = useRouter();
  let [checkHeader, setCheckHeader] = useState<boolean>(false);
  let [showUpButton, setShowUpButton] = useState<boolean>(false);
  let [showSideMenu, setShowSideMenu] = useState<boolean>(false);

  const handleHeader = () => {
    let currentScroll = window.scrollY;
    if (currentScroll >= 100) {
      setCheckHeader(true);
      setShowUpButton(true);
    } else {
      setCheckHeader(false);
      setShowUpButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleHeader);
    return () => window.removeEventListener("scroll", handleHeader);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className={cn(
          "flex items-center justify-between w-full fixed top-0 z-[99999999] transition-all ease-in-out duration-500",
          {
            "h-32": !checkHeader,
            "bg-[#28372fef] h-24": checkHeader,
          }
        )}
      >
        <Link href="/">
          <img
            src="/images/logo.png"
            alt=""
            className={cn("transition-all ease-in-out duration-500", {
              "w-32 h-32": !checkHeader,
              "w-[6.5rem] h-[6.5rem]": checkHeader,
            })}
          />
        </Link>
        <div className="md:flex hidden gap-5 mr-10">
          <nav className="flex justify-center space-x-4">
            <Link href="/" passHref>
              <p
                className={`hover:underline ${
                  router.pathname === "/" ? "underline text-red-500" : ""
                } text-white text-base font-medium font-work-sans underline-offset-8`}
              >
                Home
              </p>
            </Link>
            <Link href="/about" passHref>
              <p
                className={`hover:underline ${
                  router.pathname === "/about" ? "underline  text-green-500" : ""
                }text-white text-base font-medium font-work-sans underline-offset-8`}
              >
                About
              </p>
            </Link>
            <Link href="/adventures" passHref>
              <p
                className={`hover:underline ${
                  router.pathname === "/adventures" ? "underline" : ""
                }text-white text-base font-medium font-work-sans underline-offset-8`}
              >
                Adventures
              </p>
            </Link>
            <Link href="/shop" passHref>
              <p
                className={`hover:underline ${
                  router.pathname === "/shop" ? "underline" : ""
                }text-white text-base font-medium font-work-sans underline-offset-8`}
              >
                Shop
              </p>
            </Link>
            <Link href="/gallery" passHref>
              <p
                className={`hover:underline ${
                  router.pathname === "/gallery" ? "underline" : ""
                }text-white text-base font-medium font-work-sans underline-offset-8`}
              >
                Gallery
              </p>
            </Link>
            <Link href="/blog" passHref>
              <p
                className={`hover:underline ${
                  router.pathname === "/blog" ? "underline" : ""
                }text-white text-base font-medium font-work-sans underline-offset-8`}
              >
                Blog
              </p>
            </Link>
          </nav>
        </div>
        <div
          onClick={() => setShowSideMenu(true)}
          className="md:hidden block mr-5 fill-current text-white cursor-pointer"
        >
          <Icons.HamburgerMenu />
        </div>
      </div>
      <div
        onClick={() => setShowSideMenu(false)}
        className={cn(
          "fixed top-0 md:hidden block h-[100vh] bg-black z-[99999999999999] opacity-80 transition-all ease-in-out duration-500 w-full",
          {
            "-right-full": !showSideMenu,
            "right-0": showSideMenu,
          }
        )}
      ></div>
      <div
        className={cn(
          "fixed top-0 md:hidden block h-[100vh] bg-white z-[999999999999999] transition-all ease-in-out duration-500 sm:w-1/2 w-3/4",
          {
            "-right-full": !showSideMenu,
            "right-0": showSideMenu,
          }
        )}
      >
        <div
          onClick={() => setShowSideMenu(false)}
          className="absolute top-11 right-5"
        >
          <Icons.CrossIcon />
        </div>
        {/* <div className="md:hidden block">{renderNavItems}</div> */}
      </div>
      {showUpButton && (
        <div
          onClick={goToTop}
          className="fixed bottom-5 right-5 p-3 rounded-lg bg-[#474545c5] text-white cursor-pointer"
        >
          <Icons.UpArrowIcon />
        </div>
      )}
    </>
  );
};

export default Navbar;
