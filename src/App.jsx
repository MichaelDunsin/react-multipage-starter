import { lazy, Suspense} from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import RootLayout from "./layouts/rootLayout";
import PageSkeleton from "./components/pageskeleton";
import Home from "./pages/home"
import { Helmet } from "react-helmet-async";
const PageNotFound = lazy(() => import("./pages/pagenotfound"));
const AboutMe = lazy(() => import("./pages/about-me"));

export default function App() {

    const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
          <Route index element={<Home/>} />
       <Route path="about" element={<Suspense fallback={<PageSkeleton/>}><AboutMe/></Suspense>} />
         <Route path="*" element={<Suspense fallback={<PageSkeleton/>}><PageNotFound /></Suspense>} />
 </Route>
    )
  )

  return (
   <>
   <Helmet>
        {/* These act as your new global defaults */}
        <title>Welcome to My Website</title>
        <meta name="description" content="This is the default description for my awesome React app." />
      </Helmet>
   <RouterProvider router={router} />
   </>
  )
}


