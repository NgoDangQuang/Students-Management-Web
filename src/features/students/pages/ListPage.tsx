import { makeStyles } from '@material-ui/core';
import { Box, Button, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { useEffect } from 'react';
import StudentTable from '../components/StudentTable';
import { selectStudentList, studentActions } from '../studentSlice';

const useStyles = makeStyles((theme) => ({
  root: {},
  titleContainer: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
  },
}));
export default function ListPage() {
  const studentList = useAppSelector(selectStudentList);
  const dispatch = useAppDispatch();
  const classes = useStyles();
  console.log(studentList);
  useEffect(() => {
    dispatch(
      studentActions.fetchStudentList({
        _page: 1,
        _limit: 15,
      })
    );
  }, [dispatch]);
  return (
    <Box className={classes.root}>
      <Box className={classes.titleContainer}>
        <Typography variant="h4">Students</Typography>
        <Button variant="contained" color="primary">
          Add new student
        </Button>
      </Box>

      {/* student table */}
      <StudentTable studentList={studentList} />
      {/* pagination */}
    </Box>
  );
}
