import React, { useState, useLayoutEffect, useEffect } from "react";
import NavTabs from '../../components/NavTabs';
import TabPane from '../../components/TabPane';
import GearCard from '../../components/GearCard';
import SectionIntro from '../../components/SectionIntro';
import { SectionContainer } from './styles'
import Weaponswap from '../../assets/icons/weaponswap.png';

const DhGear = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const [armorySize, setArmorySize] = useState(0)

    useLayoutEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        handleResize()
    }, [])

    useEffect(() => {
        if (width <= 500) {
            setArmorySize(35)
        } else {
            setArmorySize(60)
        }
    }, [width])

    return (
        <SectionContainer>
            <SectionIntro>
                <p>
                    Scepter can be replaced by sword in any of the below scenarios. Perfect Inscriptions and Virtues have few gear options, depending on your other traits and Spotter.
                </p>
            </SectionIntro>
            <NavTabs tabNames={["Standard", "Perfect Insctriptions (signet share)", "Virtues"]} hrefs={["dh-standard-gear", "dh-pi-gear", "dh-virtues-gear"]} gameClass="dragonhunter">
                <TabPane tabName="dh-standard-gear" active="true">
                    <GearCard text={["No ", <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1016"></span>, " required"]}>
                        <h5 className="gear-title dragonhunter">Weapons &#38; Sigils</h5>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[46769, 24615, 46761, 24868]}></span>
                        </div>
                        <p className="row justify-content-center text-center">
                            Berserker's Scepter + Berserker's Focus<br />
                            Force and Impact Sigils
                        </p>
                        <div className="text-center mb-3">
                            <img src={Weaponswap} width='40' height='40' />
                        </div>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[46762, 24615, 24868]}></span>
                        </div>
                        <p className="row justify-content-center text-center">
                            Berserker's Greatsword<br />
                            Force and Impact Sigils
                        </p>
                        <h5 className="gear-title dragonhunter">Armor &#38; Runes</h5>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[48075, 48077, 48073, 48074, 48076, 48072]}></span>
                        </div>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[24836, 24836, 24836, 24836, 24836, 24836]}></span>
                        </div>
                        <p className="row justify-content-center text-center">Full Berserker's with Scholar Runes</p>
                        <h5 className="gear-title dragonhunter">Trinkets</h5>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[49391, 39233, 39232, 39272, 37086, 37075]}></span>
                        </div>
                        <p className="row justify-content-center">Full Berserker's</p>
                        <h5 className="gear-title dragonhunter">Consumables</h5>
                        <div className="row justify-content-center mb-3">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[41569, 78305]}></span>
                        </div>
                    </GearCard>
                </TabPane>
                <TabPane tabName="dh-pi-gear">
                    <GearCard text={[<span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="579"></span>, " ", <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="566"></span>, " with ", <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1016"></span>]}>
                        <p>
                            <h5 className="gear-title dragonhunter">Weapons &#38; Sigils</h5>
                            <div className="row justify-content-center">
                                <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[46769, 24615, 46761, 24618]}></span>
                            </div>
                            <p className="row justify-content-center text-center">
                                Berserker's Scepter + Berserker's Focus<br />
                            Force and Accuracy Sigils
                        </p>
                            <div className="text-center mb-3">
                                <img src={Weaponswap} width='40' height='40' />
                            </div>
                            <div className="row justify-content-center">
                                <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[46762, 24615, 24618]}></span>
                            </div>
                            <p className="row justify-content-center text-center">
                                Berserker's Greatsword<br />
                            Force and Accuracy Sigils
                        </p>
                            <h5 className="gear-title dragonhunter">Armor &#38; Runes</h5>
                            <div className="row justify-content-center">
                                <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[48075, 48077, 48073, 48074, 48076, 48072]}></span>
                            </div>
                            <div className="row justify-content-center">
                                <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[24836, 24836, 24836, 24836, 24836, 24836]}></span>
                            </div>
                            <p className="row justify-content-center text-center">Full Berserker's with Scholar Runes</p>
                            <h5 className="gear-title dragonhunter">Trinkets</h5>
                            <div className="row justify-content-center">
                                <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[49391, 39233, 39232, 39272, 37086, 37075]}></span>
                            </div>
                            <p className="row justify-content-center">Full Berserker's</p>
                            <h5 className="gear-title dragonhunter">Consumables</h5>
                            <div className="row justify-content-center mb-3">
                                <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[41569, 78305]}></span>
                            </div>
                        </p>
                    </GearCard>
                    <GearCard text={[<span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="579"></span>, " ", <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="566"></span>, " without ", <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1016"></span>]}>
                        <h5 className="gear-title dragonhunter">Weapons &#38; Sigils</h5>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[46769, 24615, 46761, 24618]}></span>
                        </div>
                        <p className="row justify-content-center text-center">
                            Berserker's Scepter + Berserker's Focus<br />
                            Force and Accuracy Sigils
                        </p>
                        <div className="text-center mb-3">
                            <img src={Weaponswap} width='40' height='40' />
                        </div>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[46762, 24615, 24618]}></span>
                        </div>
                        <p className="row justify-content-center text-center">
                            Berserker's Greatsword<br />
                            Force and Accuracy Sigils
                        </p>
                        <h5 className="gear-title dragonhunter">Armor &#38; Runes</h5>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[48075, 48077, 48073, 48074, 48076, 48072]}></span>
                        </div>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[24836, 24836, 24836, 24836, 24836, 24836]}></span>
                        </div>
                        <p className="row justify-content-center text-center">Full Berserker's with Scholar Runes</p>
                        <h5 className="gear-title dragonhunter">Trinkets</h5>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[49391, 39233, 77422, 39272, 37086, 78907]} data-armory-77422-stat="753" data-armory-78907-stat="753"></span>
                        </div>
                        <p className="row justify-content-center">Assassin's 1 Accessory and 1 Ring, rest Berserker's</p>
                        <h5 className="gear-title dragonhunter">Consumables</h5>
                        <div className="row justify-content-center mb-3">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[41569, 78305]}></span>
                        </div>
                    </GearCard>
                    <GearCard text={[<span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="579"></span>, " ", <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="574"></span>, " with ", <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1016"></span>]}>
                        <h5 className="gear-title dragonhunter">Weapons &#38; Sigils</h5>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[46769, 24615, 46761, 24618]}></span>
                        </div>
                        <p className="row justify-content-center text-center">
                            Berserker's Scepter + Berserker's Focus<br />
                            Force and Accuracy Sigils
                        </p>
                        <div className="text-center mb-3">
                            <img src={Weaponswap} width='40' height='40' />
                        </div>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[46762, 24615, 24618]}></span>
                        </div>
                        <p className="row justify-content-center text-center">
                            Berserker's Greatsword<br />
                            Force and Accuracy Sigils
                        </p>
                        <h5 className="gear-title dragonhunter">Armor &#38; Runes</h5>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[48129, 48131, 48073, 48128, 48076, 48126]}></span>
                        </div>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[24836, 24836, 24836, 24836, 24836, 24836]}></span>
                        </div>
                        <p className="row justify-content-center text-center">Berserker's Chest and Leggings, rest Assassin's with Scholar Runes</p>
                        <h5 className="gear-title dragonhunter">Trinkets</h5>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[49391, 39233, 39232, 39272, 37086, 37075]}></span>
                        </div>
                        <p className="row justify-content-center">Full Berserker's</p>
                        <h5 className="gear-title dragonhunter">Consumables</h5>
                        <div className="row justify-content-center mb-3">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[41569, 78305]}></span>
                        </div>
                    </GearCard>
                    <GearCard text={[<span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="579"></span>, " ", <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="574"></span>, " without ", <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1016"></span>]}>
                        <h5 className="gear-title dragonhunter">Weapons &#38; Sigils</h5>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[46769, 24615, 46761, 24868]}></span>
                        </div>
                        <p className="row justify-content-center text-center">
                            Berserker's Scepter + Berserker's Focus<br />
                            Force and Impact Sigils
                        </p>
                        <div className="text-center mb-3">
                            <img src={Weaponswap} width='40' height='40' />
                        </div>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[46762, 24615, 24868]}></span>
                        </div>
                        <p className="row justify-content-center text-center">
                            Berserker's Greatsword<br />
                            Force and Impact Sigils
                        </p>
                        <h5 className="gear-title dragonhunter">Armor &#38; Runes</h5>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[48075, 48077, 48073, 48074, 48076, 48072]}></span>
                        </div>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[24818, 24818, 24818, 24818, 24818, 24818]}></span>
                        </div>
                        <p className="row justify-content-center text-center">Full Berserker's with Thief Runes</p>
                        <h5 className="gear-title dragonhunter">Trinkets</h5>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[49391, 39233, 39232, 39272, 37086, 37075]}></span>
                        </div>
                        <p className="row justify-content-center">Full Berserker's</p>
                        <h5 className="gear-title dragonhunter">Consumables</h5>
                        <div className="row justify-content-center mb-3">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[41569, 78305]}></span>
                        </div>
                    </GearCard>
                </TabPane>
                <TabPane tabName="dh-virtues-gear">
                    <GearCard text={["With ", <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1016"></span>]}>
                        <h5 className="gear-title dragonhunter">Weapons &#38; Sigils</h5>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[46769, 24615, 46761, 24618]}></span>
                        </div>
                        <p className="row justify-content-center text-center">
                            Berserker's Scepter + Berserker's Focus<br />
                            Force and Accuracy Sigils
                        </p>
                        <div className="text-center mb-3">
                            <img src={Weaponswap} width='40' height='40' />
                        </div>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[46762, 24615, 24618]}></span>
                        </div>
                        <p className="row justify-content-center text-center">
                            Berserker's Greatsword<br />
                            Force and Accuracy Sigils
                        </p>
                        <h5 className="gear-title dragonhunter">Armor &#38; Runes</h5>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[48075, 48077, 48073, 48074, 48076, 48072]}></span>
                        </div>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[24818, 24818, 24818, 24818, 24818, 24818]}></span>
                        </div>
                        <p className="row justify-content-center text-center">Full  Berserker's with Thief Runes</p>
                        <h5 className="gear-title dragonhunter">Trinkets</h5>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[49391, 39233, 39232, 39272, 37086, 37075]}></span>
                        </div>
                        <p className="row justify-content-center">Full Berserker's</p>
                        <h5 className="gear-title dragonhunter">Consumables</h5>
                        <div className="row justify-content-center mb-3">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[41569, 78305]}></span>
                        </div>
                    </GearCard>
                    <GearCard text={["Without ", <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1016"></span>]}>
                        <h5 className="gear-title dragonhunter">Weapons &#38; Sigils</h5>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[46769, 24615, 46761, 24618]}></span>
                        </div>
                        <p className="row justify-content-center text-center">
                            Berserker's Scepter + Berserker's Focus<br />
                            Force and Accuracy Sigils
                        </p>
                        <div className="text-center mb-3">
                            <img src={Weaponswap} width='40' height='40' />
                        </div>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[46762, 24615, 24618]}></span>
                        </div>
                        <p className="row justify-content-center text-center">
                            Berserker's Greatsword<br />
                            Force and Accuracy Sigils
                        </p>
                        <h5 className="gear-title dragonhunter">Armor &#38; Runes</h5>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[48075, 48077, 48127, 48074, 48130, 48072]}></span>
                        </div>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[24818, 24818, 24818, 24818, 24818, 24818]}></span>
                        </div>
                        <p className="row justify-content-center text-center">Assassin's Chest and Leggings, rest  Berserker's with Thief Runes</p>
                        <h5 className="gear-title dragonhunter">Trinkets</h5>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[49391, 39233, 39232, 39272, 37086, 37075]}></span>
                        </div>
                        <p className="row justify-content-center">Full Berserker's</p>
                        <h5 className="gear-title dragonhunter">Consumables</h5>
                        <div className="row justify-content-center mb-3">
                            <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[41569, 78305]}></span>
                        </div>
                    </GearCard>
                </TabPane>
            </NavTabs>
        </SectionContainer>
    )
}
export default DhGear