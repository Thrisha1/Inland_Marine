import React from 'react'
import { Card } from './common_components'
import { Headline ,Subline} from '../common_components/common_components.jsx'
import { getBoats } from '@/lib/content'

const FeaturedBoats = () => {
    const boats = getBoats()

  return (
    <div id="featuredboats" className='mt-20'>
        <Headline name="FEATURED BOATS" />
        <div className='my-20'>
            <Subline para="Each Kettuvallam is a masterpiece that echoes the artistry of Kerala's boat building legacy. Admire the intricate wooden work that adorns the exteriors, a tribute to the skilled hands that meticulously craft every detail. Step inside, and you'll find a world where tradition meets innovation, where hand-carved accents harmonize with contemporary amenities." />
        </div>
        <div className='lg:px-20 px-5'>
            <div className='grid grid-cols-1'>
                {boats.map(boat => <Card key={boat.id} data = {boat} />)}
            </div>
        </div>
    </div>
  )
}

export default FeaturedBoats
