import React from 'react'
import WikiIcon from '../../../WikiIcon'

const Staff = () => {
    return(
        <>
            <div class="row justify-content-center" data-armory-embed="skills" data-armory-size="80" data-armory-ids="31710,31889,31535,31700,31496"></div>
            <div class="row mt-3">
                <div class="col-lg-3" data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31710"></div>
                <p class="col-lg-9">This is the description paragraph for this skill...</p>
            </div>
            <div class="row mt-3">
                <div class="col-lg-3" data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31889"></div>
                <p class="col-lg-9">
                    Sends a wisp to your target that will circle around a 130 radius from the center of the hitbox of the target for 5 seconds. Heals any allie it crosses 
                    in it's path for 322 (0.1). Does not have a target limit. 
                    <br/>
                    The fact that this skill does not have a target limit makes it insanely strong as it can hit every player multiple times by rotating around the target. 
                    It has the highest heal per use out of all staff skills and should therefore be used off cooldown when on staff. The fact that the wisp circles the target 
                    is particularly useful when needing to heal the tank which is on the other side of the hitbox. This skill will also greatly help you regenerate Astral Force.
                </p>
            </div>
            <div class="row mt-3">
                <div class="col-lg-3" data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31535"></div>
                <p class="col-lg-9">
                    Become a whisp and travel quickly to the targeted location within 1200 range. On target, heal allies for 1,450 (1.0), create a blast finisher and reduce recharge by 5 seconds if you healed another ally.
                    <br/>
                    This is a very strong bursty heal with many uses. Do not use this skill off-cooldown but use it instead for the following occasions: 
                    1) Burst healing is required i.e. Vale Guardian green explosions. 
                    2) Someone is low health. 
                    3) You need to get somewhere quickly i.e. catching your green on Dhuum. 
                    4) The blast finisher is useful i.e. blasting a light field (like <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31406"></span>) to cleanse conditions. 
                    Note that if combined with <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1064"></span>, this skill can be 
                    used twice nearly simultaneously when swapping to staff.
                </p>
            </div>
            <div class="row mt-3">
                <div class="col-lg-3" data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31700"></div>
                <p class="col-lg-9">
                    Sends vine that progressively hits with 7 consecutive impacts. Gives <WikiIcon name="Immobile"/> Immobilise (1s) to 
                    enemies and cleanses movement-impairing conditions from allies.
                    <br/>
                    With no healing and little damage, this skill is really only used for the following 3 reasons:
                    1) You need to immobilise i.e. Prides on Deimos or Rigom on Samarog.
                    2) You need to cleanse mobility impacting conditions from allies i.e. swiftness that was corrupted on Soulless Horror.
                    3) You have dps classes that benefit from unique conditions on boss which include Power Holosmith and Power Daredevil.
                </p>
            </div>
            <div class="row mt-3">
                <div class="col-lg-3" data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31496"></div>
                <p class="col-lg-9">
                    Creates a wall that grants <WikiIcon name="Regeneration"/> Regeneration (5s) to any number of allies. Lasts for 5 
                    seconds and provides a water combo field. Additionally transforms any enemy projectiles that go through it into 
                    healing bolts that heal allies for 162 (0.025).
                    <br/>
                    The use of this skill is based on priority. If you have enemy projectiles you are responsible for, i.e Matthias jump shards or Largos Twins CC, then save this skill for these moments. 
                    Otherwise, use this skill to fill regeneration uptimes or to blast in it for more heals. It is recommended to place this skill slightly behind the stack. 
                    This allows you to safely blast healing using a combo blast finisher over it by not having it overlap with another field that may have priority (healing blast finishers 
                    have a 240 radius so you will still heal the stack) and it also gives a higher chance for dps players to perform combo finishers in a damaging field.
                </p>
            </div>
        </>
    )
}

export default Staff