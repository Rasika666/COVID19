import React, { Component } from 'react'
import './dashboard.css';
import DataBox from './DataBox';
import {connect} from 'react-redux';
import {getCOVID_Data} from '../../action/dashboard';
import PropTypes from "prop-types";
import { Header, Footer } from '../common/common';



class Dashboard extends Component {

    
    componentDidMount(){
        this.props.getCOVID_Data();
    }

    render() {

        const local_new_cases = this.props.covid_data.data && this.props.covid_data.data.local_new_cases;
        const local_total_cases =  this.props.covid_data.data && this.props.covid_data.data.local_total_cases;
        const local_deaths = this.props.covid_data.data && this.props.covid_data.data.local_deaths;
        const local_recovered = this.props.covid_data.data && this.props.covid_data.data.local_recovered;

        const global_new_cases = this.props.covid_data.data && this.props.covid_data.data.global_new_cases;
        const global_total_cases = this.props.covid_data.data && this.props.covid_data.data.global_total_cases;
        const global_deaths = this.props.covid_data.data && this.props.covid_data.data.global_deaths;
        const global_recovered = this.props.covid_data.data && this.props.covid_data.data.global_recovered;
        const global_new_deaths = this.props.covid_data.data && this.props.covid_data.data.global_new_deaths;

        const last_update = this.props.covid_data.data && this.props.covid_data.data.update_date_time;

        

            return (
                <div>
                    <main>
                
                    <Header/>

                    <div className="timer-wapper">
                        <p style={{color:'red', fontSize:'1.2rem'}}>Last update</p>
                        <h2>{last_update}</h2>
                    </div>

                    <div className="local-data">
                        <h2>Local Data(SL)</h2>
                        <div className="box"> 
                            <DataBox count={local_new_cases} title="Sri Lanka New Cases"/>
                            <DataBox count={local_total_cases} title="Sri Lanka Total Cases"/>
                            <DataBox count={local_deaths} title="Sri Lanka Deaths"/>
                            <DataBox count={local_recovered} title="Sri Lanka Recovered"/>  
                        </div>
                    </div>

                    <div className="globle-data">
                        <h2>Global Data</h2>
                        <div className="box">
                            <DataBox count={global_new_cases} title="World New Cases"/>
                            <DataBox count={global_total_cases} title="World Total Cases"/>
                            <DataBox count={global_new_deaths} title="World New Deaths"/>
                            <DataBox count={global_deaths} title="World Total Deaths"/>
                            <DataBox count={global_recovered} title="World Recovered"/>
                        </div>
                    </div>

                </main>

                <Footer/>
                </div>

            )
        

        
    }
}

Dashboard.propTypes = {
    // covid_data: PropTypes.object.isRequired,
    getCOVID_Data: PropTypes.func.isRequired
    
};

const mapStateToProps = state => ({
    covid_data : state.covid_data.HBP_covid_obj
});

export default connect(mapStateToProps, {getCOVID_Data})(Dashboard);
