import { lazy, Suspense} from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import RootLayout from "./layouts/rootLayout";
import Home from "./pages/home"
const PageNotFound = lazy(() => import("./pages/pagenotfound"));
const AboutMe = lazy(() => import("./pages/about-me"));

export default function App() {

    const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
          <Route index element={<Home/>} />
       <Route path="about" element={<Suspense fallback={<div className=" w-full text-center">Loading...</div>}><AboutMe/></Suspense>} />
         <Route path="*" element={<Suspense fallback={<div className=" w-full text-center">Loading...</div>}><PageNotFound /></Suspense>} />
 </Route>
    )
  )

  return (
   <>
   <RouterProvider router={router} />
   </>
  )
}


