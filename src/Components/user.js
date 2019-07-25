// import axios from 'axios'

// export const userSignup  = newUser => {
//     debugger;
// return axios
// .post('signup', {
// firstname: newUser.firstname1,
// lastname: newUser.lastname1,
// email: newUser.email1,
// password: newUser.password1,
// mobile: newUser.mobile1,
// })
// .then(res => {
// console.log('registered!')
// })
// .catch(err => {
// console.log(err.response.data)
// })
// }


// export const userSignin = user => {
// return axios
// .post('signin', {
// email: user.email1,
// password: user.password1
// })
// .then(res => {
// console.log('signin')
// localStorage.setItem('usertoken', res.data)
// return res.data
// })
// .catch(err => {
// console.log(err)
// })
// }

// export const getdetails = () => {
//     debugger;
//     return axios
//     .get('details', {
        
//     })
//     .then(res => {
//         this.setState({
//             doctors:res.data.data
//         })
//     })
// }



// componentDidMount = async () => {
//     this.setState({ isLoading: true })

//     await api.getAllMovies().then(movies => {
//         this.setState({
//             movies: movies.data.data,
//             isLoading: false,
//         })
//     })
// }