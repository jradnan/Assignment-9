import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard2.css'
const Recharts2 = () => {
    const data = [
        {
          "name": "Bangladesh",
          "uv": 4000,
          "pv": 2400,
          "amt": 2400
        },
        {
          "name": "USA",
          "uv": 3000,
          "pv": 1398,
          "amt": 2210
        },
        {
          "name": "Australia",
          "uv": 2000,
          "pv": 9800,
          "amt": 2290
        },
        {
          "name": "Malaysia",
          "uv": 2780,
          "pv": 3908,
          "amt": 2000
        },
        {
          "name": "France",
          "uv": 1890,
          "pv": 4800,
          "amt": 2181
        },
        {
          "name": "China",
          "uv": 2390,
          "pv": 3800,
          "amt": 2500
        },
     
      ]
    return (
        <div className='charts'>
            <LineChart width={530} height={250} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
        </div>
    );
};

export default Recharts2;