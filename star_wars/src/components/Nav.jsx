import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div className='nav'>
            <Link to='/StarshipsList'>
                <h2>StarshipsList</h2>
            </Link>


            <Link to='/'>
                <h2>Home</h2>
            </Link>

            <Link to='/Planets'>
                <h2>Planets</h2>
            </Link>

            <Link to='/Characters'>
                <h2>Characters</h2>
            </Link>
        </div>
    )
}