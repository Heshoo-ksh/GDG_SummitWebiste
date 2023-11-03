function SpeakerSessionCard() {
  return (
    <section
      className="flex w-5/6 items-center justify-between rounded-xl border py-2.5 pl-12 pr-24 shadow-lg transition duration-200 hover:shadow-xl"
    >
      <section
        className="flex items-center"
      >
        <img
          src={"https://ui-avatars.com/api/?name=John%20Doe&background=random"}
          alt=""
          className="h-40 rounded-full"
        />
        <div
          className="pl-12 "
        >
          <h3
            className="mb-6 text-3xl font-bold"
          >
            John Doe
          </h3>
          <p
            className="text-gray-700"
          >
            by John Doe
          </p>
        </div>
      </section>
      <button>  
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-20 w-20">
          
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
    </section>
  )
}
export default SpeakerSessionCard