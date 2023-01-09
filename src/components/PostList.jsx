import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_POST } from './queries/postListQueries'
import Spinner from './Spinner'
import { Link } from 'react-router-dom'

export default function Profile () {
  const { loading, error, data } = useQuery(GET_POST)
  console.log(data)
  if (loading)
    return (
      <div>
        <Spinner />
      </div>
    )
  if (error) return <p>Something Went Wrong</p>

  const postList = data.projects.map(({ id, title, body }) => {
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
      {!loading && !error && (

        <div>
          <ul className="collection list-group">{postList}</ul>
        </div>
      )}
    </>
  )
}
