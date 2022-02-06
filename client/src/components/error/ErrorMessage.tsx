import React from 'react';
/*
 * Purpose: The purpose of this component is to render common errors.
 *          This component is going to be common to all the routes.
 * Version: 1.0
 * Author: dev@example.com
 */

const ErrorMessage = (props: any) =>{
   return(
       <div className="error">
           {props.errorMsg}
       </div>
   )
};
export default ErrorMessage;
