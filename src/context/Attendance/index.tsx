import React, { createContext, useState, useEffect } from "react";
import useFetchAttendance from "../../hooks/useFetchAttendance";
import attendanceData from '../../data/attendance.json';

const AttendanceContext = createContext<any>(null);

type props = {
    children: React.ReactNode
}
const AttendanceProvider = ({ children }: props) => {
    const { fetch } = useFetchAttendance();
    
    const [searchText, setSearchText] = useState<string>('');
    const [allAtendances, setAllAtendances] = useState<TAttendance[]>(attendanceData);
    const [pagination, setPagination] = useState<number>(1);
    const [attendance, setAttendance] = useState<TAttendance[]>([]);

    let allPages = allAtendances.length > 50 ?  Math.round(allAtendances.length / 50) : 1;
    const pageSize = 50;

    useEffect(() => {
        const start = (pagination - 1) * pageSize;
        const end = start + pageSize; 

        setAttendance(() => {
            allAtendances.sort((a, b) => b.ausencias_nao_justificadas - a.ausencias_nao_justificadas);
            
            const attendancesFiltered = allAtendances.filter(row =>
                searchText != ''? 
                row.deputado.toLowerCase().indexOf(searchText.toLowerCase()) != -1 
                : true
            )

            return attendancesFiltered.slice(start, end)
        })
    },[searchText, pagination])


    return (
        <AttendanceContext.Provider
            value={{
                attendance,
                searchText,
                setSearchText,
                pagination,
                setPagination,
                allPages
            } as TAttendanceContext}
        >
            {children}
        </AttendanceContext.Provider>
    )
}

export default AttendanceContext;
export { AttendanceProvider }