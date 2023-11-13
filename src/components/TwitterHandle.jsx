import TwitterIcon from '@assets/TwitterIcon.svg';

/* eslint-disable react/prop-types */

function TwitterHandle(props) {

    return (
        <a href={props.url} target='_blank' rel='noreferrer' className='flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-white'>
            <img className='h-[40px] w-[40px]' src={TwitterIcon} />
        </a>
    );
}

export default TwitterHandle
