import React, { useState } from 'react';
import { Activity } from 'lucide-react';
import FormField from './FormField';
import ResultCard from './ResultCard';
import { FormData, fieldRanges } from '../types/medical';

const initialFormData: FormData = {
  age: 45,
  bloodPressure: 80,
  specificGravity: 1.02,
  albumin: 0,
  sugar: 0,
  bloodGlucose: 100,
  bloodUrea: 30,
  serumCreatinine: 1.2,
  sodium: 135,
  hemoglobin: 14
};

const fieldUnits: Partial<Record<keyof FormData, string>> = {
  bloodPressure: 'mm/Hg',
  albumin: 'g/dL',
  bloodGlucose: 'mg/dL',
  bloodUrea: 'mg/dL',
  serumCreatinine: 'mg/dL',
  sodium: 'mEq/L',
  hemoglobin: 'g/dL'
};

export default function PredictionForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [prediction, setPrediction] = useState<'high' | 'low' | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Analyze risk factors
    const riskFactors: string[] = [];
    if (formData.bloodPressure > 140) riskFactors.push('High blood pressure');
    if (formData.albumin > 1) riskFactors.push('Elevated albumin levels');
    if (formData.bloodGlucose > 140) riskFactors.push('High blood glucose');
    if (formData.serumCreatinine > 1.5) riskFactors.push('Elevated serum creatinine');
    if (formData.hemoglobin < 12) riskFactors.push('Low hemoglobin levels');

    // Simulate API call
    setTimeout(() => {
      const risk = riskFactors.length >= 3 ? 'high' : 'low';
      setPrediction(risk);
      setLoading(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: parseFloat(e.target.value)
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
          <div className="flex items-center gap-3">
            <Activity className="w-8 h-8" />
            <h1 className="text-2xl font-bold">CKD Risk Assessment</h1>
          </div>
          <p className="mt-2 opacity-90">
            Enter patient's medical parameters for kidney disease risk evaluation
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.keys(formData).map((field) => (
              <FormField
                key={field}
                label={field.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                name={field}
                value={formData[field as keyof FormData]}
                onChange={handleChange}
                range={fieldRanges[field as keyof FormData]}
                unit={fieldUnits[field as keyof FormData]}
              />
            ))}
          </div>

          <div className="mt-8">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 
                       transition duration-200 flex items-center justify-center gap-2 
                       disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : (
                <>
                  <Activity className="w-5 h-5" />
                  Analyze Risk
                </>
              )}
            </button>
          </div>
        </form>

        {prediction && (
          <div className="p-6 border-t">
            <ResultCard 
              prediction={prediction}
              riskFactors={[
                formData.bloodPressure > 140 ? 'High blood pressure' : '',
                formData.albumin > 1 ? 'Elevated albumin levels' : '',
                formData.bloodGlucose > 140 ? 'High blood glucose' : '',
                formData.serumCreatinine > 1.5 ? 'Elevated serum creatinine' : '',
                formData.hemoglobin < 12 ? 'Low hemoglobin levels' : ''
              ].filter(Boolean)}
            />
          </div>
        )}
      </div>
    </div>
  );
}