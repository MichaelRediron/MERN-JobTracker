import React, { useState } from 'react';
import BarChart from './BarChart';
import AreaChart from './AreaChart';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/ChartsContainer';

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useAppContext();

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type='button' onClick={() => setBarChart(!barChart)}>
        Change to: {barChart ? 'Area Chart' : 'Bar Chart'}?
      </button>
      <div className='graph-container'>
        {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
      </div>
    </Wrapper>
  );
};
export default ChartsContainer;
