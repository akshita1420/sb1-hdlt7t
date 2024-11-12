export interface FormData {
  age: number;
  bloodPressure: number;
  specificGravity: number;
  albumin: number;
  sugar: number;
  bloodGlucose: number;
  bloodUrea: number;
  serumCreatinine: number;
  sodium: number;
  hemoglobin: number;
}

export interface FieldRange {
  min: number;
  max: number;
  step: number;
}

export const fieldRanges: Record<keyof FormData, FieldRange> = {
  age: { min: 1, max: 120, step: 1 },
  bloodPressure: { min: 50, max: 200, step: 1 },
  specificGravity: { min: 1.005, max: 1.025, step: 0.001 },
  albumin: { min: 0, max: 5, step: 0.1 },
  sugar: { min: 0, max: 5, step: 0.1 },
  bloodGlucose: { min: 70, max: 400, step: 1 },
  bloodUrea: { min: 10, max: 200, step: 1 },
  serumCreatinine: { min: 0.4, max: 15, step: 0.1 },
  sodium: { min: 120, max: 160, step: 1 },
  hemoglobin: { min: 3, max: 20, step: 0.1 }
};