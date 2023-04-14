import React, { useContext } from 'react'
import { Navigate, Route, Routes } from "react-router-dom";

import { MyRoutes } from './../../router/index'; 
// import { privateRoutes, publicRoutes } from '../router'; 
// import { AuthContext } from '../context';
// import Loader from './UI/loader/Loader';


const AppRouter = () => {
  // const {isAuth, isLoading} = useContext(AuthContext);

  //   if (isLoading) {
  //       return <Loader />
  //   }

  return (
      <Routes>

            {MyRoutes.map(route => 
                <Route path={route.path} element={route.component} exact={route.exact} key={route.path}/>
            )}
            {/* <Route path="*" element={<Navigate replace to ="/posts" />}/> */}
            
      </Routes>


  )
}

export default AppRouter