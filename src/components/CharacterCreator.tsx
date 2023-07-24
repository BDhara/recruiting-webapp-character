import React, { useState } from 'react';
import Attribute from '../components/Attributes/Attribute';
import { IAttributes } from './Attributes/IAttribute';
import { CLASS_LIST } from '../consts';
import Classes from './Classes/Classes';
import { ISkills } from './Skills/ISkill';
import Skills from './Skills/Skills';

const CharacterCreator = () => {

    // state variable for storing the selected class
    const [selectedClass, setSelectedClass] = useState<string | null>(null);

    // state variable for storing class requirements
    const [classRequirements, setClassRequirements] = useState(null);

    // state variables for attributes
    const [attributes, setAttributes] = useState<IAttributes>({
        Strength: 10,
        Dexterity: 10,
        Constitution: 10,
        Intelligence: 10,
        Wisdom: 10,
        Charisma: 10,
    });

    // variable to store skills and points
    const [skills, setSkills] = useState<ISkills>({});

    // handle skill points update
    const handleSkillPointsChange = (skillName: string, points: number) => {
        setSkills((prevSkills: ISkills) => ({
            ...prevSkills,
            [skillName]: points,
        }));
    };

    // increment/decrement attribute value
    const handleAttributeChange = (attribute: keyof IAttributes, value: number) => {
        setAttributes((prevAttributes) => ({
            ...prevAttributes,
            [attribute]: Math.max(1, Math.min(20, prevAttributes[attribute] + value)),
        }));
    };

    // handle class selection
    const handleClassSelection = (className: string) => {
        setSelectedClass(className);
        setClassRequirements(CLASS_LIST[className as keyof typeof CLASS_LIST]);
    };

    return (
        <div className="character-creator">
            <h1>Character</h1>
            <Attribute attributes={attributes} onAttributeChange={handleAttributeChange} />

            <Classes attributes={attributes} onClassSelection={handleClassSelection} selectedClass={selectedClass} classRequirements={classRequirements} onClassRequirements={setClassRequirements} />

            <Skills skills={skills} attributes={attributes} onSkillPointsChange={handleSkillPointsChange} />

        </div>
    );
};

export default CharacterCreator;
