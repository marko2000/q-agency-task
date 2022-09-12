import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = ({ message }) => {
    console.log(message + 'Header')

    return (
        <nav className='navbar navbar-expand-lg bg-primary bg-opacity-75 d-flex justify-content-between px-5'>
            <img src='/img/logo.png' alt="logo" />
            <div className='w-25 d-flex justify-content-around'>
                <Link to="/posts" className='text-decoration-none text-white'>Home</Link>
                <a className='text-decoration-none text-white' href='https://github.com/marko2000'>GitHub</a>
                <a className='text-decoration-none text-white' href='https://www.linkedin.com/in/marko2000/'>LinkedIn</a>
            </div>
        </nav>
    )
}

Header.propTypes = {
    message: PropTypes.string
}

export default Header;