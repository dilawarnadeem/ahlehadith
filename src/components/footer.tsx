import { NavLinks } from '../const/navlinks';
import { NavLinksType } from '@/utils/types';
import Link from 'next/link';
import React from 'react'
import { BiPhoneCall } from 'react-icons/bi';
import { BsPinMapFill, BsEnvelopeAtFill, BsPhone } from 'react-icons/bs';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { TbLocationFilled } from 'react-icons/tb';
import Layout from './layout';

const Footer = () => {
  return (
    <footer className="bg-[#012f1e]">
        <Layout>
          <div className='py-12 flex md:flex-row flex-col gap-4 border-b border-yellow'>
            <div className='md:w-1/3 w-full flex gap-3'>
              <div>
                <BiPhoneCall className='md:text-6xl text-4xl text-white transform rotate-[240deg]' />
              </div>
              <div>
                <h2 className="text-2xl text-white uppercase ahle-heading font-ahle footer-heading">
                  ٹیلی فون:
                </h2>
                <Link href="tel:03060483779" className="md:text-4xl text-2xl text-white uppercase font-ahle">
                97 73 840 0306  92+
                </Link>
              </div>
            </div>
            <div className='flex md:flex-row flex-col gap-5 md:w-2/3 w-full'>
              <div className='w-full'>
                <h2 className="text-2xl text-white uppercase ahle-heading font-ahle footer-heading">
                  ہفتہ وار نیوز لیٹر سبسکرپشن
                </h2>
                <p className='text-xl text-white uppercase font-ahle'>
                  بذریعہ ای میل باخبر رہنے کے لیے ابھی سبسکرائب کریں
                </p>
              </div>
              <form className="w-full">
                <div className="md:flex gap-4">
                  <input
                    type="text"
                    className="p-4 bg-gray-100 dark:bg-light-gray w-full text-gray-500 mt-4 md:mt-0 focus:outline-yellow border-none text-sm"
                    placeholder="سبسکرائبرکانام"
                  />
                </div>
                <div className="mt-3 flex gap-3">
                  <input
                    type="text"
                    className="p-4 bg-gray-100 dark:bg-light-gray w-full text-gray-500 focus:outline-yellow border-none text-sm"
                    placeholder="سبسکرائبرکاای میل"
                  />
                  <button
                    type="submit"
                    className="bg-yellow uppercase text-black w-fit ml-0 p-4 hover:bg-light-blue cursor-pointer">
                    <TbLocationFilled size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Layout>
        <Layout>
          <div className="py-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-4">
              <div>
                <h2 className="mb-6 text-2xl text-white uppercase ahle-heading font-ahle footer-heading">
                  ہمارے بارے میں
                </h2>
                <p className="text-white font-ahle text-lg">
                  منہج سلف پر قرآن وحدیث کی تبلیغ واشاعت کی علمبردار - مرکزی جمعیت اہل حدیث پاکستان
                </p>
              </div>
              <div>
                {NavLinks.slice(4, 5).map((item: NavLinksType, idx: number) => {
                  return (
                    <div key={idx}>
                      <h2 className="mb-6 text-2xl text-white uppercase ahle-heading font-ahle footer-heading">
                        {item.name}
                      </h2>
                      <ul className="list-inside list-square marker:text-yellow">
                        {item.sub_menu?.map((sub_item: any, _idx: any) => {
                          return <li key={_idx} className="mb-4 relative before:content-[' '] before:h-[1px] before:w-3 before:bg-[#397524] before:absolute before:top-[13px] before:right-1">
                            <Link href={sub_item.link} className="text-white hover:opacity-80 font-ahle text-lg ms-1">
                              {sub_item.name}
                            </Link>
                          </li>
                        })}
                      </ul>
                    </div>
                  );
                })}

              </div>
              <div>
                <h2 className="mb-6 text-2xl text-white uppercase ahle-heading font-ahle footer-heading">
                  کوئک لنکس 
                </h2>
                <ul className="list-inside list-square marker:text-yellow">
                  <li className="mb-4 relative before:content-[' '] before:h-[1px] before:w-3 before:bg-[#397524] before:absolute before:top-[13px] before:right-1">
                    <Link href="/dastoor" className="text-white hover:opacity-80 font-ahle text-lg ms-1">
                      دستور مرکزی جمعیت اہل حدیث پاکستان
                    </Link>
                  </li>
                  <li className="mb-4 relative before:content-[' '] before:h-[1px] before:w-3 before:bg-[#397524] before:absolute before:top-[13px] before:right-1">
                    <Link href="/news" className="text-white hover:opacity-80 font-ahle text-lg ms-1">
                      جماعتی خبریں
                    </Link>
                  </li>
                  <li className="mb-4 relative before:content-[' '] before:h-[1px] before:w-3 before:bg-[#397524] before:absolute before:top-[13px] before:right-1">
                    <Link href="/videos" className="text-white hover:opacity-80 font-ahle text-lg ms-1">وڈیوز</Link>
                  </li>
                  <li className="mb-4 relative before:content-[' '] before:h-[1px] before:w-3 before:bg-[#397524] before:absolute before:top-[13px] before:right-1">
                    <Link href="/pictures" className="text-white hover:opacity-80 font-ahle text-lg ms-1">تصاویر</Link>
                  </li>
                 
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-2xl text-white uppercase ahle-heading font-ahle footer-heading">
                فوری رسائی
                </h2>
                <ul className='list-inside list-square marker:text-yellow'>
                <li className="mb-4 relative before:content-[' '] before:h-[1px] before:w-3 before:bg-[#397524] before:absolute before:top-[13px] before:right-1">
                    <Link href="/islamic-graphics" className="text-white hover:opacity-80 font-ahle text-lg ms-1">اسلامک گرافکس</Link>
                  </li>
                  <li className="mb-4 relative before:content-[' '] before:h-[1px] before:w-3 before:bg-[#397524] before:absolute before:top-[13px] before:right-1">
                    <Link href="/books-library" className="text-white hover:opacity-80 font-ahle text-lg ms-1">کتب لائبریری</Link>
                  </li>
                  <li className="mb-4 relative before:content-[' '] before:h-[1px] before:w-3 before:bg-[#397524] before:absolute before:top-[13px] before:right-1">
                    <Link href="/contact-us" className="text-white hover:opacity-80 font-ahle text-lg ms-1">رابطہ کریں</Link>
                  </li>
                
                </ul>
              </div>
            </div>
          </div>
        </Layout >
        <div className='bg-[#012f1e]'>
          <Layout>
            <div className="py-6">
              <div className='border border-yellow grid md:grid-cols-4 grid-cols-1 gap-5 items-center'>
                <p className='text-white font-ahle text-base flex gap-2'>
                  <BsPinMapFill size={20} />
                  مرکز اہلحدیث، 106 راوی روڈ، لاہور، پاکستان
                </p>
                <Link href="mailto:mjah106@gmail.com" target='_blank' className='text-white font-ahle text-base flex gap-2'>
                  <BsEnvelopeAtFill size={20} />
                  mjah106@gmail.com
                </Link>
                <Link href="tel:+923060483779" className='text-white font-ahle text-base flex gap-2'>
                  <BsPhone size={20} />
                  97 73 840 0306  92+
                </Link>
                <ul className="flex md:justify-end">
                  <li className='p-3 md:border-r md:border-y-0 md:border-l-0 border border-yellow bg-transparent hover:bg-yellow text-white'>
                    <Link href="https://www.facebook.com/AllamaSajidMir" className="">
                      <FaFacebookF size={20} />
                    </Link>
                  </li>
                  <li className='p-3 md:border-r md:border-y-0 md:border-l-0 border border-yellow bg-transparent hover:bg-yellow text-white'>
                    <Link href="#" className="">
                      <FaTwitter size={20} />
                    </Link>
                  </li>
                  <li className='p-3 md:border-r md:border-y-0 md:border-l-0 border border-yellow bg-transparent hover:bg-yellow text-white'>
                    <Link href="#" className="">
                      <FaYoutube size={20} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Layout>
        </div>
      </footer >
  )
}

export default Footer