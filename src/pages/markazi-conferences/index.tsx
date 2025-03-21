
import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { VideoByTypes } from '@/config/queries';
import { getIDFromURL } from '@/utils';
import PageBanner from '../../components/banner';
import apolloClient from '@/config/client';
import { GetServerSideProps } from 'next';
import SeoMeta from "@/components/seo";
export default function Pictures({ videosList }: any) {
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
      <SeoMeta title="مرکزی کانفرنسز" description="مرکزی جمعیت اہل حدیث پاکستان اہل حدیث کی نمائندہ مذہبی و سیاسی جماعت ہے" url="markazi-conferences" />

      <main>
        <PageBanner
          title="مرکزی کانفرنسز"
          subTitle=""
          image="/images/banner/markaziconferences.jpg"
          buttontext=""
          buttonLink=""
        />
        <section className='container px-4 md:px-10 mx-auto'>
          <div className='items-center font-ahle my-10 md:my-20 md:mt-20 grid gap-10'>
            <div className="my-10 grid md:grid-cols-3 grid-cols-1 gap-7">
              {videosList?.map((item: any, idx: number) => {
                var url = getIDFromURL(item?.videoInfo?.videoUrl)
                return <YouTube key={idx}
                  videoId={url}
                  opts={opts}
                  className={`videocontainer`}
                  iframeClassName={`w-full h-full aspect-square`}
                  onReady={onPlayerReady}
                />
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};




export const getServerSideProps: GetServerSideProps = async () => {
  const [postres] = await Promise.all([
    apolloClient.query({
      query: VideoByTypes,
      variables: {
        id: "مرکزی-کانفرنسز"
      }
    }),
  ]);
  const videosList = postres?.data?.videoType?.videos?.nodes;

  if (!videosList) {
    throw new Error('Failed to fetch data')
  }

  return { props: { videosList } }
}