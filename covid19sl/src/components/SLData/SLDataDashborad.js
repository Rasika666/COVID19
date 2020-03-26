import React, { Component } from 'react';
import {Header, Footer} from '../common/common';
import '../common/common.css';
import './sl.css'
import Graph from './Graph';
import DataBox from './DataBox';
import {connect} from 'react-redux';
import {getCOVID_SLData_rapidAPI} from '../../action/dashboard';
import PropTypes from "prop-types";

class SLDataDashborad extends Component {

    
    
    componentDidMount(){
        this.props.getCOVID_SLData_rapidAPI();
    }

    

    render() {
        const total_cases = this.props.rapid_covid_data.latest_stat_by_country && 
            this.props.rapid_covid_data.latest_stat_by_country[0].total_cases;
        const new_cases =  this.props.rapid_covid_data.latest_stat_by_country && 
            this.props.rapid_covid_data.latest_stat_by_country[0].new_cases;
        const active_cases = this.props.rapid_covid_data.latest_stat_by_country && 
            this.props.rapid_covid_data.latest_stat_by_country[0].active_cases;
        const total_deaths = this.props.rapid_covid_data.latest_stat_by_country && 
            this.props.rapid_covid_data.latest_stat_by_country[0].total_deaths;
        const new_deaths = this.props.rapid_covid_data.latest_stat_by_country && 
            this.props.rapid_covid_data.latest_stat_by_country[0].new_deaths;
        const total_recovered = this.props.rapid_covid_data.latest_stat_by_country && 
            this.props.rapid_covid_data.latest_stat_by_country[0].total_recovered;
        const serious_critical = this.props.rapid_covid_data.latest_stat_by_country && 
            this.props.rapid_covid_data.latest_stat_by_country[0].serious_critical;
        const total_cases_per1m = this.props.rapid_covid_data.latest_stat_by_country && 
            this.props.rapid_covid_data.latest_stat_by_country[0].total_cases_per1m;
        const record_date = this.props.rapid_covid_data.latest_stat_by_country && 
            this.props.rapid_covid_data.latest_stat_by_country[0].record_date;

        return (
            <div>
                <Header/>

                <main>
        
                    <div className="container">
                        <div className="left-wrapper">
                            <div className="left-boxs">
                                <DataBox count={total_cases} title="Total cases"/>
                                <DataBox count={total_deaths} title="Total Deaths"/>
                                <DataBox count={total_recovered} title="Total Recover"/>
                                <DataBox count={active_cases} title="Active Cases"/>
                            </div>
                            <div className="right-boxs">
                                <DataBox count={new_cases} title="New cases"/>
                                <DataBox count={new_deaths} title="New Deaths"/>
                                <DataBox count={serious_critical} title="Serious Critical"/>
                                <DataBox count={total_cases_per1m} title="Total cases per min"/>
                                
                            </div>
                        </div>
                        <div className="right-wrapper">
                            <div className="basic-info">
                                <h2>Basic statistics</h2> <hr />
                                <p>Country: Sri Lanka</p>
                                <p>latest update: {record_date}</p>
                            </div>
                            <Graph title="Drowth of Total Cases"/>
                        </div>
                    </div>
                
                </main>
                <Footer />
            </div>
            
        )
    }
}

SLDataDashborad.propTypes = {
    getCOVID_SLData_rapidAPI: PropTypes.func.isRequired,
    rapid_covid_data: PropTypes.object.isRequired
    
};

const mapStateToProps = state => ({
    rapid_covid_data: state.rapid_covid_data.rapid_covid_obj
});

export default connect(mapStateToProps, {getCOVID_SLData_rapidAPI})(SLDataDashborad);
