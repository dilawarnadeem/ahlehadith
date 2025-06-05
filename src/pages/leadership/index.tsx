import PageBanner from "@/components/banner";
import React from "react";
import SeoMeta from "@/components/seo";

import { gql } from "@apollo/client";

import client from "@/config/client";

const SINGLE_PAGE_QUERY = gql`
  query singlePage($id: ID = "leadership") {
    page(id: $id, idType: URI) {
      slug
      id
      title
      date
      content
      databaseId
      leadership {
        leaderShip {
          title
          content
          image {
            mediaItemUrl
          }
        }
      }
    }
  }
`;

export async function getServerSideProps() {
  try {
    const { data } = await client.query({
      query: SINGLE_PAGE_QUERY,
      variables: { id: "leadership" }, // replace with dynamic ID if needed
    });

    return {
      props: {
        pageData: data.page,
      },
    };
  } catch (error) {
    console.error("Error fetching page data:", error.message);
    return {
      notFound: true,
    };
  }
}

const Page = ({ pageData }: any) => {
  return (
    <>
      <SeoMeta
        title="قیادت"
        description="مرکزی جمعیت اہل حدیث پاکستان اہل حدیث کی نمائندہ مذہبی و سیاسی جماعت ہے"
        url="leadership"
      />

      <main>
        <PageBanner
          title="قیادت"
          subTitle=""
          image="/images/banner/leadership.jpg"
          buttontext=""
          buttonLink=""
          full
          className="!mt-12"
        />
        <section className="max-w-[1280px] px-4 md:px-10 mx-auto">
          <div className="items-center font-ahle my-10 md:my-20 md:mt-20 grid gap-10">
            {pageData?.leadership?.leaderShip?.map(
              (leader: any, index: number) => (
                <div key={index}>
                  <div className="mb-4 sticky top-12 xl:top-28 bg-white">
                    <h2 className="text-2xl sm:text-3xl uppercase font-ahle !leading-[80px]">
                      {leader.title}
                    </h2>
                  </div>
                  <div className="flex md:flex-row flex-col justify-between gap-8">
                    <div className="md:w-1/4 w-full">
                      <img
                        className=""
                        src={
                          leader.image?.mediaItemUrl ||
                          "/images/placeholder.jpg"
                        }
                        alt={leader.title}
                      />
                    </div>
                    <div className="md:w-3/4 w-full">
                      <div
                        className="font-ahle text-base text-gray-600 dark:text-text mb-3 leading-loose tracking-wider"
                        dangerouslySetInnerHTML={{ __html: leader.content }}
                      />
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
