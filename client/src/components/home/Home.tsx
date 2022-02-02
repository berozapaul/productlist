import React, {useContext} from 'react';
import AppContext from '../../AppContext';
import Product from "../item/Product";
import ProductList from "../list/ProductList";

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
        <div>
            {slug ? <Product/> :
                <div>
                    <ProductList/>
                </div>
            }
        </div>
   )
};
export default Home;
