import React from 'react'
import { useSelector } from 'react-redux'
import PostList from '../components/PostList'

export default function Home () {
  // const account = useSelector(state => state.provider.connection)
  // console.log(account)

  return (
    <div>
      <PostList></PostList>
    </div>
  )
}