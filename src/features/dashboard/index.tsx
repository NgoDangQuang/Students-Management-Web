import { makeStyles } from '@material-ui/core';
import { PeopleAlt } from '@mui/icons-material';
import { Box, Grid, LinearProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import * as React from 'react';
import StatisticItem from './components/StatisticItem';
import {
  dashboardActions,
  selectDashboardLoading,
  selectDashboardStatistics,
  selectHighestStudentList,
  selectLowestStudentList,
  selectRankingByCityList,
} from './dashboardSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: theme.spacing(2),
  },
  loading: {
    position: 'absolute',
    top: theme.spacing(-1),
  },
}));
export default function Dashboard() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectDashboardLoading);
  const statistics = useAppSelector(selectDashboardStatistics);
  const highestStudentList = useAppSelector(selectHighestStudentList);
  const lowestStudentList = useAppSelector(selectLowestStudentList);
  const rankingByCityList = useAppSelector(selectRankingByCityList);

  const classes = useStyles();

  React.useEffect(() => {
    dispatch(dashboardActions.fetchData());
  }, [dispatch]);

  return (
    <Box className={classes.root}>
      {loading && <LinearProgress className={classes.loading} />}

      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<PeopleAlt fontSize="large" color="primary" />}
            label="male"
            value={statistics.maleCount}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<PeopleAlt fontSize="large" color="primary" />}
            label="female"
            value={statistics.femaleCount}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<PeopleAlt fontSize="large" color="primary" />}
            label="mark >= 8"
            value={statistics.highMarkCount}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<PeopleAlt fontSize="large" color="primary" />}
            label="mark <= 5"
            value={statistics.lowMarkCount}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
