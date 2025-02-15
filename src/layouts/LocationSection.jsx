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
            <p className="whitespace-nowrap">Saturday, Febuary 15th, 2025 </p>
            <p>10:00 AM - 4:00 PM</p>
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
            href="https://www.google.com/maps/dir//2050+15th+St,+Detroit,+MI+48216/@42.3286214,-83.1584231,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x883b2d8ff879cea5:0x814bf1ae12fedd6c!2m2!1d-83.0761563!2d42.3286091?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="ml-16 cursor-pointer hover:underline"
            rel="noreferrer"
          >
            <p className="xl:whitespace-nowrap">Newlab at Michigan Central</p>
            <p className="xl:whitespace-nowrap">
              Newlab Detroit, 2050 15th St, Detroit, MI 48216
            </p>
          </a>
        </div>

        <div className="w-full lg:w-1/2">
          <iframe
            title="Little Caesars Global Resource Center"
            className="h-64 w-full lg:h-auto"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5899.30116848111!2d-83.0786026!3d42.3286509!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d8ff879cea5%3A0x814bf1ae12fedd6c!2sNewlab%20Detroit!5e0!3m2!1sen!2sus!4v1738727542710!5m2!1sen!2sus"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
