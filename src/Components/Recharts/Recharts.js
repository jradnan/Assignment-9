import React from 'react';
import { Legend,  PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, } from 'recharts';
import Recharts2 from './Recharts2/Recharts2';
import './Recharts.css'

const Recharts = () => {
    const data = [
        {
          "subject": "Math",
          "A": 120,
          "B": 110,
          "fullMark": 150
        },
        {
          "subject": "Chinese",
          "A": 98,
          "B": 130,
          "fullMark": 150
        },
        {
          "subject": "English",
          "A": 86,
          "B": 130,
          "fullMark": 150
        },
        {
          "subject": "Geography",
          "A": 99,
          "B": 100,
          "fullMark": 150
        },
        {
          "subject": "Physics",
          "A": 85,
          "B": 90,
          "fullMark": 150
        },
        {
          "subject": "History",
          "A": 65,
          "B": 85,
          "fullMark": 150
        }
      ]

      
    return (
        
        <div className='all-charts'>

            <div className='Charts-1'>
            <RadarChart outerRadius={90} width={730} height={250} data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} />
                    <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                    <Legend />
            </RadarChart>
            </div>
            <div className="charts-2">
                <Recharts2></Recharts2>
            </div>

        </div>
    );
};

export default Recharts;