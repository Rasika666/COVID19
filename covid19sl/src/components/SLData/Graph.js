import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {get_graph_rapidAPI} from '../../action/dashboard';

class Graph extends Component {
    constructor(props) {
        super(props)

        this.state = {
            chartData : {}
        }
    }

    static getDerivedStateFromProps(props, state){
        
        const stat_by_country = props.rapid_covid_graph_obj.stat_by_country && props.rapid_covid_graph_obj.stat_by_country[0]
        
        if(stat_by_country != null){
            //take first n character of date and return only distinc dates
            let lookup = {}
            let uniqObjArr = []

            props.rapid_covid_graph_obj.stat_by_country.forEach(obj => {
                let date = obj.record_date.substring(0,10);

                if(!(date in lookup)){
                    lookup[date] = 1;
                    uniqObjArr.push(obj)
                }

            });

            

            const labels = uniqObjArr.map(obj=>obj.record_date.substring(0,10));
            const data = uniqObjArr.map(obj=>obj.total_cases)
            console.log(data)

            return {
                    chartData: {
                        labels : labels,
                        datasets: [
                            {
                            label : '# of COVID-19 cases',
                            data: data,
                            backgroundColor: 'rgba(51,51,51,0.5)'
                            }
                        ]
                    }   
                }   
            }else{
                return {
                    chartData: {}
                }
            }
       
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.state.input == nextState.input) {
    //       return false;
    //     }
    //   }

    componentDidMount(){
        this.props.get_graph_rapidAPI();
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'bottom',
        title: 'Custom Chart Title'
    }

    render() {
        return (
            <div className="graph">
                
                <Line
                    data={this.state.chartData}
                    width={120}
                    height={80}
                    options={{ 
                        title: {
                            display: this.props.displayTitle,
                            text: this.props.title,
                            fontSize: 25
                        },

                        legend: {
                            display: this.props.displayLegend,
                            labels: {
                                fontColor: 'rgb(51, 51, 51)'
                            },
                            position: this.props.legendPosition
                        },

                        scales: {
                            xAxes: [{
                                ticks: {
                                    autoSkip: false,
                                    maxRotation: 90,
                                    minRotation: 90
                                }
                            }]
                        }
                     }}
                />
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    rapid_covid_graph_obj: state.rapid_graph_data.rapid_covid_graph_obj
});

export default connect(mapStateToProps, {get_graph_rapidAPI})(Graph) ;
