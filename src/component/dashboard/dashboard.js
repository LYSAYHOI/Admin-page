import React from 'react';
import styles from './dashboard.module.css';
import { Grid } from '@material-ui/core';
import InfoCard from '../infoCard/infoCard';
import { Doughnut, Bar } from 'react-chartjs-2';

const Dashboard = () => {
  const initialState = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 10],
      },
    ],
  };

  const data = {
    datasets: [
      {
        data: [63, 15, 22],
        backgroundColor: ['#CCC', '#36A2EB', '#FFCE56'],
        borderWidth: 8,
        borderColor: '#ffffff',
        hoverBorderColor: '#ffffff',
      },
    ],
    labels: ['Desktop', 'Tablet', 'Mobile'],
  };

  return (
    <div className={styles.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <InfoCard />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <InfoCard />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <InfoCard />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <InfoCard />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Bar data={initialState} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Doughnut data={data} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Bar data={initialState} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Doughnut data={data} />
        </Grid>
      </Grid>
    </div>
  );
};
export default Dashboard;
