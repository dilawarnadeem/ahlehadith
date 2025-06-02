import { SideBarHeading } from "../../components/aside";
//import PostDesign from '../../components/post-design-2';
import apolloClient from "@/config/client";
import { AllPosts } from "@/config/queries";
import React from "react";
import { GetServerSideProps } from "next";
import SeoMeta from "@/components/seo";

export default function Blog({ postData }: any) {


  return (
    <>
      <SeoMeta title=" جماعتی خبریں " description="مرکزی جمعیت اہل حدیث پاکستان اہل حدیث کی نمائندہ مذہبی و سیاسی جماعت ہے" url="blogs" />

      <main>
        <section className="md:mt-28 sm:mt-14 mt-10 pt-3">
          {/* <Featured_News data={data.posts.nodes.slice(0,3)}/> */}
        </section>
        <section className='container px-4 md:px-10 mx-auto'>
          <div className="my-24">
            <SideBarHeading className="max-w-[18rem] mx-auto mb-12">
              جماعتی خبریں
            </SideBarHeading>
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
              {/* {postData?.map((post:any, idx:number) => {
              return (
                <PostDesign post={post} idx={idx} layout={2} key={idx} />
              );
            })} */}
            </div>
          </div>

        </section>
      </main>
    </>
  );
};




export const getServerSideProps: GetServerSideProps = async () => {
  const [posts] = await Promise.all([
    apolloClient.query({ query: AllPosts }),
  ]);
  const postData = posts?.data?.posts?.nodes

  if (!postData) {
    throw new Error('Failed to fetch data')
  }

  return { props: { postData } }
}