import React from 'react'
import WikiIcon from '../../../../WikiIcon'

const CA = () => {

    return (
        <>
            <h5 className="gear-title ranger">Collection is an Active Job</h5>
            <p>
                While collecting shields:
            </p>
            <ul>
                <li>Send your pet to attack the Conjured Amalgamate.</li>
                <li>Use <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31894"/>&nbsp;
                and <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12621"/> while driving by your squad.</li>
                <li>In the last collection phase if you will get knocked down by a slam you can 
                cast <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31503"/> and immediately 
                cancel it to get <WikiIcon name="Stability"/> Stability</li>
            </ul>
            <p>
                Try to give <WikiIcon name="Might"/> to everyone just before the collection phases so they have it for the burn phase.
            </p>
            <br/>
            <h5 className="gear-title ranger">Extra Notes</h5>
            <p>
                Before the clap, if adds are still up and you are placing shields, place the shields early closer to the remaining adds so DPS 
                players can cleave them down before the Two Arms phase.
            </p>
            <p>
                I want to emphasize that it can be hard to regenerate CA here so don't overuse it.
            </p>
        </>
    )
}

export default CA;