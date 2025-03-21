import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const BooksSection = ({ booksData }: any) => {
    return (
        <div className='grid md:grid-cols-4 grid-cols-1 gap-6'>
            {booksData?.slice(0, 4)?.map((item: any, idx: any) => {

                return (
                    <div key={idx} className='h-[450px] relative before:content-[" "] before:absolute before:top-3 before:bottom-3 before:left-3 before:right-3 before:border-white before:border group'>
                        <div className='h-full w-full '>
                            <img src={item?.node?.featuredImage?.node?.mediaItemUrl}
                                alt='image'
                                height={300}
                                width={300}
                                className='h-full w-full z-[1] object-cover ' />
                            <div className='absolute bottom-9 right-5 z-[1]'>
                                <Link href={`${item?.node?.booksInfo?.downloadFile?.mediaItemUrl}`} target="_blank"
                                    className="bg-yellow text-black group-hover:bg-light-blue group-hover:text-white text-base px-8 py-2.5 uppercase ">
                                    ڈاؤن لوڈ
                                </Link>
                            </div>
                        </div>
                        <div className="overlay bg-black/30 -z-0 absolute top-0 left-0 h-full w-full before:content-[' '] before:absolute before:top-3 before:bottom-3 before:left-3 before:right-3 before:border-yellow before:border-y before:scale-x-0 group-hover:before:scale-x-100 before:transform before:transition before:duration-700 before:ease-in-out 
                         after:content-[' '] after:absolute after:top-3 after:bottom-3 after:left-3 after:right-3 after:border-yellow after:border-x after:scale-y-0 group-hover:after:scale-y-100 after:transform after:transition after:duration-700 after:ease-in-out "
                        ></div>
                    </div>
                );
            })}
        </div>
    )
}

export default BooksSection