import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
  name:     { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone:    { type: String, required: true },
  age:      { type: Number, required: true, min: 0 }
});

export default mongoose.model('Client', clientSchema);