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
    const [allAttendance, setAllAttendances] = useState<TAttendance[]>(attendanceData);
    
    const [pagination, setPagination] = useState<number>(1);
    const pageSize = 25;
    const start = (pagination - 1) * pageSize;
    const end = pagination * pageSize - 1;

    const [allPages, setAllPages] = useState<number>(allAttendance.length > pageSize ?  Math.ceil(allAttendance.length / pageSize) : 1);

    const attendancePaginated = allAttendance.filter(row => {
        const meetsSearchCriteria = searchText? 
            row.deputado.toLowerCase().includes(searchText.toLowerCase())
            : true;
            console.log('meet', searchText);

        return meetsSearchCriteria;
    }).slice(start, end)

    const updateSearchText = (value: string) => {
        setSearchText(value);
        setPagination(1);
        setAllPages(oldList => {
            const attendanceFiltered = allAttendance.filter(row => 
                value? 
                row.deputado.toLowerCase().includes(value.toLowerCase())
                : true
            )

            console.log('update', value, attendanceFiltered.length);

            return attendanceFiltered.length > pageSize ?  Math.ceil(attendanceFiltered.length / pageSize) : 1
        })
    };

    return (
        <AttendanceContext.Provider
            value={{
                attendance: attendancePaginated,
                searchText,
                setSearchText,
                updateSearchText,
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