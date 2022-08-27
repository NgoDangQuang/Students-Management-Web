import { useAppDispatch, useAppSelector } from 'app/hooks';
import * as React from 'react';
import {
  dashboardActions,
  selectDashboardLoading,
  selectDashboardStatistics,
  selectHighestStudentList,
  selectLowestStudentList,
  selectRankingByCityList,
} from './dashboardSlice';

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectDashboardLoading);
  const statistics = useAppSelector(selectDashboardStatistics);
  const highestStudentList = useAppSelector(selectHighestStudentList);
  const lowestStudentList = useAppSelector(selectLowestStudentList);
  const rankingByCityList = useAppSelector(selectRankingByCityList);

  console.log({
    loading,
    statistics,
    highestStudentList,
    lowestStudentList,
    rankingByCityList,
  });

  React.useEffect(() => {
    dispatch(dashboardActions.fetchData());
  }, [dispatch]);

  return <div>Dashboard</div>;
}
