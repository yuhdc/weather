import React from 'react';
import styled from 'styled-components';

function CurrentDay({ data }) {
    console.log('daily', data);
    return (
        <>
            {
                data?.map((item, index) => {
                    const date = item.date.split('-').slice(1).reverse().join('-');
                    return (
                        <Daily key={index} style={dayStytled}>
                            <h4>{date}</h4>
                            <div><img src={item.day.condition.icon} alt="" /></div>
                            <p>{item.day.avgtemp_c}<sup>o</sup>C</p>
                            <p>Chance of rain:<br /> {item.day.daily_chance_of_rain}%</p>
                        </Daily>
                    )
                })
            }
        </>

    );
}

const dayStytled = {
    padding: '1rem 0',
    height: '100%',
    textAlign: 'center',
    lineHeight: '220%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
}

const Daily = styled.div`
    @media screen and (min-width:300px){
        font-size:80%
    }
    h4{
        font-size:1.3rem;
    }

`;

export default CurrentDay;
