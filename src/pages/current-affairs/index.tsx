import React from "react";
import apolloClient from "../../config/client";
import { Articles, Members } from "../../config/queries";
import PageBanner from "../../components/banner";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { ConvertDateIntoUrdu, GetWordStr } from "@/utils";
import SeoMeta from "@/components/seo";

export default function CurrentAffairs({ article_data }: any) {
  // const [modalIsOpen, setIsOpen] = useState(false);
  // const [URL, setURL] = useState('');
  // const OpenModelBox = (image) => {
  //     setURL(image)
  //     setIsOpen(true);
  // }

  return (
    <>
      <SeoMeta
        title="حالات حاظرہ خاص مضامین"
        description="مرکزی جمعیت اہل حدیث پاکستان اہل حدیث کی نمائندہ مذہبی و سیاسی جماعت ہے"
        url="current-affairs"
      />

      <main>
        <PageBanner
          title="علمائےکرام/معروف شخصیات"
          subTitle=""
          image="/images/banner/ulma.jpg"
          buttontext=""
          buttonLink=""
        />
        <section className="relative blogs">
          <div className="container px-4 md:px-10 mx-auto">
            <div className="my-10 md:my-20 md:mt-20 file:grid gap-10">
              <div className="flex flex-col mt-5 md:mt-0 justify-between gap-5 md:w-[60%] w-full">
                {article_data?.map((item: any, idx: number) => {
                  return (
                    <div
                      key={idx}
                      className={`group overflow-hidden bg-light-gray shadow-lg md:flex`}
                    >
                      <Link
                        href={`/articles/${item?.databaseId}`}
                        className={`md:w-1/3`}
                      >
                        <figure
                          className={`overflow-hidden relative md:w-full h-full`}
                        >
                          <Image
                            src={item?.featuredImage?.node?.mediaItemUrl}
                            alt=""
                            width={400}
                            height={400}
                            className={`w-full md:h-full group-hover:scale-110 transition-all duration-300 ease-in-out object-cover h-[240px] sm:h-[190px]`}
                          />
                        </figure>
                      </Link>
                      <div className={`bg-light-gray md:w-2/3 p-6 `}>
                        <div className={``}>
                          <p className="capitalize text-light-blue text-sm">
                            <span className="uppercase">
                              {ConvertDateIntoUrdu(item.date)}
                            </span>
                            <span> - </span>
                            <span>By {item?.author?.node?.name}</span>
                          </p>

                          <h2
                            className={`text-[18px] mt-2 leading-[2.3rem] font-medium font-ahle `}
                          >
                            <Link href={`/articles/${item?.databaseId}`}>
                              {item?.title}
                            </Link>
                          </h2>

                          <div
                            className={`text-[14px] mt-2 leading-[2.3rem] font-ahle `}
                            dangerouslySetInnerHTML={{ __html: item?.content }}
                          />
                        </div>
                        <div
                          className="mt-3 text-text leading-8 font-normal"
                          dangerouslySetInnerHTML={{
                            __html: GetWordStr(item?.excerpt),
                          }}
                        />
                        <Link href={`/articles/${item?.databaseId}`}>
                          Read More
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const [articles] = await Promise.all([
    apolloClient.query({
      query: Articles,
      variables: {
        terms: "current-affairs",
      },
    }),
  ]);
  const article_data = articles?.data?.articles?.nodes;

  return {
    props: {
      article_data,
    },
  };
};
