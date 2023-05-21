import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Card.css'

function Card() {

    const [cards] = useState([{
        title: "Ahmedabad",
        condition: `Lorem`,
        current_temp: `20`,
        max_temp: `30`,
        min_temp: `10`, 
        sunrise:`5 am`,
        sunset: `5 pm`
    },
    {
        title: "Mumbai",
        condition: `Lorem.`,
        current_temp: `20`,
        max_temp: `30`,
        min_temp: `10`,
        sunrise:`5 am`,
        sunset: `5 pm`
    },
    {
        title: "Bangalore",
        condition: `Lorem`,
        current_temp: `20`,
        max_temp: `30`,
        min_temp: `10`,
        sunrise:`5 am`,
        sunset: `5 pm`
    },
    {
        title: "Pilani",
        condition: `Lorem`,
        current_temp: `20`,
        max_temp: `30`,
        min_temp: `10`,
        sunrise:`5 am`,
        sunset: `5 pm`
    },
    {
        title: "Kolkata",
        condition: `Lorem`,
        current_temp: `20`,
        max_temp: `30`,
        min_temp: `10`,
        sunrise:`5 am`,
        sunset: `5 pm`
    },
    {
        title: "Delhi",
        condition: `Lorem`,
        current_temp: `20`,
        max_temp: `30`,
        min_temp: `10`,
        sunrise:`5 am`,
        sunset: `5 pm`

    },]) 
  return (
    <div>
        <body>
            <div className='container'>
            <h1>Weather Cards of some places</h1>
            <div className='card-box'>
                {
                    cards.map((card,i) => (
                        <div key={i} className='card-face'>
                            <h3>{card.title}</h3>
                            <div className='details'>
                            <p>Condition :</p>
                            <p>{card.condition}</p>
                            </div>
                            <div className='details'>
                            <p>Current Temperature :</p>
                            <p> {card.current_temp}</p>
                            </div>
                            <div className='details'>
                            <p>Maximum Temperature :</p>
                            <p> {card.max_temp}</p>
                            </div>
                            <div className='details'>
                            <p>Minimum Temperature :</p>
                            <p> {card.min_temp}</p>
                            </div>
                            <div className='details'>
                            <p>Sunrise :</p>
                            <p> {card.sunrise}</p>
                            </div>
                            <div className='details'>
                            <p>Sunset :</p>
                            <p> {card.sunset}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            </div>
        </body>  
    </div>
  )
}

export default Card
