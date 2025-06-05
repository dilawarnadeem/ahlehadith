import React, { useState } from "react";
import Layout from "./layout";

const Tabs = ({ intro }: any) => {
  console.log(intro);

  return (
    <section className="bg-light-gray py-10 md:py-20" id="history">
      <Layout>
        <div className="flex md:flex-row flex-col justify-between gap-8 items-center">
          <div className="md:w-1/3 w-full">
            <h2 className="text-4xl leading-[4rem] font-ahle">
              مرکزی جمعیت اہل حدیث
            </h2>
          </div>
          <div className="md:w-2/3 w-full">
            <ul className="flex justify-between border-b">
              <li
                className={`hover:bg-[#012f1e] hover:text-white lg:p-4 inline-block font-ahle md:text-xl text-sm text-center sm:p-2 relative tab bg-[#012f1e] text-white linkbtn}`}
              >
                مرکزیہ تعارف
              </li>
            </ul>
          </div>
        </div>

        <div className="items-center font-ahle mt-7 ">
          <div className="flex md:flex-row flex-col justify-between gap-8">
            <div className="md:w-1/3 w-full">
              <div className="">
                <img className="" src={intro?.image.mediaItemUrl} alt="img" />
              </div>
              <div className=" bg-[#012f1e] text-white py-5 px-3">
                <h6 className="mb-3 text-xl font-ahle">{intro?.designation}</h6>
                <h4 className="mb-3 text-2xl font-ahle">{intro?.leader}</h4>
              </div>
            </div>

            <div
              className="md:w-2/3 w-full font-ahle text-base leading-[2.3rem] text-gray-600 dark:text-text mb-3"
              dangerouslySetInnerHTML={{ __html: intro?.description }}
            />
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default Tabs;
