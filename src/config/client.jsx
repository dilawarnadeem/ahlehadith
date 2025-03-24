import { ApolloClient, InMemoryCache } from '@apollo/client';
const URL = `${process.env.WORDPRESS_URL}/graphql`
const apolloClient = new ApolloClient({
  uri: "https://zamzamwelfaretrust.com/ahlehadith/graphql",
  cache: new InMemoryCache(),
});

export default apolloClient;