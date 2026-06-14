"use client";

import { useRef, useState, ChangeEvent } from "react";
import { Upload, Camera, Check, ChevronDown } from "lucide-react";
import { Step2Data } from "../types/becomeHelperTypes";
import styles from "../becomeHelper.module.css";

const COUNTRY_CODES = [
  { code: "+63", flag: "🇵🇭", label: "PH" },
  { code: "+1", flag: "🇺🇸", label: "US" },
  { code: "+44", flag: "🇬🇧", label: "GB" },
  { code: "+61", flag: "🇦🇺", label: "AU" },
  { code: "+81", flag: "🇯🇵", label: "JP" },
];

interface Step2VerificationProps {
  data: Step2Data;
  onChange: (updated: Partial<Step2Data>) => void;
}

export default function Step2Verification({
  data,
  onChange,
}: Step2VerificationProps) {
  const idInputRef = useRef<HTMLInputElement>(null);
  const [countryCode, setCountryCode] = useState("+63");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [idFileName, setIdFileName] = useState("");
  const otpRefs = Array.from({ length: 6 }, () =>
    useRef<HTMLInputElement>(null),
  );

  /* ── ID upload ── */
  function handleIdUpload(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setIdFileName(file.name);
    onChange({ studentIdDoc: file });
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    setIdFileName(file.name);
    onChange({ studentIdDoc: file });
  }

  /* ── Phone ── */
  function handlePhone(e: ChangeEvent<HTMLInputElement>) {
    onChange({ phone: e.target.value });
    setOtpSent(false);
    setOtpVerified(false);
    setOtp(["", "", "", "", "", ""]);
  }

  function handleSendOtp() {
    if (!data.phone.trim()) return;
    setOtpSent(true);
    setOtpVerified(false);
    setOtp(["", "", "", "", "", ""]);
    otpRefs[0].current?.focus();
  }

  /* ── OTP input ── */
  function handleOtpChange(index: number, value: string) {
    if (!/^\d?$/.test(value)) return;
    const next = [...otp];
    next[index] = value;
    setOtp(next);
    if (value && index < 5) otpRefs[index + 1].current?.focus();

    // Auto-verify when all 6 filled
    const filled = next.every((d) => d !== "");
    if (filled) {
      setOtpVerified(true);
      onChange({ otpVerified: true });
    }
  }

  function handleOtpKeyDown(index: number, e: React.KeyboardEvent) {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs[index - 1].current?.focus();
    }
  }

  function handleOtpPaste(e: React.ClipboardEvent) {
    const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!text) return;
    e.preventDefault();
    const next = [...otp];
    text.split("").forEach((ch, i) => {
      next[i] = ch;
    });
    setOtp(next);
    if (text.length === 6) {
      setOtpVerified(true);
      onChange({ otpVerified: true });
    }
  }

  return (
    <div className={styles.stepBody}>
      {/* Left */}
      <div className={styles.stepLeft}>
        <p className={styles.stepMeta}>Step 2 of 5</p>
        <h2 className={styles.stepTitle}>Verification</h2>
        <p className={styles.stepDesc}>
          Verify your identity to keep our community safe.
        </p>
      </div>

      {/* Right */}
      <div className={styles.stepRight}>
        {/* ── Upload Student ID ── */}
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>Upload Student ID</label>
          <div
            className={styles.dropzone}
            onClick={() => idInputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            role='button'
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && idInputRef.current?.click()}
            aria-label='Upload student ID file'
          >
            {idFileName ? (
              <div className={styles.dropzoneSuccess}>
                <Check
                  size={16}
                  strokeWidth={2.5}
                  className={styles.dropzoneSuccessIcon}
                />
                <span className={styles.dropzoneFileName}>{idFileName}</span>
              </div>
            ) : (
              <>
                <Upload
                  size={20}
                  strokeWidth={1.5}
                  className={styles.dropzoneIcon}
                />
                <p className={styles.dropzoneText}>
                  Drag and drop your file here
                  <br />
                  <span className={styles.dropzoneCta}>or click to upload</span>
                </p>
                <p className={styles.dropzoneHint}>
                  JPG, PNG or PDF (Max. 5MB)
                </p>
              </>
            )}
          </div>
          <input
            ref={idInputRef}
            type='file'
            accept='.jpg,.jpeg,.png,.pdf'
            onChange={handleIdUpload}
            className={styles.hiddenInput}
            aria-hidden='true'
          />
        </div>

        {/* ── Selfie Verification ── */}
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>Selfie Verification</label>
          <button
            type='button'
            className={styles.selfieBtn}
            onClick={() => onChange({ selfieUrl: "selfie-placeholder" })}
          >
            <Camera size={14} strokeWidth={2} />
            Take Selfie / Upload Photo
          </button>
        </div>

        {/* ── Phone Number Verification ── */}
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>Phone Number Verification</label>
          <div className={styles.phoneRow}>
            <div className={styles.countryCodeWrapper}>
              <select
                className={styles.countryCodeSelect}
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                aria-label='Country code'
              >
                {COUNTRY_CODES.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.flag} {c.code}
                  </option>
                ))}
              </select>
              <ChevronDown size={12} className={styles.countryChevron} />
            </div>
            <input
              type='tel'
              placeholder='912 345 6789'
              value={data.phone}
              onChange={handlePhone}
              className={`${styles.input} ${styles.phoneInput}`}
              aria-label='Phone number'
            />
            {otpVerified ? (
              <div className={styles.verifiedBadge} aria-label='Phone verified'>
                <Check size={14} strokeWidth={2.5} />
              </div>
            ) : (
              <button
                type='button'
                className={styles.sendOtpBtn}
                onClick={handleSendOtp}
                disabled={!data.phone.trim()}
              >
                Send
              </button>
            )}
          </div>

          {otpSent && !otpVerified && (
            <p className={styles.otpSentNote}>
              OTP sent to {countryCode} {data.phone}
            </p>
          )}
        </div>

        {/* ── OTP Code ── */}
        {otpSent && (
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>
              Enter OTP Code
              {otpVerified && (
                <span className={styles.verifiedText}> · Verified ✓</span>
              )}
            </label>
            <div className={styles.otpRow} onPaste={handleOtpPaste}>
              {otp.map((digit, i) => (
                <input
                  key={i}
                  ref={otpRefs[i]}
                  type='text'
                  inputMode='numeric'
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(i, e)}
                  className={`${styles.otpInput} ${
                    otpVerified ? styles.otpInputVerified : ""
                  }`}
                  aria-label={`OTP digit ${i + 1}`}
                />
              ))}
              {otpVerified && (
                <div
                  className={styles.otpVerifiedIcon}
                  aria-label='OTP verified'
                >
                  <Check size={14} strokeWidth={2.5} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
