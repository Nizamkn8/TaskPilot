import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/tasks/taskSlice";

import Step1Info from "./Step1Info";
import Step2Meta from "./Step2Meta";
import Step3Review from "./Step3Review";
import Modal from "../common/Modal";

const CreateTaskWizrd = ({ modalOpen, modalClose }) => {
  const dispatch = useDispatch();

  const [step, setStep] = useState(1);
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Medium",
    deadline: ""
  });

  const updateField = (key, value) => {
    setTask(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const next = () => setStep(prev => prev + 1);
  const back = () => setStep(prev => prev - 1);

  // ✅ Submit logic lives HERE
  const handleAdd = () => {
    dispatch(
      addTask({
        id: Date.now().toString(),
        ...task,
        isCompleted: false
      })
    );

    modalClose();   // close modal
    resetWizard();  // reset state
  };

  const resetWizard = () => {
    setStep(1);
    setTask({
      title: "",
      description: "",
      priority: "Medium",
      deadline: ""
    });
  };

  // ✅ Reset when modal closes
  useEffect(() => {
    if (!modalOpen) {
      resetWizard();
    }
  }, [modalOpen]);

  return (
    <Modal modalOpen={modalOpen} modalClose={modalClose} >
      {step === 1 && (
        <Step1Info
          task={task}
          next={next}
          updateField={updateField}
        />
      )}

      {step === 2 && (
        <Step2Meta
          task={task}
          next={next}
          back={back}
          updateField={updateField}
        />
      )}

      {step === 3 && (
        <Step3Review
          task={task}
          back={back}
          onSubmit={handleAdd}   //trigger submit
        />
      )}
    </Modal>
  );
};

export default CreateTaskWizrd;
