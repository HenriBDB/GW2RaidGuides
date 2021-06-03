import React from "react";
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
import YoutubePlayer from '../YoutubePlayer'
import {
    VideoWrapperMultiple,
    SectionContainer,
} from './styles'

const DhBossGuides = () => {
    return (
        <SectionContainer>
            <SectionIntro>
                <p>
                    This part of the guide is <span style={{ color: 'red' }}>not up to date</span> as of MAY 11th 2021 balance patch. The main reason is scepter nerf and change in <WikiIcon name={"Recharge"} /> cooldown of Symbol of Resolution. <b>HOWEVER</b>, the basic idea of how to adapt <WikiIcon name={"Dragonhunter"} /> Dragonhunter's rotation in boss fights and the logic behind it remains unchanged. Below videoguides are still relevant as they covered boss specific information which remain unchanged (for example when to burst, when to delay your skills, which boss buffs/debuffs give dmg increase, etc.) Full videoguides will probably not be updated.
                </p>
                <p>
                    My videoguides are directed to raiders who prefer visual aids over written tips (available for example on SC website). They were all recorded with average pug groups (I aim for 100-250 LI groups usually). There will be no secret knowledge shared here, everything shown in below guides is already available in other sources, but maybe seeing it all in action in average groups with live explanation what and why is happening will help you becoming more conscious <WikiIcon name={"Dragonhunter"} /> Dragonhunter player and improving your performance. Don't expect perfect gameplay, this is my average performance in pugs and none of those kills are grinded, better results are possible on every boss with a perfect rotation while implementing the tips presented in guides.
                    <br /><br />
                    I strongly recommend opening below videos directly on YouTube - there may be things missed in the videos, but included in descriptions below them.
                </p>
            </SectionIntro>
            <VideoWrapperMultiple>
                <YoutubePlayer videoId="MCI8sfCD5uk" customThumbnail={VgPreview} />
                <YoutubePlayer videoId="vm46OzVCGYw" customThumbnail={GorsevalPreview} />
                <YoutubePlayer videoId="wcAaQ3b9ygA" customThumbnail={SabethaPreview} />
                <YoutubePlayer videoId="c8xHvQiUbP0" customThumbnail={SlothPreview} />
                <YoutubePlayer videoId="c3H7ho75swo" customThumbnail={KcPreview} />
                <YoutubePlayer videoId="eWDrzx4jMH4" customThumbnail={CairnPreview} />
                <YoutubePlayer videoId="7GA9Q6Iej8A" customThumbnail={RotationPreview} />
                <YoutubePlayer videoId="OeEx9WUMDos" customThumbnail={SamarogPreview} />
                <YoutubePlayer videoId="ppLpP_V3LhI" customThumbnail={DeimosPreview} />
                <YoutubePlayer videoId="Ug5Kw43K1eQ" customThumbnail={CAPreview} />
                <YoutubePlayer videoId="UNcspf3mlUU" customThumbnail={AdinaPreview} />
            </VideoWrapperMultiple>
        </SectionContainer>
    )
}
export default DhBossGuides