import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layouts/Layout'
import "./App"
import Posts from './pages/Posts'
import PostsDetailLayout from './Layouts/PostsDetailLayout'
import PostDetail from './pages/PostDetail'

const App = () => {

  const rooter = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Layout />}>
          <Route index element={<Posts />} />
        </Route>
        <Route path='posts' element={<PostsDetailLayout/>}>
          <Route path=':slug' element={<PostDetail/>}/>
        </Route>
      </>
    )
  )

  return (
    <RouterProvider router={rooter} />
  )
}

export default App
