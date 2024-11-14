// src/App.tsx

import React from 'react';
import { MantineProvider, Container, Title, Text, Divider } from '@mantine/core';
import CropMaxMinTable from './components/CropMaxMinTable';
import CropAverageTable from './components/CropAverageTable';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container size="md" style={{ textAlign: 'center', paddingTop: '2rem' }}>
        
        {/* Main Title */}
        <Title order={1} style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', color: '#4A90E2' }}>
          India Agro Analytics
        </Title>
        
        {/* Subtitle */}
        <Text size="lg" color="dimmed" style={{ marginBottom: '2rem' }}>
          An analysis of crop production, yield, and area data from 1950 to 2020
        </Text>

        {/* Section for Max and Min Crop Production by Year */}
        <Title order={2} style={{ marginBottom: '1rem', color: '#4A90E2' }}>
          Max and Min Crop Production by Year
        </Title>
        <Divider my="md" />
        <CropMaxMinTable />

        {/* Section for Average Yield and Area per Crop */}
        <Title order={2} style={{ marginTop: '2rem', marginBottom: '1rem', color: '#4A90E2' }}>
          Average Yield and Area per Crop
        </Title>
        <Divider my="md" />
        <CropAverageTable />
      </Container>
    </MantineProvider>
  );
}

export default App;
