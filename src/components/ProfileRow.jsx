import { FaEdit } from 'react-icons/fa'

import { useMutation } from '@apollo/client'

export default function ProfileRow ({ client }) {
  // const [editClient] = useMutation(EDIT_CLIENT, {
  //   variables: { id: client.id },
  //   refetchQueries: [{ query: GET_PROFILES }],
  // })
  console.log(client)

  return (
    <tr>
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
  )
}
