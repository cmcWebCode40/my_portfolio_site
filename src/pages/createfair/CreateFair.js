import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CreateFair from '../../components/createfairdashboard/forms/createfair/CreateFair';
import FairPlans from '../../components/createfairdashboard/forms/fairplans/FairPlans';
import FairPricing from '../../components/createfairdashboard/forms/fairpricing/FairPricing';
import FairSpeaker from '../../components/createfairdashboard/forms/fairSpeaker/FairSpeaker';
import Vendor from '../../components/createfairdashboard/forms/vendor/Vendor';
import ModalDialog from '../../components/modal/Modal';
import Overview from '../../components/createfairdashboard/fairoverview/Overview';
import { getUserData } from '../../utils/functions/userAuth';

function getSteps() {
  return [' Information', ' Pricing', ' Speaker', ' Plans', 'Vendor Setting'];
}

const CreateFairView = () => {
  const [open, setOpen] = useState(false);
  const [fairId, setFairId] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const useName = getUserData('firstname');

  const allSteps = getSteps();
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <CreateFair
            setFairId={setFairId}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        );
      case 1:
        return (
          <FairPricing
            fairId={fairId}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        );
      case 2:
        return (
          <FairSpeaker
            fairId={fairId}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        );
      case 3:
        return (
          <FairPlans
            fairId={fairId}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        );
      case 4:
        return (
          <Vendor
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        );
      default:
        return 'Unknown stepIndex';
    }
  }

  const onOpenModal = () => setOpen(true);

  useEffect(() => {

  }, []);

  return (
    <div className="">
      <h3>
        Hi
        {' '}
        {useName}
      </h3>
      <button type="button" className="btn btn-primary" onClick={onOpenModal}>
        Create Fair
        {' '}
        <FontAwesomeIcon icon={['fa', 'plus-circle']} className="text-white" />
      </button>
      <ModalDialog open={open} setOpen={setOpen}>
        <div>
          <div className="p-2">
            <ul className="nav nav-tabs">
              <li className="nav-item row">
                {allSteps.map((step, index) => (
                  <a
                    key={step}
                    href="##"
                    className={index === activeStep ? 'nav-link active col' : 'nav-link col'}
                  >
                    {step}

                  </a>
                ))}
              </li>
            </ul>
          </div>
          <div>
            {getStepContent(activeStep)}
          </div>
        </div>
      </ModalDialog>
      <div>
        <Overview />
      </div>
    </div>
  );
};

export default CreateFairView;
