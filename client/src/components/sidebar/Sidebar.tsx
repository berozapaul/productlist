import React from 'react';

/*
 * Purpose: The purpose of this component is to render header nav bar.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const Sidebar: React.FC = () => {
    return (
        <div className={'sidebar'}>
            <h3>Kategorien</h3>
            {/*{this.state.categories.length ? (*/}
            {/*    <ul>*/}
            {/*        {this.state.categories[0].childrenCategories.map(({ name, urlPath }) => {*/}
            {/*            return (*/}
            {/*                <li>*/}
            {/*                    <a href={`/${urlPath}`}>{name}</a>*/}
            {/*                </li>*/}
            {/*            );*/}
            {/*        })}*/}
            {/*    </ul>*/}
            {/*) : (*/}
            {/*    'Loading...'*/}
            {/*)}*/}
        </div>
   );
};
export default Sidebar;
