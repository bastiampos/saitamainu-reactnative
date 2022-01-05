import axios from 'axios'

 const HOST = 'http://localhost:4000/api'
const authentication = {
    authUser: (user, flag) => {
        return async (dispatch, getState) => {
           
                try {
                    const response = await axios.post(`${HOST}/${flag}`, { ...user })
                    if (!response.data.success) {
                        throw new Error(response.data.error) 
                    } else {
                        dispatch({ type: 'AUTH_USER', payload: response.data.user }) 
                        console.log(response.data)
                        return {success: true, code: response.data.user.code}
                    }
                        
                } catch(error) {
                    return {success: false, error}
                }
        }
    },
    signOut: () => (dispatch, getState) => dispatch({ type: 'SIGN_OUT', payload: null })
}

export default authentication