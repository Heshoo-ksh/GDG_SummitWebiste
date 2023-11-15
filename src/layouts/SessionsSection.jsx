import SessionCard from '@/components/sessions/SessionCard'
import StylableComponentList from '@/components/StylableComponentList'
import { SpeakerData } from '@/data/sessions'
import React, { useState } from 'react'

function SessionsSection() {
  const [activeTab, setActiveTab] = useState(0)
  const tabs = ['AI/ML', 'Mobile', 'Fullstack', 'Miscellaneous']

  return (
    <section
      id="sessions"
      className="flex flex-col items-center justify-center bg-primary-100"
    >
      <div className="mt-4 inline-flex space-x-2 rounded-md bg-black">
        {tabs.map((tab, index) => (
          <React.Fragment key={tab}>
            {index !== 0 && <div className="mt-3 h-5 w-1 bg-primary-400" />}

            <button
              key={tab}
              className={`relative rounded-md px-1 py-2 text-lg font-medium transition-colors duration-300 focus:outline-none sm:px-8 md:px-11 lg:px-14 ${
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
      <StylableComponentList
        childComponentData={SpeakerData.filter((speaker) =>
          speaker.category?.includes(tabs[activeTab])
        ).map((speaker) => {
          return {
            id: speaker.id,
            speakerName: speaker.name,
            speakerAvatar: speaker.avatar,
            sessionTitle: speaker.session.title,
            sessionDesc: speaker.session.description,
          }
        })}
        childComponent={SessionCard}
        className="grid w-5/6 grid-cols-1 gap-10 py-7"
      />
    </section>
  )
}

export default SessionsSection
