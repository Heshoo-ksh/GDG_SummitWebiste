import DonWard from '@/assets/speakers/Organizers/Don Ward.png'
import DaveKoziel from '@/assets/speakers/Organizers/Dave Koziol.png'
//import React from 'react';

const organizers = [
    {
        id: 1,
        image: DonWard,
        name: 'Don Ward',
        role: 'GDG Organizer',
        Company: 'Google'
    },
    {
        id: 2,
        image: DaveKoziel,
        name: 'Dave Koziel',
        role: 'GDG Organizer',
        Company: 'Little Caesars',
    },

];


function OrganizersSection() {
  return (
    <div className="mt-48 flex max-w-7xl items-center justify-center">
        {organizers.map((organizer) =>(
        <div key={organizer.id}
        className="relative mx-5 mb-16 w-full max-w-xs grid-cols-2 gap-8 bg-primary-500 shadow-xl transition delay-75 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer">
        <div className="overflow-hidden rounded bg-primary-200 shadow-2xl hover:bg-primary-300">
          <div className="absolute -mt-24 flex w-full justify-center">
            <div className="h-48 w-48">
              <img
                src={organizer.image}
                className="h-full w-full rounded-full object-cover shadow-md"
                alt={organizer.name}
              />
            </div>
          </div>
          <div className="mb-4 mt-28 h-20 px-2">
            <h1 className="text-center text-lg font-semibold text-sky-900">
              {organizer.name}
            </h1>
            <h3 className="text-center text-base text-sky-900">
              {organizer.Company}
            </h3>
            <p className="text-center text-sm text-sky-900">{organizer.role}</p>
          </div>
        </div>
      </div>
        ))}       
    </div>
    
  )
}

export default OrganizersSection