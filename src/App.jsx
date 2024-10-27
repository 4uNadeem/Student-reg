import React, { useState } from 'react';
import Welcome from './components/WelCome';
import PersonalInfo from "./components/PersonalInfo"
import AcademicInterests from './components/AcademicInterests';
import DocumentUpload from './components/DocumentUpload';
import Review from './components/Review';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (values) => {
    toast("data save Successfully")
    setFormData({ ...formData, ...values });
    setStep(step + 1);

  };

  const handleSubmit = () => {
    toast.success("Form submit successfully")
    setStep(1)
  };


  return (
    <div className="App">
      {/* <Welcome /> */}
      {step === 1 && <Welcome onNext={() => setStep(2)} />}
      {step === 2 && <PersonalInfo onNext={(values) => handleNext(values)} />}
      {step === 3 && <AcademicInterests onNext={(values) => handleNext(values)} />}
      {step === 4 && <DocumentUpload onNext={(values) => handleNext(values)} />}

      {step === 5 && <Review formData={formData} onSubmit={handleSubmit} />}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />
    </div>
  );
};

export default App;
