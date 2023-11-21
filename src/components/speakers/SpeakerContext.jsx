import { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { SpeakerData } from '@/data/sessions';

// default values for type sense
export const SpeakerContext = createContext({
    isModalOpen: false,
    openModal: () => { },
    closeModal: () => { },
    speakerID: 0,
    // eslint-disable-next-line no-unused-vars
    setSpeakerID: (_speakerID) => { },
    numSpeakers: 0,
});

export const SpeakerProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [speakerID, setSpeakerID] = useState(0);
    const numSpeakers = useMemo(() => SpeakerData.length, []);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <SpeakerContext.Provider
            value={{
                isModalOpen,
                openModal,
                closeModal,
                speakerID,
                setSpeakerID,
                numSpeakers
            }}
        >
            {children}
        </SpeakerContext.Provider>
    );
}

SpeakerProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

