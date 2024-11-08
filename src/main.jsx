import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import AppContextProvider from './Context/AppContex.jsx'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import store from './Store/store.js'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AppContextProvider>
    <Provider store={store}>
    <App />
    <Toaster/>
    </Provider>
  </AppContextProvider>
  </BrowserRouter>,
)
