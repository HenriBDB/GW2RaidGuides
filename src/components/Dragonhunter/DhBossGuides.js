import React, { useState } from "react";
import ModalVideo from 'react-modal-video';
import SectionIntro from '../../components/SectionIntro';
import RotationPreview from '../../assets/backgrounds/dh-rotation-preview.png';
import VgPreview from '../../assets/backgrounds/dh-vg-preview.png';
import GorsevalPreview from '../../assets/backgrounds/dh-gorseval-preview.png';
import SabethaPreview from '../../assets/backgrounds/dh-sabetha-preview.png';
import SlothPreview from '../../assets/backgrounds/dh-sloth-preview.png';
import KcPreview from '../../assets/backgrounds/dh-kc-preview.png';
import CairnPreview from '../../assets/backgrounds/dh-cairn-preview.png';
import SamarogPreview from '../../assets/backgrounds/dh-samarog-preview.png';
import {
    VideoWrapperMultiple,
    VideoPreviewWrapperMultiple,
    VideoPreview,
    YoutubePlaySmall,
    SectionContainer,
} from './styles'

const DhBossGuides = () => {
    const [isOpen1, setOpen1] = useState(false)
    const [isOpen2, setOpen2] = useState(false)
    const [isOpen3, setOpen3] = useState(false)
    const [isOpen4, setOpen4] = useState(false)
    const [isOpen5, setOpen5] = useState(false)
    const [isOpen6, setOpen6] = useState(false)
    const [isOpen7, setOpen7] = useState(false)
    const [isOpen8, setOpen8] = useState(false)
    return (
        <SectionContainer>
            <SectionIntro>
                <p>
                    My videoguides are directed to raiders who prefer visual aids over written tips (available for example on SC website). They were all recorded with average pug groups (I aim for 100-250 LI groups usually). There will be no secret knowledge shared here, everything shown in below guides is already available in other sources, but maybe seeing it all in action in average groups with live explanation what and why is happening will help you becoming more conscious DH player and improving your performance.
                    <br /><br />
                    I can't stop you from playing Dragonhunter on all bosses (like Matthias where the boss moves a lot and will move out of your traps constantly in pugs causing you to lose damage or like Soulless Horros for example, where playing Dragonhunter would be a mistake for several reasons, one of them being that your traps can instantly kill Tormented Dead and on the group and can cause a wipe), but below videos will cover only the bosses where I feel Dragonhunter can perform on a decent level.
                    <br /><br />
                    I strongly recommend opening below videos directly on YouTube - there may be things missed in the videos, but included in descriptions below them.
                    <br /><br />
                    This project is still work in progress - the following guides are still to be made: Deimos, Dhuum (maybe, needs testing), CA, Qadim 1, Adina, Sabir (maybe, needs testing).
                </p>
            </SectionIntro>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen1} videoId="MCI8sfCD5uk" onClose={() => setOpen1(false)} />
            <VideoWrapperMultiple>
                <VideoPreviewWrapperMultiple onClick={() => setOpen1(true)}>
                    <VideoPreview src={VgPreview} />
                    <YoutubePlaySmall />
                </VideoPreviewWrapperMultiple>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen2} videoId="vm46OzVCGYw" onClose={() => setOpen2(false)} />
                <VideoPreviewWrapperMultiple onClick={() => setOpen2(true)}>
                    <VideoPreview src={GorsevalPreview} />
                    <YoutubePlaySmall />
                </VideoPreviewWrapperMultiple>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen3} videoId="wcAaQ3b9ygA" onClose={() => setOpen3(false)} />
                <VideoPreviewWrapperMultiple onClick={() => setOpen3(true)}>
                    <VideoPreview src={SabethaPreview} />
                    <YoutubePlaySmall />
                </VideoPreviewWrapperMultiple>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen4} videoId="c8xHvQiUbP0" onClose={() => setOpen4(false)} />
                <VideoPreviewWrapperMultiple onClick={() => setOpen4(true)}>
                    <VideoPreview src={SlothPreview} />
                    <YoutubePlaySmall />
                </VideoPreviewWrapperMultiple>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen5} videoId="c3H7ho75swo" onClose={() => setOpen5(false)} />
                <VideoPreviewWrapperMultiple onClick={() => setOpen5(true)}>
                    <VideoPreview src={KcPreview} />
                    <YoutubePlaySmall />
                </VideoPreviewWrapperMultiple>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen6} videoId="eWDrzx4jMH4" onClose={() => setOpen6(false)} />
                <VideoPreviewWrapperMultiple onClick={() => setOpen6(true)}>
                    <VideoPreview src={CairnPreview} />
                    <YoutubePlaySmall />
                </VideoPreviewWrapperMultiple>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen7} videoId="7GA9Q6Iej8A" onClose={() => setOpen7(false)} />
                <VideoPreviewWrapperMultiple onClick={() => setOpen7(true)}>
                    <VideoPreview src={RotationPreview} />
                    <YoutubePlaySmall />
                </VideoPreviewWrapperMultiple>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen8} videoId="OeEx9WUMDos" onClose={() => setOpen8(false)} />
                <VideoPreviewWrapperMultiple onClick={() => setOpen8(true)}>
                    <VideoPreview src={SamarogPreview} />
                    <YoutubePlaySmall />
                </VideoPreviewWrapperMultiple>
            </VideoWrapperMultiple>
        </SectionContainer>
    )
}
export default DhBossGuides