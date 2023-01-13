import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_POST } from './queries/postListQueries'
import Spinner from './Spinner'
import { Link } from 'react-router-dom'

export default function Profile () {
  const { loading, error, data } = useQuery(GET_POST)

  if (loading)
    return (
      <div>
        <Spinner />
      </div>
    )
  if (error) return <p>Something Went Wrong</p>

  const postList = data.projects.map(({ id, title, body }) => {
    return (
      <ul className='list-group mt-2' key={id}>
        <li key={id} className="collection-item list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1"><Link to={`/posts/${id}`}>{title}</Link></h5>
            <small>3 days ago</small>
          </div>
          <p className='mt-2'>{body}</p>
        </li>
      </ul>
    );
  });

  return (
    <>
      {!loading && !error && (
        <div>{postList}</div>
      )}
    </>
  )
}
