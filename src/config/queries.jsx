import { gql } from '@apollo/client';

export const AllPosts = gql`
  query ALLPOSTS {
    posts {
      nodes {
        excerpt
        slug
        id
        title
        date
        content
        databaseId
        categories {
          nodes {
            slug
            name
          }
        }
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`;

export const HomePage = gql`
  query HomePage($id: ID = "home") {
  page(id: $id, idType: URI) {
    slug
    id
    title
    date
    content
    databaseId
    home_info {
      introduction {
        description
        designation
        leader
        image {
          mediaItemUrl
        }
      }
      aqwalSalaf {
        description
        title
      }
      dailyHadees {
        refernece
        hadeesTranslations
        hadeesArabic
      }
      dailyQuran {
        refernece
        quraniAyatTranslations
        quranAyat
      }
    }
  }
}
`;



export const Videos = gql`
  query videos {
    videos {
      nodes {
        videoInfo {
          videoUrl
        }
        videoTypes {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`;

export const Books = gql`
  query books {
    books(first: 20) {
      edges {
        node {
          booksInfo {
            downloadFile
          }
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`;

export const Articles = gql`
  query articles($terms: [String] = "") {
    articles(
      where: {
        taxQuery: {
          relation: AND
          taxArray: { terms: $terms, taxonomy: ARTICLECATEGORY, field: SLUG }
        }
      }
    ) {
      nodes {
        date
        content
        slug
        databaseId
        title
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`;

export const Members = gql`
  query NewQuery($first: Int) {
    members(first: $first) {
      nodes {
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        title
      }
    }
  }
`;

export const VideoType = gql`
  query videoTypes {
    videoTypes(first: 100) {
      nodes {
        name
        slug
      }
    }
  }
`;


export const VideoByType = gql`
  query VideoByTypeSlug($id: ID = "rallies") {
  videoType(id: $id, idType: SLUG) {
    videos {
      nodes {
        title
          videoInfo {
            videoUrl
          }
      }
    }
  }
}
`;


export const VideoByTypes = gql`
query Videos {
  videoTypes {
    nodes {
      name
      videos {       
        nodes {
        title
          videoInfo {
            videoUrl
          }
        }
      }
    }
  }
}
  `;



export const PictureData = gql`
  query PictureData($id: ID!) {
    picture(id: $id, idType: SLUG) {
      title
      pictureInfo {
        gallery {
          mediaItemUrl
          altText
        }
      }
    }
  }
`;

export const videosTypes = gql`
query videosTypes {
  videoTypes {
    nodes {
      name
      videos {
        nodes {
           videoInfo {
            videoUrl
          }
          title
        }
      }
    }
  }
}
`;

export const singlePost = gql`
  query singlePost($id: ID = "") {
    post(id: $id, idType: DATABASE_ID) {
      excerpt
      slug
      id
      title
      date
      content
      databaseId
      categories {
        nodes {
          slug
          name
        }
      }
      author {
        node {
          name
        }
      }
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
  }
`;


export const singleArticle = gql`
  query singleArticle($id: ID = "191") {
    article(id: $id, idType: DATABASE_ID) {    
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
    }
  }
`;
