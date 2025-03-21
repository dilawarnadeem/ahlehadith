import React, { useState } from 'react'
import { BsPlayCircle } from 'react-icons/bs';
import ModelBox from './modelbox';
import { getYouTubeThumbnail } from '@/utils';

export const VideosGallery = ({ videosData, type }: any) => {   
    console.log("🚀 ~ VideosGallery ~ videosData:", videosData)
    const [modalIsOpen, setIsOpen] = useState(false);

    const [URL, setURL] = useState("");
    const OpenModelBox = (video:any) => {
        const vURL = video?.videoInfo?.videoUrl
        setURL(vURL);
        setIsOpen(true);
    };

    // if (type) {
    //     videosData = videosData.filter((item: { videoTypes: { nodes: any[]; }; }) => item?.videoTypes.nodes.some((t: { name: any; }) => t.name === type))
    // }

    return (
        <>
            <section className="md:flex gap-6 max-h-[600px]">
                <div className="rounded-xl relative md:w-[77%] w-full overflow-hidden inline-block border-[10px] border-white dark:border-transparent shadow-xl">
                    <img
                        src={getYouTubeThumbnail(videosData[0]?.videoInfo?.videoUrl)}
                        alt="thumbnil"
                        width={900}
                        height={900}
                        className="w-full h-full object-cover"
                    />
                    <BsPlayCircle
                        onClick={() =>
                            OpenModelBox(videosData[0])
                        }
                        className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-yellow active:scale-105 animate-pulse text-7xl"
                    />
                </div>
                <div className="flex md:flex-col mt-5 md:mt-0 justify-between gap-5 md:w-[23%] w-full">
                    {videosData?.slice(0, 3).map((item: any, idx: number) => {
                        return (
                            <div
                                key={idx}
                                className="rounded-xl relative md:rounded-xl h-[33%] border-[6px] border-white dark:border-transparent shadow-xl overflow-hidden inline-block"
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
    )
}
