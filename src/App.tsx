import React from 'react';
import { Activity, Heart, Kidney } from 'lucide-react';
import PredictionForm from './components/PredictionForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <Kidney className="w-8 h-8 text-blue-600" />
              <span className="font-bold text-xl text-gray-800">CKD Predict</span>
            </div>
            <div className="hidden sm:flex items-center gap-6 text-gray-500">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                <span>Health First</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5" />
                <span>Real-time Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Chronic Kidney Disease Risk Assessment
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enter medical parameters to assess the risk of Chronic Kidney Disease (CKD). 
            This tool uses machine learning to analyze key health indicators and provide 
            a preliminary risk assessment.
          </p>
        </div>

        <PredictionForm />

        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>
            Disclaimer: This is a preliminary screening tool and should not be used as 
            a substitute for professional medical advice, diagnosis, or treatment.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;