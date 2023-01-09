import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

// import '@rainbow-me/rainbowkit/styles.css';
import { useDispatch } from 'react-redux'
import { provider } from '../store/reducer'

import AccountInfoBar from './AccountInfoBar'


export default function WalletConnect () {

  const { address } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  const dispatch = useDispatch()
  connect && dispatch({ type: 'ACCOUNT_LOADED', connection: address })

  function connectClient () {
    return connect()
  }

  function disConnectClient () {
    return disconnect()
  }

  // console.log(address, connect)

  return (
    <div className="row d-flex flex-row">
      {address ? (AccountInfoBar(address, disConnectClient)) : (<button className='btn btn-primary' onClick={connectClient}>Connect Wallet</button>)}
    </div>
  )
}