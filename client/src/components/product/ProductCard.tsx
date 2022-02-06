import React from 'react';
import {Article} from "../../types";
import {formatter} from "../../utils/SiteUtils";
import { useTranslation } from 'react-i18next';


/*
 * Purpose: The purpose of this component is to render product as a card.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const ProductCard = (item: Article) => {
    const { t } = useTranslation();
    return (
        <div className={'article'}>
            <a href={`/${item.name}`} className={'product-link'}>
                <img src={item.images[0].path} />
                <h3 className={'product-name'}>{item.name}</h3>
            </a>
            <div><b>{formatter.format(item.prices.regular.value / 100)}</b></div>
            <section role="button">{t('card')}</section>
        </div>
   );
};
export default ProductCard;
