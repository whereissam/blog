import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

export default function PrivateRoutes () {
  const auth = useSelector(state => state.provider.connection)

  return (
    auth ? <Outlet /> : <Navigate to='/' />
  )
}
