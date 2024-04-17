import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import ErrorPage from './pages/Error.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <React.StrictMode>
                <ChakraProvider>
                  <App />
                </ChakraProvider>
            </React.StrictMode>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
