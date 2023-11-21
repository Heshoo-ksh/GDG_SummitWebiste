import React, { useState } from 'react'

import SessionCard from '@/components/sessions/SessionCard'
import { SpeakerData } from '@/data/sessions'

function SessionsSection() {
  const [activeTab, setActiveTab] = useState(0)
  const tabs = ['AI/ML', 'Mobile', 'Fullstack', 'Miscellaneous']

  let combinedSpeakerData = []

  SpeakerData.forEach((speaker) => {
    let existingSession = combinedSpeakerData.find(
      (session) => session.sessionTitle === speaker.session.title
    )

    if (existingSession) {
      existingSession.speakers.push(speaker.name)
      existingSession.speakerAvatars.push(speaker.avatar)
      existingSession.id += `_${speaker.id}`
    } else {
      combinedSpeakerData.push({
        id: speaker.id,
        speakers: [speaker.name],
        speakerAvatars: [speaker.avatar],
        sessionTitle: speaker.session.title,
        sessionDesc: speaker.session.description,
        category: speaker.category,
      })
    }
  })

  return (
    <section
      id="sessions"
      className="flex flex-col items-center justify-center bg-primary-100"
    >
      <div className="w-full px-8 pt-6 sm:px-10 sm:pt-8 md:px-14 md:pt-12 lg:px-16 lg:pt-14">
        <header className="font-russell text-4xl md:text-5xl lg:text-6xl">
          Sessions
        </header>
      </div>
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
        {combinedSpeakerData
          .filter((session) => session.category?.includes(tabs[activeTab]))
          .map((session) => (
            <li key={session.id}>
              <SessionCard
                speakers={session.speakers}
                speakerAvatars={session.speakerAvatars}
                sessionTitle={session.sessionTitle}
                sessionDesc={session.sessionDesc}
              />
            </li>
          ))}
      </ul>
    </section>
  )
}

export default SessionsSection
