import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
const FinalReview = ({ formData, onSubmit }) => {

    console.log("finalData", formData)
    return (
        <div className="final-review">
            <h2>Review Your Information</h2>
            <ul>
            <li> Name : {formData?.firstName} {" "} {formData?.lastName}</li>
            <li> Phone No: {formData?.mobileNo}</li>
            <li> Address: {formData?.address}</li>
            </ul>
            {/* {formData} */}
            <button onClick={onSubmit} className="submit-button">Submit</button>
        </div>
    );
}

export default FinalReview;
