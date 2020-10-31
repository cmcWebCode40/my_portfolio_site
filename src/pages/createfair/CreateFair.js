import React, { useEffect, useState } from 'react';
import CreateFair from '../../components/createfairdashboard/forms/createfair/CreateFair';
import FairPlans from '../../components/createfairdashboard/forms/fairplans/FairPlans';
import FairPricing from '../../components/createfairdashboard/forms/fairpricing/FairPricing';
import FairSpeaker from '../../components/createfairdashboard/forms/fairSpeaker/FairSpeaker';
import Vendor from '../../components/createfairdashboard/forms/vendor/Vendor';
// import Table from '../../components/createfairdashboard/table/Table';
import ModalDialog from '../../components/modal/Modal';

function getSteps() {
  return ['Fair Information', 'Fair Plans', 'Fair Pricing', 'Fair Speaker', 'Vendor Setting'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <CreateFair />;
    case 1:
      return <FairPlans />;
    case 2:
      return <FairPricing />;
    case 3:
      return <FairSpeaker />;
    case 4:
      return <Vendor />;
    default:
      return 'Unknown stepIndex';
  }
}

const CreateFairView = () => {
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  const allSteps = getSteps();

  const onOpenModal = () => setOpen(true);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {

  }, []);

  return (
    <div className="">
      <h3>Hi Charles</h3>
      <button type="button" onClick={onOpenModal}>Open modal</button>
      <ModalDialog open={open} setOpen={setOpen}>
        <div>
          <div className="p-2">
            <ul className="nav nav-tabs">
              <li className="nav-item row">
                {allSteps.map((step, index) => (
                  <a key={step} href="##" className={index === activeStep ? 'nav-link active col' : 'nav-link col'}>{step}</a>
                ))}
              </li>
            </ul>
          </div>
          <div>
            {getStepContent(activeStep)}
          </div>
          <div>
            <button
              disabled={activeStep === 0}
              onClick={handleBack}
              type="button"
            >
              Back
            </button>
            <button type="button" variant="contained" color="primary" onClick={handleNext}>
              {activeStep === allSteps.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      </ModalDialog>
    </div>
  );
};

export default CreateFairView;
