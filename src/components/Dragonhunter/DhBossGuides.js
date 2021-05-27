import React, { useState } from "react";
import ModalVideo from 'react-modal-video';
import WikiIcon from '../WikiIcon';
import SectionIntro from '../../components/SectionIntro';
import RotationPreview from '../../assets/backgrounds/dh-guides/dh-rotation-preview.png';
import VgPreview from '../../assets/backgrounds/dh-guides/dh-vg-preview.png';
import GorsevalPreview from '../../assets/backgrounds/dh-guides/dh-gorseval-preview.png';
import SabethaPreview from '../../assets/backgrounds/dh-guides/dh-sabetha-preview.png';
import SlothPreview from '../../assets/backgrounds/dh-guides/dh-sloth-preview.png';
import KcPreview from '../../assets/backgrounds/dh-guides/dh-kc-preview.png';
import CairnPreview from '../../assets/backgrounds/dh-guides/dh-cairn-preview.png';
import SamarogPreview from '../../assets/backgrounds/dh-guides/dh-samarog-preview.png';
import DeimosPreview from '../../assets/backgrounds/dh-guides/dh-deimos-preview.png';
import CAPreview from '../../assets/backgrounds/dh-guides/dh-ca-preview.png';
import AdinaPreview from '../../assets/backgrounds/dh-guides/dh-adina-preview.png';
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
    const [isOpen9, setOpen9] = useState(false)
    const [isOpen10, setOpen10] = useState(false)
    const [isOpen11, setOpen11] = useState(false)
    return (
        <SectionContainer>
            <SectionIntro>
                <p>
                    This part of the guide is <span style={{ color: 'red' }}>not up to date</span> as of MAY 25th 2021 balance patch. The main reason is scepter nerf and change in <WikiIcon name={"Recharge"} /> cooldown of Symbol of Resolution. <b>HOWEVER</b>, the basic idea of how to adapt <WikiIcon name={"Dragonhunter"} /> Dragonhunter's rotation in boss fights and the logic behind it remains unchanged. Below videoguides are still relevant as they covered boss specific information which remain unchanged (for example when to burst, when to delay your skills, which boss buffs/debuffs give dmg increase, etc.) Full videoguides will probably not be updated.
                </p>
                <p>
                    My videoguides are directed to raiders who prefer visual aids over written tips (available for example on SC website). They were all recorded with average pug groups (I aim for 100-250 LI groups usually). There will be no secret knowledge shared here, everything shown in below guides is already available in other sources, but maybe seeing it all in action in average groups with live explanation what and why is happening will help you becoming more conscious <WikiIcon name={"Dragonhunter"} /> Dragonhunter player and improving your performance. Don't expect perfect gameplay, this is my average performance in pugs and none of those kills are grinded, better results are possible on every boss with a perfect rotation while implementing the tips presented in guides.
                    <br /><br />
                    I strongly recommend opening below videos directly on YouTube - there may be things missed in the videos, but included in descriptions below them.
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
                <ModalVideo channel='youtube' autoplay isOpen={isOpen9} videoId="ppLpP_V3LhI" onClose={() => setOpen9(false)} />
                <VideoPreviewWrapperMultiple onClick={() => setOpen9(true)}>
                    <VideoPreview src={DeimosPreview} />
                    <YoutubePlaySmall />
                </VideoPreviewWrapperMultiple>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen10} videoId="Ug5Kw43K1eQ" onClose={() => setOpen10(false)} />
                <VideoPreviewWrapperMultiple onClick={() => setOpen10(true)}>
                    <VideoPreview src={CAPreview} />
                    <YoutubePlaySmall />
                </VideoPreviewWrapperMultiple>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen11} videoId="UNcspf3mlUU" onClose={() => setOpen11(false)} />
                <VideoPreviewWrapperMultiple onClick={() => setOpen11(true)}>
                    <VideoPreview src={AdinaPreview} />
                    <YoutubePlaySmall />
                </VideoPreviewWrapperMultiple>
            </VideoWrapperMultiple>
        </SectionContainer>
    )
}
export default DhBossGuides