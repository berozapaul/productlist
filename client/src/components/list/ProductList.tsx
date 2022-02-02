import React, {useContext} from 'react';
import AppContext from "../../AppContext";

/*
 * Purpose: The purpose of this component is to render the footer.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const ProductList: React.FC = () => {
    const context = useContext(AppContext);
    // const { data } = context;
    console.log(context);

    return (
        <div className={'content'}>

        </div>
   );
};
export default ProductList;
