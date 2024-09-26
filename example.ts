// example.ts
import { AthleteDataProcessor } from './src/processors/athleteDataProcessor';
import { HeartRateProcessor } from './src/processors/heartRateProcessor';
import { HeartRatePredictor } from './src/processors/heartRatePredictor';

const processor = new AthleteDataProcessor();
processor.loadSummary({
  userId: '1234567890',
  activityId: 9480958402,
  activityName: 'Indoor Cycling',
  durationInSeconds: 3667,
  startTimeInSeconds: 1661158927,
  startTimeOffsetInSeconds: 7200,
  activityType: 'INDOOR_CYCLING',
  averageHeartRateInBeatsPerMinute: 150,
  activeKilocalories: 561,
  deviceName: 'instinct2',
  maxHeartRateInBeatsPerMinute: 190,
});

processor.loadLaps([
  {
    startTimeInSeconds: 1661158927,
    airTemperatureCelsius: 28,
    heartRate: 109,
    totalDistanceInMeters: 15,
    timerDurationInSeconds: 600
  },
]);

processor.loadSamples([
  { "recording-rate": 5, "sample-type": "2", "data": "120,126,122,140,142,155,145" }
]);

const result = processor.processData();
console.log(JSON.stringify(result, null, 2));
