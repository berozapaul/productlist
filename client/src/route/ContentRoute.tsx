import React, {Suspense} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../components/home/Home';
import ErrorMessage from '../components/error/ErrorMessage';
import {useTranslation} from "react-i18next";
import ProductList from "../components/product/ProductList";

/*
 * Purpose: The purpose of this component is to render common routes.
 * Version: 1.0
 */

const ContentRoute = () => {
    const { t } = useTranslation();
    const errorMsg = t('error');
    return (
        <BrowserRouter>
            <Suspense fallback="">
                <Routes>
                    <Route path="/:slug" element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/kategorie/:slug" element={<ProductList />} />
                    <Route path="/error" element={<ErrorMessage errorMsg={errorMsg}/>} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};
export default ContentRoute;
