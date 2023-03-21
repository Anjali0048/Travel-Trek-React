import React from 'react'
import Card from './Card'

export default function Tours({tours, removeTour}) {
  return (
    <div className='container'>

        <h2 className='title'>Travel Trek</h2>

        <div className='cards'>
            {
                tours.map((tour) => {
                    return <Card key={tour.id} {...tour} removeTour ={removeTour}></Card>
                })
            }
        </div>

    </div>
  )
}
