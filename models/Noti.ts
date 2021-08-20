import mongoose from 'mongoose';

const NotiSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Please provide a Email.'],
      maxlength: [60, 'Email cannot be more than 60 characters'],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Noti || mongoose.model('Noti', NotiSchema);
