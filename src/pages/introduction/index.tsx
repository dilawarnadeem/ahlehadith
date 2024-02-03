import React from "react";
import PageBanner from "@/components/banner";
import SeoMeta from "@/components/seo";
const Introduction = () => {
  return (
    <>
      <SeoMeta title="تعارف" description="مرکزی جمعیت اہل حدیث پاکستان اہل حدیث کی نمائندہ مذہبی و سیاسی جماعت ہے" url="introduction" />

      <main>
        <PageBanner
          title="تعارف"
          subTitle=""
          image="/images/contat.jpg"
          buttontext=""
          buttonLink=""
        />
        <section className='bg-light-gray py-10 md:py-20'>
          <div className='container px-4 md:px-10 mx-auto'>
            <div className="mb-10">
              <h2 className='text-4xl leading-[4rem] font-ahle'>مرکزی جمعیت اہل حدیث</h2>
            </div>
            <div className="flex md:flex-row flex-col justify-between gap-8">
              <div className="md:w-1/3 w-full">
                <div className="">
                  <img className='' src="/assets/images/slid1.jpeg" alt="img" />
                </div>
                <div className=" bg-[#012f1e] text-white py-5 px-3">
                  <div >
                    <h6 className='mb-3 text-xl font-ahle'>
                      سینیٹر پروفیسر علامہ ساجد میر                    </h6>
                    <h4 className='mb-3 text-2xl font-ahle'>

                      امیر مرکزی جمعیت اہلحدیث پاکستان
                    </h4>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 w-full">
                <p className='font-ahle text-base leading-[2.3rem] text-gray-600 dark:text-text mb-3'>
                  مرکزی جمعیت اہل حدیث پاکستان اہل حدیث کی نمائندہ مذہبی و سیاسی جماعت ہے۔ جو مجلس شوری، مرکزی عاملہ اور کابینہ پر مشتمل ہے۔
                </p>

                <p className='font-ahle text-base leading-[2.3rem] text-gray-600 dark:text-text mb-3'>
                  مرکزی جمعیت اہل حدیث پاکستان کے امیر سینیٹر پروفیسر علامہ ساجد میر ہیں۔ جب کہ ناظم اعلیٰ سینیٹر ڈاکٹر عبدالکریم ہیں ۔ نصف صدی سے زائد عمر رکھنے والی یہ جماعت اہلحدیث کی سب سے بڑی جماعت ہے ذیلی ادارے اس کے زیر انتظام درج ذیل ادارے کام کر رہے ہیں۔
                </p>

                <p className='font-ahle text-base leading-[2.3rem] text-gray-600 dark:text-text mb-3'>
                  ہفت روزہ اہل حدیث (ہفتہ وار رسالہ) آن لائن مطالعہ کے لیے دستیاب ہے۔مکتبہ سلفیہ، لاہور میں جمعیت اہلحدیث کا اشاعتی ادارہنظام مساجد و اوقاف
                </p>

                <p className='font-ahle text-base leading-[2.3rem] text-gray-600 dark:text-text mb-3'>
                  وفاق المدارس السلفیۃ: اہل حدیث مدارس اور جامعات کا تعلیمی بورڈپیغام ٹی وی (فرقہ واریت سے بچ کر دینی تعلیمات کو عام کرنے کے لیے چینل)ذیلی تنظیمیں مرکزی جمعیت اہلحدیث پاکستان کی تمام ذیلی تنظیمات کے سربراہ ڈاکٹر عبدالغفور راشد ہیں جو اس جماعت کے انتخابی بورڈ کے نگران بھی ہیں ۔ جمعیت کے ذیلی تنظیمات کے نام درج ذیل ہیں ۔
                </p>

                <p className='font-ahle text-base leading-[2.3rem] text-gray-600 dark:text-text mb-3'>
                  اہل حدیث یوتھ فورس
                </p>

                <p className='font-ahle text-base leading-[2.3rem] text-gray-600 dark:text-text mb-3'>
                  اہل حدیث سٹوڈنٹس فیڈریشن
                </p>

                <p className='font-ahle text-base leading-[2.3rem] text-gray-600 dark:text-text mb-3'>
                  جمیعت اساتذہ پاکستان جمعیت طلبہ
                </p>

                <p className='font-ahle text-base leading-[2.3rem] text-gray-600 dark:text-text mb-3'>اہلحدیث متحدہ حکماء محاذ
                </p>

                {/* <Link className=" lg:py-[8px] px-[36px] font-ahle bg-yellow text-black float-right mt-[20px] text-[20px] " href={"/"}
              >تفصیل جانیے
              </Link> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Introduction;
