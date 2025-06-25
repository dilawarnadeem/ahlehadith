
import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import PageBanner from '@/components/banner';
import SeoMeta from "@/components/seo";
import { GetServerSideProps } from 'next';
import apolloClient from '@/config/client';
import { PictureData } from '@/config/queries';
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
      <SeoMeta title=" الیکٹرانک میڈیا" description="مرکزی جمعیت اہل حدیث پاکستان اہل حدیث کی نمائندہ مذہبی و سیاسی جماعت ہے" url="ele-media" />

      <main>
        <PageBanner
          title=" الیکٹرانک میڈیا"
          subTitle=""
          image="/images/banner/electronic.jpg"
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
    </>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async () => {
  const [pictures] = await Promise.all([
    apolloClient.query({
      query: PictureData,
      variables: {
        id: "print-media",
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
