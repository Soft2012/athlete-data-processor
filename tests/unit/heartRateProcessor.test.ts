import { HeartRateProcessor } from '../../src/processors/heartRateProcessor';

test('should reverse aggregate heart rate data', () => {
  const processor = new HeartRateProcessor([120, 140]);
  
  const reversedData = processor.reverseAggregation();

  expect(reversedData).toEqual([120, 124, 128, 132, 136]);
});
