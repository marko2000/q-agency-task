import PropTypes from 'prop-types'

const SearchBar = ({ setSearchText }) => {
    return (
        <div className='input-group w-50'>
        <span className='input-group-text'>Search:</span>
        <input 
            type='text' 
            className='form-control' 
            placeholder='Author name' 
            onChange={e => setSearchText(e.target.value)} 
        />
    </div>
    )
}

SearchBar.propTypes = {
    setSearchText: PropTypes.func
}

export default SearchBar