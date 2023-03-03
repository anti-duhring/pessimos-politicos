import axios from "axios";

export class ApiService {
    constructor() {
        axios.defaults.baseURL = 'https://pessimos-politicos.glitch.me'
    }

    async getAttendance() {
        try {
            const res = await axios.get('/presenca');
            
            return {
                data: res,
                error: false
            }
        } catch(err) {
            console.error(err);

            return {
                data: err,
                error: true
            }
        }
    }
}