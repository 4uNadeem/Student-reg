import React, { useState } from 'react';

const AcademicInterests = ({ onNext }) => {
    const [selectedTest, setSelectedTest] = useState(null);

    return (
        <form onSubmit={onNext}>
            <label>Interested Country</label>
            <select name="interestedCountry">
                <option value="US">India</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
            </select>

            <label>English Proficiency Test</label>
            <select name="proficiencyTest" onChange={e => setSelectedTest(e.target.value)}>
                <option value="TOEFL">TOEFL</option>
                <option value="IELTS">IELTS</option>
                <option value="None">None</option>
            </select>

            {selectedTest === 'None' && (
                <div className="conditional-field">
                    <label>Provide additional board details</label>
                    <input type="text" name="boardDetails" />
                </div>
            )}

            <button type="submit">Next</button>
        </form>
    );
};

export default AcademicInterests;
