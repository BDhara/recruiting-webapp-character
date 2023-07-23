import React, { useState } from 'react';
import { IAttributes } from './IAttribute';
import { ATTRIBUTE_LIST } from '../../consts';

const Attribute = () => {

    const [attributes, setAttribute] = useState<IAttributes>({
        Strength: 10,
        Dexterity: 10,
        Constitution: 10,
        Intelligence: 10,
        Wisdom: 10,
        Charisma: 10
    });

    const calculateAbilityModifier = (value: number) => {
        return Math.floor((value - 10) / 2);
    }

    const handleAttributeChange = (attribute: keyof IAttributes, value: number) => {
        setAttribute((prevAttr) => ({
            ...prevAttr,
            [attribute]: Math.max(1, Math.min(20, prevAttr[attribute] + value)),
        }));
    };

    return (<div className='character-creator'>
        <h1>Character</h1>
        <div className='attributes'>
            <h2>Attributes</h2>
            {
                ATTRIBUTE_LIST.map((attribute: keyof IAttributes) => {
                    const abilityModifier = calculateAbilityModifier(attributes[attribute]);
                    return (
                        <div key={attribute} className='attribute'>
                            <p>{attribute} : {attributes[attribute]} {" "}
                                | Modifier: {abilityModifier} {" "}
                                <button onClick={() => handleAttributeChange(attribute as keyof IAttributes, 1)}>+</button> {" "}
                                <button onClick={() => handleAttributeChange(attribute as keyof IAttributes, 1)}>-</button>
                            </p>
                        </div>
                    )
                })
            }
        </div>
    </div>)

}
export default Attribute;