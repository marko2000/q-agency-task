import axios from 'axios'
import PropTypes from 'prop-types'

export const getAllUsersApi = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')

    return data
}

export const getUserById = async (userId) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)

    return data
}

getUserById.propTypes = {
    userId: PropTypes.number.isRequired
}