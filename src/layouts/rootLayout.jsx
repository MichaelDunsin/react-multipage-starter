import { Outlet, ScrollRestoration } from "react-router-dom"

export default function RootLayout(){

return (
<div className=" bg-[#efeded] dark:bg-[#1e293b] w-full min-h-screen">
<ScrollRestoration/>
  <div>
<Outlet/>
  </div>
</div>
)
};

// light mode bg-[linear-gradient(60deg,_#172554_-50%,_#efeded_50%)]
// dark mode bg-[linear-gradient(135deg,_#172554_-30%,_#1e293b_30%)]