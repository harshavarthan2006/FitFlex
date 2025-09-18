import React, { useState } from 'react';
import { Calendar, Plus, Trash2, Clock, Target } from 'lucide-react';

interface Workout {
  id: number;
  name: string;
  duration: number;
  type: string;
  exercises: string[];
  day: string;
}

const WorkoutPlanner: React.FC = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([
    {
      id: 1,
      name: 'Upper Body Strength',
      duration: 60,
      type: 'Strength',
      exercises: ['Push-ups', 'Pull-ups', 'Bench Press', 'Shoulder Press'],
      day: 'Monday'
    },
    {
      id: 2,
      name: 'HIIT Cardio',
      duration: 45,
      type: 'Cardio',
      exercises: ['Burpees', 'Mountain Climbers', 'Jump Squats', 'High Knees'],
      day: 'Wednesday'
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newWorkout, setNewWorkout] = useState({
    name: '',
    duration: 30,
    type: 'Strength',
    exercises: [''],
    day: 'Monday'
  });

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const workoutTypes = ['Strength', 'Cardio', 'HIIT', 'Yoga', 'Pilates', 'Boxing'];

  const addWorkout = () => {
    if (newWorkout.name.trim()) {
      const workout: Workout = {
        id: Date.now(),
        name: newWorkout.name,
        duration: newWorkout.duration,
        type: newWorkout.type,
        exercises: newWorkout.exercises.filter(ex => ex.trim()),
        day: newWorkout.day
      };
      setWorkouts([...workouts, workout]);
      setNewWorkout({
        name: '',
        duration: 30,
        type: 'Strength',
        exercises: [''],
        day: 'Monday'
      });
      setShowAddForm(false);
    }
  };

  const deleteWorkout = (id: number) => {
    setWorkouts(workouts.filter(w => w.id !== id));
  };

  const addExercise = () => {
    setNewWorkout({
      ...newWorkout,
      exercises: [...newWorkout.exercises, '']
    });
  };

  const updateExercise = (index: number, value: string) => {
    const updatedExercises = [...newWorkout.exercises];
    updatedExercises[index] = value;
    setNewWorkout({
      ...newWorkout,
      exercises: updatedExercises
    });
  };

  const removeExercise = (index: number) => {
    const updatedExercises = newWorkout.exercises.filter((_, i) => i !== index);
    setNewWorkout({
      ...newWorkout,
      exercises: updatedExercises.length ? updatedExercises : ['']
    });
  };

  return (
    <section className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Calendar className="h-8 w-8 text-green-400" />
            <h2 className="text-4xl font-bold text-white">WORKOUT PLANNER</h2>
          </div>
          <p className="text-xl text-gray-300">
            Plan and organize your weekly workout routine
          </p>
        </div>

        {/* Add New Workout Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-green-400 hover:bg-green-500 text-gray-900 px-6 py-3 rounded-lg font-bold transition-colors duration-300 flex items-center space-x-2 mx-auto"
          >
            <Plus className="h-5 w-5" />
            <span>Add New Workout</span>
          </button>
        </div>

        {/* Add Workout Form */}
        {showAddForm && (
          <div className="bg-gray-800 rounded-xl p-8 mb-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Create New Workout</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-white font-semibold mb-2">Workout Name</label>
                <input
                  type="text"
                  value={newWorkout.name}
                  onChange={(e) => setNewWorkout({ ...newWorkout, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="e.g., Morning Cardio"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-white font-semibold mb-2">Duration (minutes)</label>
                  <input
                    type="number"
                    value={newWorkout.duration}
                    onChange={(e) => setNewWorkout({ ...newWorkout, duration: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Type</label>
                  <select
                    value={newWorkout.type}
                    onChange={(e) => setNewWorkout({ ...newWorkout, type: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                  >
                    {workoutTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Day</label>
                  <select
                    value={newWorkout.day}
                    onChange={(e) => setNewWorkout({ ...newWorkout, day: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                  >
                    {days.map(day => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-white font-semibold">Exercises</label>
                  <button
                    onClick={addExercise}
                    className="text-green-400 hover:text-green-300 text-sm flex items-center space-x-1"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add Exercise</span>
                  </button>
                </div>
                {newWorkout.exercises.map((exercise, index) => (
                  <div key={index} className="flex space-x-2 mb-2">
                    <input
                      type="text"
                      value={exercise}
                      onChange={(e) => updateExercise(index, e.target.value)}
                      className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="e.g., Push-ups"
                    />
                    {newWorkout.exercises.length > 1 && (
                      <button
                        onClick={() => removeExercise(index)}
                        className="text-red-400 hover:text-red-300 p-2"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex space-x-4 pt-4">
                <button
                  onClick={addWorkout}
                  className="flex-1 bg-green-400 hover:bg-green-500 text-gray-900 font-bold py-3 rounded-lg transition-colors duration-300"
                >
                  Add Workout
                </button>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="px-6 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 rounded-lg transition-colors duration-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Weekly Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
          {days.map(day => (
            <div key={day} className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-lg font-bold text-white mb-4 text-center">{day}</h3>
              <div className="space-y-3">
                {workouts
                  .filter(workout => workout.day === day)
                  .map(workout => (
                    <div key={workout.id} className="bg-gray-700 rounded-lg p-4 relative group">
                      <button
                        onClick={() => deleteWorkout(workout.id)}
                        className="absolute top-2 right-2 text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                      
                      <h4 className="font-semibold text-white mb-2">{workout.name}</h4>
                      
                      <div className="flex items-center space-x-4 mb-3 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{workout.duration}min</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Target className="h-3 w-3" />
                          <span>{workout.type}</span>
                        </div>
                      </div>
                      
                      <div className="text-xs text-gray-400">
                        {workout.exercises.slice(0, 3).join(', ')}
                        {workout.exercises.length > 3 && '...'}
                      </div>
                    </div>
                  ))}
                
                {workouts.filter(workout => workout.day === day).length === 0 && (
                  <div className="text-center text-gray-500 py-8">
                    <Calendar className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">No workouts planned</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutPlanner;