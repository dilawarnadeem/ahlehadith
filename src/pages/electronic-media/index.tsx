"use client"
import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import PageBanner from '../../components/banner';
import SeoMeta from "@/components/seo";
const Page = () => {
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
      <SeoMeta title="الیکٹرانک میڈیا کوریج" description="مرکزی جمعیت اہل حدیث پاکستان اہل حدیث کی نمائندہ مذہبی و سیاسی جماعت ہے" url="electronic-media" />

      <main>
        <PageBanner
          title="الیکٹرانک میڈیا کوریج"
          subTitle=""
          image="/images/banner/electronic.jpeg"
          buttontext=""
          buttonLink=""
        />
        <section className='container px-4 md:px-10 mx-auto'>
          <div className='items-center font-ahle my-10 md:my-20 md:mt-20 grid gap-10'>
            <div className="my-10 grid md:grid-cols-3 grid-cols-1 gap-7">
              <YouTube
                videoId="az_4cAYj0Cw"
                opts={opts}
                className={`videocontainer`}
                iframeClassName={`w-full h-full aspect-square`}
                onReady={onPlayerReady}
              />
            </div>
          </div>
          {/* <div className='items-center font-ahle my-10 md:my-20 md:mt-20 grid gap-10'>
          <div className="my-10 grid md:grid-cols-3 grid-cols-1 gap-7">
            <iframe
              src={`https://www.youtube.com/embed/az_4cAYj0Cw`}
              title="YouTube video player"
              frameBorder="0"
              allow=""
              allowFullScreen
              className="w-full h-full aspect-square"></iframe>
          </div>
        </div> */}
        </section>
      </main>
    </>
  );
};

export default Page;

