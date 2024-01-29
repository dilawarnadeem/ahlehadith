"use client"
import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import PageBanner from '@/components/banner';

const Page = () => {
  const onPlayerReady: YouTubeProps['onReady'] = (event:any) => {
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <main>
      <PageBanner
        title=" الیکٹرانک میڈیا"
        subTitle=""
        image="/assets/images/contat.jpg"
        buttontext=""
        buttonLink=""
      />
      <section className='container px-4 md:px-10 mx-auto'>
        <div className='items-center font-ahle my-10 md:my-20 md:mt-20 grid gap-10'>
          <div className="my-10 grid md:grid-cols-3 grid-cols-1 gap-7">
            <YouTube
              videoId="goL4PMdPn9o"
              opts={opts}
              className={`videocontainer`}
              iframeClassName={`w-full h-full aspect-square`}
              onReady={onPlayerReady}
            />

            <YouTube
              videoId="mXGuMJPrdgE"
              opts={opts}
              className={`videocontainer`}
              iframeClassName={`w-full h-full aspect-square`}
              onReady={onPlayerReady}
            />
          </div>
        </div>

      </section>
    </main>
  );
};

export default Page;