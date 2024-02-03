"use client"
import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ModelBox from "@/components/modelbox";
import Image from "next/image";


const Gallery_images = ({picturesData}) => {
  const columnsCountBreakPoints = { 200: 1, 280: 2, 900: 3 };
  const [modalIsOpen, setIsOpen] = useState(false);
  const [URL, setURL] = useState('');
  const OpenModelBox = (image) => {
    setURL(image)
    setIsOpen(true);
  }

  return (
    <>
      <div className="my-10">
        <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
          <Masonry columnsCount={3} gutter="20px">
            {picturesData?.pictureInfo?.gallery?.map((image,i) => (
              <figure key={i} className="p-1 hover:shadow-lg cursor-pointer">
                <Image src={image?.mediaItemUrl} alt={image?.altText} width={960} height={640} className="w-full rounded-xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" onClick={() => OpenModelBox(image?.mediaItemUrl)} />              </figure>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      {
        modalIsOpen && <ModelBox modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} URL={URL} />
      }
    </>
  );
};


export default Gallery_images;

