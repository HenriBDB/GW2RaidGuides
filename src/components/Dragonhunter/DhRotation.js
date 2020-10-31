import React, { useState } from "react";
import { Link } from 'react-scroll';
import ModalVideo from 'react-modal-video';
import SectionIntro from '../../components/SectionIntro';
import RotationPreview from '../../assets/backgrounds/dh-rotation-preview.png';
import {
    VideoWrapper,
    VideoPreviewWrapper,
    VideoPreview,
    YoutubePlay,
    SectionContainer,
} from './styles'

const DhRotation = ({ showGuides }) => {
    const [isOpen, setOpen] = useState(false)
    return (
        <SectionContainer>
            <SectionIntro>
                <p>Dragonhunter rotation revolves around damage modifiers and it is very easy to learn once you know the basics. You can already find written rotation breakdown on Snow Crows website, so here I will be focusing on explaining why DH rotation is build like this in the form of the video.</p>
                <p>My idea for this video was to help you understand the standard scepter rotation and help you adjust in a real raid scenario (you will find boss specific adaptations in
                    <Link to="dh-section-guides" smooth={true} duration={1000} onClick={showGuides}>
                        <span
                            style={{ color: "#69CCE7", cursor: "pointer" }}>
                            &nbsp;Boss Guides&nbsp;
                        </span>
                    </Link>
            section). You will learn why some boons are very important for your damage. Sword and virtues variant will be covered in another video sometime soon(tm). Make sure to read the description of the video as well!</p>
            </SectionIntro>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="7GA9Q6Iej8A" onClose={() => setOpen(false)} />
            <VideoWrapper>
                <VideoPreviewWrapper onClick={() => setOpen(true)}>
                    <VideoPreview src={RotationPreview}/>
                    <YoutubePlay />
                </VideoPreviewWrapper>
            </VideoWrapper>
        </SectionContainer>
    )
}
export default DhRotation