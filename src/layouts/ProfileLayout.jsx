import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

import ProfileNav from '../components/ProfileNav'
// import { GET_PROFILE } from "../components/queries/profileQueries";
import {
  GET_PROFILE_By_Address
} from "../components/queries/profileQueries";

import { useQuery } from "@apollo/client";

export default function ProfileLayout () {

  const address = useSelector(state => state.provider.connection)
  const dispatch = useDispatch()
  const { refetch, loading, error, data } = useQuery(GET_PROFILE_By_Address
    , { variables: { address } })

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
    console.log(data)
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
      {address && <ProfileNav></ProfileNav>}
      {!address && <><section className="vh-100 container mb-5" style={{ "backgroundColor": "#9de2ff" }}>
        <div className=" float-start py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div>
              <div className="card" style={{ "borderRadius": "15" }}>
                <div className="card-body p-4">
                  <div className="d-flex text-black">
                    {/* <div className="flex-shrink-0">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                  alt="Generic placeholder image" className="img-fluid"
                  style="width: 180px; border-radius: 10px;">
              </div> */}
                    <div className="flex-grow-1">
                      <p className="mb-2 pb-1" style={{ "color": "#2b2a2a" }}>{clientSearchByAddress.name}</p>
                      <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                        style={{ "backgroundColor": "#efefef" }}>
                        <div>
                          <p className="small text-muted mb-1">Articles</p>
                          <p className="mb-0">{clientSearchByAddress.project.length}</p>
                        </div>
                        {/* <div className="px-3">
                          <p className="small text-muted mb-1">Followers</p>
                          <p className="mb-0">976</p>
                        </div>
                        <div>
                          <p className="small text-muted mb-1">Following</p>
                          <p className="mb-0">8.5</p>
                        </div> */}
                      </div>
                      <div className="d-flex pt-1">
                        {/* <button type="button" className="btn btn-outline-primary me-1 flex-grow-1">Chat</button> */}
                        <button type="button" className="btn btn-primary flex-grow-1">Follow</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <div>{postList}</div></>
      }
      <Outlet />
    </>
  )
}
