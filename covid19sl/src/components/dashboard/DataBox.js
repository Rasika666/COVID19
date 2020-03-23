import React, { Component } from 'react';
import {useCountUp} from 'react-countup';

const DataBox = props => {
    let {count, title} = props;
    //const c = props && props.count

    const { countUp } = useCountUp({ start: 0, end: count ,duration: 5 });

    // <CountUp start={0} end={count} delay={5}>
    //     {({ countUpRef }) => (
    //         <div className="data-box">
    //             <div className="local-new-cases number-box">{countUpRef}</div>
    //             <div className="title">{title}</div>
    //             <div className="box-bottom"></div>
    //         </div>
    //     )}
    // </CountUp>
    
    return(
        <div className="data-box">
            <div className="local-new-cases number-box">{count}</div> {/* sachin aiye meka countUp varible eka dammama wada krnne nathiwa yanawa
            but userCountup object eke end ekata props ekk pass kranne nathuwa number ekk damma wada*/ }
            <div className="title">{title}</div>
            <div className="box-bottom"></div>
        </div>
    )
    
    
    
}

DataBox.defaultProps = {
    count : 0
} 

export default DataBox;
