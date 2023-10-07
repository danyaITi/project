import { Suspense } from "react";
import {  Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/route_config";

export const AppRouter = () => {
  return (
    <Suspense fallback="loading...">
      <Routes>
        {Object.values(routeConfig).map(({element,path})=> 
          <Route key={path} path={path} element={<div className='page-wrapper'>{element}</div>}/>
        )}
      </Routes>
    </Suspense>
  );
};
