import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import './index.scss'
import {MainPageLazy} from "./pages/main/main_lazy.page";
import {AboutPageLazy} from "./pages/about/about_lazy.page";
export const App = () => {

    return (
        <section className='app'>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О сайте</Link>
            <Suspense fallback='loading...'>
                <Routes>
                    <Route path='/' element={<MainPageLazy/>}/>
                    <Route path='/about' element={<AboutPageLazy/>}/>
                </Routes>
            </Suspense>
        </section>
    );
};

