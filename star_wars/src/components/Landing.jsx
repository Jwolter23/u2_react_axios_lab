import { Route, Routes } from 'react-router-dom'
import StarshipsList from './StarshipsList'
import CharactersList from './CharacterList'
import PlanetList from './PlanetList'
import Home from './Home'
import ShipDetails from './ShipDetails'

export default function Landing (props) {
    return (
        <div className='Landing'>
          

            <Routes>
                <Route exact path='/StarshipsList' element={<StarshipsList starShips={props.starShips}/>}/>
                <Route exact path='/' element={<Home />}/> 
                <Route exact path='/Characters' element={<CharactersList characters={props.characters}/>}/>
                <Route exact path='/Planets' element={<PlanetList planets={props.planets}/>}/>
                <Route exact path='/StarshipsList/:index' element={<ShipDetails starShips={props.starShips}/>} />
            </Routes>
        </div>
    )

}