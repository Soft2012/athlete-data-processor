import { HeartRatePredictor } from '../../src/processors/heartRatePredictor';

describe('HeartRatePredictor', () => {
  test('should predict next median heart rate', () => {
    const predictor = new HeartRatePredictor([120, 125, 130, 135, 140]);
    const prediction = predictor.predictNextMedianHeartRate();
    expect(prediction).toBeCloseTo(130); // Update according to your logic
  });
});
