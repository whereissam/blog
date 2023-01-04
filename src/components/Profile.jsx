import React from 'react'
import { useQuery } from '@apollo/client'
//gql : make a query
import ProfileRow from './ProfileRow'
import { GET_PROFILES } from './queries/profileQueries'
import Spinner from './Spinner'

export default function Profile () {
  const { loading, error, data } = useQuery(GET_PROFILES)
  console.log(loading, error, data)
  if (loading)
    return (
      <div>
        <Spinner />
      </div>
    )
  if (error) return <p>Something Went Wrong</p>

  return (
    <>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ProfileRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}
