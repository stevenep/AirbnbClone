import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

// ES7 snippets to do 'rfce'

function Home() {
  return (
    <div className='home'>
        <Banner/>
    
        <div className='home__section'>
          <Card
          src="https://assets.easybroker.com/property_images/1751010/26559952/EB-FS1010.jpg?version=1599839665"
          title="Online Experiences"
          description="sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus"
          />
          <Card
          src="https://assets.easybroker.com/property_images/1751121/26561769/EB-FS1121.jpg?versio"
          title="Unique Stays"
          description="sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus"
          />
          <Card
          src="https://d500.epimg.net/cincodias/imagenes/2018/03/25/midinero/1521978855_468775_1521979039_sumario_normal.jpg"
          title="Entire Homes"
          description="sem viverra aliquet eget sit amet tellus cras adipiscing"
          />
          </div>

          

          <div className='home__section'>
          <Card
          src="https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2021/03/02/16146936226826.jpg"
          title="3 bedroom Flat in "
          description="ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit"
          price="$270 / night"
          />
          <Card
          src="https://d500.epimg.net/cincodias/imagenes/2018/03/25/midinero/1521978855_468775_1521979400_noticia_normal.jpg"
          title="Penthouse in London"
          description="purus gravida quis blandit turpis cursus in hac habitasse platea"
          price="$370 / night"
          />
          <Card
          src="https://i.pinimg.com/736x/99/38/ec/9938ec3384b079365dd85e38a6e37f05.jpg"
          title="1 Bedroom aparment"
          description="purus gravida quis blandit turpis cursus in hac habitasse platea"
          price="$470 / night"
          />
          </div>

        </div>
  )
}

export default Home