import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { useSelector, useDispatch } from "react-redux";
// import '@rainbow-me/rainbowkit/styles.css';
// import { provider } from '../store/reducer'
import { useQuery } from '@apollo/client';
import {
  GET_PROFILE_By_Address
} from "../components/queries/profileQueries";
import AccountInfoBar from './AccountInfoBar'


export default function WalletConnect () {
  const dispatch = useDispatch()
  // const { refetch, loading, error, data } = useQuery(GET_PROFILE_By_Address
  //   , { variables: { address } })

  const { address } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  connect && dispatch({ type: 'ACCOUNT_LOADED', connection: address })

  function connectClient () {
    return connect()
  }

  function disConnectClient () {
    return disconnect()
  }

  // if (data) {
  //   var { clientSearchByAddress } = data
  //   var { project } = clientSearchByAddress
  // }

  // data && dispatch({ type: 'PROVIDER_LOADED', address: data.clientSearchByAddress.id })

  return (
    <div className="row d-flex flex-row">
      {address ? (AccountInfoBar(address, disConnectClient)) : (<button className='btn btn-primary' onClick={connectClient}>Connect Wallet</button>)}
    </div>
  )
}