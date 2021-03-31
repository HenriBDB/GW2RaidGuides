import React from "react";
import SectionIntro from '../SectionIntro';
import WikiIconBig from '../WikiIconBig';
import WikiIcon from '../WikiIcon';
import DruidImg from '../../assets/classes/DruidImg.png';
import ChronoImg from '../../assets/classes/ChronoImg.png';
import FirebrandImg from '../../assets/classes/FirebrandImg.png';
import RenegadeImg from '../../assets/classes/RenegadeImg.png';
import TempestImg from '../../assets/classes/TempestImg.png';
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
                <p style={{ fontStyle: "normal", textAlign: 'center' }}>
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
            <div style={{ width: '60%', height: 1, borderBottom: '1px solid white', margin: '40px auto 0' }}></div>
            <RoleSectionContainer>
                <RoleSectionRow>
                    <ProviderSection>
                        <ProviderImg src={ChronoImg} />
                        <ProviderName>
                            <h4 className="mb-0">STM CHRONO</h4>
                        </ProviderName>
                    </ProviderSection>
                    <BoonsSection>
                        <h4 className="mb-0 text-center">SQUAD</h4>
                        <div className="row justify-content-center mt-2 mb-4">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Quickness"} />
                                <p className="mb-0" style={{ color: 'goldenrod', fontWeight: 'bold', fontFamily: 'Noto serif' }}>80%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Swiftness"} />
                                <p className="mb-0" style={{ color: 'limegreen', fontWeight: 'bold', fontFamily: 'Noto serif' }}>50%</p>
                            </div>
                        </div>
                        <h4 className="mb-0 text-center">SUBGROUP</h4>
                        <div className="row justify-content-center mt-2">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Quickness"} />
                                <p className="mb-0" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif' }}>100%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Stability"} />
                                <p className="mb-0" style={{ color: 'limegreen', fontWeight: 'bold', fontFamily: 'Noto serif' }}>12s~</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Aegis"} />
                                <p className="mb-0" style={{ color: 'limegreen', fontWeight: 'bold', fontFamily: 'Noto serif' }}>25s~</p>
                            </div>
                        </div>
                    </BoonsSection>
                </RoleSectionRow>
                <DescriptionSection>
                    <ul>
                        <li>
                            <WikiIcon name={"Quickness"} /> Quickness for the whole squad is utilized only in experienced groups, not pug friendly
                        </li>
                        <li>
                            12s~ of <WikiIcon name={"Quickness"} /> Quickness for whole squad can be covered by <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="10377"></span> - useful start of fight/phase
                        </li>
                        <li>
                            <WikiIcon name={"Swiftness"} /> Swiftness can be easily covered if playing Focus
                        </li>
                        <li>
                            <WikiIcon name={"Stability"} /> Stability or <WikiIcon name={"Aegis"} /> Aegis can be covered by utility skills
                        </li>
                    </ul>
                </DescriptionSection>
            </RoleSectionContainer>
            <div style={{ width: '60%', height: 1, borderBottom: '1px solid white', margin: '40px auto 0' }}></div>
            <RoleSectionContainer>
                <RoleSectionRow>
                    <ProviderSection>
                        <ProviderImg src={ChronoImg} />
                        <ProviderName>
                            <h4 className="mb-0">INSPI CHRONO</h4>
                        </ProviderName>
                    </ProviderSection>
                    <BoonsSection>
                        <h4 className="mb-0 text-center">SQUAD</h4>
                        <div className="row justify-content-center mt-2 mb-4">
                            <div className="d-flex align-items-center">
                                <p className="mb-0 mx-2" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif', textAlign: 'center', alignSelf: 'flex-start' }}>Boon<br />Extension</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Swiftness"} />
                                <p className="mb-0" style={{ color: 'limegreen', fontWeight: 'bold', fontFamily: 'Noto serif' }}>60%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Alacrity"} />
                                <p className="mb-0" style={{ color: 'goldenrod', fontWeight: 'bold', fontFamily: 'Noto serif' }}>15%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Quickness"} />
                                <p className="mb-0" style={{ color: 'goldenrod', fontWeight: 'bold', fontFamily: 'Noto serif' }}>15%</p>
                            </div>
                        </div>
                        <h4 className="mb-0 text-center">SUBGROUP</h4>
                        <div className="row justify-content-center mt-2">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Quickness"} />
                                <p className="mb-0" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif' }}>100%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Aegis"} />
                                <p className="mb-0" style={{ color: 'limegreen', fontWeight: 'bold', fontFamily: 'Noto serif' }}>15s</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Alacrity"} />
                                <p className="mb-0" style={{ color: 'goldenrod', fontWeight: 'bold', fontFamily: 'Noto serif' }}>100%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Protection"} />
                                <p className="mb-0" style={{ color: 'goldenrod', fontWeight: 'bold', fontFamily: 'Noto serif' }}>50%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Stability"} />
                                <p className="mb-0" style={{ color: 'goldenrod', fontWeight: 'bold', fontFamily: 'Noto serif' }}>12s</p>
                            </div>
                        </div>
                    </BoonsSection>
                </RoleSectionRow>
                <DescriptionSection>
                    <ul>
                        <li>
                            It’s very hard to pinpoint exact uptime of boons, as bd of inspi can vary a lot, however inspi chrono naturally brings boon extension, meaning the boons he provides to subgroup are very likely to be close to 100%
                        </li>
                        <li>
                            <WikiIcon name={"Protection"} /> Protection only if playing Shield
                        </li>
                        <li>
                            <WikiIcon name={"Aegis"} /> Aegis can be provided every 15s~, or chained (usually 2-3 times in a row)
                        </li>
                        <li>
                            3 stacks of <WikiIcon name={"Stability"} /> Stability every 12s~ (chained up to 2 times)
                        </li>
                    </ul>
                </DescriptionSection>
            </RoleSectionContainer>
            <div style={{ width: '60%', height: 1, borderBottom: '1px solid white', margin: '40px auto 0' }}></div>
            <RoleSectionContainer>
                <RoleSectionRow>
                    <ProviderSection>
                        <ProviderImg src={FirebrandImg} />
                        <ProviderName>
                            <h4 className="mb-0">QUICKBRAND</h4>
                        </ProviderName>
                    </ProviderSection>
                    <BoonsSection>
                        <h4 className="mb-0 text-center">SQUAD</h4>
                        <div className="row justify-content-center mt-2 mb-4">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Stability"} />
                                <p className="mb-0" style={{ color: 'limegreen', fontWeight: 'bold', fontFamily: 'Noto serif' }}>22s~</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Retaliation"} />
                                <p className="mb-0" style={{ color: 'limegreen', fontWeight: 'bold', fontFamily: 'Noto serif' }}>10%</p>
                            </div>
                        </div>
                        <h4 className="mb-0 text-center">SUBGROUP</h4>
                        <div className="row justify-content-center mt-2">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Quickness"} />
                                <p className="mb-0" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif' }}>100%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Fury"} />
                                <p className="mb-0" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif' }}>100%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Might"} />
                                <p className="mb-0" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif' }}>9</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Aegis"} />
                                <p className="mb-0" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif' }}>9s</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Swiftness"} />
                                <p className="mb-0" style={{ color: 'goldenrod', fontWeight: 'bold', fontFamily: 'Noto serif' }}>80%</p>
                            </div>
                        </div>
                    </BoonsSection>
                </RoleSectionRow>
                <DescriptionSection>
                    <ul>
                        <li>
                            <WikiIcon name={"Aegis"} /> Aegis can be chained 2-3 times in a row
                        </li>
                        <li>
                            <WikiIcon name={"Swiftness"} /> Swiftness only if taking <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="9084"></span> (not common)
                        </li>
                        <li>
                            Has access to emergency <WikiIcon name={"Resistance"} /> Resistance (60s cooldown)
                        </li>
                    </ul>
                </DescriptionSection>
            </RoleSectionContainer>
            <div style={{ width: '60%', height: 1, borderBottom: '1px solid white', margin: '40px auto 0' }}></div>
            <RoleSectionContainer>
                <RoleSectionRow>
                    <ProviderSection>
                        <ProviderImg src={FirebrandImg} />
                        <ProviderName>
                            <h4 className="mb-0">HEALBRAND</h4>
                        </ProviderName>
                    </ProviderSection>
                    <BoonsSection>
                        <h4 className="mb-0 text-center">SQUAD</h4>
                        <div className="row justify-content-center mt-2 mb-4">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Stability"} />
                                <p className="mb-0" style={{ color: 'limegreen', fontWeight: 'bold', fontFamily: 'Noto serif' }}>20s</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Retaliation"} />
                                <p className="mb-0" style={{ color: 'limegreen', fontWeight: 'bold', fontFamily: 'Noto serif' }}>20%</p>
                            </div>
                        </div>
                        <h4 className="mb-0 text-center">SUBGROUP</h4>
                        <div className="row justify-content-center mt-2">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Quickness"} />
                                <p className="mb-0" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif' }}>100%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Fury"} />
                                <p className="mb-0" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif' }}>100%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Swiftness"} />
                                <p className="mb-0" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif' }}>100%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Protection"} />
                                <p className="mb-0" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif' }}>30%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Might"} />
                                <p className="mb-0" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif' }}>20</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Aegis"} />
                                <p className="mb-0" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif' }}>9s</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Regeneration"} />
                                <p className="mb-0" style={{ color: 'goldenrod', fontWeight: 'bold', fontFamily: 'Noto serif' }}>100%</p>
                            </div>
                        </div>
                    </BoonsSection>
                </RoleSectionRow>
                <DescriptionSection>
                    <ul>
                        <li>
                            Uptimes can vary, depends on bd, but <WikiIcon name={"Quickness"} /> Quickness is permanent always
                        </li>
                        <li>
                            Has access to bit of <WikiIcon name={"Vigor"} /> Vigor and emergency <WikiIcon name={"Resistance"} /> Resistance  via tomes
                        </li>
                        <li>
                            <WikiIcon name={"Regeneration"} /> Regeneration covered if playing <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="45460"></span> or Mace
                        </li>
                    </ul>
                </DescriptionSection>
            </RoleSectionContainer>
            <div style={{ width: '60%', height: 1, borderBottom: '1px solid white', margin: '40px auto 0' }}></div>
            <RoleSectionContainer>
                <RoleSectionRow>
                    <ProviderSection>
                        <ProviderImg src={RenegadeImg} />
                        <ProviderName>
                            <h4 className="mb-0">ALAREN</h4>
                        </ProviderName>
                    </ProviderSection>
                    <BoonsSection>
                        <h4 className="mb-0 text-center">SQUAD</h4>
                        <div className="row justify-content-center mt-2 mb-4">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Alacrity"} />
                                <p className="mb-0" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif' }}>100%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Stability"} />
                                <p className="mb-0" style={{ color: 'goldenrod', fontWeight: 'bold', fontFamily: 'Noto serif' }}>10s</p>
                            </div>
                        </div>
                        <h4 className="mb-0 text-center">SUBGROUP</h4>
                        <div className="row justify-content-center mt-2">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Protection"} />
                                <p className="mb-0" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif' }}>60%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Retaliation"} />
                                <p className="mb-0" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif' }}>30%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Swiftness"} />
                                <p className="mb-0" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif' }}>100%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"AP"} />
                                <p className="mb-0" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif' }}>100%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Might"} />
                                <p className="mb-0" style={{ color: 'goldenrod', fontWeight: 'bold', fontFamily: 'Noto serif' }}>13</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Swiftness"} />
                                <p className="mb-0" style={{ color: 'goldenrod', fontWeight: 'bold', fontFamily: 'Noto serif' }}>50%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Fury"} />
                                <p className="mb-0" style={{ color: 'goldenrod', fontWeight: 'bold', fontFamily: 'Noto serif' }}>50%</p>
                            </div>
                        </div>
                    </BoonsSection>
                </RoleSectionRow>
                <DescriptionSection>
                    <ul>
                        <li>
                            <WikiIcon name={"Stability"} /> Stability for squad only if playing Dwarf instead of Shiro (not common in pugs)
                        </li>
                        <li>
                            <WikiIcon name={"Might"} /> Might for subgroup can be covered easily, but is not expected by default
                        </li>
                        <li>
                            <WikiIcon name={"Swiftness"} /> Swiftness and <WikiIcon name={"Fury"} /> Fury only if running pack runes (not common)
                        </li>
                    </ul>
                </DescriptionSection>
            </RoleSectionContainer>
            <div style={{ width: '60%', height: 1, borderBottom: '1px solid white', margin: '40px auto 0' }}></div>
            <RoleSectionContainer>
                <RoleSectionRow>
                    <ProviderSection>
                        <ProviderImg src={RenegadeImg} />
                        <ProviderName>
                            <h4 className="mb-0">HEALREN</h4>
                        </ProviderName>
                    </ProviderSection>
                    <BoonsSection>
                        <h4 className="mb-0 text-center">SQUAD</h4>
                        <div className="row justify-content-center mt-2 mb-4">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Alacrity"} />
                                <p className="mb-0" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif' }}>100%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Stability"} />
                                <p className="mb-0" style={{ color: 'goldenrod', fontWeight: 'bold', fontFamily: 'Noto serif' }}>10s</p>
                            </div>
                        </div>
                        <h4 className="mb-0 text-center">SUBGROUP</h4>
                        <div className="row justify-content-center mt-2">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Regeneration"} />
                                <p className="mb-0" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif' }}>45%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Retaliation"} />
                                <p className="mb-0" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif' }}>35%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Might"} />
                                <p className="mb-0" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif' }}>15</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"AP"} />
                                <p className="mb-0" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif' }}>100%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Swiftness"} />
                                <p className="mb-0" style={{ color: 'goldenrod', fontWeight: 'bold', fontFamily: 'Noto serif' }}>50%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Fury"} />
                                <p className="mb-0" style={{ color: 'goldenrod', fontWeight: 'bold', fontFamily: 'Noto serif' }}>50%</p>
                            </div>
                        </div>
                    </BoonsSection>
                </RoleSectionRow>
                <DescriptionSection>
                    <ul>
                        <li>
                            <WikiIcon name={"Stability"} /> Stability for squad only if playing Dwarf instead of Ventari (not common, and you lose <WikiIcon name={"Regeneration"} /> Regeneration)
                        </li>
                        <li>
                            <WikiIcon name={"Retaliation"} /> Retaliation and <WikiIcon name={"Regeneration"} /> Regeneration can be improved by evading attacks
                        </li>
                        <li>
                            <WikiIcon name={"Swiftness"} /> Swiftness and <WikiIcon name={"Fury"} /> Fury only if running pack runes (not common)
                        </li>
                    </ul>
                </DescriptionSection>
            </RoleSectionContainer>
            <div style={{ width: '60%', height: 1, borderBottom: '1px solid white', margin: '40px auto 0' }}></div>
            <RoleSectionContainer>
                <RoleSectionRow>
                    <ProviderSection>
                        <ProviderImg src={TempestImg} />
                        <ProviderName>
                            <h4 className="mb-0 text-center">HEAL TEMPEST<br />(WARHORN)</h4>
                        </ProviderName>
                    </ProviderSection>
                    <BoonsSection>
                        <h4 className="mb-0 text-center">SQUAD</h4>
                        <div className="row justify-content-center mt-2">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Might"} />
                                <p className="mb-0" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif' }}>25</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Regeneration"} />
                                <p className="mb-0" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif' }}>100%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <p className="mb-0 mx-2" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif', textAlign: 'center', alignSelf: 'flex-start' }}>Boon<br />Extension</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <p className="mb-0 mx-2" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif', textAlign: 'center', alignSelf: 'flex-start' }}>Auras</p>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-2 mb-4">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Protection"} />
                                <p className="mb-0" style={{ color: 'limegreen', fontWeight: 'bold', fontFamily: 'Noto serif' }}>85%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Swiftness"} />
                                <p className="mb-0" style={{ color: 'limegreen', fontWeight: 'bold', fontFamily: 'Noto serif' }}>100%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Fury"} />
                                <p className="mb-0" style={{ color: 'limegreen', fontWeight: 'bold', fontFamily: 'Noto serif' }}>100%</p>
                            </div>
                        </div>
                        <h4 className="mb-0 text-center">SUBGROUP</h4>
                        <div className="row justify-content-center mt-2">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <p className="mb-0 mx-2" style={{ color: 'deepskyblue', fontWeight: 'bold', fontFamily: 'Noto serif', textAlign: 'center', alignSelf: 'flex-start' }}>Auras</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WikiIconBig name={"Vigor"} />
                                <p className="mb-0" style={{ color: 'limegreen', fontWeight: 'bold', fontFamily: 'Noto serif' }}>100%</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <p className="mb-0 mx-2" style={{ color: 'limegreen', fontWeight: 'bold', fontFamily: 'Noto serif', textAlign: 'center', alignSelf: 'flex-start' }}>Static<br />Charge</p>
                            </div>
                        </div>
                    </BoonsSection>
                </RoleSectionRow>
                <DescriptionSection>
                    <ul>
                        <li>
                            As there are few variants, uptime of <WikiIcon name={"Protection"} /> Protection, <WikiIcon name={"Swiftness"} /> Swiftness and <WikiIcon name={"Fury"} /> Fury can vary, but the default variant (Air traitline) can upkeep all of the boons
                        </li>
                        <li>
                            Boon extension of 3s on 30s cooldown
                        </li>
                        <li>
                            Auras help with survivability (Frost) and Static charge is 1500~ dps increase for whole subgroup
                        </li>
                        <li>
                            100% Boon duration uptimes
                        </li>
                    </ul>
                </DescriptionSection>
            </RoleSectionContainer>
            <div style={{ width: '60%', height: 1, borderBottom: '1px solid white', margin: '40px auto 0' }}></div>
        </SectionContainer>
    )
}
export default CommProviders