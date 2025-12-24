
import PageBanner from "@/components/banner";
import Button from "@/components/button";
import Link from "next/link";
import React, { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneSquareAlt } from "react-icons/fa";
import SeoMeta from "@/components/seo";
import { useForm } from "react-hook-form";
const ContactUs = () => {
    const {
      register,
      handleSubmit,
      watch,
      reset,
      formState: { errors },
  } = useForm()
  const [sending, setSending] = useState(false)
  
  const onSubmit = (data:any) => {
      setSending(true)
      fetch('/api/email', {
          method: 'POST',
          headers: {
              Accept: 'application/json, text/plain, */*',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      }).then((res) => {
        
          if (res.status === 200) {
              console.log('Response succeeded!');
              alert('Message Successfully send.!');
              reset();
              setSending(false)
          }
      });
  }
  return (
    <>
      <SeoMeta title="رابطہ کریں" description="مرکزی جمعیت اہل حدیث پاکستان اہل حدیث کی نمائندہ مذہبی و سیاسی جماعت ہے" url="contact-us" />

      <main>
        <PageBanner
          title="رابطہ کریں"
          subTitle=""
          image="/images/contat.jpg"
          buttontext=""
          buttonLink=""
        />
        <section className='container px-4 md:px-10 mx-auto'>
           <form className="my-12"  onSubmit={handleSubmit(onSubmit)}>
                      <div className='my-8'>
                        <h2 className="text-3xl uppercase font-ahle ahle-heading">
                          میسج کے ذریعے فوری رابطہ
                        </h2>
                        <p className='mt-5 font-ahle text-lg text-gray-600 dark:text-text'>
                          درج ذیل فارم کو پر کریں. ہمارا نمائندہ بہت جلد آپ سے رابطہ کرے گا
                        </p>
                      </div>
                      <div className="mt-2 mb-5 md:flex gap-4">
                        <input {...register("name", { required: true })} tabIndex={0}
                          type="text"
                          className="p-4 bg-gray-100 dark:bg-light-gray w-full text-gray-500 mt-4 md:mt-0 focus:outline-yellow border-none text-sm font-ahle"
                          placeholder="آپ کا نام"
                        />
                        {errors.name && <span className='text-xs text-red-500'>This field is required</span>}
                        <input
                          type="tel"
                          className="p-4 bg-gray-100 dark:bg-light-gray w-full text-gray-500 mt-4 md:mt-0 focus:outline-yellow border-none text-sm font-ahle"
                          placeholder="فون نمبر"
                        />
                        <input
                         {...register("email", { required: true })} type="email"
                          className="p-4 bg-gray-100 dark:bg-light-gray w-full text-gray-500 mt-4 md:mt-0 focus:outline-yellow border-none text-sm font-ahle"
                          placeholder="ای میل ایڈریس"
                        />
                         {errors.email && <span className='text-xs text-red-500'>This field is required</span>}
                      </div>
                      <div className="mt-2 mb-5 ">
                        <input
                         {...register("Address", { required: true })} 
                          type="text"
                          className="p-4 bg-gray-100 dark:bg-light-gray w-full text-gray-500 mt-4 md:mt-0 focus:outline-yellow border-none text-sm font-ahle"
                          placeholder="موجودہ پتہ"
                        />
                         {errors.email && <span className='text-xs text-red-500'>This field is required</span>}
                      </div>
                      <textarea
                       {...register("comment", { required: true })} 
                        className="w-full h-60 mb-4 bg-gray-100 dark:bg-light-gray text-gray-500 p-4 focus:outline-yellow text-sm font-ahle"
                        placeholder="تفصیل"
                      ></textarea> {errors.email && <span className='text-xs text-red-500'>This field is required</span>}
                      <div className="flex justify-center items-center font-ahle">
                        <Button variants="primary" size="large">
                          ارسال کریں
                        </Button>
                      </div>
                    </form>
          <div className="grid md:grid-cols-3 my-24">
            <div className="flex flex-col text-gray-500 gap-1 items-center">
              <FaPhoneSquareAlt size={80} className="text-yellow" />
              <h4 className="text-xl mt-6 text-dark-gray font-ahle">فون نمبر</h4>
              <div className="p-[2px] w-32 bg-gray-100 my-5" />
              <Link href="tel:03208453475" className="font-ahle">03208453475</Link>
              <Link href="tel:04237729933" className="font-ahle">04237729933</Link>
            </div>
            <div className="flex flex-col text-gray-500 gap-1 items-center">
              <FaMapMarkedAlt size={80} className="text-yellow" />
              <h4 className="text-xl mt-6 text-dark-gray font-ahle">
                ایڈریس
              </h4>
              <div className="p-[2px] w-32 bg-gray-100 my-5" />
              <p className="max-w-[250px] text-center font-ahle">
                مرکز اہلحدیث، 106 راوی روڈ، لاہور، پاکستان
              </p>
            </div>
            <div className="flex flex-col text-gray-500  gap-1 items-center">
              <FaEnvelope size={80} className="text-yellow" />
              <h4 className="text-xl mt-6 text-dark-gray font-ahle">ای میل ایڈریس</h4>
              <div className="p-[2px] w-32 bg-gray-100 my-5" />
              <Link href="mailto:mjah106@gmail.com" target="_blank" className="max-w-[250px] text-center font-ahle">
                mjah106@gmail.com
              </Link>
            </div>
          </div>
          <div className="mb-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6796.299514331889!2d74.300104!3d31.602356000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191c62b2f9f8e7%3A0xeffc0ca0dbecf0c8!2sMarkazi%20Jamiat%20Ahl-e-Hadees%20Pakistan%20(MJAP)%20Secretariat%20Office!5e0!3m2!1sen!2sus!4v1685617680798!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: '0' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactUs;
