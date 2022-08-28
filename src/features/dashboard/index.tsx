import { makeStyles } from '@material-ui/core';
import BookmarkAddedTwoToneIcon from '@mui/icons-material/BookmarkAddedTwoTone';
import BookmarkAddTwoToneIcon from '@mui/icons-material/BookmarkAddTwoTone';
import FemaleTwoToneIcon from '@mui/icons-material/FemaleTwoTone';
import MaleTwoToneIcon from '@mui/icons-material/MaleTwoTone';
import { Box, Grid, LinearProgress, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import * as React from 'react';
import StatisticItem from './components/StatisticItem';
import StudentRankingList from './components/StudentRankingList';
import Widget from './components/Widget';
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
      {/* Loading */}
      {loading && <LinearProgress className={classes.loading} />}

      {/* Statistic Section */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<MaleTwoToneIcon fontSize="large" color="primary" />}
            label="male"
            value={statistics.maleCount}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<FemaleTwoToneIcon fontSize="large" color="primary" />}
            label="female"
            value={statistics.femaleCount}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<BookmarkAddedTwoToneIcon fontSize="large" color="primary" />}
            label="mark >= 8"
            value={statistics.highMarkCount}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<BookmarkAddTwoToneIcon fontSize="large" color="primary" />}
            label="mark <= 5"
            value={statistics.lowMarkCount}
          />
        </Grid>
      </Grid>

      {/* All student ranking */}
      <Box mt={3}>
        <Typography variant="h4">All Students</Typography>

        <Box mt={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <Widget title="Student with highest mark">
                <StudentRankingList studentList={highestStudentList} />
              </Widget>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <Widget title="Student with lowest mark">
                <StudentRankingList studentList={lowestStudentList} />
              </Widget>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* Ranking by city */}
      <Box mt={3}>
        <Typography variant="h4">Ranking By City</Typography>

        <Box mt={2}>
          <Grid container spacing={3}>
            {rankingByCityList.map((item) => (
              <Grid key={item.cityId} item xs={12} md={6} lg={3}>
                <Widget title={item.cityName}>
                  <StudentRankingList studentList={item.rankingList} />
                </Widget>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
