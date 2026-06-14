"use client";

import { useRef, ChangeEvent } from "react";
import { Camera, User } from "lucide-react";
import { Step1Data } from "../types/becomeHelperTypes";
import styles from "../becomeHelper.module.css";

const COURSES = [
  "Bachelor of Science in Computer Science",
  "Bachelor of Science in Information Technology",
  "Bachelor of Science in Information Systems",
  "Bachelor of Science in Software Engineering",
  "Bachelor of Science in Data Science",
  "Bachelor of Science in Engineering",
  "Bachelor of Arts in Communication",
  "Bachelor of Science in Business Administration",
  "Other",
];

interface Step1BasicInfoProps {
  data: Step1Data;
  onChange: (updated: Partial<Step1Data>) => void;
}

export default function Step1BasicInfo({
  data,
  onChange,
}: Step1BasicInfoProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handlePhotoChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    onChange({ photoFile: file, photoPreviewUrl: previewUrl });
  }

  function handleField(field: keyof Step1Data) {
    return (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      onChange({ [field]: e.target.value });
    };
  }

  return (
    <div className={styles.stepBody}>
      {/* Left: context copy */}
      <div className={styles.stepLeft}>
        <p className={styles.stepMeta}>Step 1 of 5</p>
        <h2 className={styles.stepTitle}>Basic Information</h2>
        <p className={styles.stepDesc}>Tell us more about yourself.</p>
      </div>

      {/* Right: form */}
      <div className={styles.stepRight}>
        {/* Profile Photo */}
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>Profile Photo</label>
          <div
            className={styles.photoUploadZone}
            onClick={() => fileInputRef.current?.click()}
            role='button'
            tabIndex={0}
            onKeyDown={(e) =>
              e.key === "Enter" && fileInputRef.current?.click()
            }
            aria-label='Upload profile photo'
          >
            <div className={styles.avatar}>
              {data.photoPreviewUrl ? (
                <img
                  src={data.photoPreviewUrl}
                  alt='Profile preview'
                  className={styles.avatarImg}
                />
              ) : (
                <User
                  size={28}
                  strokeWidth={1.5}
                  className={styles.avatarIcon}
                />
              )}
              <div className={styles.avatarBadge}>
                <Camera size={10} strokeWidth={2} />
              </div>
            </div>
            <span className={styles.uploadCta}>Upload photo</span>
          </div>
          <input
            ref={fileInputRef}
            type='file'
            accept='image/*'
            onChange={handlePhotoChange}
            className={styles.hiddenInput}
            aria-hidden='true'
          />
        </div>

        {/* Full Name */}
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel} htmlFor='fullName'>
            Full Name
          </label>
          <input
            id='fullName'
            type='text'
            placeholder='e.g. Juan dela Cruz'
            value={data.fullName}
            onChange={handleField("fullName")}
            className={styles.input}
            autoComplete='name'
          />
        </div>

        {/* Student ID */}
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel} htmlFor='studentId'>
            Student ID
          </label>
          <input
            id='studentId'
            type='text'
            placeholder='e.g. 2024-00001'
            value={data.studentId}
            onChange={handleField("studentId")}
            className={styles.input}
          />
        </div>

        {/* University */}
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel} htmlFor='university'>
            University / School
          </label>
          <input
            id='university'
            type='text'
            placeholder='e.g. University of the Philippines Diliman'
            value={data.university}
            onChange={handleField("university")}
            className={styles.input}
          />
        </div>

        {/* Course */}
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel} htmlFor='course'>
            Course / Program
          </label>
          <select
            id='course'
            value={data.course}
            onChange={handleField("course")}
            className={styles.select}
          >
            <option value='' disabled>
              Select your course
            </option>
            {COURSES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
