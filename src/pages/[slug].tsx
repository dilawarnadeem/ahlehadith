import { GetServerSideProps } from "next";
import { getPageData } from "@/config/wpPageQuery";
import GenericPage from "@/components/GenericPage";

interface PageProps {
  pageData: any | null;
}

export default function Page({ pageData }: PageProps) {

  console.log("Page Data:", pageData.flexiblePage);



  if (!pageData) return <p className="text-center py-10">Page not found </p>;
  return <GenericPage pageData={pageData} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { slug: string };

  try {
    const page = await getPageData(slug);

    // If no page found
    if (!page) {
      return { notFound: true };
    }

    return {
      props: {
        pageData: page,
      },
    };
  } catch (error) {
    console.error("Error fetching page:", error);
    return {
      props: {
        pageData: null,
      },
    };
  }
};
