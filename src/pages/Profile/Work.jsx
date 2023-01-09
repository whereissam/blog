import { useQuery } from '@apollo/client'
import { GET_PROFILES } from '../../components/queries/profileQueries'
import Spinner from '../../components/Spinner'
import { FaEdit } from 'react-icons/fa'


export default function Work () {

  const { loading, error, data } = useQuery(GET_PROFILES)
  if (loading)
    return (
      <div>
        <Spinner />
      </div>
    )
  if (error) return <p>Something Went Wrong</p>
  console.log(data)

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
            {data ? (
              data?.clients.map((client) => (
                <tr key={client.id}>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.address}</td>
                  <td>
                    {/* <button className="btn btn-danger btn-sm" onClick={editClient}> */}
                    <button className="btn btn-danger btn-sm">
                      <FaEdit />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>N/A</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </>
  )
}
