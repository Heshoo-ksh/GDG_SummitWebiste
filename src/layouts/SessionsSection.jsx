import React, { useState } from 'react'

import SessionCard from '@/components/sessions/SessionCard'
import { SpeakerData } from '@/data/sessions'

function SessionsSection() {
  const [activeTab, setActiveTab] = useState(0)
  const tabs = ['AI/ML', 'Mobile', 'Fullstack', 'Miscellaneous']

  return (
    <section
      id="sessions"
      className="flex flex-col items-center justify-center bg-primary-100"
    >
      <div className="mt-4 inline-flex w-5/6 items-center justify-between rounded-md bg-black md:w-auto">
        {tabs.map((tab, index) => (
          <React.Fragment key={tab}>
            {index !== 0 && (
              <div
                className={`h-5 w-1 bg-primary-400 ${
                  [activeTab, activeTab + 1].includes(index) && 'invisible'
                }`}
              />
            )}

            <button
              key={tab}
              className={`relative grow rounded-md px-1 py-2 text-lg font-medium transition-colors duration-300 focus:outline-none md:w-40 lg:w-56 ${
                activeTab === index
                  ? 'bg-primary-400 text-black'
                  : 'bg-black text-white'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
              {activeTab === index && (
                <div className="absolute -bottom-3 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[12px] border-t-[12px] border-primary-400 border-x-transparent"></div>
              )}
            </button>
          </React.Fragment>
        ))}
      </div>
      <ul className="grid w-5/6 grid-cols-1 gap-10 py-7">
        {SpeakerData.filter((speaker) =>
          speaker.category?.includes(tabs[activeTab])
        ).map((speaker) => (
          <li key={speaker.id}>
            <SessionCard
              speakerName={speaker.name}
              speakerAvatar={speaker.avatar}
              sessionTitle={speaker.session.title}
              sessionDesc={speaker.session.description}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SessionsSection
