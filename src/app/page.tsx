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

  // const tiempo = data.length > 0 ? data[0].last_updated : "";

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }


  // const tiempo = data.length > 0 && data[0].last_updated instanceof Date
  //   ? data[0].last_updated.toISOString()
  //   : "";

  return (
    <>
      <main className="arduino flex items-center justify-center min-h-screen py-2">
        <TableDHT temp={data[0].temperature} hum={data[0].humidity} temphora={data[0].last_updated} humhora={data[0].last_updated} />
      </main>
    </>
  );
}

// import { useState, useEffect } from "react";

// export default function Home() {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);
//   return (
//     <>
//       {isClient && (
//         <div className="flex items-center justify-center min-h-screen">
//           Hola mundo
//         </div>
//       )}
//     </>
//   );
// }
