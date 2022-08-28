import { SearchOutlined } from '@material-ui/icons';
import { Box, Grid, OutlinedInput } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { City, ListParams } from 'models';
import { ChangeEvent } from 'react';
export interface StudentFilterProps {
  filter: ListParams;
  onChange?: (newFilter: ListParams) => void;
  onSearchChange?: (newFilter: ListParams) => void;
  cityList: City[];
}

export default function StudentFilter({
  filter,
  cityList,
  onChange,
  onSearchChange,
}: StudentFilterProps) {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!onSearchChange) return;
    const newFilter = {
      ...filter,
      name_like: e.target.value,
    };
    onSearchChange(newFilter);
  };
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel htmlFor="searchByName">Search by name</InputLabel>
            <OutlinedInput
              id="SearchByName"
              endAdornment={<SearchOutlined />}
              label="Search by name"
              onChange={handleSearchChange}
            />
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}
