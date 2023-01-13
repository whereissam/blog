import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { useDispatch } from "react-redux";
import { useLazyQuery } from '@apollo/client';

import {
  GET_PROFILE_By_Address
} from "../components/queries/profileQueries";
import AccountInfoBar from './AccountInfoBar'

export default function WalletConnect () {
  const dispatch = useDispatch()

  const { address } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  connect && dispatch({ type: 'ACCOUNT_LOADED', connection: address })

  const [setQueryData, { loading, error, data }] = useLazyQuery(GET_PROFILE_By_Address, { variables: { address } })

  function connectClient () {
    setQueryData()
    return connect()
  }

  function disConnectClient () {
    return disconnect()
  }
  console.log(data)

  // if (data && data !== undefined && data.clientSearchByAddress !== null) dispatch({ type: 'PROVIDER_LOADED', address: data.clientSearchByAddress ? data.clientSearchByAddress.id : '' })
  data && dispatch({ type: 'PROVIDER_LOADED', address: data.clientSearchByAddress ? data.clientSearchByAddress.id : '' })

  return (
    <div className="row d-flex flex-row">
      {address ? (AccountInfoBar(address, disConnectClient, data)) : (<button className='btn btn-primary' onClick={connectClient}>Connect Wallet</button>)}
    </div>
  )
}