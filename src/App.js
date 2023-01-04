import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/assets/Header';
import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'


const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
})

function App () {
  return (
    <>
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
    </>
  );
}

export default App;
