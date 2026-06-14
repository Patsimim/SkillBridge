"use client";

import { useState, useCallback } from "react";
import { X, ArrowLeft, ArrowRight, Send } from "lucide-react";
import {
  STEPS,
  Step,
  BecomeHelperFormData,
  defaultFormData,
  Step1Data,
  Step2Data,
  Step3Data,
  Step4Data,
} from "../types/becomeHelperTypes";
import StepIndicator from "./StepIndicator";
import Step1BasicInfo from "./Step1BasicInfo";
import Step2Verification from "./Step2Verification";
import Step3HelperProfile from "./Step3ProfileHelper";
import Step4RatesAvailability from "./Step4RatesAvailability";
import Step5ReviewSubmit from "./Step5ReviewSubmit";
import SuccessState from "./SuccessState";
import styles from "../becomeHelper.module.css";

interface BecomeHelperModalProps {
  onClose: () => void;
}

export default function BecomeHelperModal({ onClose }: BecomeHelperModalProps) {
  const [currentStep, setCurrentStep] = useState<Step>("BasicInfo");
  const [formData, setFormData] =
    useState<BecomeHelperFormData>(defaultFormData);
  const [submitted, setSubmitted] = useState(false);

  const currentIndex = STEPS.indexOf(currentStep);
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === STEPS.length - 1;

  /* ── Per-step updaters ── */
  const updateStep1 = useCallback(
    (u: Partial<Step1Data>) =>
      setFormData((p) => ({ ...p, step1: { ...p.step1, ...u } })),
    [],
  );

  const updateStep2 = useCallback(
    (u: Partial<Step2Data>) =>
      setFormData((p) => ({ ...p, step2: { ...p.step2, ...u } })),
    [],
  );

  const updateStep3 = useCallback(
    (u: Partial<Step3Data>) =>
      setFormData((p) => ({ ...p, step3: { ...p.step3, ...u } })),
    [],
  );

  const updateStep4 = useCallback(
    (u: Partial<Step4Data>) =>
      setFormData((p) => ({ ...p, step4: { ...p.step4, ...u } })),
    [],
  );

  /* ── Navigation ── */
  function handleNext() {
    if (isLast) {
      console.log("[BecomeHelper] Submitting:", formData);
      setSubmitted(true);
    } else {
      setCurrentStep(STEPS[currentIndex + 1]);
    }
  }

  function handleBack() {
    if (!isFirst) setCurrentStep(STEPS[currentIndex - 1]);
  }

  /* ── Validation gates ── */
  function isContinueDisabled(): boolean {
    switch (currentStep) {
      case "BasicInfo": {
        const { fullName, studentId, university, course } = formData.step1;
        return (
          !fullName.trim() || !studentId.trim() || !university.trim() || !course
        );
      }
      case "Verification":
        return !formData.step2.otpVerified;
      case "HelperProfile":
        return formData.step3.skills.length === 0 || !formData.step3.bio.trim();
      case "RatesAvailability":
        return (
          formData.step4.hourlyRate <= 0 ||
          !formData.step4.availability.some((d) => d.available)
        );
      default:
        return false;
    }
  }

  /* ── Step renderer ── */
  function renderStep() {
    switch (currentStep) {
      case "BasicInfo":
        return <Step1BasicInfo data={formData.step1} onChange={updateStep1} />;
      case "Verification":
        return (
          <Step2Verification data={formData.step2} onChange={updateStep2} />
        );
      case "HelperProfile":
        return (
          <Step3HelperProfile data={formData.step3} onChange={updateStep3} />
        );
      case "RatesAvailability":
        return (
          <Step4RatesAvailability
            data={formData.step4}
            onChange={updateStep4}
          />
        );
      case "ReviewSubmit":
        return <Step5ReviewSubmit data={formData} />;
    }
  }

  /* ── Success state replaces modal body ── */
  if (submitted) {
    return (
      <div className={styles.overlay}>
        <div
          className={styles.modal}
          role='dialog'
          aria-modal='true'
          aria-label='Application submitted'
        >
          <div className={styles.header}>
            <h1 className={styles.headerTitle}>Become a Helper</h1>
            <button
              type='button'
              onClick={onClose}
              className={styles.closeBtn}
              aria-label='Close'
            >
              <X size={16} strokeWidth={2} />
            </button>
          </div>
          <SuccessState />
        </div>
      </div>
    );
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

        {/* Active step */}
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

          {isLast ? (
            <button
              type='button'
              onClick={handleNext}
              disabled={isContinueDisabled()}
              className={styles.btnSubmit}
            >
              Submit Application
              <Send size={13} strokeWidth={2} />
            </button>
          ) : (
            <button
              type='button'
              onClick={handleNext}
              disabled={isContinueDisabled()}
              className={styles.btnContinue}
            >
              Continue
              <ArrowRight size={14} strokeWidth={2} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
