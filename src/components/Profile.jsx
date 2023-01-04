import React from 'react'
import { useQuery } from '@apollo/client'
import ProfileRow from './ProfileRow'
import { GET_PROFILES } from './queries/profileQueries'
import Spinner from './Spinner'
import ProfileNav from './ProfileNav'

export default function Profile () {
  const { loading, error, data } = useQuery(GET_PROFILES)
  if (loading)
    return (
      <div>
        <Spinner />
      </div>
    )
  if (error) return <p>Something Went Wrong</p>

  return (
    <>
      <ProfileNav></ProfileNav>
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
