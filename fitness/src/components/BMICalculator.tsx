import React, { useState } from 'react';
import { Calculator, Info } from 'lucide-react';

const BMICalculator: React.FC = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [unit, setUnit] = useState('metric'); // metric or imperial
  const [result, setResult] = useState<{ bmi: number; category: string; color: string } | null>(null);

  const calculateBMI = () => {
    if (!weight || !height) return;

    let weightInKg = parseFloat(weight);
    let heightInM = parseFloat(height);

    if (unit === 'imperial') {
      // Convert pounds to kg and inches to meters
      weightInKg = weightInKg * 0.453592;
      heightInM = heightInM * 0.0254;
    } else {
      // Convert cm to meters
      heightInM = heightInM / 100;
    }

    const bmi = weightInKg / (heightInM * heightInM);
    let category = '';
    let color = '';

    if (bmi < 18.5) {
      category = 'Underweight';
      color = 'text-blue-400';
    } else if (bmi < 25) {
      category = 'Normal weight';
      color = 'text-green-400';
    } else if (bmi < 30) {
      category = 'Overweight';
      color = 'text-yellow-400';
    } else {
      category = 'Obese';
      color = 'text-red-400';
    }

    setResult({ bmi: Math.round(bmi * 10) / 10, category, color });
  };

  const reset = () => {
    setWeight('');
    setHeight('');
    setResult(null);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Calculator className="h-8 w-8 text-green-400" />
              <h2 className="text-4xl font-bold text-white">BMI CALCULATOR</h2>
            </div>
            <p className="text-xl text-gray-300">
              Calculate your Body Mass Index to understand your current fitness level
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Calculator Form */}
              <div>
                <div className="mb-6">
                  <label className="block text-white font-semibold mb-2">Unit System</label>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setUnit('metric')}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        unit === 'metric'
                          ? 'bg-green-400 text-gray-900'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      Metric
                    </button>
                    <button
                      onClick={() => setUnit('imperial')}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        unit === 'imperial'
                          ? 'bg-green-400 text-gray-900'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      Imperial
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Weight ({unit === 'metric' ? 'kg' : 'lbs'})
                    </label>
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder={`Enter your weight in ${unit === 'metric' ? 'kilograms' : 'pounds'}`}
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Height ({unit === 'metric' ? 'cm' : 'inches'})
                    </label>
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder={`Enter your height in ${unit === 'metric' ? 'centimeters' : 'inches'}`}
                    />
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <button
                      onClick={calculateBMI}
                      className="flex-1 bg-green-400 hover:bg-green-500 text-gray-900 font-bold py-3 rounded-lg transition-colors duration-300"
                    >
                      Calculate BMI
                    </button>
                    <button
                      onClick={reset}
                      className="px-6 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 rounded-lg transition-colors duration-300"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="flex flex-col justify-center">
                {result ? (
                  <div className="text-center bg-gray-700 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Your BMI Result</h3>
                    <div className="text-6xl font-black text-green-400 mb-4">
                      {result.bmi}
                    </div>
                    <div className={`text-2xl font-bold mb-4 ${result.color}`}>
                      {result.category}
                    </div>
                    <div className="text-gray-300">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <Info className="h-4 w-4" />
                        <span>BMI Categories:</span>
                      </div>
                      <div className="text-sm space-y-1">
                        <div>Underweight: Below 18.5</div>
                        <div>Normal: 18.5 - 24.9</div>
                        <div>Overweight: 25.0 - 29.9</div>
                        <div>Obese: 30.0 and above</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center bg-gray-700 rounded-xl p-8">
                    <Calculator className="h-16 w-16 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400 text-lg">
                      Enter your weight and height to calculate your BMI
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;