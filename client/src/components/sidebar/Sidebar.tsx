import React, {useContext} from 'react';
import AppContext from "../../AppContext";
import {Category} from "../../types";
import {useTranslation} from "react-i18next";

/*
 * Purpose: The purpose of this component is to render header nav bar.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const Sidebar: React.FC = () => {
    const context = useContext(AppContext);
    const { t } = useTranslation();

    // @ts-ignore
    const products: Category = context.data;

    return (
        <div className={'sidebar'}>
            <h3>{t('cat')}</h3>
            <ul>
                {products.childrenCategories.map(({ name, urlPath }) => {
                    return (
                        <li>
                            <a href={`/${urlPath}`}>{name}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
   );
};
export default Sidebar;
