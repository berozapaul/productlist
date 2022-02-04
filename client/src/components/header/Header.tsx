import React from 'react';
import {useTranslation} from "react-i18next";

/*
 * Purpose: The purpose of this component is to render header nav bar.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const Header: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className={'header'}>
            <strong>home24</strong>
            <input placeholder={t('search')} />
        </div>
   );
};
export default Header;
