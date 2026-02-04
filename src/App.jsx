import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Routes } from './Routes/Routes';

const route = createBrowserRouter(Routes);

function App() {

  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App
