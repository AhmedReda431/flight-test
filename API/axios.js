import axios from 'axios'

const domain = '/'
export const baseUrl = `${domain}`;
const axiosIns = axios.create({
    baseURL: domain,
})

export default axiosIns
