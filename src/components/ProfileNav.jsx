import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ProfileNav () {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="fa fa-bars"></span> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav m-auto">
                <li className="nav-item active"><NavLink className="nav-link" to='articles'>作品</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to='drafts'>草稿</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to='setting'>設定</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

