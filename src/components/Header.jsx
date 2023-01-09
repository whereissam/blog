// import logo from './assets/logo.png'
import WalletConnect from "./Walletconnect"

export default function Header () {


  return (
    <nav className="navbar bg-light mb-5 p-2 d-flex justify-content-between">
      <div className="container">
        <div className="col-2">
          <a className="navbar-brand" href="/">Blog</a>
        </div>
        <div className="col-4">
        </div>
        <div className="d-flex flex-row-reverse col-6">
          <WalletConnect />
        </div>
      </div>
    </nav>
  )
}