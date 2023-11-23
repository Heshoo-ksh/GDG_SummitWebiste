import Connector from '@/assets/images/connect.png'
import GenericCard from '@/components/ui/GenericCard'
import { facilitatorsData } from '@/data/facilitators'

function FacilitatorsSection() {
  return (
    <section
      id="facilitators"
      className="flex flex-col justify-center px-8 sm:px-10 md:px-14 lg:px-16"
    >
      <div className="flex w-full justify-between px-8 pt-6 sm:px-10 sm:pt-8 md:px-14 md:pt-12 lg:px-16 lg:pt-14">
        <header className="w-full text-center font-russell text-4xl md:text-5xl lg:text-6xl">
          Facilitators
        </header>
        <img
          src={Connector}
          alt="Facilitators"
          className="h-12 md:h-14 lg:h-16"
        />
      </div>
      <div className="mt-32 grid grid-cols-1 items-stretch gap-20 sm:grid-cols-2 lg:mt-36 lg:grid-cols-3 xl:grid-cols-4">
        {facilitatorsData.map((facilitator) => (
          <GenericCard key={facilitator.id} {...facilitator} />
        ))}
      </div>
    </section>
  )
}

export default FacilitatorsSection
