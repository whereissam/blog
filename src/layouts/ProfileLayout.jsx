import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ProfileNav from '../components/ProfileNav'
import { GET_PROFILE } from "../components/queries/profileQueries";
import { useQuery } from "@apollo/client";

export default function RootLayout () {

  const address = useSelector(state => state.provider.connection)
  const dispatch = useDispatch()
  const { refetch, loading, error, data } = useQuery(GET_PROFILE, { variables: { address } })
  if (address) {
    // console.log(address)
    refetch()
  }

  data && console.log(data.clientSearchByAddress.id)
  // console.log(data.clientSearchByAddress)
  data && dispatch({ type: 'PROVIDER_LOADED', address: data.clientSearchByAddress.id })


  return (
    <>
      <ProfileNav></ProfileNav>
      <Outlet />
    </>
  )
}
