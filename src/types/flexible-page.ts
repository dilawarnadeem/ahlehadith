export interface TextBlock {
  fieldGroupName: "Page_Flexiblepage_FlexiblePage_TextOnly";
  editor: string;
}

export interface ImageGalleryBlock {
  fieldGroupName: "Page_Flexiblepage_FlexiblePage_ImageGallery";
   heading: string;
  imageGallary: {
    mediaItemUrl: string;
  }[];
}

export interface VideoGalleryBlock {
  fieldGroupName: "Page_Flexiblepage_FlexiblePage_VideoGallery";
  heading: string;
  videoGallery: {
    videoLink: string;
  }[];
}

export type FlexibleBlock = TextBlock | ImageGalleryBlock | VideoGalleryBlock;

export interface FlexiblePageData {
  title: string;
  slug: string;
  content?: string | null;
  flexiblePage: {
    flexiblePage: FlexibleBlock[];
  };
}
