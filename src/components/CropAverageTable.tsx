// src/components/CropAverageTable.tsx

import React, { useEffect, useState } from 'react';
import { Table } from '@mantine/core';
import rawData from '../data/data.json';
import { loadData, processAverageYieldAndArea } from '../utils/dataProcessing';

const CropAverageTable: React.FC = () => {
  const [data, setData] = useState<{ cropName: string; averageYield: string; averageArea: string }[]>([]);

  useEffect(() => {
    const loadedData = loadData(rawData); // Load and normalize data
    const processedData = processAverageYieldAndArea(loadedData); // Process for averages
    setData(processedData);
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          <th>Crop</th>
          <th>Average Yield (1950-2020)</th>
          <th>Average Area (1950-2020)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.cropName}>
            <td>{row.cropName}</td>
            <td>{row.averageYield}</td>
            <td>{row.averageArea}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CropAverageTable;
