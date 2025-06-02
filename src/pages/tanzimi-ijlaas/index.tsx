'use client'
import React, { useState } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { VideoByType, VideoByTypes } from '@/config/queries';
import { getIDFromURL, getYouTubeThumbnail } from '@/utils';
import PageBanner from '../../components/banner';
import apolloClient from '@/config/client';
import { GetServerSideProps } from 'next';
import SeoMeta from "@/components/seo";
import { BsPlayCircle } from 'react-icons/bs';
import ModelBox from '@/components/modelbox';
export default function tanzeemiijlas({ videosList }: any) {
  const [modalIsOpen, setIsOpen] = useState(false);
  
    const [URL, setURL] = useState("");
    const OpenModelBox = (video: any) => {
      const vURL = video?.videoInfo?.videoUrl;
      setURL(vURL);
      setIsOpen(true);
    };
  
  const onPlayerReady: YouTubeProps['onReady'] = (event: any) => {
    event.target.pauseVideo();
  }
  const opts: YouTubeProps['opts'] = {
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <>
      <SeoMeta title="تنظیمی اجلاس" description="مرکزی جمعیت اہل حدیث پاکستان اہل حدیث کی نمائندہ مذہبی و سیاسی جماعت ہے" url="tanzimi-ijlaas" />
      <main>
        <PageBanner
          title="تنظیمی اجلاس"
          subTitle=""
          image="/images/banner/tanzeemiijlas.jpg"
          buttontext=""
          buttonLink=""
        />
        <section className="container px-4 md:px-10 mx-auto">
          <div className="items-center font-ahle my-10 md:my-20 md:mt-20 grid gap-10">
            <div className="my-10 grid md:grid-cols-3 grid-cols-1 gap-7">
              {videosList?.map((item: any, idx: number) => {
                return (
                  <>
                    <div
                      key={idx}
                      className="rounded-xl relative md:rounded-xl  border-[6px] border-white dark:border-transparent shadow-xl overflow-hidden inline-block"
                    >
                      <img
                        src={getYouTubeThumbnail(item?.videoInfo?.videoUrl)}
                        alt="thumbnil"
                        width={360}
                        height={360}
                        className="w-full h-full object-cover"
                      />
                      <BsPlayCircle
                        onClick={() => OpenModelBox(item)}
                        className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-yellow active:scale-105 animate-pulse text-5xl"
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
        {modalIsOpen && (
          <ModelBox
            modalIsOpen={modalIsOpen}
            setIsOpen={setIsOpen}
            URL={URL}
            video={true}
          />
        )}
      </main>
    </>
  );
};




export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await apolloClient.query({
    query: VideoByType,
    variables: {
      id: "organizational-meeting",
    },
  });
  const videosList = data?.videoType.videos.nodes || [];

  return {
    props: {
      videosList,
    },
  };
};
