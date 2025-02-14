'use client';

import React, { useState } from 'react';

const CalorieCalculator = () => {
  const [formData, setFormData] = useState({
    age: '',
    gender: 'male',
    weight: '',
    height: '',
    activityLevel: 'sedentary'
  });
  const [calories, setCalories] = useState(null);

  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    veryActive: 1.9
  };

  const calculateCalories = (e) => {
    e.preventDefault();
    let bmr;
    
    if (formData.gender === 'male') {
      bmr = 10 * formData.weight + 6.25 * formData.height - 5 * formData.age + 5;
    } else {
      bmr = 10 * formData.weight + 6.25 * formData.height - 5 * formData.age - 161;
    }

    const tdee = bmr * activityMultipliers[formData.activityLevel];
    setCalories(Math.round(tdee));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center bg-fixed bg-gradient-to-br from-gray-900 to-gray-800" 
      style={{ 
        backgroundImage: 'url("/image.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="w-full max-w-lg p-10 mx-4 rounded-xl bg-white/10 backdrop-blur-md shadow-2xl">
        <h1 className="text-4xl font-bold mb-10 text-white text-center">Daily Calorie Calculator</h1>
        
        <form onSubmit={calculateCalories} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-white">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
                required
                min="15"
                max="100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-white">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
              >
                <option value="male" className="text-gray-900">Male</option>
                <option value="female" className="text-gray-900">Female</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-white">Weight (kg)</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
                required
                min="30"
                max="300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-white">Height (cm)</label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
                required
                min="100"
                max="250"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-white">Activity Level</label>
            <select
              name="activityLevel"
              value={formData.activityLevel}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
            >
              <option value="sedentary" className="text-gray-900">Sedentary (little or no exercise)</option>
              <option value="light" className="text-gray-900">Light (exercise 1-3 times/week)</option>
              <option value="moderate" className="text-gray-900">Moderate (exercise 3-5 times/week)</option>
              <option value="active" className="text-gray-900">Active (exercise 6-7 times/week)</option>
              <option value="veryActive" className="text-gray-900">Very Active (heavy exercise & physical job)</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full p-4 bg-white/10 text-white text-lg font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 mt-8"
          >
            Calculate Calories
          </button>
        </form>

        {calories && (
          <div className="mt-10 p-6 rounded-lg bg-white/5 border border-white/20">
            <h2 className="text-2xl font-semibold text-white text-center">
              Your Daily Calorie Needs
            </h2>
            <p className="text-5xl font-bold text-white text-center mt-4">
              {calories} calories
            </p>
            <p className="text-sm text-white/80 text-center mt-4">
              This is your maintenance calories. Adjust by ±500 calories for weight loss/gain.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalorieCalculator;