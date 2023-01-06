import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_POST } from './queries/postListQueries'
import Spinner from './Spinner'

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

  const postList = data.projects.map(({ id, title }) => {
    console.log(title)
    return (
      <li key={id} className="collection-item list-group-item">
        {title}
      </li>
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
