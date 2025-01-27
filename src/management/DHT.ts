import dbClient from "./pgClient";
import { DHTData } from "../../declarations";

export const getDHTData = async (): Promise<DHTData[]> => {
  const data = await dbClient.query(
    `SELECT * FROM dht_data ORDER BY last_updated DESC`
  );
  return data.rows.map ((row) => ({
    id: row.id,
    temperature: row.temperature,
    humidity: row.humidity, 
    last_updated: row.last_updated,
  }));
};

export const addDHTData = async (
    DHTData: DHTData
  ): Promise<void> => {
    await dbClient.query(
      `INSERT INTO dht_data (
        id, temperature, humidity, last_updated
      ) 
      VALUES (
        $1, $2, $3, $4
      )`,
      [
        DHTData.id || Math.random().toString(36).substr(2, 9),
        DHTData.temperature,
        DHTData.humidity,
        DHTData.last_updated || new Date(),
      ]
    );
  };