import { ActivitySummary } from '../models/activitySummary';
import { Lap } from '../models/lap';
import { Sample } from '../models/sample';

export class AthleteDataProcessor {
  private activitySummary!: ActivitySummary;
  private laps: Lap[] = [];
  private samples: Sample[] = [];

  loadSummary(summary: ActivitySummary) {
    this.activitySummary = summary;
  }

  loadLaps(laps: Lap[]) {
    this.laps = laps;
  }

  loadSamples(samples: Sample[]) {
    this.samples = samples;
  }

  processData() {
    const heartRateSamples = this.samples
      .filter(sample => sample['sample-type'] === '2')
      .flatMap(sample => sample.data.split(',').map((rate, index) => ({
        sampleIndex: index,
        heartRate: parseInt(rate, 10)
      })));

    return {
      activityOverview: this.activitySummary,
      lapsData: this.laps,
      heartRateSamples
    };
  }
}
