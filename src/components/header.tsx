import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Logo } from "./logo";
import { NavLinks } from "../const/navlinks";
import { SettingsContext } from "@/context/setting-context";
import { BiChevronDown, BiSearch, BiMenuAltRight } from "react-icons/bi";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { RxCross1, RxCross2 } from "react-icons/rx";
import Input from "./input";
import Mega_menu from "./mega-menu";
import SideSection from "./side-section";
import { NavLinksType } from "@/utils/types";
import { useRouter } from "next/router";

export const Header = () => {
  const {
    searchOpen,
    setSearchOpen,
    isMobile,
    setIsMobile,
    setOpenSide,
    openSide,
  } = useContext(SettingsContext);

  const [scrollTop, setScrollTop] = useState<any>(0);
  const [headerClr, setHeaderClr] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const handleMenu = (id: any) => {
    if (dropdown === id) {
      return setDropdown(null);
    }
    setDropdown(id);
  };

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }
    scrollTop >= "10" ? setHeaderClr(true) : setHeaderClr(false);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
  return (
    <>
      <header
        className={`right-0 left-0 top-0 shadow-md fixed w-full z-50 ${
          headerClr ? "bg-white" : "bg-white"
        }`}
      >
        <div className="flex items-center gap-7">
          <div className="md:w-1/4 bg-white rounded-lg ps-4">
            <Logo />
          </div>
          <div className="md:w-3/4 w-full">
            <div className="md:flex text-pure justify-between bg-light-gray hidden">
              <nav>
                {NavLinks.slice(3, 4).map((item: NavLinksType, idx: number) => {
                  return (
                    <ul
                      key={idx}
                      className="w-full gap-4 items-center hidden md:flex [&>*:nth-child(1)]:border-r-transparent "
                    >
                      {item.sub_menu?.map((sub_item: any, _idx: any) => {
                        return (
                          <li
                            key={_idx}
                            className="px-3 border-r border-pure py-3"
                          >
                            <Link
                              onClick={() => {
                                setDropdown(null), setIsMobile(false);
                              }}
                              href={sub_item.link}
                              className="uppercase font-ahle text-base md:text-pure text-pure hover:text-[#012f1e] hover:underline"
                            >
                              {sub_item.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  );
                })}
              </nav>
              <div className="pe-10 py-3">
                <Link
                  href="mailto:mjah106@gmail.com"
                  target="_blank"
                  className="text-pure font-ahle text-base flex gap-x-2 items-end"
                >
                  mjah106@gmail.com
                  <BsEnvelopeAtFill size={18} />
                </Link>
              </div>
            </div>
            <div className="flex text-white justify-between items-center">
              <nav>
                <ul
                  className={`w-full gap-4 me-4 items-center ${
                    isMobile
                      ? "absolute top-12 flex flex-col gap-6 p-10 left-0 right-0 md:bg-light-gray bg-[#012f1e] w-full"
                      : "hidden md:flex"
                  }`}
                >
                  {NavLinks.slice(0, 6).map(
                    (item: NavLinksType, idx: number) => {
                      return (
                        <li key={idx} className="md:w-auto w-full">
                          {item.sub_menu ? (
                            <span className="flex items-center justify-between">
                              <Link
                                onMouseEnter={() => handleMenu(item.id)}
                                onClick={() => {
                                  setDropdown(null), setIsMobile(false);
                                }}
                                href={item.link}
                                className="uppercase font-ahle text-[17px] md:text-pure text-white md:hover:text-[#012f1e] hover:text-yellow hover:underline"
                              >
                                {item.name}
                              </Link>
                              <span className="cursor-pointer md:text-pure text-white">
                                <BiChevronDown
                                  onMouseEnter={() => handleMenu(item.id)}
                                />
                              </span>
                            </span>
                          ) : (
                            <span className="flex items-center justify-between">
                              <Link
                                onClick={() => {
                                  setDropdown(null), setIsMobile(false);
                                }}
                                href={item.link}
                                className="uppercase font-ahle text-[17px] md:text-pure text-white md:hover:text-[#012f1e] hover:text-yellow hover:underline"
                              >
                                {item.name}
                              </Link>
                            </span>
                          )}
                          <ul
                            onMouseLeave={() => setDropdown(null)}
                            className={` min-w-[230px] flex-col md:absolute md:px-5 md:pb-5 pb-0 pt-5 md:top-[105px] top-[91px] gap-4 md:bg-[#012f1e] ${
                              dropdown === item.id ? "flex" : "hidden"
                            } `}
                          >
                            {item.sub_menu?.map((sub_item: any, _idx: any) => {
                              return (
                                <Mega_menu
                                  sub_item={sub_item}
                                  key={_idx}
                                  click={() => {
                                    setDropdown(null), setIsMobile(false);
                                  }}
                                />
                              );
                            })}
                          </ul>
                        </li>
                      );
                    }
                  )}
                </ul>
              </nav>
              <div className="flex gap-5 justify-between md:w-fit w-full items-center md:pe-0 pe-4">
                <BiSearch
                  size={24}
                  className="me-5 ms-2 mt-1 cursor-pointer text-pure"
                  onClick={() => setSearchOpen(true)}
                />
                <div className="bg-[#012f1e] md:pe-10 pe-4 md:block hidden">
                  <Link
                    href="/donate-us"
                    className="uppercase inline-block font-ahle text-[17px] text-black bg-yellow px-10 py-4"
                  >
                    عطیات
                  </Link>
                  <Link
                    href="/join-us"
                    className="uppercase inline-block font-ahle text-[17px] text-white bg-[#012f1e] px-10 py-4"
                  >
                    رضاکار بنیں
                  </Link>
                </div>
                <div
                  className="ml-3 md:hidden text-pure"
                  onClick={() => setIsMobile(!isMobile)}
                >
                  {!isMobile ? (
                    <BiMenuAltRight size={32} />
                  ) : (
                    <RxCross1 size={32} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {searchOpen && (
        <div
          className="fixed top-0 z-50 right-0 bottom-0 left-0 bg-black/40 dark:bg-white/30"
          onClick={() => setSearchOpen(false)} // clicking outside closes it
        >
          <div onClick={(e) => e.stopPropagation()}>
            {/* Stop clicks inside the search box from closing it */}
            <SearchBox />
          </div>
        </div>
      )}
      <section
        className={`transition-all duration-300 fixed top-0 bottom-0 p-8 bg-[#090909] z-50 w-full md:w-[350px] ease-in-out overflow-y-auto no-scrollbar ${
          openSide ? "left-0" : "-left-[100%]"
        }`}
      >
        <SideSection />
      </section>
    </>
  );
};

const SearchBox = () => {
  const { searchValue, setSearchValue, setSearchOpen } =
    useContext(SettingsContext);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim() !== "") {
      router.push(`/search?q=${encodeURIComponent(searchValue.trim())}`);
      setSearchOpen(false);
    }
  };

  return (
    <section className="flex justify-center items-center mt-28">
      <form
        onSubmit={handleSearch}
        className="flex items-center md:w-[600px] relative bg-dark-gray rounded-full overflow-hidden"
      >
        <button className="bg-yellow w-12 h-12 mr-3 group rounded-full flex justify-center items-center flex-col">
          <RxCross2
            size={24}
            className="mx-5 mt-1 text-black group-hover:scale-110 cursor-pointer"
            onClick={() => setSearchOpen(false)}
          />
        </button>
        <button
          type="submit"
          className="bg-yellow w-12 h-12 mr-3 group rounded-full flex justify-center items-center flex-col"
        >
          <BiSearch
            size={24}
            className="mx-5 mt-1 text-black group-hover:scale-110 cursor-pointer"
          />
        </button>
        <input
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder="Search..."
          className="w-full p-5 pl-12 bg-transparent text-white placeholder:text-gray-400 rounded-full outline-none text-end"
        />
      </form>
    </section>
  );
};
