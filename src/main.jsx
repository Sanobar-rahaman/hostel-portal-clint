import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import router from './Routes/MainRoute.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Provider/AuthProvider'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    {/* <RouterProvider router={router} /> */}
    <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
    
  </React.StrictMode>,
)
