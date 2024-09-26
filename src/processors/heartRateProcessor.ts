export class HeartRateProcessor {
    constructor(private heartRateData: number[]) {}
  
    preprocessData() {
      // Filter out outliers and return cleaned heart rate data
      const cleanedData = this.heartRateData.filter(rate => rate > 40 && rate < 220);
      return cleanedData;
    }
  
    public reverseAggregation(): number[] {
        // Assuming you have a recording rate of 5
        const result: number[] = [];
        for (let i = 0; i < this.heartRateData.length; i++) {
            for (let j = 0; j < 5; j++) {
            result.push(this.heartRateData[i]); // Modify logic based on your requirements
            }
        }
        return result;
    }

  }
  