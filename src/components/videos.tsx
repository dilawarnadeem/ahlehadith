import React, { useState } from "react";
import { BsPlayCircle } from "react-icons/bs";
import ModelBox from "./modelbox";
import { getYouTubeThumbnail } from "@/utils";

export const VideosGallery = ({ videosData, type }: any) => {
  console.log(videosData);
  const [modalIsOpen, setIsOpen] = useState(false);

  const [URL, setURL] = useState("");
  const OpenModelBox = (video: any) => {
    const vURL = video?.videoInfo?.videoUrl;
    setURL(vURL);
    setIsOpen(true);
  };

  // if (type) {
  //     videosData = videosData.filter((item: { videoTypes: { nodes: any[]; }; }) => item?.videoTypes.nodes.some((t: { name: any; }) => t.name === type))
  // }

  return (
    <>
      <section>
        <div className="grid md:grid-cols-4 mt-5 justify-between gap-5">
          {videosData?.map((item: any, idx: number) => {
            console.log(item);
            return (
              <div
                key={idx}
                className="rounded-xl relative md:rounded-xl  border-[6px] border-white dark:border-transparent shadow-xl overflow-hidden inline-block"
              >
                <img
                  src={getYouTubeThumbnail(item?.videoInfo?.videoUrl)}
                  alt="thumbnil"
                  width={360}
                  height={360}
                  className="w-full h-full object-cover"
                />
                <BsPlayCircle
                  onClick={() => OpenModelBox(item)}
                  className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-yellow active:scale-105 animate-pulse text-5xl"
                />
              </div>
            );
          })}
        </div>
      </section>

      {modalIsOpen && (
        <ModelBox
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          URL={URL}
          video={true}
        />
      )}
    </>
  );
};
