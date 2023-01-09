import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import ProfileNav from '../components/ProfileNav'
// import { GET_PROFILE } from "../components/queries/profileQueries";
import {
  GET_PROFILE_By_Address
} from "../components/queries/profileQueries";

import { useQuery } from "@apollo/client";
export default function RootLayout () {

  const address = useSelector(state => state.provider.connection)
  const dispatch = useDispatch()
  const { refetch, loading, error, data } = useQuery(GET_PROFILE_By_Address
    , { variables: { address } })

  console.log(data)

  if (address) {
    // console.log(address)
    refetch()
  }

  if (data) {
    console.log(data.clientSearchByAddress.id)
    var { clientSearchByAddress } = data
    var { project } = clientSearchByAddress
    console.log(clientSearchByAddress, project)
    // console.log(profileInfo, post)
  }
  // console.log(data.clientSearchByAddress)
  data && dispatch({ type: 'PROVIDER_LOADED', address: data.clientSearchByAddress.id })

  const postList = project.map(({ id, title, body }) => {
    console.log(title)
    return (
      <ul className='list-group' key={id}>
        <li key={id} className="collection-item list-group-item">
          <Link to={`/posts/${id}`}>{title}</Link>
          <br />
          <div><p>{body}</p></div>
        </li>

      </ul>

    );
  });

  return (
    <>
      <section className="vh-100 container" style={{ "backgroundColor": "#9de2ff" }}>
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
                      <h5 className="mb-1"></h5>
                      <p className="mb-2 pb-1" style={{ "color": "#2b2a2a" }}>{clientSearchByAddress.name}</p>
                      <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                        style={{ "backgroundColor": "#efefef" }}>
                        <div>
                          <p className="small text-muted mb-1">Articles</p>
                          <p className="mb-0">41</p>
                        </div>
                        <div className="px-3">
                          <p className="small text-muted mb-1">Followers</p>
                          <p className="mb-0">976</p>
                        </div>
                        <div>
                          <p className="small text-muted mb-1">Rating</p>
                          <p className="mb-0">8.5</p>
                        </div>
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
      <ul className="collection list-group mt-5">{postList}</ul>
      {/* <ProfileNav></ProfileNav> */}
      <Outlet />
    </>
  )
}
