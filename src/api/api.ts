import axios from 'axios'


// const settings = {
//     withCredentials: true,
//     headers: {
//
//     }
// }

// Create instance
const instance = axios.create({
    baseURL: 'http://dummy.restapiexample.com/api/v1/',
    // ...settings
})

// API
export const dummyAPI = {
    getEmployees() {
        const promise = instance.get<ResponseDataType>('employees');
        return promise;
    }
}

// types
export type ResponseEmployeesType = {
    "id": string
    "employee_name": string
    "employee_salary": string
    "employee_age": string
    "profile_image": string
}

export type ResponseDataType = {
    "status": string
    "data": ResponseEmployeesType[]

}


