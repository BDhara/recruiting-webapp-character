import React from 'react';
import { SKILL_LIST } from '../../consts';
import { ISkills } from './ISkill';
import { IAttributes } from '../Attributes/IAttribute';

interface SkillsProps {
    skills: ISkills;
    attributes: IAttributes
    onSkillPointsChange: (skillName: string, points: number) => void;
}

const Skills: React.FC<SkillsProps> = ({ skills, attributes, onSkillPointsChange }) => {

    
    const intelligenceModifier = Math.floor((attributes.Intelligence - 10) / 2);
    const skillPoints = 10 + 4 * intelligenceModifier;

    // handle skill points update
    const handleSkillPointsChange = (skillName: string, points: number) => {
        const updatedPoints = Math.max(0, Math.min(skillPoints, points));
        onSkillPointsChange(skillName, updatedPoints);
    };

    return (
        <div className="skills">
            <h2>Skills</h2>
            {SKILL_LIST.map((skill: { name: string; attributeModifier: keyof IAttributes }) => {
                const { name, attributeModifier } = skill;
                const skillPointsSpent = skills[name] || 0;
                const abilityModifier = Math.floor((attributes[attributeModifier] - 10) / 2);
                const totalSkillValue = skillPointsSpent + abilityModifier;

                return (
                    <div key={name} className="skill">
                        <p>
                            {name} - points: {skills[name] || 0}{' '}
                            <button onClick={() => handleSkillPointsChange(name, skillPointsSpent + 1)}>+</button>{' '}
                            <button onClick={() => handleSkillPointsChange(name, skillPointsSpent - 1)}>-</button>{' '}
                            Modifier ({attributeModifier}): {abilityModifier} Total: {totalSkillValue}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default Skills;
