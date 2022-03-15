import React from 'react'
import './SearchPage.css'
import { Button } from '@mui/material'
import SearchResult from './SearchResult'

function SearchPage() {
  return (
    <div className='searchPage'> 
        <div className='searchPage__info'>
            <p>62 stays  • 26 august to 30 august • 2 guest</p>
            <h1>Stays nearby</h1>
            <Button variant='outlined'>Cancellation Flexibility</Button>
            <Button variant='outlined'>Type of place</Button>
            <Button variant='outlined'>Price</Button>
            <Button variant='outlined'>Rooms and beds</Button>
            <Button variant='outlined'>More filters</Button>
        </div>
        <SearchResult
        img="https://www.construyehogar.com/wp-content/uploads/2014/03/Dise%C3%B1o-de-interiores-de-sala-de-lujo.jpg"
        location="Private room in center London"
        title="Stay at this spacious Edwardian House"
        description=" 1 guest • 1 bedroom • 1 bed • 1.5 shared • bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
        star={4.73}
        price="$30 / night"
        total="$117 total"/>

        <SearchResult
        img="https://1.bp.blogspot.com/-KNHaAHZ3tC0/YH7OPS1yOKI/AAAAAAAAGLc/vyl9CNvhKus0pmTt9YQ5fmKzSbAYChCmQCLcBGAsYHQ/s1500/MasteryByCrown_S090_INT_PenthouseBedroom.jpg"
        location="Private room in center London"
        title="Independant luxury studio apartment"
        description=" 2 guest • 3 bedroom • 1 bed • 1.5 shared • Wifi • Kitchen"
        star={4.3}
        price="$40 / night"
        total="$157 total"/>

        <SearchResult
        img="https://www.cosasdearquitectos.com/wp-content/uploads/ASTON2.jpg"
        location="Private room in center London"
        title="Independant luxury studio apartment"
        description=" 2 guest • 3 bedroom • 1 bed • 1.5 shared • Wifi • Kitchen"
        star={4.3}
        price="$40 / night"
        total="$157 total"/>

        <SearchResult
        img="https://ep00.epimg.net/elpais/imagenes/2018/11/29/album/1543506625_118088_1543566861_album_normal.jpg"
        location="Private room in center London"
        title="Independant luxury studio apartment"
        description=" 2 guest • 3 bedroom • 1 bed • 1.5 shared • Wifi • Kitchen"
        star={4.3}
        price="$40 / night"
        total="$157 total"/>

        <SearchResult
        img="https://ep00.epimg.net/elpais/imagenes/2018/11/29/album/1543506625_118088_1543507158_album_normal.jpg"
        location="Private room in center London"
        title="Independant luxury studio apartment"
        description=" 2 guest • 3 bedroom • 1 bed • 1.5 shared • Wifi • Kitchen"
        star={4.3}
        price="$40 / night"
        total="$157 total"/>
        
    </div>
  )
}

export default SearchPage