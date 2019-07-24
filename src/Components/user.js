import axios from 'axios'

export const userSignup  = newUser => {
    debugger;
return axios
.post('signup', {
firstname: newUser.firstname1,
lastname: newUser.lastname1,
email: newUser.email1,
password: newUser.password1,
mobile: newUser.mobile1,
})
.then(res => {
console.log('registered!')
})
.catch(err => {
console.log(err.response.data)
})
}


export const userSignin = user => {
return axios
.post('login', {
email: user.email1,
password: user.password1
})
.then(res => {
console.log('signin')
localStorage.setItem('usertoken', res.data)
return res.data
})
.catch(err => {
console.log(err)
})
}
