import axios from 'axios'
import PropTypes from 'prop-types'

export const getAllPostsApi = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')

    return data
}

export const getPostByIdApi = async (id) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    
    return data
}

getPostByIdApi.propTypes = {
    id: PropTypes.number.isRequired
}