import { makeStyles } from '@material-ui/core';
import { Box, Paper, Typography } from '@mui/material';
import * as React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.divider}`,
  },
}));
export interface WidgetProps {
  title: string;
  children: any;
}

export default function Widget({ title, children }: WidgetProps) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="button">{title}</Typography>
      <Box mt={2}>{children}</Box>
    </Paper>
  );
}
