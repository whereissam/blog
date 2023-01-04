import React from 'react'
import Profile from '../components/Profile'
import { useSelector } from 'react-redux'

export default function Home () {
  const account = useSelector(state => state.provider.connection)
  console.log(account)

  return (
    <div>
      {
        account ? (<Profile ></Profile>) : (<h1>You need to login first</h1>)
      }

    </div>
  )
}