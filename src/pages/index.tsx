import Main1 from "../components/main1";
import Sub_Nav from "../components/sub-nav"
import Tabs from "../components/tabs";
import Link from "next/link";
import { ConvertDateIntoUrdu, GetWordStr } from "../utils/index";
import { PostMokeData } from "@/const/post"

import { VideosGallery } from "../components/videos";
import BooksSection from "../components/bookssection";
import Team from "../components/team"
import apolloClient from '../config/client';
import { AllPosts, Books, Members, HomePage, Videos } from '@/config/queries';
import { GetServerSideProps } from "next";

import SeoMeta from "@/components/seo";

export default function Home({ postData, home, videosData, booksData, membersData }: any) {


    const intro = home.introduction
      console.log(intro);

  

  const posts = postData
  return (
    <>
      <SeoMeta title="مرکزی جمعیت" description="مرکزی جمعیت اہل حدیث پاکستان اہل حدیث کی نمائندہ مذہبی و سیاسی جماعت ہے" url="" />
      <Main1 />
      <Sub_Nav />
      <Tabs intro={intro}/>
      <section className='container px-4 md:px-10 mx-auto'>
        <div className="my-10 md:my-20 md:mt-20">
          <div className="my-5">
            <h2 className="text-3xl leading-[4rem] uppercase font-ahle ahle-heading">
              جماعتی خبریں
            </h2>
          </div>
          <div className="md:flex gap-6">
            <div className="md:w-[40%] w-full overflow-hidden inline-block shadow-xl">
              {posts?.slice(0, 1).map((item: any, idx: number) => {
                return (
                  <div key={idx} className="relative h-[540px] w-full bg-black">
                    <Link href={`/blogs/${item.databaseId}`}>
                      <img
                        src={item?.featuredImage?.node?.mediaItemUrl}
                        alt="thumbnil"
                        width={400}
                        height={400}

                        className="w-full h-full object-cover opacity-60"
                      />
                    </Link>
                    <span className="bg-yellow text-black py-1 !pb-3 px-2 uppercase absolute md:top-5 top-0 md:right-5 right-0 text-sm">
                      {item?.categories?.nodes[0]?.name}
                    </span>
                    <span className="bg-black text-yellow py-1 !pb-3 px-2 uppercase absolute md:top-5 top-0 md:left-5 left-0 text-sm">
                      {ConvertDateIntoUrdu(item?.date)}
                    </span>
                    <div className="absolute bottom-0 md:p-5 p-2 bg-white w-full border-t-4 border-yellow">
                      <Link href={`/blogs/${item.databaseId}`} className="text-2xl font-ahle text-black">
                        {item?.title}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col mt-5 md:mt-0 justify-between gap-5 md:w-[60%] w-full">
              {posts?.slice(1, 4).map((item: any, idx: number) => {
                return (
                  <div key={idx} className={`group overflow-hidden bg-light-gray shadow-lg md:flex`}
                  >
                    <Link href={`/blogs/${item?.databaseId}`} className={`md:w-1/3`}>
                      <figure
                        className={`overflow-hidden relative md:w-full h-full`}
                      >
                        <img
                          src={item?.featuredImage?.node?.mediaItemUrl}
                          alt=""
                          width={400}
                          height={400}

                          className={`w-full md:h-full group-hover:scale-110 transition-all duration-300 ease-in-out object-cover h-[240px] sm:h-[190px]`}
                        />
                      </figure>
                    </Link>
                    <div
                      className={`bg-light-gray md:w-2/3 p-6 `}
                    >
                      <div className={``}>
                        <p className="capitalize text-light-blue text-sm">
                          <span className="uppercase">{ConvertDateIntoUrdu(item.date)}</span>
                          <span> - </span>
                          <span>By {item?.author?.node?.name}</span>
                        </p>
                        <Link href={`/blogs/${item?.databaseId}`}>
                          <h2
                            className={`text-[18px] mt-2 leading-[2.3rem] font-medium font-ahle `}
                          >
                            {item?.title}
                          </h2>
                        </Link>
                      </div>
                      <div className="mt-3 text-text leading-8 font-normal" dangerouslySetInnerHTML={{ __html: GetWordStr(item?.excerpt) }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className='container px-4 md:px-10 mx-auto'>
        <div className="my-10 md:my-20 md:mt-20">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5 ">
            <div className=" border border-light-gray">
              <div className="bg-[#012f1e] p-5 flex gap-3 items-center">
                <img src="/images/iqra-icon.png" alt="iqra-icon.png" width={50} height={50} />
                <h2 className="text-3xl leading-[4rem] uppercase font-ahle text-white">
                  روزانہ قرآن
                </h2>
              </div>
              <div className="p-5">
                {/* <p className="font-ahle text-lg text-gray-600 dark:text-text">
                  <span>{HomeInfo.[0]?.title}: </span>
                  <span>{HomeInfo[0]?.dailyUpdatesInfo?.description}</span>
                </p>

                <p className="font-ahle text-lg text-gray-600 dark:text-text mt-5">
                  {HomeInfo[0]?.dailyUpdatesInfo?.source}
                </p> */}
              </div>
            </div>
            <div className=" border border-light-gray">
              <div className="bg-[#012f1e] p-5 flex gap-3 items-center">
                <img src="/images/iqra-icon.png" alt="iqra-icon.png" width={50} height={50} />
                <h2 className="text-3xl leading-[4rem] uppercase font-ahle text-white">
                  روزانہ کی حدیث
                </h2>
              </div>
              {/* <div className="p-5">
                <p className="font-ahle text-lg text-gray-600 dark:text-text">
                  <span>{HomeInfo[0]?.title}: </span>
                  <span>{HomeInfo[0]?.dailyUpdatesInfo?.description}</span>
                </p>
                <p className="font-ahle text-lg text-gray-600 dark:text-text mt-5">۔ {HomeInfo[0]?.dailyUpdatesInfo?.source}</p>
              </div> */}
            </div>
            <div className=" border border-light-gray">
              <div className="bg-[#012f1e] p-5 flex gap-3 items-center">
                <img src="/images/iqra-icon.png" alt="iqra-icon.png" width={50} height={50} />
                <h2 className="text-3xl leading-[4rem] uppercase font-ahle text-white">
                  اقوالِ سلف
                </h2>
              </div>
              <div className="px-5">
                <ul className="divide-y divide-border ">
                  {/* <li className="py-3">
                    <p className="font-ahle text-lg text-pure">
                      <span>{HomeInfo[0]?.title}: </span>
                      <span>{HomeInfo[0]?.dailyUpdatesInfo?.description}</span>
                    </p>
                    <p className="font-ahle text-lg text-pure dark:text-text mt-5">۔ {HomeInfo[0]?.dailyUpdatesInfo?.source}</p>
                  </li> */}
                </ul>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[url('/images/tabdeeli.jpg')] bg-center bg-cover bg-black/50 bg-blend-multiply">
        <section className='container px-4 md:px-10 mx-auto'>
          <div className="flex md:flex-row flex-col gap-5">
            <div className="md:w-1/4 w-full">
            </div>
            <div className="md:w-3/4 w-full flex md:flex-row flex-col gap-5 items-center justify-end">
              <div>
                <h2 className="text-2xl uppercase text-white font-ahle mb-3">
                  اس ملک میں حقیقی تبدیلی کے لئیے
                </h2>
                <h3 className="text-5xl uppercase text-white font-ahle">
                  مرکزی جمعیت اہل حدیث کے ووٹر بنیں
                </h3>
              </div>
              <div>
                <Link href="/join-us"
                  className="bg-yellow text-pure hover:bg-light-blue border-yellow hover:text-white border hover:border-light-blue text-xl px-8 py-2.5 uppercase">
                  ووٹر بنیں
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className='container px-4 md:px-10 mx-auto'>
        <section className="my-10 md:my-16 md:mt-16">
          <div className="">
            <div className="my-20">
              <div className="my-5">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl leading-[4rem] uppercase font-ahle ahle-heading">
                    تازہ ترین وڈیوز
                  </h2>
                  <Link
                    href="/videos"
                    className="p-2 px-4 rounded-md bg-light-gray active:scale-105 hover:underline hover:shadow-lg"
                  >
                    وڈیو وزٹ  کریں
                  </Link>
                </div>
              </div>
              <VideosGallery videosData={videosData} />
            </div>

            <div>
              <div className="my-5">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl leading-[4rem] uppercase font-ahle ahle-heading">
                    کتب لائبریری
                  </h2>
                  <Link
                    href="/books-library"
                    className=" p-2 px-4 rounded-md bg-light-gray active:scale-105 hover:underline hover:shadow-lg"
                  >
                    لائبریری وزٹ کریں
                  </Link>
                </div>
              </div>
              <div className="">
                <BooksSection booksData={booksData} />
              </div>
            </div>
          </div >
        </section >
      </section>
      <section className='container px-4 md:px-10 mx-auto'>
        <div className="my-20">
          <div className="my-14">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl leading-[4rem] uppercase font-ahle ahle-heading">
                مشہور شخصیات
              </h2>
              <Link
                href="/ulma-ikram"
                className="p-2 px-4 rounded-md bg-light-gray active:scale-105 hover:underline hover:shadow-lg"
              >
                مشہور شخصیات
              </Link>
            </div>
          </div>
          <Team membersData={membersData} />
        </div>
      </section>
    </>
  );
};



export const getServerSideProps: GetServerSideProps = async () => {
  const [posts, homepage, videos, books, members] = await Promise.all([
    apolloClient.query({ query: AllPosts }),
    apolloClient.query({ query: HomePage }),
    apolloClient.query({ query: Videos }),
    apolloClient.query({ query: Books }),
    apolloClient.query({
      query: Members,
      variables: {
        first: 10,
      },
    }),
  ]);
  const postData = posts?.data?.posts?.nodes
  const home = homepage.data.page.home_info
  const videosData = videos?.data?.videos?.nodes
  const booksData = books?.data?.books?.edges
  const membersData = members?.data?.members?.nodes
  return {
    props: {
      postData, home, videosData, booksData, membersData
    },
  };
}