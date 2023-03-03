import { ApiService } from "../service/api.service"

const useFetchAttendance = () => {

    const fetch = async() => {
        const api = new ApiService();
        return []

        const result = await api.getAttendance();

        if(result.error) return []

        return result.data as TAttendance[]
    }

    return { fetch }
}

export default useFetchAttendance