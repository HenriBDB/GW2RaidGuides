import React from "react";
import SectionIntro from '../SectionIntro';
import WikiIconBig from '../WikiIconBig';
import WikiIcon from '../WikiIcon';
import DruidImg from '../../assets/classes/DruidImg.png'
import {
    SectionContainer,
    RoleSectionContainer,
    RoleSectionRow,
    ProviderSection,
    ProviderImg,
    ProviderName,
    BoonsSection,
    DescriptionSection
} from './styles'

const CommProviders = () => {
    return (
        <SectionContainer>
            <SectionIntro>
                <p style={{ fontStyle: "normal", textAlign: 'center' }}>
                    When getting a squad together, it’s important to know what each class can provide and what certain classes need. There are hundreds of options if we consider everything, but not everything is viable or even good. Because of that, only meta builds are considered in the following infographics.
                </p>
                <p style={{ fontStyle: "normal", textAlign: 'center' }}>
                    As not every boon can be/is covered by default, I color coded different boons:
                </p>
                <p style={{ fontStyle: "normal", textAlign: 'center', marginBottom: '5rem' }}>
                    <span style={{ color: 'deepskyblue', fontWeight: 'bold' }}>Guaranteed</span> boons are provided by the class no matter what<br />
                    <span style={{ color: 'limegreen', fontWeight: 'bold' }}>Very likely/Easy to get</span> boons require simple skill/trait change, as there can be some variations, or providing one boon means you will lose access to different one. It’s better to ask beforehand if they cover them<br />
                    <span style={{ color: 'goldenrod', fontWeight: 'bold' }}>Possible</span> boons - they can provide them, however it’s not really common (in pugs) and you need to communicate beforehands
                </p>
            </SectionIntro>
            <RoleSectionContainer>
                <RoleSectionRow>
                    <ProviderSection>
                        <ProviderImg src={DruidImg} />
                        <ProviderName>
                            <h4 className="mb-0">DRUID</h4>
                        </ProviderName>
                    </ProviderSection>
                    <BoonsSection>
                        <h4 className="mb-0 text-center">SQUAD</h4>
                        <div className="row justify-content-center mt-2 mb-4">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Might"} />
                                <p className="mb-0" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif' }}>25</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Fury"} />
                                <p className="mb-0" style={{ color: 'limegreen', fontWeight: 'bold', fontFamily: 'Noto serif' }}>60%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Protection"} />
                                <p className="mb-0" style={{ color: 'limegreen', fontWeight: 'bold', fontFamily: 'Noto serif' }}>60%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Regeneration"} />
                                <p className="mb-0" style={{ color: 'limegreen', fontWeight: 'bold', fontFamily: 'Noto serif' }}>60%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Vigor"} />
                                <p className="mb-0" style={{ color: 'limegreen', fontWeight: 'bold', fontFamily: 'Noto serif' }}>30%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Stability"} />
                                <p className="mb-0" style={{ color: 'limegreen', fontWeight: 'bold', fontFamily: 'Noto serif' }}>35s</p>
                            </div>
                        </div>
                        <h4 className="mb-0 text-center">SUBGROUP</h4>
                        <div className="row justify-content-center mt-2">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Fury"} />
                                <p className="mb-0" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif' }}>100%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Swiftness"} />
                                <p className="mb-0" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif' }}>100%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Regeneration"} />
                                <p className="mb-0" style={{ color: 'limegreen', fontWeight: 'bold', fontFamily: 'Noto serif' }}>100%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Spotter"} />
                                <p className="mb-0" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif' }}>100%</p>
                            </div>
                        </div>
                    </BoonsSection>
                </RoleSectionRow>
                <DescriptionSection>
                    <ul>
                        <li>
                            One of <WikiIcon name={"Fury"} /> Fury, <WikiIcon name={"Protection"} /> Protection or <WikiIcon name={"Vigor"} /> Vigor will be missing, depending on spirits
                        </li>
                        <li>
                            <WikiIcon name={"Stability"} /> Stability is provided by <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12569"></span>, once every 35s~
                        </li>
                        <li>
                            Subgroup boons are covered by wWarhorn (and <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="964"></span> trait)
                        </li>
                        <li>
                            All uptimes are with 100% BD build
                        </li>
                    </ul>
                </DescriptionSection>
            </RoleSectionContainer>

        </SectionContainer>
    )
}
export default CommProviders