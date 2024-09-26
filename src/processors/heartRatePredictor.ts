export class HeartRatePredictor {
    private model: any;
  
    constructor(private heartRateData: number[]) {}

    public loadHeartRateData(data: number[]) {
        this.heartRateData = data;
    }

    public predictNextMedianHeartRate(): number {
        // Implement the logic for predicting the next median heart rate
        return this.calculateMedian(this.heartRateData);
    }
    
    private calculateMedian(data: number[]): number {
        const sorted = data.slice().sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
      
        if (sorted.length % 2 === 0) {
            return (sorted[mid - 1] + sorted[mid]) / 2;
        } else {
            return sorted[mid];
        }
    }
  
    trainModel() {
        // Implement a simple linear regression model or use external libraries
        this.model = {};  // Pseudo-code: Replace with actual model training
    }
  
    predictNextMedian() {
        // Predict the next median heart rate based on the model
        return this.calculateMedian(this.heartRateData.slice(-5));
    }
  
    evaluateModel(testData: number[]) {
        const predicted = this.predictNextMedian();
        const mae = testData.reduce((acc, curr) => acc + Math.abs(curr - predicted), 0) / testData.length;
        return mae;
    }
  }
  