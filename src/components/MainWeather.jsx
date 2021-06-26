import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Weather, Container } from '../components/style'
import Today from './Today';
import CurrentDay from './CurrentDay'
//router
import {
    Switch,
    Route,
    Link
} from "react-router-dom";


const MainWeather = ({ data }) => {
    console.log('mydata', data);
    const setImg = (p) => {
        if ([1003, 1000].includes(p.code)) return 1;
        if ([1006, 1117].includes(p.code)) return 2;
        if ([1063, 1180, 1183, 1186, 1189, 1192, 1195, 1198].includes(p.code)) return 3;
        if ([1066, 1114, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258].includes(p.code)) return 4;
        return 0;
    }
    return (
        <>
            {(typeof data.location !== 'undefined') ?
                <Weather case={data.current.is_day === 0 ? 5 : setImg(data.current.condition)} className='main' >
                    <Container className='container'>
                        <SummaryInfo >
                            <h2 className='title'>{data.location.name}, <span>{data.location.country}</span></h2>
                            <div className="sub-title" style={subTitle}>
                                <h4>{data.location.localtime}</h4>
                                <img src={data.current.condition.icon} style={{ minHeight: 50, minWidth: 50 }} alt="" />
                            </div>
                            <h1>{data.current.temp_c}<sup>o</sup>C</h1>
                            <p>{data.current.condition.text}</p>
                            <Group >
                                <ul>
                                    <li>{data.current.precip_mm} Precipitation</li>
                                    <li>{data.current.humidity}% Humidity</li>
                                    <li>{data.current.wind_mph}mph Wind</li>
                                </ul>
                            </Group>
                        </SummaryInfo>
                        <Detail className='detail'>
                            <div className="btn-group">
                                <button className="btn">
                                    <Link to='/hourly'>Hourly</Link>
                                </button>
                                <button className="btn">
                                    <Link to='/' >Daily</Link>
                                </button>
                            </div>
                            <div className="content" >
                                <Switch>
                                    <Route exact path='/hourly'>
                                        <Today data={data.forecast.forecastday[0]} />
                                    </Route>
                                    <Route path='/'>
                                        <CurrentDay data={data.forecast.forecastday} />
                                    </Route>
                                </Switch>

                            </div>
                        </Detail>
                    </Container>
                </Weather >
                :
                <div></div>
            }
        </>
    );
}

const subTitle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5rem'
}

const SummaryInfo = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 300px) {  
        padding-top: 15%;
    }   
    @media screen and (min-width: 860px) {  
        padding-top: 10%;
    }   
    @media screen and (min-width: 1200px) {  
        padding-top: 5%;
    }   
`;

const Group = styled(motion.div)`
    margin-top: 10px;
    padding:1rem 0;
    word-wrap: break-word;
    position: relative;
    /* min-width: 30vh; */
    background-color: rgba(100,100,100,0.2);
    width: 70%;
    border-radius: 20px;
    ul
        {
        display: flex;
        width: 50%;
        margin: 0 auto;
        justify-content:center;
        align-items: center;
        list-style-type: none;
        li
            {
            display: inline-block;
            padding:0 10%;
            line-height: 200%;
            }
        }
`;


const Detail = styled(motion.div)`
    /* margin: 1rem 1.5rem 0.5rem 1.5rem; */
    width:95%;
    margin:1rem auto;
    padding: 1rem;
    background-color: rgba(200,200,200,0.3);
    text-align: center;
    border-radius: 10px;
    min-height:30vh;
    .btn-group{
        display:flex;
        justify-content:center;
        gap: 50px;
        align-items: center;
        .btn{
            border-radius: 20px;
            outline: none;
            border: none;
            color: white;
            background-color: rgba(0,0,0,0.2);
            &:hover{
                background-color: #ffff;
                color:black
            }
        }
    }
    
`;

export default MainWeather;