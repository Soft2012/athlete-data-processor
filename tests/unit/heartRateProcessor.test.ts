import { HeartRateProcessor } from '../../src/processors/heartRateProcessor';

test('should reverse aggregate heart rate data', () => {
    const processor = new HeartRateProcessor([120, 130, 140]); // Assuming you have a constructor that takes heart rate data
    const reversedData = processor.reverseAggregation();
    expect(reversedData).toEqual([120, 120, 120, 120, 120, 130, 130, 130, 130, 130, 140, 140, 140, 140, 140]); // Update according to your logic
  });
  