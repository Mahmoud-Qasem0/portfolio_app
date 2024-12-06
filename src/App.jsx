import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Work from './components/work/Work'

function App() {
  const routes = createBrowserRouter([{
    path:"/",
    element: <Sidebar />,
    children: [
      {index: "/", element: <Home />},
      {path: "home", element: <Home />},
      {path: "about", element: <About />},
      {path: "skills", element: <Skills />},
      {path: "experience", element: <Experience />},
      {path: "work", element: <Work />}
    ]
    }])
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
