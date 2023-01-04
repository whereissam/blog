import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import Blockies from 'react-blockies'
// import '@rainbow-me/rainbowkit/styles.css';

export default function WalletConnect () {

  const { address } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  return (
    <div className="d-flex justify-content-between">
      <div>
        {address ? (<div>
          {address.slice(0, 5) + '...' + address.slice(38, 42)}
          <Blockies
            seed={address}
            size={10}
            scale={3}
            color="#2187D0"
            bgColor="#F1F2F9"
            spotColor="#767F92"
            className="identicon"
          />
          <button className='btn btn-primary' onClick={() => disconnect()}>Disconnect</button>
        </div>) : (<button className='btn btn-primary' onClick={() => connect()}>Connect Wallet</button>)}
      </div>
    </div>
  )
}