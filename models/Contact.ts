import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema(
  {
    budget: {
      type: String,
      required: [true, 'Please provide a Email.'],
    },
    schedule: {
      type: String,
      required: [true, 'Please provide a Email.'],
    },
    company: {
      type: String,
      required: [true, 'Please provide a Brand.'],
    },
    tel: {
      type: String,
      required: [true, 'Please provide a Tel.'],
    },
    name: {
      type: String,
      required: [true, 'Please provide a Name.'],
    },
    email: {
      type: String,
      required: [true, 'Please provide a Email.'],
      maxlength: [60, 'Email cannot be more than 60 characters'],
    },
    info: {
      type: String,
      required: [true, 'Please provide a Information.'],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
