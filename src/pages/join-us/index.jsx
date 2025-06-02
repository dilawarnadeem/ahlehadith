import Button from '../../components/button'
import React, { useState } from 'react'
import PageBanner from "../../components/banner";
import SeoMeta from "@/components/seo";
import { useForm, SubmitHandler } from "react-hook-form";
const Razakar = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
} = useForm()
const [sending, setSending] = useState(false)

const onSubmit = (data) => {
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
      <SeoMeta title="رضاکار بنیں" description="مرکزی جمعیت اہل حدیث پاکستان اہل حدیث کی نمائندہ مذہبی و سیاسی جماعت ہے" url="join-us" />

      <main>
        <PageBanner
          title="رضاکار بنیں"
          subTitle=""
          image="/images/banner/joinus.jpg"
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
        </section>
      </main>
    </>
  )
}

export default Razakar