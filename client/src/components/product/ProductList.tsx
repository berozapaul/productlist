import React, {useContext} from 'react';
import AppContext from "../../AppContext";
import {Article, Category} from "../../types";
import ProductCard from "./ProductCard";

/*
 * Purpose: The purpose of this component is to render the footer.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const ProductList: React.FC = () => {
    const context = useContext(AppContext);

    // @ts-ignore
    const products: Category = context.data;

    return (
        <div className={'content'}>
            <h1>{products.name}<small> ({products.articleCount})</small></h1>
            <div className={'articles'}>
            {products.categoryArticles.articles.map((item: Article) => {
                return (
                    <ProductCard {...item}/>
                );
            })}
            </div>
        </div>
   );
};
export default ProductList;
