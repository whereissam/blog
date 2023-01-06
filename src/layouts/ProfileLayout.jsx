import { Outlet } from "react-router-dom";
import React from 'react'

import ProfileNav from '../components/ProfileNav'


export default function RootLayout () {

  return (
    <>
      <ProfileNav></ProfileNav>
      <Outlet />
    </>
  )
}
