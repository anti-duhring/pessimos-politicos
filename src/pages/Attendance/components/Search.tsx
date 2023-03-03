import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { 
    InputAdornment, 
    Paper, 
    TextField,
    IconButton,
    Button 
} from '@mui/material';
import { useContext } from 'react';
import AttendanceContext from '../../../context/Attendance';


const Search = () => {
    const { searchText, updateSearchText } = useContext(AttendanceContext);
    return (
        <Paper 
            elevation={1}
            sx={{ 
                padding: '.5rem',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                columnGap: '1rem'
            }}
        >
            <TextField 
                id="outlined-basic" 
                label="Pesquisar" 
                variant="outlined" 
                size="small"
                sx={{ flex: 1 }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    )
                }}

                value={searchText}
                onChange={(e) => updateSearchText(e.target.value)}
            />
        {/* <Button 
            aria-label="filtrar"
            endIcon={<FilterAltIcon />}
        >
            Filtrar 
        </Button> */}
        <IconButton
            aria-label="filtrar"
        >
            <FilterAltIcon />
        </IconButton>
        </Paper>
    )
}

export default Search
