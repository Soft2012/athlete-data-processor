import { AthleteDataProcessor } from '../../src/processors/athleteDataProcessor';
import { mockActivitySummary, mockLaps, mockSamples } from '../mocks/mockData';

test('should process data and output correct JSON structure', () => {
  const processor = new AthleteDataProcessor();
  
  processor.loadSummary(mockActivitySummary);
  processor.loadLaps(mockLaps);
  processor.loadSamples(mockSamples);

  const result = processor.processData();

  expect(result.activityOverview).toEqual(mockActivitySummary);
  expect(result.lapsData).toEqual(mockLaps);
  expect(result.heartRateSamples.length).toBeGreaterThan(0);
});
