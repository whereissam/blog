import React from 'react'

export default function UserInfo (userInfo) {

  let { client } = userInfo

  return (
    <section className="vh-100 container mb-5" style={{ "backgroundColor": "#9de2ff" }}>
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
                    <p className="mb-2 pb-1" style={{ "color": "#2b2a2a" }}>{client.name}</p>
                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ "backgroundColor": "#efefef" }}>
                      <div>
                        <p className="small text-muted mb-1">Articles</p>
                        <p className="mb-0">{client.project.length}</p>
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
  )
}
