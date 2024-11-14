// src/utils/dataProcessing.ts

interface CropData {
    year: number;
    cropName: string;
    production: number;
    yield: number;
    area: number;
  }
  
  // Function to load and normalize data from raw JSON input
  export const loadData = (rawData: any[]): CropData[] => {
    return rawData.map((item) => ({
      year: parseInt(item['Year'].split(', ')[1]) || 0, // Extract year and handle missing values
      cropName: item['Crop Name'],
      production: parseFloat(item['Crop Production (UOM:t(Tonnes))']) || 0,
      yield: parseFloat(item['Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))']) || 0,
      area: parseFloat(item['Area Under Cultivation (UOM:Ha(Hectares))']) || 0,
    }));
  };
  
  // Function to calculate max and min crop production for each year
  export const processMaxMinProduction = (data: CropData[]) => {
    const yearlyData: Record<number, { maxCrop: string; maxProduction: number; minCrop: string; minProduction: number }> = {};
  
    data.forEach((entry) => {
      const year = entry.year;
      if (!yearlyData[year]) {
        yearlyData[year] = {
          maxCrop: entry.cropName,
          maxProduction: entry.production || 0, 
          minCrop: entry.cropName,
          minProduction: entry.production || Infinity, // Initialize min production to Infinity
        };
      }
  
      // Update max crop if production is higher
      if (entry.production > yearlyData[year].maxProduction) {
        yearlyData[year].maxCrop = entry.cropName;
        yearlyData[year].maxProduction = entry.production;
      }
  
      // Update min crop if production is lower
      if (entry.production < yearlyData[year].minProduction) {
        yearlyData[year].minCrop = entry.cropName;
        yearlyData[year].minProduction = entry.production;
      }
    });
  
    // Format the output as an array of objects for easier table rendering
    return Object.entries(yearlyData).map(([year, { maxCrop, minCrop }]) => ({
      year: Number(year),
      maxCrop,
      minCrop,
    }));
  };
  
  // Function to calculate average yield and area per crop across all years
  export const processAverageYieldAndArea = (data: CropData[]) => {
    const cropData: Record<string, { totalYield: number; totalArea: number; count: number }> = {};
  
    data.forEach((entry) => {
      const cropName = entry.cropName;
      const yieldValue = entry.yield;
      const areaValue = entry.area;
  
      // Skip entries with missing or invalid data
      if (!cropName || isNaN(yieldValue) || isNaN(areaValue)) {
        return;
      }
  
      // Initialize crop data if it doesn’t exist
      if (!cropData[cropName]) {
        cropData[cropName] = { totalYield: 0, totalArea: 0, count: 0 };
      }
  
      // Accumulate yield and area values and increment count
      cropData[cropName].totalYield += yieldValue;
      cropData[cropName].totalArea += areaValue;
      cropData[cropName].count += 1;
    });
  
    // Calculate averages and format them to three decimal places
    return Object.entries(cropData).map(([cropName, { totalYield, totalArea, count }]) => ({
      cropName,
      averageYield: (totalYield / count).toFixed(3),
      averageArea: (totalArea / count).toFixed(3),
    }));
  };
  