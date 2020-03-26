import React, { Component } from 'react';
import CountUp from 'react-countup';

class DataBox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count : 0
        }
    }
    
    static getDerivedStateFromProps(props, state){
        
        return {
            count: props.count
        }
    }

    

    render() {
        return (
            <div className="data-box1">
                <div className="local-new-cases number-box1">
                {(() => {
                    if (this.state.count == '')
                        return 0;
                    else
                        return (<CountUp end={Number(this.state.count)} duration={5}/>);
                })()}
                </div>
                <div className="title1">{this.props.title}</div>
                <div className="box-bottom1"></div>
            </div>
        )
    }
}

DataBox.defaultProps = {
    count : 0
} 

export default DataBox
