import SeoMeta from "@/components/seo";
import PageBanner from "@/components/banner";
import Image from "next/image";
import { getYouTubeThumbnail } from "@/utils";

interface GenericPageProps {
  pageData: any;
  defaultImage?: string;
}

export default function FlexiblePage({
  pageData,
  defaultImage,
}: GenericPageProps) {
  if (!pageData) return <p>Page not found</p>;
  const flexibleBlocks = pageData?.flexiblePage?.flexiblePage || [];

  return (
    <>
      <SeoMeta
        title={pageData.seo?.title || pageData.title}
        description={pageData.seo?.metaDesc || ""}
        url={pageData.slug}
      />

      <main>
        <PageBanner
          title={pageData.title}
          subTitle=""
          image={
            pageData.featuredImage?.node?.sourceUrl ||
            defaultImage ||
            "/images/slid1.jpeg"
          }
          buttontext=""
          buttonLink=""
        />

        {/* ✅ Flexible Page Sections */}
        {flexibleBlocks.length > 0 && (
          <section className="container px-4 md:px-10 mx-auto my-10 md:my-20 space-y-12">
            {flexibleBlocks.map((block: any, index: number) => {
              switch (block.fieldGroupName) {
                case "Page_Flexiblepage_FlexiblePage_TextOnly":
                  return (
                    <div
                      key={index}
                      className="prose max-w-none text-gray-800 dark:text-gray-200"
                      dangerouslySetInnerHTML={{ __html: block.editor }}
                    />
                  );

                case "Page_Flexiblepage_FlexiblePage_ImageGallery":
                  return (
                    <>
                      <h2>{block.heading}</h2>
                      <div
                        key={index}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                      >
                        {block.imageGallary?.map((img: any, i: number) => (
                          <Image
                            key={i}
                            src={img.mediaItemUrl}
                            alt={`Gallery image ${i + 1}`}
                            width={600}
                            height={400}
                            className="rounded-lg object-cover"
                          />
                        ))}
                      </div>
                    </>
                  );

                case "Page_Flexiblepage_FlexiblePage_VideoGallery":
                  return (
                    <>
                      <h2>{block.heading}</h2>
                      <div
                        key={index}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                      >
                        {block.videoGallery?.map((video: any, i: number) => {
                          const thumb = getYouTubeThumbnail(video.videoLink);
                          return (
                            <a
                              key={i}
                              href={video.videoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative aspect-video rounded-lg overflow-hidden group"
                            >
                              <img
                                src={thumb || ""}
                                alt="Video thumbnail"
                                className="w-full h-full object-cover group-hover:opacity-80 transition"
                              />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="bg-black bg-opacity-60 text-white rounded-full px-3 py-1 text-sm">
                                  ▶
                                </span>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </>
                  );

                default:
                  return null;
              }
            })}
          </section>
        )}
      </main>
    </>
  );
}
