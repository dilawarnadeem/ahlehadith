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

export const UpdatesByCategoryHadees = gql`
  query UpdatesByCategory {
    updateType(id: "daily-hadees", idType: SLUG) {
      updates(first: 1, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          title
          dailyUpdatesInfo {
            source
            description
          }
        }
      }
    }
  }
`;

export const UpdatesByCategoryQuran = gql`
  query UpdatesByCategory {
    updateType(id: "daily-quran", idType: SLUG) {
      updates(first: 1, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          title
          dailyUpdatesInfo {
            source
            description
          }
        }
      }
    }
  }
`;

export const UpdatesByCategoryQoute = gql`
  query UpdatesByCategory {
    updateType(id: "daily-qoute", idType: SLUG) {
      updates(first: 1, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          title
          dailyUpdatesInfo {
            source
            description
          }
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

export const VideoByTypes = gql`
  query videoType($id: ID = "") {
    videoType(id: $id, idType: SLUG) {
      videos(first: 100) {
        nodes {
          videoInfo {
            videoUrl
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
