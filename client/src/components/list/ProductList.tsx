import React, {useContext} from 'react';
import AppContext from "../../AppContext";
import {Article, Category, CategoryArticle} from "../../types";
import {ArticleCard, formatter} from "../../ProductList";
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
            {
                products.categoryArticles.articles.map((item: Article) => {
                    return (
                    <div className={'article'}>
                        <img src={item.images[0].path} />
                        <div>{item.name}</div>
                        <div>{formatter.format(item.prices.regular.value / 100)}</div>
                        <section role="button">Add to cart</section>
                    </div>
                    )
                })
            }
        </div>
   );
};
export default ProductList;
