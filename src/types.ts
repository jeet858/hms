import { z } from "zod";

export const addPatientSchema = z.object({
  firstName: z.string({
    required_error: "First name is required",
  }),
  lastName: z.string({
    required_error: "Last name is required",
  }),
  dob: z
    .date({
      required_error: "Date of birth is required",
    })
    .refine((date) => date <= new Date(), {
      message: "Date of birth must be in the past",
    }),
  gender: z.string({
    required_error: "Gender is required",
  }),
  contactNumber: z.string({
    required_error: "Contact number is required",
  }),
  address1: z.string({
    required_error: "Address 1 is required",
  }),
  address2: z.string().optional(),
  city: z.string({
    required_error: "City is required",
  }),
  email: z.string().email("Invalid email format").optional(),
  height: z.number().optional(),
  weight: z.number().optional(),
  bloodPressure: z.string().optional(),
  bloodGroup: z.string().optional(),
  medicalHistory: z.string().optional(),
  reference: z.string().optional(),
  allergies: z.string().optional(),
  primaryPhysician: z.string().optional(),
  aadharCard: z.string().optional(),
  panCard: z.string().optional(),
  passport: z.string().optional(),
  visa: z.string().optional(),
  referral: z.string().optional(),
  lastPrescription: z.string().optional(),
  fathersName: z.string().optional(),
  spousesName: z.string().optional(),
  emergencyContactName: z.string().optional(),
  emergencyContactRelation: z.string().optional(),
  emergencyContactNumber: z.string().optional(),
  insuranceCompany: z.string().optional(),
  policyNumber: z.string().optional(),
  prefferedLanguage: z.string().optional(),
});
