import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      maxlength: 100,
    },
    phoneNumber: {
      type: String,
      required: true,
      maxlength: 200,
    },
    email: {
      type: String,
      required: true,
    },
    people: {
      type: Number,
      required:true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.models.Reservation || mongoose.model("Reservation", ReservationSchema);