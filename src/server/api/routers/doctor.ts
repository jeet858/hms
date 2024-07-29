import { addDoctorSchema } from "~/types";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const doctorRouter = createTRPCRouter({
  addDoctor: protectedProcedure
    .input(addDoctorSchema)
    .mutation(async ({ ctx, input }) => {
      const doctorCount = await ctx.db.doctor.count();
      const doctorId =
        doctorCount < 9 ? `D_0${doctorCount + 1}` : `P_${doctorCount + 1}`;
      return await ctx.db.doctor.create({
        data: {
          doctorId: doctorId,
          name: input.name,
          gender: input.gender,
          contactNumber: input.contactNumber,
          department: input.department,
          email: input.email,
          endTime: input.endTime,
          startTime: input.startTime,
          language: input.language,
          password: input.password,
          availableDays: input.availableDays,
        },
      });
    }),
  getAllDoctors: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.doctor.findMany();
  }),
  getDoctorCount: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.doctor.count();
  }),
});
