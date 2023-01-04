// import logo from './assets/logo.png'
import WalletConnect from "./Walletconnect"

export default function Header () {


  return (
    <nav className="navbar bg-light mb-5 p-0">
      <div className="container d-flex justify-content-between">
        <a className="navbar-brand" href="#">Blog</a>
        <div className="d-flex">
          <WalletConnect />
        </div>
      </div>
    </nav>
  )
}