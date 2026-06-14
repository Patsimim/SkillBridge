"use client";

import { useState, useCallback } from "react";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import {
  STEPS,
  Step,
  BecomeHelperFormData,
  defaultFormData,
  Step1Data,
} from "../types/becomeHelperTypes";
import StepIndicator from "./StepIndicator";
import Step1BasicInfo from "./Step1BasicInfo";
import styles from "../becomeHelper.module.css";

interface BecomeHelperModalProps {
  onClose: () => void;
}

export default function BecomeHelperModal({ onClose }: BecomeHelperModalProps) {
  const [currentStep, setCurrentStep] = useState<Step>("BasicInfo");
  const [formData, setFormData] =
    useState<BecomeHelperFormData>(defaultFormData);

  const currentIndex = STEPS.indexOf(currentStep);
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === STEPS.length - 1;

  const updateStep1 = useCallback((updated: Partial<Step1Data>) => {
    setFormData((prev) => ({
      ...prev,
      step1: { ...prev.step1, ...updated },
    }));
  }, []);

  function handleNext() {
    if (!isLast) {
      setCurrentStep(STEPS[currentIndex + 1]);
    }
  }

  function handleBack() {
    if (!isFirst) {
      setCurrentStep(STEPS[currentIndex - 1]);
    }
  }

  function isStep1Valid() {
    const { fullName, studentId, university, course } = formData.step1;
    return (
      fullName.trim().length > 0 &&
      studentId.trim().length > 0 &&
      university.trim().length > 0 &&
      course.length > 0
    );
  }

  function isContinueDisabled() {
    if (currentStep === "BasicInfo") return !isStep1Valid();
    return false;
  }

  function renderStep() {
    switch (currentStep) {
      case "BasicInfo":
        return <Step1BasicInfo data={formData.step1} onChange={updateStep1} />;
      // Steps 2–5 will be added incrementally
      default:
        return (
          <div className={styles.stepBody}>
            <div className={styles.stepLeft}>
              <p className={styles.stepMeta}>Coming soon</p>
              <h2 className={styles.stepTitle}>{currentStep}</h2>
            </div>
            <div className={styles.stepRight} />
          </div>
        );
    }
  }

  return (
    <div
      className={styles.overlay}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className={styles.modal}
        role='dialog'
        aria-modal='true'
        aria-label='Become a Helper'
      >
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>Become a Helper</h1>
          <button
            type='button'
            onClick={onClose}
            className={styles.closeBtn}
            aria-label='Close modal'
          >
            <X size={16} strokeWidth={2} />
          </button>
        </div>

        {/* Stepper */}
        <StepIndicator currentStep={currentStep} />

        {/* Active step content */}
        {renderStep()}

        {/* Footer */}
        <div className={styles.footer}>
          {isFirst ? (
            <button
              type='button'
              onClick={onClose}
              className={styles.btnCancel}
            >
              Cancel
            </button>
          ) : (
            <button
              type='button'
              onClick={handleBack}
              className={styles.btnBack}
            >
              <ArrowLeft size={14} strokeWidth={2} />
              Back
            </button>
          )}

          <button
            type='button'
            onClick={handleNext}
            disabled={isContinueDisabled()}
            className={styles.btnContinue}
          >
            {isLast ? "Submit Application" : "Continue"}
            {!isLast && <ArrowRight size={14} strokeWidth={2} />}
          </button>
        </div>
      </div>
    </div>
  );
}
