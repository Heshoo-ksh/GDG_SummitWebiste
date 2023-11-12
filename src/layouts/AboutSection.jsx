import aboutLogo from '@/assets/aboutlogo.png'

function AboutSection() {
  return (
    <section id="about" className="relative h-screen flex flex-col items-center justify-center text-center">

    <div id="text-aboutPage" className='max-w-screen-lg mx-auto mb-8'>
      <p className="font-abc font-normal text-sm md:text-base lg:text-lg xl:text-xl ">
        The Detroit and Ann Arbor Google Developer Groups (GDG) are teaming up once again to bring you the 9th Michigan DevFest on December 2, 2023, at 
        the Little Caesar's Global. With our 9th DevFest, we aim to put together a great day of networking and knowledge sharing for all involved.
      </p>
    </div>
  
    <img 
      className="mx-auto object-cover w-full h-auto mt-10" 
      src={aboutLogo}
      alt="About Logo"
    />
  
  </section>
  

  

  


  

  )
}

export default AboutSection
