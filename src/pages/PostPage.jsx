import React from 'react'
import { useQuery } from '@apollo/client'
import { useParams, Link } from 'react-router-dom'
import { GET_PERSONAL_POST } from '../components/queries/postListQueries'
import Spinner from '../components/Spinner'


export default function PostPage () {

  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_PERSONAL_POST, { variables: { id } });

  if (loading)
    return (
      <div>
        <Spinner />
      </div>
    )
  if (error) return <p>Something Went Wrong</p>

  if (data) {
    var { project } = data
    var { client } = project
    console.log(project, client)
  }

  return (
    <>
      <div className="card gedf-card">
        <div className="card-header">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              {/* <div className="mr-2">
                          <img className="rounded-circle" width="45" src="https://picsum.photos/50/50" alt="">
                      </div> */}
              <div className="ml-2">
                <div className="h5 m-0">
                  <Link to={`/profile/${client.address}`}>@{client.name}</Link>
                </div>
                <div className="h7 text-muted">{client.name}</div>
              </div>
            </div>
            {/* <div>
              <div className="dropdown">
                <button className="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-ellipsis-h"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                  <div className="h6 dropdown-header">Configuration</div>
                  <a className="dropdown-item" href="#">Save</a>
                  <a className="dropdown-item" href="#">Hide</a>
                  <a className="dropdown-item" href="#">Report</a>
                </div>
              </div>
            </div> */}
          </div>

        </div>
        <div className="card-body">
          <div className="text-muted h7 mb-2"> <i className="fa fa-clock-o"></i>10 min ago</div>
          {/* <a className="card-link" href="#"> */}
          <h5 className="card-title">{project.title}</h5>
          {/* </a> */}

          <p className="card-text">
            {project.body}
          </p>
        </div>
        <div className="card-footer">
          <a href="#" className="card-link"><i className="fa fa-gittip"></i> Like</a>
          <a href="#" className="card-link"><i className="fa fa-comment"></i> Comment</a>
          <a href="#" className="card-link"><i className="fa fa-mail-forward"></i> Share</a>
        </div>
      </div>
    </>
  )
}
