export class HeartRateProcessor {
    constructor(private heartRateData: number[]) {}
  
    preprocessData() {
      // Filter out outliers and return cleaned heart rate data
      const cleanedData = this.heartRateData.filter(rate => rate > 40 && rate < 220);
      return cleanedData;
    }
  
    reverseAggregation() {
      // Reverse the aggregation of heart rate data (assuming input is aggregated every 5 ticks)
      let interpolatedData: number[] = [];
      for (let i = 0; i < this.heartRateData.length - 1; i++) {
        const diff = (this.heartRateData[i + 1] - this.heartRateData[i]) / 4;
        for (let j = 0; j < 5; j++) {
          interpolatedData.push(this.heartRateData[i] + j * diff);
        }
      }
      return interpolatedData;
    }
  }
  