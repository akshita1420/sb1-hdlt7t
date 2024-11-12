import React from 'react';
import { AlertCircle, Activity, Heart } from 'lucide-react';

interface ResultCardProps {
  prediction: 'high' | 'low';
  riskFactors: string[];
}

export default function ResultCard({ prediction, riskFactors }: ResultCardProps) {
  return (
    <div className={`p-6 rounded-lg ${prediction === 'high' ? 'bg-red-50' : 'bg-green-50'}`}>
      <div className="flex items-center gap-3">
        <AlertCircle 
          className={`w-6 h-6 ${prediction === 'high' ? 'text-red-500' : 'text-green-500'}`} 
        />
        <h2 className="text-xl font-semibold">
          {prediction === 'high' ? 'High Risk of CKD' : 'Low Risk of CKD'}
        </h2>
      </div>
      
      <p className="mt-4 text-gray-700">
        {prediction === 'high' 
          ? 'Based on the provided parameters, there is a significant risk of Chronic Kidney Disease. Please consult a healthcare professional for a thorough evaluation.'
          : 'Based on the provided parameters, the risk of Chronic Kidney Disease appears to be low. However, regular check-ups are recommended for maintaining kidney health.'}
      </p>

      {riskFactors.length > 0 && (
        <div className="mt-4">
          <h3 className="font-medium text-gray-700 mb-2">Key Risk Factors:</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {riskFactors.map((factor, index) => (
              <li key={index}>{factor}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6 flex items-center gap-2 text-gray-500">
        <Heart className="w-4 h-4" />
        <span className="text-sm">
          This is a preliminary assessment. Always consult healthcare professionals for medical advice.
        </span>
      </div>
    </div>
  );
}