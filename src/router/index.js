import About from "../pages/About";
import Main from "../pages/partPages/main/Main";


export const MyRoutes = [
    {path: '/about', component: <About/>, exact: true},
    {path: '*', component: <Main/> , exact: true},
    // {path: '/posts/:id', component: <PostIdPage/>, exact: true},
    // {path: '/error', component: Error, exact: true},
]

