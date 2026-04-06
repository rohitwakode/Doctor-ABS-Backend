const medicineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dosage: {
      type: String, // e.g. "500mg"
      required: true,
    },
    frequency: {
      type: String, // e.g. "Twice a day"
      required: true,
    },
    duration: {
      type: String, // e.g. "5 days"
      required: true,
    },
    instructions: {
      type: String, // e.g. "After food"
    },
  },
  { _id: false },
);
