import Paper from '@mui/material/Paper';
import TableMUI from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { StyledTableCell, StyledTableRow } from '../../../utils/table';
import Search from './Search';
import { useState, useContext } from 'react';
import AttendanceContext from '../../../context/Attendance';
import Pagination from './Pagination';

const Table = () => {
    const { attendance } = useContext(AttendanceContext);


    return (
        <>
        <Search />
        <TableContainer 
            component={Paper}
            sx={{ marginTop: '1rem' }}
        >
            <TableMUI sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
                <TableRow>
                <StyledTableCell>Deputado(a)</StyledTableCell>
                <StyledTableCell align="right">Presenças</StyledTableCell>
                <StyledTableCell align="right">Ausências justificadas</StyledTableCell>
                <StyledTableCell align="right">Ausências não justificadas</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {attendance.map((row: TAttendance) => (
                <StyledTableRow key={row.deputado}>
                    <StyledTableCell component="th" scope="row">
                    {row.deputado}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.presencas}</StyledTableCell>
                    <StyledTableCell align="right">{row.ausencias_justificadas}</StyledTableCell>
                    <StyledTableCell align="right">{row.ausencias_nao_justificadas}</StyledTableCell>
                </StyledTableRow>
                ))}
            </TableBody>
            </TableMUI>
        </TableContainer>
        <Pagination />
        </>
    );
}

export default Table