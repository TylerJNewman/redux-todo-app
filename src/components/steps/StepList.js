import React from "react";
// Components
import StepListItemContainer from "./StepListItemContainer.js";
import StepForm from "./StepForm.js";

const StepList = ({ steps = [], todo_id, receiveStep }) => {
  const stepItems = steps.map(step => (
    <StepListItemContainer key={step.id} step={step} />
  ));

  return (
    <div>
      <ul className="step-list">{stepItems}</ul>
      <StepForm todo_id={todo_id} receiveStep={receiveStep} />
    </div>
  );
};

export default StepList;
