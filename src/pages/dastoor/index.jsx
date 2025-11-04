"use client"
import React, { useState } from 'react';
import { Dastoor_Data } from '../../const/dastor';
//import {ModelBox} from '../../components/ModelBox';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Image from 'next/image';
import PageBanner from '../../components/banner';
import SeoMeta from "@/components/seo";

const Pictures = () => {

  const columnsCountBreakPoints = { 200: 1, 280: 2, 900: 3 };
  const [modalIsOpen, setIsOpen] = useState(false);
  const [URL, setURL] = useState('');
  const OpenModelBox = (image) => {
    setURL(image)
    setIsOpen(true);
  }

  return (
    <>
      <SeoMeta title="دستور" description="مرکزی جمعیت اہل حدیث پاکستان اہل حدیث کی نمائندہ مذہبی و سیاسی جماعت ہے" url="dastoor" />

      <PageBanner
        title=""
        subTitle=""
        image="/images/banner/dastoor.jpg"
        buttontext=""
        buttonLink=""
      />
      <section className='container px-4 md:px-10 mx-auto'>
        <div className="my-20">
          <div className="my-10">
            <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
              <Masonry columnsCount={3} gutter="20px">
                {Dastoor_Data?.map((item, idx) => {
                  return <figure key={idx} className="p-1 hover:shadow-lg cursor-pointer">
                    <Image src={item?.img} alt="image" width={1080} height={857} className="w-full rounded-xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" onClick={() => OpenModelBox(item)} />
                  </figure>
                })}
              </Masonry>
            </ResponsiveMasonry>
          </div>
          {/* {
            modalIsOpen && <ModelBox modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} URL={URL} />
          } */}
        </div>
      </section>
    </>
  )
}

export default Pictures