import React, { useState } from "react";
import ModalVideo from 'react-modal-video';
import SectionIntro from '../../components/SectionIntro';
import SectionLink from '../../components/SectionLink';
import WikiIcon from '../../components/WikiIcon';
import RotationPreview from '../../assets/backgrounds/dh-guides/dh-rotation-preview.png';
import {
    VideoWrapper,
    VideoPreviewWrapper,
    VideoPreview,
    YoutubePlay,
    SectionContainer,
} from './styles'

const DhRotation = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <SectionContainer>
            <SectionIntro>
                <p><WikiIcon name={"Dragonhunter"} /> Dragonhunter's rotation revolves around damage modifiers and it is very easy to learn once you know the basics. You can already find written rotation breakdown on Snow Crows website, so here I will be focusing on explaining why <WikiIcon name={"Dragonhunter"} /> DH rotation is built like this in the form of the video.</p>
                <p>My idea for this video was to help you understand the standard scepter rotation and help you adjust in a real raid scenario (you will find boss specific adaptations in
                    <SectionLink sectionId="dh-section-guides">
                        <span
                            style={{ color: "#69CCE7", cursor: "pointer" }}>
                            &nbsp;Boss Guides&nbsp;
                        </span>
                    </SectionLink>
                section). You will learn why some boons are very important for your damage. Sword and virtues variant will be covered in another video sometime soon(tm). Make sure to read the description of the video as well!</p>
                <p>
                    Before watching the video, make sure that you have read
                    <SectionLink sectionId="dh-section-traits">
                        <span
                            style={{ color: "#69CCE7", cursor: "pointer" }}>
                            &nbsp;Traits&nbsp;
                        </span>
                    </SectionLink>
                section, as the below video covers only few of them. Understanding your traits is the key to success!
                </p>
            </SectionIntro>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="7GA9Q6Iej8A" onClose={() => setOpen(false)} />
            <VideoWrapper>
                <VideoPreviewWrapper onClick={() => setOpen(true)}>
                    <VideoPreview src={RotationPreview} />
                    <YoutubePlay />
                </VideoPreviewWrapper>
            </VideoWrapper>
        </SectionContainer>
    )
}
export default DhRotation