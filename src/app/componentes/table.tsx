"use client";

interface TableProps {
  data: {
    variable: string;
    value: number;
    last_updated: string | Date | undefined;
  }[];
}

export default function TableDHT(props: TableProps) {
  const data = props.data;
  return (
    <table className="table-auto">
      <thead>
        <tr className="bg-slate-200">
          <th className="text-center p-4">Variable</th>
          <th className="text-center p-4">Valor</th>
          <th className="text-center p-4">Ultima actualización</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.variable}>
            <td className="text-center p-4">{item.variable}</td>
            <td className="text-center p-4">{item.value}</td>
            <td className="text-center p-4">{item.last_updated ? item.last_updated.toLocaleString() : ""}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
