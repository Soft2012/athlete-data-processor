import { HeartRatePredictor } from '../../src/processors/heartRatePredictor';

test('should predict next median heart rate', () => {
  const predictor = new HeartRatePredictor([120, 126, 122, 140, 142, 155, 145]);

  predictor.trainModel();
  const prediction = predictor.predictNextMedian();

  expect(prediction).toBeCloseTo(140);  // Replace with actual prediction logic
});
