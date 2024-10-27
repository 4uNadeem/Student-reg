import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const PersonalInfoSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    mobileNo: Yup.string().required('Mobile number is required'),
    address: Yup.string().required('Mobile number is required'),

});

const PersonalInfo = ({ onNext }) => {

    // function handleSubmit(values) {
    //     console.log(values);
    //     onNext()

    // }

    return (


        <Formik
            initialValues={{ firstName: '', lastName: '', mobileNo: '' }}
            validationSchema={PersonalInfoSchema}
            onSubmit={onNext}
        >
            {({ errors, touched }) => (
                <Form>
                    <label>First Name *</label>
                    <Field name="firstName" />
                    <ErrorMessage name="firstName" component="div" />

                    <label>Last Name *</label>
                    <Field name="lastName" />
                    <ErrorMessage name="lastName" component="div" />

                    <label>Mobile No *</label>
                    <Field name="mobileNo" />
                    <ErrorMessage name="mobileNo" component="div" />
                    <label>Address No *</label>
                    <Field name="address" />
                    <ErrorMessage name="addess" component="div" />

                    <button type="submit">Next</button>
                </Form>
            )}
        </Formik>
    );

}

export default PersonalInfo;
