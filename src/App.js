import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header';
import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import NotFound from './pages/NotFound'

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
  uri: 'http://localhost:5000/graphql',
  cache
})

function App () {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <WagmiConfig client={client}>
          <div className="App">
            <Router>

              <Header></Header>
              <div className="container">
                <Routes>
                  <Route path='/' element={<Home />}></Route>
                </Routes>
              </div>
            </Router>
          </div>
        </WagmiConfig>
      </ApolloProvider>
    </>
  );
}

export default App;
