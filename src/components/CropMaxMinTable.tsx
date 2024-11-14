import React, { useEffect, useState } from 'react';
import { Table } from '@mantine/core';
import rawData from '../data/data.json';
import { loadData, processMaxMinProduction } from '../utils/dataProcessing';

const CropMaxMinTable: React.FC = () => {
  const [data, setData] = useState<{ year: number; maxCrop: string; minCrop: string }[]>([]);

  useEffect(() => {
    const loadedData = loadData(rawData); // Load and normalize data
    const processedData = processMaxMinProduction(loadedData); // Process for max/min production
    setData(processedData);
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Crop with Max Production</th>
          <th>Crop with Min Production</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.year}>
            <td>{row.year}</td>
            <td>{row.maxCrop}</td>
            <td>{row.minCrop}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CropMaxMinTable;
