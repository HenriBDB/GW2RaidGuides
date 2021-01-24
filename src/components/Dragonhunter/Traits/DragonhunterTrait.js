import React from 'react';
import { Link } from 'react-scroll';
import TraitCard from '../../../components/TraitCard';
import WikiIcon from '../../../components/WikiIcon';

const DragonhunterTrait = ({ showRotation }) => {
    return (
        <>
            <div className="mb-3" data-armory-embed="specializations" data-armory-ids="27" data-armory-27-traits="1848,1898,1896,1835,1926,1955"></div>
            <p>
                Dragonhunter is your elite specialization which focuses on trap skills and grants upgraded versions of virtues.
            </p>
            <div className="row justify-content-center">
                <h4 className="mb-0">Minor Adept</h4>
            </div>
            <TraitCard traitID={1848} gameClass="dragonhunter">
                <p>
                    Replaces your standard Guardian <a href="https://wiki.guildwars2.com/wiki/Virtue" target="_blank" rel="noopener noreferrer" className="dhlink">Virtues</a> with <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="29887" className="dhskill"></span>, <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="30225" className="dhskill"></span> and <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="30039" className="dhskill"></span>.
                </p>
            </TraitCard>
            <div className="row justify-content-center">
                <h4 className="mb-0">Major Adept</h4>
            </div>
            <TraitCard traitID={1898} gameClass="dragonhunter">
                <p>
                    Reduces <WikiIcon name={"Recharge"} /> cooldown of your traps by 20%. Your traps now apply <WikiIcon name={"Slow"} /> Slow (1,5s) to enemies (this trait makes your power Chronos happy).
                </p>
            </TraitCard>
            <div className="row justify-content-center">
                <h4 className="mb-0">Minor Master</h4>
            </div>
            <TraitCard traitID={1896} gameClass="dragonhunter">
                <p>
                    Reduces <WikiIcon name={"Recharge"} /> cooldown of <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="29887" className="dhskill"></span> after succesfully blocking an attack (by 3s per block).
               </p>
            </TraitCard>
            <div className="row justify-content-center">
                <h4 className="mb-0">Major Master</h4>
            </div>
            <TraitCard traitID={1835} gameClass="dragonhunter">
                <p>
                    Grants 10% damage increase to enemies affected by <WikiIcon name={"Crippled"} /> Cripple (which is almost permanent in most raid scenarios).
                </p>
            </TraitCard>
            <div className="row justify-content-center">
                <h4 className="mb-0">Minor Grandmaster</h4>
            </div>
            <TraitCard traitID={1926} gameClass="dragonhunter">
                <p>
                    Grants damage increase based on your distance to the enemy. The further you stay from the boss, the more damage increase you will get (min 5%, max 15%). Given that as a Dragonhunter you will mostly be very close to the boss (especially when spinning inside the hitbox with your GS skills), you will get 5% damage increase most of the time.
                </p>
            </TraitCard>
            <div className="row justify-content-center">
                <h4 className="mb-0">Major Grandmaster</h4>
            </div>
            <TraitCard traitID={1955} gameClass="dragonhunter">
                <p>
                    Grants 15% damage increase to enemies tethered by your <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="29887" className="dhskill"></span>. Increases the duration of your active <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="29887" className="dhskill"></span> effect by 66% (which means that 15% damage increase lasts longer). Applies 10s of <WikiIcon name={"Vulnerability"} /> Vulnerability to enemies.
                </p>
                <p>
                    Your rotation revolves around this trait - you want to cast all your big dps skills when this damage increase is active. You will find more details in
                    <Link to="dh-section-rotation" smooth={true} duration={1000} onClick={showRotation}>
                        <span
                            style={{ color: "#69CCE7", cursor: "pointer" }}>
                            &nbsp;Rotation
                        </span>
                    </Link>.
                </p>
            </TraitCard>
        </>
    );
}

export default DragonhunterTrait;