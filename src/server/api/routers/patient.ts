import { addPatientSchema } from "~/types";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";
const patientByIdSchema = z.object({ patientId: z.string() });
export const patientRouter = createTRPCRouter({
  addPatient: protectedProcedure
    .input(addPatientSchema)
    .mutation(async ({ ctx, input }) => {
      const arr = [];
      const patientCount = await ctx.db.patient.count();
      const patientId =
        patientCount < 9 ? `P_0${patientCount + 1}` : `P_${patientCount + 1}`;
      arr.push(
        ctx.db.patient.create({
          data: {
            patientId: patientId,
            firstName: input.firstName,
            lastName: input.lastName,
            dob: input.dob,
            fathersName: input.fathersName,
            spousesName: input.spousesName,
            gender: input.gender,
            contactNumber: input.contactNumber,
            email: input.email,
            address1: input.address1,
            address2: input.address2,
            city: input.city,
            emergencyContactName: input.emergencyContactName,
            emergencyContactRelation: input.emergencyContactRelation,
            emergencyContactNumber: input.emergencyContactNumber,
            insuranceCompany: input.insuranceCompany,
            policyNumber: input.policyNumber,
            prefferedLanguage: input.prefferedLanguage,
          },
        }),
      );
      arr.push(
        ctx.db.patientAttachment.create({
          data: {
            patientId: patientId,
            aadharCard: input.aadharCard,
            lastPrescription: input.lastPrescription,
            panCard: input.panCard,
            passport: input.passport,
            referral: input.referral,
            visa: input.visa,
          },
        }),
      );
      arr.push(
        ctx.db.patientPrimaryMedicalDetails.create({
          data: {
            patientId: patientId,
            allergies: input.allergies,
            bloodPressure: input.bloodPressure,
            bloodGroup: input.bloodGroup,
            height: input.height,
            medicalHistory: input.medicalHistory,
            primaryPhysician: input.primaryPhysician,
            reference: input.reference,
            weight: input.weight,
          },
        }),
      );
      return await ctx.db.$transaction(arr);
    }),
  getAllPatient: protectedProcedure.query(async ({ ctx }) => {
    function calculateAge(dob: Date): number {
      const today = new Date();
      let age = today.getFullYear() - dob.getFullYear();
      const monthDifference = today.getMonth() - dob.getMonth();
      const dayDifference = today.getDate() - dob.getDate();

      // Check if the birth date has occurred yet this year
      if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
      }

      return age;
    }

    const patients = await ctx.db.patient.findMany();

    const patientsWithAge = patients.map((patient) => ({
      ...patient,
      age: calculateAge(new Date(patient.dob)),
    }));

    return patientsWithAge;
  }),
  getPatientCount: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.patient.count();
  }),
  getPatientByid: protectedProcedure
    .input(patientByIdSchema)
    .query(async ({ input, ctx }) => {
      return await ctx.db.patient.findUnique({
        where: {
          patientId: input.patientId,
        },
      });
    }),
});
