import React from 'react';
import Gallery_images from '../../components/image-gallery';
import apolloClient from '@/config/client';
import { PictureData } from '@/config/queries';
import PageBanner from '../../components/banner';
import { GetServerSideProps } from 'next';
import SeoMeta from "@/components/seo";
export default function Pictures({ picturesData }: any) {


  return (
    <>
      <SeoMeta title="تصاویر" description="مرکزی جمعیت اہل حدیث پاکستان اہل حدیث کی نمائندہ مذہبی و سیاسی جماعت ہے" url="pictures" />

      <main>
        <PageBanner
          title="تصاویر"
          subTitle=""
          image="/images/banner/pics.jpg"
          buttontext=""
          buttonLink=""
        />
        <section className='container px-4 md:px-10 mx-auto'>
          <div className="my-20">
            <h2 className="text-2xl font-ahle capitalize">
              صدر آزاد جموں کشمیر سردار مسعود خاں
            </h2>
            <Gallery_images picturesData={picturesData} />
          </div>
        </section>
      </main>
    </>
  )
}



export const getServerSideProps: GetServerSideProps = async () => {
  const [pictures] = await Promise.all([
    apolloClient.query({
      query: PictureData,
      variables: {
        id: "masood-khan",
      }
    }),
  ]);
  const picturesData = pictures?.data?.picture;

  if (!pictures) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return { props: { picturesData } };
}