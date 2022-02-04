import React, {useContext} from 'react';
import AppContext from '../../AppContext';
import ProductList from "../product/ProductList";
import ProductDetails from "../product/ProductDetails";

/*
 * Purpose: The purpose of this component is to render home.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const Home = () => {
    const context = useContext(AppContext);
    // @ts-ignore
    const { slug } = context;

    return(
        <>
            {slug ? <ProductDetails/> : <ProductList/>}
        </>
   )
};
export default Home;
