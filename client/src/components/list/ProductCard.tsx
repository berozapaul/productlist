import React, {useContext} from 'react';
import AppContext from "../../AppContext";
import {Article, Category, CategoryArticle} from "../../types";
import {ArticleCard, formatter} from "../../ProductList";

/*
 * Purpose: The purpose of this component is to render product as a card.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const ProductCard = (item: Article) => {

    return (
        <div className={'article'}>
            <img src={item.images[0].path} />
            <div>{item.name}</div>
            <div>{formatter.format(item.prices.regular.value / 100)}</div>
            <section role="button">Add to cart</section>
        </div>
   );
};
export default ProductCard;
