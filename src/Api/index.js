import axios from 'axios'

const api = axios.create({
baseURL: 'http://localhost:8000',
})
export const signup = payload => api.post('/signup', payload)

export const signin = payload => api.post('/signin',payload)

export const appoint = payload => api.post('/appointment',payload)

export const selectDoctor = payload => api.post('/selectDoctor',payload)

export const RemoveById = id =>api.delete(`/selectdoctor/${id}`)
export const UpdateById =(id,payload) =>api.put(`/selectdoctor/${id}`,payload)


const apis = {
signup,
signin,
appoint,
selectDoctor,
RemoveById,
UpdateById
}

export default apis