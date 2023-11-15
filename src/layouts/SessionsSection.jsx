import React, { useState, useEffect } from 'react'
import SpeakerSessionCard from '@/components/SpeakerSessionCard'
import StylableComponentList from '@/components/StylableComponentList'
import { SpeakerData } from '@/data/sessions'
import './session.css'

function SessionsSection() {
  const [activeTab, setActiveTab] = useState(0)
  const tabs = ['AI/ML', 'Mobile', 'Fullstack', 'Miscellaneous']

  useEffect(() => {
    console.log(
      SpeakerData.filter((speaker) =>
        speaker.category?.includes(tabs[activeTab])
      )
    )
  }, [])

  return (
    <section
      id="sessions"
      className="flex flex-col items-center justify-center bg-blue-300"
    >
      <div className="mt-4 inline-flex space-x-2 rounded-md bg-black">
        {tabs.map((tab, index) => (
          <React.Fragment key={tab}>
            {index !== 0 && <div className="mt-3 h-5 w-1 bg-blue-500" />}

            <button
              key={tab}
              className={`rounded-md px-3 py-2 text-lg font-medium transition-colors duration-300 focus:outline-none ${
                activeTab === index
                  ? 'bg-blue-600 text-white'
                  : 'bg-black text-white'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
              {activeTab === index && <div className="triangle"></div>}
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
        childComponent={SpeakerSessionCard}
        className="grid w-5/6 grid-cols-1 gap-10 py-7"
      />
    </section>
  )
}

export default SessionsSection
