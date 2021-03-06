import React, { Component } from 'react';
import CountUp from 'react-countup';


class DataBox extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    static getDerivedStateFromProps(props, state){
        
        return {
            count: props.count
        }
    }
    
    render() {

        return (
            <div className="data-box">
                <div className="local-new-cases number-box">{<CountUp end={this.state.count} duration={5}/>}</div> 
                <div className="title">{this.props.title}</div>
                <div className="box-bottom"></div>
             </div>
        )
    }
}


DataBox.defaultProps = {
    count : 0
} 

export default DataBox;
