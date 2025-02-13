import { ApolloClient, InMemoryCache } from '@apollo/client';
const URL = `${process.env.WORDPRESS_URL}/graphql`

const apolloClient = new ApolloClient({
  uri: "http://ant.a59.mywebsitetransfer.com/ahlehadith/graphql",
  cache: new InMemoryCache(),
});

export default apolloClient;