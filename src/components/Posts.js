import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { getAllPostsApi } from '../api/PostsApi'
import { getAllUsersApi } from '../api/UsersApi'
import PostCard from './PostCard'
import SearchBar from './SearchBar'

const Posts = ({ message }) => {    
    const [allPosts, setAllPosts] = useState([])
    const [searchText, setSearchText] = useState("")

    const setUsersToPosts = (posts, users) => {
        setAllPosts(() => posts.map(post => {
            let userObject = users.filter(user => {
                return user.id === post.userId
            })[0]

            return {
                ...post,
                userName: userObject.name
            }
        }))
    }

    const fetchPosts = async () => {
        const posts = await getAllPostsApi()
        const users = await getAllUsersApi()

        setUsersToPosts(posts, users)           
    }

    let displayPosts = searchText ? allPosts.filter(post => post.userName.toLowerCase().includes(searchText.toLowerCase())) : allPosts

    useEffect(() => {
        console.log(message + "Posts")
        fetchPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [message])

    return (
        <div className='bg-dark p-3 d-flex flex-column align-items-center'>
            <SearchBar setSearchText={setSearchText} />
            {displayPosts.map(post => (
                <PostCard message={message} post={post} key={post.id} />
            ))}
        </div>
    )
}

Posts.propTypes = {
    message: PropTypes.string
}

export default Posts;