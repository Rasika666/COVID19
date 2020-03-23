import React, { Component } from 'react';


const DataBox = props => {
    const {count, title} = props;

    return(
        <div className="data-box">
            <div className="local-new-cases number-box">{count}</div>
            <div className="title">{title}</div>
            <div className="box-bottom"></div>
        </div>
    )
    
}


export default DataBox;
