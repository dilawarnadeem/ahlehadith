import PageBanner from "@/components/banner";
import React from "react";
import SeoMeta from "@/components/seo";
const Page = () => {
  return (
    <>
      <SeoMeta title="صوبائی نظم" description="مرکزی جمعیت اہل حدیث پاکستان اہل حدیث کی نمائندہ مذہبی و سیاسی جماعت ہے" url="subayi-nazam" />

      <main>
        <PageBanner
          title="صوبائی نظم"
          subTitle=""
          image="/images/banner/subayi.jpg"
          buttontext=""
          buttonLink=""
        />
        <section className='container px-4 md:px-10 mx-auto'>
          <div className='my-10 md:my-20 md:mt-20 file:grid gap-10'>
            <div>
              <h2 className="text-3xl uppercase font-ahle mb-5">
                پنجاب:
              </h2>
              <p className='font-ahle text-base text-gray-600 dark:text-text mb-3'>
                <strong> سرپرست </strong> : سید سبطین شاہ نقوی		<strong> ناظم </strong> : مولانا عبدالرشید حجازی	 <strong> ناظم اعلیٰ </strong> : حافظ یونس آزاد
              </p>
            </div>
            <div>
              <h2 className="text-3xl uppercase font-ahle mb-5">
                سندھ:
              </h2>
              <p className='font-ahle text-base text-gray-600 dark:text-text mb-3'>
                <strong> امیر </strong> ؛ مولانا یوسف قصوری	<strong> ناظم </strong> : علامہ ابراہیم طارق
              </p>
            </div>
            <div>
              <h2 className="text-3xl uppercase font-ahle mb-5">
                خیبرپختونخواہ:
              </h2>
              <p className='font-ahle text-base text-gray-600 dark:text-text mb-3'>
                <strong> امیر </strong> ؛ مولانا روح اللہ توحیدی	<strong> ناظم </strong> : ڈاکٹر ذاکر شاہ
              </p>
            </div>
            <div>
              <h2 className="text-3xl uppercase font-ahle mb-5">
                بلوچستان:
              </h2>
              <p className='font-ahle text-base text-gray-600 dark:text-text mb-3'>
                <strong> امیر </strong> ؛ مولانا علی محمد ابو تراب	<strong> ناظم </strong> : مولانا عبدالغنی ضامرانی
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
