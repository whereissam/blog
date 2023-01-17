import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";

import ProfileNav from '../../components/ProfileNav'
import {
  GET_PROFILE_By_Address
} from "../../components/queries/profileQueries";

import { useQuery } from "@apollo/client";
import UserInfo from "../../components/UserInfo";

export default function PublicProfilePage () {

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

  if (data && data !== undefined && data.clientSearchByAddress !== null) {
    var { clientSearchByAddress } = data
    var { project } = clientSearchByAddress
  }

  data && data.clientSearchByAddress && dispatch({ type: 'PROVIDER_LOADED', address: data.clientSearchByAddress.id })

  const postList = data && project?.map(({ id, title, body }) => {
    return (
      <ul className='list-group mt-2' key={id}>
        <li key={id} className="collection-item list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1"><Link to={`/posts/${id}`}>{title}</Link></h5>
            <small>3 days ago</small>
          </div>
          <p>{body}</p>
        </li>
      </ul>
    );
  });


  return (
    <>
      <UserInfo client={clientSearchByAddress} />
      <div>{postList}</div>
    </>
  )
}
