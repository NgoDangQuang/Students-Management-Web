import { Box, Button, CircularProgress, makeStyles, Paper, Typography } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { authActions } from '../authSlice';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  box: {
    padding: theme.spacing(3),
  },
  btn: {
    marginTop: '24px',
  },
}));

export default function LoginPage() {
  const classes = useStyle();
  const dispatch = useAppDispatch();
  const isLogging = useAppSelector((state) => state.auth.logging);

  const handleLogin = () => {
    //TODO: Get username & password from login form
    dispatch(authActions.login({ username: '', password: '' }));
  };
  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>

        <Box className={classes.btn}>
          <Button fullWidth variant="contained" color="primary" onClick={handleLogin}>
            Fake Login &nbsp;
            {isLogging && <CircularProgress size={16} color="inherit" />}
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
