import Nav from './Nav'

export default function Header () {
    return (
        <div className='header'>
            <h1 className='welcome'>Star Wars</h1>

            <div className='header-nav'>
                <Nav />
            </div>
        </div>
    )
}