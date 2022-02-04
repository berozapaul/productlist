import React from 'react';
import {Article} from "../../types";
import {formatter} from "../../utils/SiteUtils";


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
            <h3 className={'product-name'}>{item.name}</h3>
            <div><b>{formatter.format(item.prices.regular.value / 100)}</b></div>
            <section role="button">Add to cart</section>
        </div>
   );
};
export default ProductCard;
