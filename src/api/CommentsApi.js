import axios from 'axios'
import PropTypes from 'prop-types'

export const getCommentsByIdApi = async (id) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)

    return data
}

getCommentsByIdApi.propTypes = {
    id: PropTypes.number.isRequired
}