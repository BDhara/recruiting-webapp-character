import React from 'react';
import { IAttributes } from './IAttribute';
import { ATTRIBUTE_LIST } from '../../consts';

interface AttributeProps {
    attributes: IAttributes;
    onAttributeChange: (attribute: keyof IAttributes, value: number) => void;
}

const Attribute: React.FC<AttributeProps> = ({ attributes, onAttributeChange }) => {

    const calculateAbilityModifier = (value: number) => {
        return Math.floor((value - 10) / 2);
    }

    return (
        <div className='attributes'>
            <h2>Attributes</h2>
            {
                ATTRIBUTE_LIST.map((attribute: keyof IAttributes) => {
                    const abilityModifier = calculateAbilityModifier(attributes[attribute]);
                    return (
                        <div key={attribute} className='attribute'>
                            <p>{attribute} : {attributes[attribute]} {" "}
                                | Modifier: {abilityModifier} {" "}
                                <button onClick={() => onAttributeChange(attribute as keyof IAttributes, 1)}>+</button> {" "}
                                <button onClick={() => onAttributeChange(attribute as keyof IAttributes, -1)}>-</button>
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Attribute;