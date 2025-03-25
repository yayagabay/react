import React from 'react'
import Figma from './components/Figma'
import Chart from 'react-google-charts'
import Logo from './components/Logo';
import './App.css'
import Login from './components/Login';
import Image from './components/Image';

const data = [
  ["Year", "Sales", "Expenses"],
  ["2018", 1000, 400],
  ["2019", 1170, 460],
  ["2020", 660, 1120],
  ["2021", 1030, 540],
];

const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};

const GoogleChartExample = () => {
  return (
    <Chart
      chartType="LineChart"
      width="500px"
      height="400px"
      data={data}
      options={options}
    />
  );
};


export default function App() {
  return (
    <div>
      <div className='top'>
        <div className='left'>
        <Logo />
        </div>
        <div className='right'>
      <Login />
        </div>
      <div>
      </div>
      <Image />
      </div>
    </div>
  )
}

