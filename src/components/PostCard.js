import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const PostCard = ({ message, post }) => {
    console.log(message + "PostCard")
    return (
        <Link 
            to={`/posts/${post.id}`} 
            className="text-decoration-none text-dark d-flex justify-content-center w-75 m-5" 
            key={post.id}
        >
            <div
                className='bg-white p-3 rounded d-flex flex-column align-items-center justify-content-between'
                style={{ minHeight: '250px'}}
            >
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <h5 className='fst-italic'>Author: {post.userName}</h5>
            </div>
        </Link>
    )
}

PostCard.propTypes = {
    message: PropTypes.string,
    post: PropTypes.object
}

export default PostCard