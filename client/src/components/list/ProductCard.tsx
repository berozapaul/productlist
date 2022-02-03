import React, {useContext} from 'react';
import AppContext from "../../AppContext";
import {Article, Category, CategoryArticle} from "../../types";
import {ArticleCard} from "../../ProductList";

/*
 * Purpose: The purpose of this component is to render the footer.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const ProductCard = (props:Article) => {

    console.log(props);

    return (
        <div className={'card'}>

        </div>
   );
};
export default ProductCard;
