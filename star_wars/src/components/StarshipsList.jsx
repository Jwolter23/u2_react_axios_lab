const StarshipsList = (props) => {
    return (
    <div className="grid">
        {
       props.starShips.map((ship) => (
        <div key={ship.name}
                className='shipnames'>
        <h3>{ship.name}</h3>
        <h4>Crew: {ship.crew}</h4>

        </div>
       ))
}
       </div>
    )
}

export default StarshipsList