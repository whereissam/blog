import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import './App.css';
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import RootLayout from './layouts/RootLayout';
import ProfileLayout from './layouts/ProfileLayout';
import Work from "./pages/Profile/Work";
import Setting from "./pages/Profile/Setting";
import Draft from "./pages/Profile/Draft";
import PostPage from './pages/PostPage';
import PrivateRoutes from './utils/PrivateRoutes';
import EditArticlePage from './pages/EditArticlePage';

function App () {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='posts/:id' element={<PostPage />}></Route>
        <Route path='profile/:id' element={<ProfileLayout />}>
          <Route element={<PrivateRoutes />}>
            <Route path='articles' element={<Work />}></Route>
            <Route path='article/:id' element={<EditArticlePage />}></Route>
            <Route path='drafts' element={<Draft />}></Route>
            <Route path='setting' element={<Setting />}></Route>
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
