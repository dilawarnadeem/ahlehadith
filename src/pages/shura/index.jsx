"use client"
import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
//import ModelBox from '../../components/ModelBox'
import { Shura_Gallery } from "@/const/exports";
import PageBanner from "@/components/banner";
import SeoMeta from "@/components/seo";
const Page = () => {
  const columnsCountBreakPoints = { 200: 1, 280: 2, 900: 3 };
  const [modalIsOpen, setIsOpen] = useState(false);
  const [URL, setURL] = useState('');
  const OpenModelBox = (image) => {
    setURL(image)
    setIsOpen(true);
  }

  return (
    <>
      <SeoMeta title="شوریٰ" description="مرکزی جمعیت اہل حدیث پاکستان اہل حدیث کی نمائندہ مذہبی و سیاسی جماعت ہے" url="shura" />

      <main>
        <PageBanner
          title="شوریٰ"
          subTitle=""
          image="/images/banner/shura.jpg"
          buttontext=""
          buttonLink=""
        />
        <section className='container px-4 md:px-10 mx-auto'>
          <div className='items-center font-ahle my-10 md:my-20 md:mt-20 grid gap-10'>
            <div className="my-10">
              <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
                <Masonry columnsCount={3} gutter="20px">
                  {Shura_Gallery.map((image) => (
                    <figure key={image.img} className="p-1 hover:shadow-lg cursor-pointer">
                      <img src={image.img} alt={image.img} className="w-full rounded-xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" onClick={() => OpenModelBox(image)} />
                    </figure>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </div>
            {/* {
            modalIsOpen && <ModelBox modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} URL={URL} />
          } */}
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
