export const STEPS = [
  "BasicInfo",
  "Verification",
  "HelperProfile",
  "RatesAvailability",
  "ReviewSubmit",
] as const;

export type Step = (typeof STEPS)[number];

export const STEP_LABELS: Record<Step, string> = {
  BasicInfo: "Basic Information",
  Verification: "Verification",
  HelperProfile: "Helper Profile",
  RatesAvailability: "Rates & Availability",
  ReviewSubmit: "Review & Submit",
};

export interface DaySchedule {
  day: string;
  available: boolean;
  startTime: string;
  endTime: string;
}

export interface Step1Data {
  fullName: string;
  studentId: string;
  university: string;
  course: string;
  photoFile: File | null;
  photoPreviewUrl: string;
}

export interface Step2Data {
  studentIdDoc: File | null;
  selfieUrl: string;
  phone: string;
  otpVerified: boolean;
}

export interface Step3Data {
  skills: string[];
  bio: string;
  languages: string[];
}

export interface Step4Data {
  hourlyRate: number;
  fixedTaskRate: number;
  availability: DaySchedule[];
}

export interface BecomeHelperFormData {
  step1: Step1Data;
  step2: Step2Data;
  step3: Step3Data;
  step4: Step4Data;
}

export const defaultFormData: BecomeHelperFormData = {
  step1: {
    fullName: "",
    studentId: "",
    university: "",
    course: "",
    photoFile: null,
    photoPreviewUrl: "",
  },
  step2: {
    studentIdDoc: null,
    selfieUrl: "",
    phone: "",
    otpVerified: false,
  },
  step3: {
    skills: [],
    bio: "",
    languages: [],
  },
  step4: {
    hourlyRate: 250,
    fixedTaskRate: 500,
    availability: [
      { day: "Monday", available: true, startTime: "09:00", endTime: "17:00" },
      { day: "Tuesday", available: true, startTime: "09:00", endTime: "17:00" },
      {
        day: "Wednesday",
        available: true,
        startTime: "09:00",
        endTime: "17:00",
      },
      {
        day: "Thursday",
        available: false,
        startTime: "09:00",
        endTime: "17:00",
      },
      { day: "Friday", available: false, startTime: "09:00", endTime: "17:00" },
      {
        day: "Saturday",
        available: false,
        startTime: "09:00",
        endTime: "17:00",
      },
      { day: "Sunday", available: false, startTime: "09:00", endTime: "17:00" },
    ],
  },
};
