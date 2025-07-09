import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
  vehicle:  { type: String, required: true },
  service:  { type: String, required: true },
  status:   { type: String, enum: ['pending','confirmed','done','cancelled'], default: 'pending' }
});

export default mongoose.model('Reservation', reservationSchema);