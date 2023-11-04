import SessionList from "@/components/SessionList"

function SessionsSection() {
  // add actual sessions, these are here as placeholder
  const sessions = [
    { id: 1, name: "Madona Wambua", title: "Lorem Ipsum Title of the Workshop", speakerImg: "https://ui-avatars.com/api/?name=test&background=random", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { id: 2, name: "Erica Olson", title: "Lorem Ipsum Title of the Workshop", speakerImg: "https://ui-avatars.com/api/?name=test&background=random", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { id: 3, name: "Brian McKeiver", title: "State-of-the-art Search with Azure AI Cognitive Search", speakerImg: "https://ui-avatars.com/api/?name=test&background=random", desc: "We all know that providing a good search experience for website visitors is hard. Everyone expects it to “just” work like Bing or Amazon. Maybe there is a better way, maybe we fix this with a little help from some AI or even our new friend Chat GPT.\n\nJoin the session to see how you can leverage Cognitive Services with Azure Cognitive Search in your apps. With the newly minted semantic search and OpenAI abilities this technology can provide results that are semantically closer to the intent of original query.\n\nYou can expect to walk away knowing how to generate your own power search experience that leverages the power of AI to solve your search woes." }
  ]

  return (
    <section
      id="sessions"
      className="flex items-center justify-center bg-blue-300"
    >
      {/* place sessions tab category here */}
      {
        /*
          My recommendation/approach (you don't have to do this but I wanna help):
            conditionally pass sessions into the itemsToMap argument depending
            on what is selected in the sessions categories tab using child callback
        */
      }
      <SessionList itemsToMap={sessions} />
    </section>
  )
}

export default SessionsSection
