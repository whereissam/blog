import React from 'react'
import SettingInfo from '../../components/SettingInfo'
import { useSelector } from 'react-redux'
import { useMutation, useQuery } from '@apollo/client'
import { GET_PROFILE_By_Address } from '../../components/queries/profileQueries'
import Spinner from '../../components/Spinner'

export default function Setting () {

  const address = useSelector(state => state.provider.connection)

  console.log(typeof (address))

  const { loading, error, data } = useQuery(GET_PROFILE_By_Address, { variables: { address } })

  console.log(data)

  if (loading)
    return (
      <div>
        <Spinner />
      </div>
    )
  if (error) return <p>Something Went Wrong</p>

  return (
    <>
      <SettingInfo data={data} />
    </>
  )
}
