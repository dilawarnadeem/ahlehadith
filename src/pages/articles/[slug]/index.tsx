import Aside, { SideBarHeading } from "@/components/aside";
import Footer from "@/components/footer";
import PageBanner from "@/components/banner";
//import PostDesign from '@/components/post-design-2';
import apolloClient from "@/config/client";
import { AllPosts, singlePost } from "@/config/queries";
import { PostMokeData } from "@/const/post";
import Image from "next/image";
import React from "react";
import { GetServerSideProps } from "next";


export default function PostSlug({ post, posts }: any) {



  return (
    <>
      <PageBanner
        title={post?.title}
        subTitle={post?.excerpt}
        image={post?.featuredImage?.node?.mediaItemUrl}
      />
      <section className='container px-4 md:px-10 mx-auto'>
        <div className="lg:flex gap-10 my-10">
          <section className="lg:w-[73%]">
            <div className="flex items-center justify-start gap-2">
              <div className="p-[5px] bg-light-blue group-hover:bg-light-blue" />
              <h2 className="capitalize text-sm text-gray-400 group-hover:text-light-blue cursor-pointer ">
                {post?.categories?.nodes[0]?.name}
              </h2>
            </div>
            <h2 className="text-xl md:text-2xl capitalize mt-2 font-ahle font-bold">{post?.title}</h2>
            <figure className="relative">
              <Image
                src={post?.featuredImage?.node?.mediaItemUrl}
                alt="featuredImage"
                width={850}
                height={460}
                className="w-full mt-6"
              />
            </figure>
            <div className="mt-8 text-text leading-8 tracking-wide" dangerouslySetInnerHTML={{ __html: post?.content }} />

            <SideBarHeading long={true} className="mt-20"> Related Post </SideBarHeading>
            <div className="grid gap-6 md:grid-cols-3 my-10">
              {/* {posts?.slice(0, 3).map((post:any, idx:number) => {
                return (
                  <PostDesign post={post} idx={idx} layout={3} key={idx} />
                );
              })} */}
            </div>


          </section>

          <Aside
            aboutAuthor={true}
            social={true}
            newsletter={true}
            latestPost={posts.slice(0, 5)}
            latestCategories={PostMokeData}
            advertisement={true}
          />
        </div>
      </section>

      <Footer />
    </>
  );
};



export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { slug } = query;

  const [postres, postsRes] = await Promise.all([
    apolloClient.query({
      query: singlePost,
      variables: {
        id: slug,
      }
    }),
    apolloClient.query({
      query: AllPosts
    }),
  ]);
  const post = postres?.data?.post
  const posts = postsRes?.data?.posts.nodes

  return { props: { post, posts } }
}