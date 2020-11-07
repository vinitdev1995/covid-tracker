import React from 'react';
import moment from 'moment';
import "./header.scss";

const Header = ({title}) =>{
    return(
        <div>
        <div className="Header">{title}</div>
            <div className=" ml-20 text-blue">{moment().format("dddd, MMMM D YYYY")}</div>
        </div>
    );
}

export default Header;