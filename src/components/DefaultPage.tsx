import SeoMeta from "@/components/seo";
import PageBanner from "@/components/banner";

interface GenericPageProps {
  pageData: any;
  defaultImage?: string;
}

export default function DefaultPage({
  pageData,
  defaultImage,
}: GenericPageProps) {
  if (!pageData) return <p>Page not found</p>;

  return (
    <>
      <SeoMeta
        title={pageData.seo?.title || pageData.title}
        description={pageData.seo?.metaDesc || ""}
        url={pageData.slug}
      />

      <main>
        <PageBanner
          title=""
          subTitle=""
          image={
            pageData.featuredImage?.node?.sourceUrl ||
            defaultImage ||
            "/images/slid1.jpeg"
          }
          buttontext=""
          buttonLink=""
        />

        {/* ✅ Main page content (if exists) */}
        {pageData.content && (
          <section
            className="container px-4 md:px-10 mx-auto my-10 md:my-20"
            dangerouslySetInnerHTML={{ __html: pageData.content }}
          />
        )}
      </main>
    </>
  );
}
