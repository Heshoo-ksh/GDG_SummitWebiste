import { FaMapMarkerAlt, FaClock } from 'react-icons/fa'

function LocationSection() {
  return (
    <section
      id="location"
      className="flex h-auto items-center justify-center bg-slate-100 py-16 md:py-28"
    >
      <div className="flex flex-col lg:mb-0 lg:flex-row lg:space-x-10 xl:space-x-28">
        <div className="mb-4 lg:mb-0">
          <div className="flex items-center">
            <div className="mr-4 flex h-11 w-11 items-center justify-center rounded-full bg-yellow-500">
              <FaMapMarkerAlt className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold md:text-xl lg:text-2xl">
              When
            </h3>
          </div>
          <div className="ml-16">
            <p className="whitespace-nowrap">Saturday, October 26, 2024 </p>
            <p>9:00 AM - 5:00 PM</p>
          </div>
        </div>

        <div className="mb-4 flex flex-col lg:mb-0">
          <div className="flex items-center">
            <div className="mr-4 flex h-11 w-11 items-center justify-center rounded-full bg-yellow-500">
              <FaClock className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold md:text-xl lg:text-2xl">
              Where
            </h3>
          </div>
          <a
            href="https://www.google.com/maps/dir//2125+Woodward+Ave,+Detroit,+MI+48201/@42.3378209,-83.0576339,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x883b2d3478f11d5b:0x4dfda74fa49a6074!2m2!1d-83.052484!2d42.337821?entry=ttu"
            target="_blank"
            className="ml-16 cursor-pointer hover:underline"
            rel="noreferrer"
          >
            <p className="xl:whitespace-nowrap">
              Little Caesars Global Resource Center
            </p>
            <p className="xl:whitespace-nowrap">
              2125 Woodward Avenue Detroit, 48201
            </p>
          </a>
        </div>

        <div className="w-full lg:w-1/2">
          <iframe
            title="Little Caesars Global Resource Center"
            className="h-64 w-full lg:h-auto"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2945.986922468408!2d-83.05744148519915!3d42.34028517918937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824d0cfb478df2b%3A0x44f8f6a6518c20f9!2sLittle%20Caesars%20World%20Headquarters!5e0!3m2!1sen!2sus!4v1661844163892!5m2!1sen!2sus"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
