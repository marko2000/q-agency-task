import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { getPostByIdApi } from "../api/PostsApi";
import { getCommentsByIdApi } from '../api/CommentsApi';
import { Link } from 'react-router-dom'

const Post = ({ message }) => {
    const { postId } = useParams()

    const [singlePost, setSinglePost] = useState({})
    const [comments, setComments] = useState([])

    const fetchPost = async () => {
        setSinglePost(await getPostByIdApi(postId))
    }

    const fetchComments = async () => {
        setComments(await getCommentsByIdApi(postId))
    }

    useEffect(() => {
        console.log(message + "Post")
        fetchPost()
        fetchComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div className='px-5 d-flex align-items-center flex-column'>
            <div className="m-3 d-flex justify-content-between align-items-center w-100">
                <Link to="/posts" className='text-decoration-none text-dark border p-2 rounded border-dark bg-light'>
                    <h5 className='mb-0'>← Back</h5>
                </Link>
                <h5 className='fst-italic'>Post ID: {postId}</h5>
            </div>
            <div className='w-75'>
                <h1 className='mb-5'>{singlePost.title}</h1>
                <p className='mb-5 fs-5'>{singlePost.body}</p>
                <h5 className='fw-normal fst-italic'>Comments:</h5>
                <div className='border p-3 rounded'>
                {comments.map(comment => (
                    <div className='border-bottom border-dark border-opacity-25 mb-3' key={comment.id}>
                        <p className='text-start fw-normal'>{comment.body}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

Post.propTypes = {
    message: PropTypes.string
}

export default Post;