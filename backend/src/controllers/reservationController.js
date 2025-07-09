import Reservation from '../models/Reservation.js';
import Client from '../models/Client.js';

const reservationController = {
  getReservations: async (req, res) => {
    const { clientId } = req.query;
    const filter = clientId ? { clientId } : {};
    const list = await Reservation.find(filter);
    res.json(list);
  },
  getReservationById: async (req, res) => {
    const r = await Reservation.findById(req.params.id);
    if (!r) return res.status(404).json({ msg: 'Reserva no encontrada' });
    res.json(r);
  },
  createReservation: async (req, res) => {
    const exists = await Client.findById(req.body.clientId);
    if (!exists) return res.status(400).json({ msg: 'Cliente no existe' });
    const r = new Reservation(req.body);
    await r.save();
    res.status(201).json(r);
  },
  updateReservation: async (req, res) => {
    const r = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!r) return res.status(404).json({ msg: 'Reserva no encontrada' });
    res.json(r);
  },
  deleteReservation: async (req, res) => {
    await Reservation.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Reserva eliminada' });
  }
};

export default reservationController;
