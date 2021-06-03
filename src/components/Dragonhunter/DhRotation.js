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
                <p>
                    This part of the guide is <span style={{ color: 'red' }}>not up to date</span> as of MAY 25th 2021 balance patch. The main reason is scepter nerf and change in <WikiIcon name={"Recharge"} /> cooldown of Symbol of Resolution. <b>HOWEVER</b>, the basic idea of how <WikiIcon name={"Dragonhunter"} /> Dragonhunter's rotation is built and the logic behind it remains unchanged. Therefore, most part of this video is still relevant and it will help you understand how to play it, not matter which wesponset you choose. Full video may be updated in the future.
                </p>
                <p><WikiIcon name={"Dragonhunter"} /> Dragonhunter's rotation revolves around damage modifiers and it is very easy to learn once you know the basics. You can already find written rotation breakdown on Snow Crows website, so here I will be focusing on explaining why <WikiIcon name={"Dragonhunter"} /> Dragonhunter's rotation is built like this in the form of the video.</p>
                <p>You will learn why some boons are very important for your damage. Make sure to read the description of the video as well!</p>
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