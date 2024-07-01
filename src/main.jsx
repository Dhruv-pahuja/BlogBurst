import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store'
import { Protected } from "./components"
import { Home, Signup, Login, AllPosts, AddPost, Post, EditPost} from "./pages"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={(
        <Protected authentication={false}>
        <Login />
      </Protected>
    )} />
    <Route path='/signup' element={(
      <Protected authentication={false}>
        <Signup />
      </Protected>
    )} />
    <Route path='/all-posts' element={
      (
        <Protected authentication={true}>
          {" "}
        <AllPosts />
        </Protected>
      )
    } />
    <Route path='/add-post' element={
      (
        <Protected authentication={true}>
          {" "}
        <AddPost />
        </Protected>
      )
    } />
    <Route path='/edit-post/:slug' element={
      (
        <Protected authentication={true}>
          {" "}
        <EditPost />
        </Protected>
      )
    } />
    <Route path='/post/:slug' element={
      (
        <Protected authentication={true}>
          {" "}
        <Post />
        </Protected>
      )
    } />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
