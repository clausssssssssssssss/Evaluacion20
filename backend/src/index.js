import app from './app.js';
import { connectDB } from './database.js';
import { config } from './config.js';

async function main() {
  await connectDB();
  app.listen(config.server.port, () =>
    console.log(`🚀 Server on port ${config.server.port}`)
  );
}

main();
