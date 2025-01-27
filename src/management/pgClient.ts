import { Client } from  "pg";

const client = new Client({
  host: process.env.PG_HOST, 
  port: parseInt(process.env.PG_PORT || "5432"), 
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD, 
  database: process.env.PG_DATABASE, 
});

client.connect().catch((err) => {
  console.error("Error al conectar a PostgreSQL", err.stack);
});

export default client;