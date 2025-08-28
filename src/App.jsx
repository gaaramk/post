import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import AuthContextProvider from "./context/AuthContext"
import NonProtected from "./components/NonProtected"
import Home from "./components/Home/Home"
import ProtectedRoute from "./components/ProtectedRoute"
import HomeLayout from "./components/HomeLayout/HomeLayout"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"





const routes = createBrowserRouter([
  {
    element: <Layout />, children: [
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



const queryClient = new QueryClient()


const App = () => {

  return (






    <AuthContextProvider>

      <QueryClientProvider client={queryClient}>

        <RouterProvider router={routes} />

      </QueryClientProvider>

    </AuthContextProvider>

  )
}

export default App