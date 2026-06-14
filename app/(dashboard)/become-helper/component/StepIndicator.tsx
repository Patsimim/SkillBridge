"use client";

import { Check } from "lucide-react";
import { STEPS, STEP_LABELS, Step } from "../types/becomeHelperTypes";
import styles from "../becomeHelper.module.css";

interface StepIndicatorProps {
  currentStep: Step;
}

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  const currentIndex = STEPS.indexOf(currentStep);

  return (
    <div className={styles.stepIndicatorWrapper}>
      {STEPS.map((step, index) => {
        const isCompleted = index < currentIndex;
        const isActive = index === currentIndex;

        return (
          <div key={step} className={styles.stepItem}>
            {index > 0 && (
              <div
                className={`${styles.connector} ${
                  index <= currentIndex ? styles.connectorFilled : ""
                }`}
              />
            )}

            <div
              className={`${styles.stepCircle} ${
                isCompleted
                  ? styles.stepCircleCompleted
                  : isActive
                    ? styles.stepCircleActive
                    : styles.stepCircleUpcoming
              }`}
            >
              {isCompleted ? (
                <Check size={12} strokeWidth={2.5} />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>

            <span
              className={`${styles.stepLabel} ${
                isActive
                  ? styles.stepLabelActive
                  : isCompleted
                    ? styles.stepLabelCompleted
                    : styles.stepLabelUpcoming
              }`}
            >
              {STEP_LABELS[step]}
            </span>
          </div>
        );
      })}
    </div>
  );
}
