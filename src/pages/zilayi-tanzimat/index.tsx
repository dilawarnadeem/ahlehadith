import PageBanner from "@/components/banner";
import React from "react";
import SeoMeta from "@/components/seo";

import { gql } from "@apollo/client";

import client from "@/config/client";

const SINGLE_PAGE_QUERY = gql`
  query singleArticle($id: ID = "") {
    page(id: $id, idType: URI) {
      id
      title
      date
      content
      databaseId
    }
  }
`;

export async function getServerSideProps() {
  try {
    const { data } = await client.query({
      query: SINGLE_PAGE_QUERY,
      variables: { id: "zilayi-tanzimat" }, // replace with dynamic ID if needed
    });

    return {
      props: {
        pageData: data.page,
      },
    };
  } catch (error:any) {
    console.error("Error fetching page data:", error.message);
    return {
      notFound: true,
    };
  }
}


const Page = ({pageData}:any) => {
  return (
    <>
      <SeoMeta title="ذیلی تنظیمات" description="مرکزی جمعیت اہل حدیث پاکستان اہل حدیث کی نمائندہ مذہبی و سیاسی جماعت ہے" url="zilayi-tanzimat" />
      <main>
        <PageBanner
          title="ذیلی تنظیمات"
          subTitle=""
          image="/images/banner/zilayntanzeem.jpg"
          buttontext=""
          buttonLink=""
        />
        <section className='container px-4 md:px-10 mx-auto'>
          <div className='my-10 md:my-20 md:mt-20 file:grid gap-10'>
            <div
              className="prose max-w-none font-ahle text-gray-600 dark:text-text"
              dangerouslySetInnerHTML={{ __html: pageData?.content }}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
