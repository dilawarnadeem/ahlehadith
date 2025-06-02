import Footer from "@/components/footer";
import PageBanner from "@/components/banner";
import apolloClient from "@/config/client";
import { singleArticle } from "@/config/queries";
import Image from "next/image";
import React from "react";
import { GetServerSideProps } from "next";

export default function PostSlug({ article }: any) {
  return (
    <>
      <PageBanner
        title={article?.title}
        image={article?.featuredImage?.node?.mediaItemUrl}
      />

      <section className="container px-4 md:px-10 mx-auto">
        <div className="lg:flex gap-10 my-10">
          <section className="lg:w-full">
            <div className="flex items-center justify-start gap-2">
              <div className="p-[5px] bg-light-blue group-hover:bg-light-blue" />
            </div>
            <h2 className="text-xl md:text-2xl capitalize mt-2 font-ahle font-bold">
              {article?.title}
            </h2>
            <figure className="relative">
              <Image
                src={article?.featuredImage?.node?.mediaItemUrl}
                alt="featuredImage"
                width={850}
                height={460}
                className="w-full mt-6"
              />
            </figure>
            <div
              className="mt-8 text-text leading-8 tracking-wide"
              dangerouslySetInnerHTML={{ __html: article?.content }}
            />
          </section>
        </div>
      </section>

      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params!;
  try {
    const { data } = await apolloClient.query({
      query: singleArticle,
      variables: {
        id: slug,
      },
    });

    return {
      props: {
        article: data?.article || null,
      },
    };
  } catch (error) {
    console.error("Error fetching article:", error);
    return {
      notFound: true,
    };
  }
};
