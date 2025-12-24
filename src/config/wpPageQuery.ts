import { gql } from "@apollo/client";
import client from "@/config/client"; // make sure you have Apollo setup here

export const PAGE_QUERY = gql`
  query PAGE_QUERY($id: ID = "cabinet") {
    page(id: $id, idType: URI) {
      slug
      id
      title
      date
      content
      databaseId
      featuredImage {
          node {
            mediaItemUrl
          }
        }
      template {
        templateName
      }
      flexiblePage {
        flexiblePage {
          ... on Page_Flexiblepage_FlexiblePage_TextOnly {
            editor
            fieldGroupName
          }
          ... on Page_Flexiblepage_FlexiblePage_ImageGallery {
          fieldGroupName
           heading
            imageGallary {
              mediaItemUrl
            }
          }
          ... on Page_Flexiblepage_FlexiblePage_VideoGallery {
          fieldGroupName
           heading
            videoGallery {
              videoLink
            }
          }
        }
      }
    }
  }
`;

export async function getPageData(id: string) {
  try {
    const { data } = await client.query({
      query: PAGE_QUERY,
      variables: { id },
    });
    return data?.page || null;
  } catch (error: any) {
    console.error("Error fetching WP page:", error.message);
    return null;
  }
}
