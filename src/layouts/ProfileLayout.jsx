import { Outlet, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";

import ProfileNav from '../components/ProfileNav'
import {
  GET_PROFILE_By_Address
} from "../components/queries/profileQueries";

import { useQuery } from "@apollo/client";

export default function ProfileLayout () {

  const address = useSelector(state => state.provider.connection)
  const { id } = useParams()
  const dispatch = useDispatch()

  const { refetch, loading, error, data } = useQuery(GET_PROFILE_By_Address
    , { variables: { address: id } })

  if (loading)
    return (
      <div>
        <Spinner />
      </div>
    )
  if (error) return <p>Something Went Wrong</p>

  if (address) {
    refetch()
  }

  let show
  if (data.clientSearchByAddress.address === address) {
    show = true
  }

  data && data.clientSearchByAddress && dispatch({ type: 'PROVIDER_LOADED', address: data.clientSearchByAddress.id })

  return (
    <>
      {
        address && show && <ProfileNav></ProfileNav>
      }
      <Outlet />
    </>
  )
}
