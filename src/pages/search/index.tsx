import SeoMeta from "@/components/seo";
import apolloClient from "@/config/client";
import { SearchPost } from "@/config/queries";
import { ConvertDateIntoUrdu } from "@/utils";

import { GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";

const Search = ({ allPosts }: any) => {
  const router = useRouter();
  const q = router.query.q;

  return (
    <>
      <SeoMeta
        title={`${q} | Paigham TV`}
        url="/programs"
        description="Paigham TV is a satellite TV channel the objectives of which are preaching the true teachings of the Holy Quran and Sunnah "
      />

      <section className="pb-28 md:pt-20 bg-[#161F28] ">
        <div className="container px-3 mx-auto mb-12 text-white">
          Search: <h4 className="font-semibold text-2xl capitalize">{q}</h4>
        </div>
        <div className="container px-3 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 gap-y-3">
          {allPosts.length > 0 ? (
            allPosts?.map((item: any, idx: number) => (
              <div key={idx} className="relative h-[540px] w-full bg-black">
                <Link href={`/blog/${item.databaseId}`}>
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
                  {(item?.date)}
                </span>
                <div className="absolute bottom-0 md:p-5 p-2 bg-white w-full border-t-4 border-yellow">
                  <Link
                    href={`/blog/${item.databaseId}`}
                    className="text-2xl font-ahle text-black"
                  >
                    {item?.title}
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div>
              <h2 className="text-xl text-gray-400">
                Opps: <br /> Result Not Found.! Pease Search Again.
              </h2>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Search;

export const getServerSideProps = async ({ query }: any) => {
  const q = query.q;
  const [posts] = await Promise.all([
    apolloClient.query({
      query: SearchPost,
      variables: {
        search: q,
      },
    }),
  ]);
  const allPosts = posts.data.posts.nodes;
  return {
    props: {
      allPosts,
    },
  };
};
