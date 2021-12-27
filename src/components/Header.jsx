import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ developer, onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h1>Task Tracker by {developer}</h1>
      {location.pathname === '/' && <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      />}

    </header>
  )
}

Header.defaultProps = {
  developer: 'Adil',
}

Header.propTypes = {
  developer: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header
