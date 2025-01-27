"use client";

interface TableProps {
  temp: number;
  hum: number;
  temphora: string;
  humhora: string;
}

export default function TableDHT(props: TableProps) {
  const { temp, hum, temphora, humhora } = props;

  return (
    <table className="table-auto">
      <thead>
        <tr className="bg-slate-200">
          <th className="text-center p-4">Temperatura</th>
          <th className="text-center p-4">Humedad</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-center p-4">{temp}</td>
          <td className="text-center p-4">{hum}</td>
        </tr>
        <tr className="bg-slate-200">
          <td className="text-center p-4">{temphora}</td>
          <td className="text-center p-4">{humhora}</td>
        </tr>
      </tbody>
    </table>
  );
}
