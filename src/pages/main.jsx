import React, { useState, useEffect } from 'react';
import MainWeather from "../components/MainWeather";

import styled from 'styled-components';
//axios
import { baseUrl, keyApi } from '../utils';
import axios from "axios";


function Main(props) {

    const [myCity, setMyCity] = useState('');
    const [data, setData] = useState({});

    const fetchData = async (myCity) => {
        await axios({
            method: "GET",
            url: `${baseUrl}key=${keyApi}&q=${myCity}&days=4&aqi=no&alerts=no`,
        })
            .then(res => {
                // console.log('response', res.data);
                return res.data;
            })
            .then(data => {
                setData({ ...data });
                setMyCity('');
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        fetchData('ho chi minh');
    }, [])

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            fetchData(myCity);
        }
    }

    return (
        <div>
            <div className="search">
                <Search
                    value={myCity}
                    onChange={e => setMyCity(e.target.value)}
                    onKeyPress={handleKeyPress}
                    type="text"
                    placeholder='Input your city name and enter'
                />
            </div>
            <MainWeather data={data} />
        </div>
    );
}




//styled components
const Search = styled.input`
z-index: 10;
position: absolute;
top: 4%;
left: 50%;
transform: translate(-50%,-4%);
width: 70%;
min-height: 7vh;
background: #c0b6b6f9;
border: 0 transparent;
border-radius: 10px;
padding:0 1rem;
`;


export default Main;