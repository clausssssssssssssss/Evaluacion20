import Client from '../models/Client.js';

const clientController = {
  getClients: async (req, res) => {
    const clients = await Client.find();
    res.json(clients);
  },
  getClientById: async (req, res) => {
    const client = await Client.findById(req.params.id);
    if (!client) return res.status(404).json({ msg: 'Cliente no encontrado' });
    res.json(client);
  },
  createClient: async (req, res) => {
    const exists = await Client.findOne({ email: req.body.email });
    if (exists) return res.status(400).json({ msg: 'Email ya registrado' });
    const client = new Client(req.body);
    await client.save();
    res.status(201).json(client);
  },
  updateClient: async (req, res) => {
    const client = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!client) return res.status(404).json({ msg: 'Cliente no encontrado' });
    res.json(client);
  },
  deleteClient: async (req, res) => {
    await Client.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Cliente eliminado' });
  }
};

export default clientController;