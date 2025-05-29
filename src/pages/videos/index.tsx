import { GetServerSideProps } from "next";
import PageBanner from "../../components/banner";
import SeoMeta from "@/components/seo";
import apolloClient from "../../config/client";
import { videosTypes } from "@/config/queries";
import React from "react";
import { VideosGallery } from "@/components/videos";

export default function Videos({  videoTypeData }: any) {

  return (
    <>
      <SeoMeta title="وڈیوز" description="مرکزی جمعیت اہل حدیث پاکستان اہل حدیث کی نمائندہ مذہبی و سیاسی جماعت ہے" url="videos" />
      <main>
        <PageBanner
          title="وڈیوز"
          subTitle=""
          image="/images/banner.jpg"
          buttontext=""
          buttonLink=""
        />
        <section className='container px-4 md:px-10 mx-auto'>
          {videoTypeData?.map((item: any, idx: number) => {
            return (
              <div className="my-10 md:my-16 md:mt-16" key={idx}>
                <div>
                  <div className="my-5">
                    <h2 className="text-2xl uppercase font-ahle">
                      {item?.name}                   
                    </h2>
                  </div>
                  <VideosGallery videosData={item?.videos.nodes} />
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};



export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await apolloClient.query({
    query: videosTypes,
  });

  const videoTypeData = data?.videoTypes?.nodes || [];

  return { props: { videoTypeData } };
};