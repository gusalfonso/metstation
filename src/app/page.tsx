// "use client";
// // import React, { useState, useEffect } from "react";
// // import TableDHT from "./componentes/table";
// import { DHTData } from "../../declarations";

// export default function Home() {
//   // const [data, setData] = useState<DHTData[]>([]);
//   // const [isLoading, setIsLoading] = useState(true);

//   // const fetchData = async () => {
//   //   try {
//   //     const response = await fetch("/api/DHT");
//   //     const data = await response.json();
//   //     setData(data);
//   //   } catch (error) {
//   //     console.error("Error fetching data:", error);
//   //   } finally {
//   //     setIsLoading(false);
//   //   }
//   // };

//   // useEffect(() => {
//   //   fetchData();
//   // }, []);

//   // const tiempo = data.length > 0 ? data[0].last_updated : "";

//   // if (isLoading) {
//   //   return (
//   //     <div className="flex items-center justify-center min-h-screen">
//   //       Loading...
//   //     </div>
//   //   );
//   // }

//   // console.log(data);

//   const data: DHTData[] = [
//     {
//       id: "1",
//       temperature: 23,
//       humidity: 50,
//       last_updated: new Date(),
//     },
//     {
//       id: "2",
//       temperature: 24,
//       humidity: 51,
//       last_updated: new Date(),
//     },
//   ];

//   // const tiempo = data.length > 0 && data[0].last_updated instanceof Date
//   //   ? data[0].last_updated.toISOString()
//   //   : "";

//   return (
//     <>
//       <main className="arduino flex items-center justify-center min-h-screen py-2">
//         <div className="flex flex-col items-center justify-center">
//           <h1 className="text-4xl font-bold">
//             {data.length > 0 ? data[0].temperature : "0"}°C
//           </h1>
//           <h1 className="text-4xl font-bold">
//             {data.length > 0 ? data[0].humidity : "0"}%
//           </h1>
//           {/* <h1 className="text-4xl font-bold">{tiempo}</h1> */}
//         </div>
//       </main>
//     </>
//   );
// }


export default function Home() {
  return(
    <div className="flex items-center justify-center min-h-screen">
      Hola mundo
    </div>
  )
}