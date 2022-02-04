import React, {useEffect, useState} from 'react';

import AppContext from './AppContext';
import {getSlug, isEmptyObject} from "./utils/SiteUtils";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import {getProducts} from "./utils/APIUtils";
import Preloader from "./components/preloader/Preloader";
import './App.css';
/*
 * Purpose: This is the main component to bootstrap the app.
 *
 * Version: 1.0
 * Author: dev@example.comroute
 */
const App: React.FC = () => {
    const [data, setData] = useState({});
    const slug = getSlug(false);


    // @ts-ignore
    useEffect(async () => {
        if (!slug) {
            const { data } = await getProducts();
            if(!isEmptyObject(data) && data.categories.length > 0){
                setData(data.categories[0]);
            }
        }
    }, []);


    if(data === null || isEmptyObject(data)) {
        return <Preloader />
    }

    const contextData = { data, slug };
    return (
        <AppContext.Provider value={ contextData }>
            <div className={'page'}>
                <Header />
                <Sidebar />
                <Home />
                <Footer />
            </div>
        </AppContext.Provider>
    );
};

export default App;
