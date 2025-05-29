import { GetServerSideProps } from "next";
import PageBanner from "../../components/banner";
import SeoMeta from "@/components/seo";
import apolloClient from "../../config/client";
import { VideoType, Videos as VideoQ } from "@/config/queries";
import React from "react";
import { VideosGallery } from "@/components/videos";

export default function Videos({ videosData, videoTypeData }: any) {

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
                  <VideosGallery type={item?.slug} videosData={videosData} />
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
  const [videos, videoType] = await Promise.all([
    apolloClient.query({ query: VideoQ }),
    apolloClient.query({ query: VideoType }),
  ]);
  const videosData = videos?.data?.videos?.nodes;
  const videoTypeData = videoType?.data?.videoTypes?.nodes;

  if (!videos) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return { props: { videosData, videoTypeData } };
}
