import React from 'react';
import { IAttributes } from '../Attributes/IAttribute';
import { CLASS_LIST } from "../../consts";

interface ClassesProps {
    attributes: IAttributes;
    onClassSelection: (className: string) => void;
    selectedClass: string | null;
    classRequirements: IAttributes | null;
    onClassRequirements: React.Dispatch<React.SetStateAction<IAttributes | null>>;
}

const Classes: React.FC<ClassesProps> = ({ attributes, onClassSelection, selectedClass, classRequirements, onClassRequirements }) => {

    const renderClassRequirements = () => {
        if (selectedClass && classRequirements) {
            return (
                <div className="selected-class">
                    <h2>Selected Class: {selectedClass}</h2>
                    <ul>
                        {Object.entries(CLASS_LIST[selectedClass as keyof typeof CLASS_LIST]).map(([attribute, value]: [string, number]) => (
                            <li key={attribute}>
                                {attribute}: {" "} {value}
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => onClassRequirements(null)}>Close</button>
                </div>
            )
        }
    }

    return (
        <div className='container'>
            <div className="classes">
                <h2>Classes</h2>
                {Object.entries(CLASS_LIST).map(([className, classRequirements]) => {

                    const meetsRequirements = Object.entries(classRequirements).every(
                        ([attribute, value]) => attributes[attribute as keyof IAttributes] >= value
                    );

                    return (
                        <div
                            key={className}
                            className={`class-header ${meetsRequirements ? 'available' : ''}`}
                            onClick={() => onClassSelection(className)}
                        >
                            {className}
                        </div>
                    );

                })}
            </div>
            {renderClassRequirements()}
        </div>
    );
};

export default Classes;
