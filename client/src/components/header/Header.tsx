import React from 'react';

/*
 * Purpose: The purpose of this component is to render header nav bar.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const Header: React.FC = () => {
    return (
        <div className={'header'}>
            <strong>home24</strong>
            <input placeholder={'Search'} />
        </div>
   );
};
export default Header;
