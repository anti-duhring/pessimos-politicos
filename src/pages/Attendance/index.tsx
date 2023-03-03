import styled from "styled-components"
import Table from "./components/Table"
import { AttendanceProvider } from "../../context/Attendance"

const Attendance = () => {
    return (
        <AttendanceProvider>
            <Container>
                <Table />
            </Container>
        </AttendanceProvider>
    )
}

export default Attendance

const Container = styled.div`
    padding: 3rem .5rem .5rem .5rem;
    background-color: #F1EDE7;
    flex: 1;
`