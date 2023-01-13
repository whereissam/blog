import React from 'react'
import Blockies from 'react-blockies'
import { Link } from 'react-router-dom'


export default function AccountInfoBar (address, disconnect, data) {

  console.log(data)

  let route
  if (data && data.clientSearchByAddress) {
    route = `/profile/${address}/articles`
  } else {
    route = `/profile/${address}/setting`
  }

  return (

    <div className="d-grid gap-1 container">
      <div className="row d-flex align-items-center">
        <div className="col">
          {address.slice(0, 5) + '...' + address.slice(38, 42)}
          &nbsp;
          <Blockies
            seed={address}
            size={10}
            scale={3}
            color="#2187D0"
            bgColor="#F1F2F9"
            spotColor="#767F92"
            className="identicon"
          />
        </div>
        <div className="col">
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className='btn btn-primary btn-sm' onClick={disconnect}>Disconnect</button>
            <Link to={route}>Go to profile</Link>
          </div>
        </div>
      </div>
    </div>

  )
}
