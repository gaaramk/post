import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import AuthContextProvider from "./context/AuthContext"
import NonProtected from "./components/NonProtected"
import Home from "./components/Home/Home"
import ProtectedRoute from "./components/ProtectedRoute"
import HomeLayout from "./components/HomeLayout/HomeLayout"





const routes = createBrowserRouter([
  {
    path: ``, element: <Layout />, children: [
      { path: 'login', element: <NonProtected> <Login /> </NonProtected> },
      { path: 'register', element: <NonProtected> <Register /> </NonProtected> },
      { path: '*', element: <div>404</div> },
    ]
  }, // route

  {
    path: ``, element: <HomeLayout />, children: [
      { path: '', element: <ProtectedRoute> <Home /> </ProtectedRoute> },
      { path: '/home', element: <ProtectedRoute> <Home /> </ProtectedRoute> },
    ]
  },
])





const App = () => {

  return (


    <AuthContextProvider>

      <RouterProvider router={routes} />

    </AuthContextProvider>

  )
}

export default App