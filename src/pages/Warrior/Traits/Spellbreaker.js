import React from 'react';
import TraitCard from '../../../components/TraitCard';
import WikiIcon from '../../../components/WikiIcon';

const Spellbreaker = () => {
    return (
        <>
        <div className="mb-3" data-armory-embed="specializations" data-armory-ids="61" data-armory-61-traits="1062,978,965,964,1038"></div>
        <p>
            Spellbreaker is more utility based specialization, and it brings this utility in a slightly defensive
            way. The trait-line, as it is, currently holds a lot of potential for greatness, but it is sadly held
            down by a few too many restrictions while not having enough amazing modifiers to keep its DPS
            relevant compared to Berserker. Sadly, it is not good enough to be relevant in Raids.
        </p>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Adept</h4>
        </div>
        <TraitCard traitID={2175}>
            <p>
                This is both a blessing and a curse for Spellbreaker. Full Counter is amazing, but the restriction
                of level 1 bursts only really hurts for the weapons whose bursts scale in damage with each level,
                and I personally do not think Full Counter makes up for it, given how well you need to know a
                fight to make full use of it. Mixed feelings on this one.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Adept</h4>
        </div>
        <TraitCard traitID={2107}>
            <p>
                This bonus is amazing given how few bosses get boons at any point in a fight. The 14% modifier
                is the equivalent of 210 Ferocity, which is outstanding. Always run this.
            </p>
        </TraitCard>
        <TraitCard traitID={2153}>
            <p>
                This trait shows a sad trend with traits that apply to Full Counter. They leave you thinking “Is
                that it?”. Protection is strong, yes, but it is not strong enough to be the sole benefit from a trait
                like this. Not good enough, do not take this.
            </p>
        </TraitCard>
        <TraitCard traitID={2140}>
            <p>
                Another trait that is rather mediocre as it holds 0 synergies with anything the Spellbreaker
                wants to do. Yes, the Spellbreaker has access to a lot of stuns and dazes, but the immobilize just
                seems pointless. Do not run this.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Master</h4>
        </div>
        <TraitCard traitID={2162}>
            <p>
                This is usually what people bring Spellbreaker for along with Winds of Disenchantment. It
                synergizes well with Attacker’s Insight, making it potentially give 2 stacks when Disabling a foe
                which is great. It is a pretty good trait.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Master</h4>
        </div>
        <TraitCard traitID={2126}>
            <p>
                This also has great synergy with Dispelling Force and is my personal go-to for bosses where I
                play Spellbreaker and I know I can remove boons. Additional damage is always welcome.
                It is usually recommended to run Sun and Moon Style, but I find that the offhand healing is not
                needed. You can run this on bosses with boons.
            </p>
        </TraitCard>
        <TraitCard traitID={2097}>
            <p>
                Adding to the trend of traits with disappointing additions to Full Counter.
                Slow is a great condition, but the trait still is not good. Applying an additional condition or just
                giving it another minuscule bonus would make it slightly better but for now, it is bad, do not
                take it.
            </p>
        </TraitCard>
        <TraitCard traitID={2095}>
            <p>
                This trait is overrated, the healing with off-hand dagger is nice, but the main hand dagger bonus
                is very lackluster. It is the better option for bosses with no boons that can be stripped, but
                otherwise, Loss Aversion is better. You can run this.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Grandmaster</h4>
        </div>
        <TraitCard traitID={2130}>
            <p>
                Another great bonus. At max stacks, this trait provides 225 Power and Ferocity, which are
                amazing bonuses. The problem is maintaining the stacks, as they are only achieved through
                disables or boon removal. This forces you into a slightly worse rotation to maintain stacks for an
                overall damage increase, but it just feels bad. If boon removal was more prominent on bosses
                this trait would be a lot better, but for now, it is good, but not as good as it could be.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Grandmaster</h4>
        </div>
        <TraitCard traitID={2163}>
            <p>
                Irrelevant in Raids as bosses with multiple enemies present doesn’t have boons to be stripped.
                Do not run this.
            </p>
        </TraitCard>
        <TraitCard traitID={2168}>
            <p>
                The first slightly good Full Counter modifier. Increased damage and Resistance are great, but
                there are rarely any conditions to copy in a raid, as they will be cleansed almost instantly. It is
                alright, but do not run this.
            </p>
        </TraitCard>
        <TraitCard traitID={2060}>
            <p>
                This is the only worthwhile option amongst the grandmaster traits. The damage modifier alone
                makes this worthwhile and it is easy to apply as well. The only problem with this trait is that
                either the bonus should be slightly stronger or the duration slightly longer, because while it is
                good, it is not good enough to carry spell breaker into viability. Always run this.
            </p>
        </TraitCard>
        </>
    );
}

export default Spellbreaker;