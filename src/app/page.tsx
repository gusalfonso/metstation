"use client";
import React, { useState, useEffect } from "react";
import TableDHT from "./componentes/table";
import { DHTData } from "../../declarations";

export default function Home() {
  const [data, setData] = useState<DHTData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/DHT");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }
  
  const dataInsert = data.length > 0 ? [
    {
      variable: "Temperatura ( °C)",
      value: data[0].temperature || 0,
      last_updated: data[0].last_updated || "",
    },
    {
      variable: "Humedad ( %HR)",
      value: data[0].humidity || 0,
      last_updated: data[0].last_updated || "",
    }
  ] : [];


  return (
    <>
      <main className="arduino flex items-center justify-center min-h-screen py-2">
        <TableDHT data={dataInsert} />
      </main>
    </>
  );
}
