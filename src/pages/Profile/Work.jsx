import { useQuery } from '@apollo/client'
import Spinner from '../../components/Spinner'
import { FaEdit } from 'react-icons/fa'
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  GET_PROFILE_By_Address
} from "../../components/queries/profileQueries"

export default function Work () {

  const address = useSelector(state => state.provider.connection)
  const dispatch = useDispatch()
  const { refetch, loading, error, data } = useQuery(GET_PROFILE_By_Address
    , { variables: { address } })

  console.log(data)

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

  if (data) {
    var { clientSearchByAddress } = data
    var { project } = clientSearchByAddress
  }



  const postList = data && project?.map(({ id, title, body }) => {
    return (
      <ul className='list-group mt-2' key={id}>
        <li key={id} className="collection-item list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1"><Link to={`/posts/${id}`}>{title}</Link></h5>
            <small>3 days ago</small>
          </div>
          <div className="d-flex w-100 justify-content-between mt-2">
            <p>{body}</p>

            <a className='btn btn-light' href={`/profile/${clientSearchByAddress.address}/article/${id}`}>
              <FaEdit></FaEdit>
            </a>

          </div>

        </li>
      </ul>
    );
  });

  return (
    <>
      {
        address && <div>{postList}</div>
      }

    </>
  )
}
