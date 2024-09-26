Usage:
ts
```
import { AthleteDataProcessor, HeartRateProcessor, HeartRatePredictor } from 'athlete-data-processor';

const processor = new AthleteDataProcessor();
// Load and process data here...

const heartRateProcessor = new HeartRateProcessor([...]);
// Process heart rate data...

const predictor = new HeartRatePredictor([...]);
// Train and predict next heart rate values...
```
