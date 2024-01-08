import React from 'react'
import PhotoBgAnimation from './PhotoBgAnimation'
import { ProfileContainer, ProfileBg, ProfileLeftContainer, Img, ProfileRightContainer, ProfileInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './PhotoSectionStyles'
import ProfileImg from '../images/Image.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../data/constants';

const PhotoSection = () => {
    return (
        <div id="about">
            <ProfileContainer>
                <ProfileBg>
                    <PhotoBgAnimation />
                </ProfileBg>
                <ProfileInnerContainer >
                    <ProfileLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </ProfileLeftContainer>

                    <ProfileRightContainer id="Right">

                        <Img src={ProfileImg} alt="image" />
                    </ProfileRightContainer>
                </ProfileInnerContainer>

            </ProfileContainer>
        </div>
    )
}

export default PhotoSection