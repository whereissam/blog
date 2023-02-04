import Header from "../components/Header"
import { Outlet, NavLink } from "react-router-dom";
import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'


const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
})

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge (existing, incoming) {
            return incoming
          }
        },
        projects: {
          merge (existing, incoming) {
            return incoming
          }
        }
      }
    }
  }
})

const apolloClient = new ApolloClient({
  uri: 'https://blog-server-production.up.railway.app/graphql',
  cache
})

export default function RootLayout () {
  return (
    <ApolloProvider client={apolloClient}>
      <WagmiConfig client={client}>
        <div className='root-layout'>
          <Header></Header>
          <div className="container">
            <Outlet />
          </div>
        </div>
      </WagmiConfig>
    </ApolloProvider>
  )
}
