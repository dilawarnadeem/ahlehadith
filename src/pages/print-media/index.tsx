
import React from 'react';
import apolloClient from '@/config/client';
import { PictureData } from '@/config/queries';
import Gallery_images from '../../components/image-gallery';
import PageBanner from '../../components/banner';
import { GetServerSideProps } from 'next';
import SeoMeta from "@/components/seo";
export default function Print_Media({ picturesData }: any) {

  return (
    <>
      <SeoMeta title="پرنٹ میڈیا کوریج" description="مرکزی جمعیت اہل حدیث پاکستان اہل حدیث کی نمائندہ مذہبی و سیاسی جماعت ہے" url="print-media" />
      <main>
        <PageBanner
          title="پرنٹ میڈیا کوریج"
          subTitle=""
          image="/images/banner/printmedia.jpg"
          buttontext=""
          buttonLink=""
        />
        <section className='container px-4 md:px-10 mx-auto'>
          <Gallery_images picturesData={picturesData} />
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
        id: "پرنٹ-میڈیا-کوریج",
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