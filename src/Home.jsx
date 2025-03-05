import { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

function Home() {
  const [profiles, setProfiles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState([]);

  // Fetching user profiles from firestore
  useEffect(() => {
    const fetchProfiles = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "profiles"));
            const profilesData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setProfiles(profilesData);
        } catch (error) {
            console.error("Error fetching profiles:", error);
        }
    };

    fetchProfiles();
}, []);

  // This will get all the courses from all the cards
  const allCourses = [...new Set(profiles.flatMap(profile => profile.courses))];

  // Will fitler based on selected courses
  const filteredProfiles = selectedCourses.length > 0
        ? profiles.filter(profile => profile.courses.some(course => selectedCourses.includes(course)))
        : profiles;

  const handleSwipe = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(direction);
    setTimeout(() => {
      setCurrentIndex(prev => prev + 1);
      setDirection('');
      setIsAnimating(false);
    }, 300);
  };

  const getCardStyle = (index) => {
    if (index !== currentIndex) return { display: 'none' };
    const baseStyle = {
      position: 'absolute',
      width: '100%',
      transition: 'transform 0.3s ease-out',
      transform: 'translateX(0)',
    };
    if (direction === 'left') {
      baseStyle.transform = 'translateX(-150%)';
    } else if (direction === 'right') {
      baseStyle.transform = 'translateX(150%)';
    }
    return baseStyle;
  };

  const handleFilterToggle = () => {
    setShowFilterModal(!showFilterModal);
  };

  const handleCourseToggle = (course) => {
    setSelectedCourses(prev => 
      prev.includes(course)
        ? prev.filter(c => c !== course)
        : [...prev, course]
    );
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-100">
      <div className="max-w-md mx-auto p-4">
        <div className="mb-4">
          <button 
            onClick={handleFilterToggle}
            className="w-full bg-white rounded-lg shadow-md py-2 px-4 text-gray-700 font-medium flex items-center justify-center gap-2 hover:bg-gray-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            Filter Matches
          </button>
        </div>

        {showFilterModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Filter by the Course You're Looking For!</h2>
                <button 
                  onClick={handleFilterToggle}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {allCourses.map((course) => (
                  <label key={course} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCourses.includes(course)}
                      onChange={() => handleCourseToggle(course)}
                      className="rounded text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-gray-700">{course}</span>
                  </label>
                ))}
              </div>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  onClick={() => {
                    setSelectedCourses([]);
                    setShowFilterModal(false);
                  }}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Clear All
                </button>
                <button
                  onClick={handleFilterToggle}
                  className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="relative h-[600px]">
          {filteredProfiles.map((card, index) => (
            <div key={index} style={getCardStyle(index)}
              className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative aspect-[4/3]">
                <img src={card.image} alt={`${card.name} studying`} className="w-full h-full object-cover"/>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h2 className="text-2xl font-bold text-white">{card.name}, {card.age}</h2>
                  <p className="text-gray-200">{card.major} • Junior</p>
                </div>
              </div>

              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-900 mb-2">Academic Profile</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-500">Major</p>
                    <p className="font-medium">{card.major}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-500">Minor</p>
                    <p className="font-medium">{card.minor}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-500">GPA</p>
                    <p className="font-medium">{card.gpa}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-500">Campus</p>
                    <p className="font-medium">{card.campus}</p>
                  </div>
                </div>
              </div>

              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-900 mb-2">Looking for Study Partners in</h3>
                <div className="flex flex-wrap gap-2">
                  {card.courses.map((course, i) => (
                    <span key={i} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-900 mb-2">Study Preferences</h3>
                <div className="space-y-2">
                  {card.preferences.map((pref, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-gray-600">{pref}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-900 mb-2">About</h3>
                <p className="text-gray-600">{card.about}</p>
              </div>

              <div className="flex justify-center gap-6 p-4">
                <button 
                  onClick={() => handleSwipe('left')}
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 hover:scale-110 transition-transform"
                >
                  <span className="text-red-500 text-3xl">✕</span>
                </button>
                <button 
                  onClick={() => handleSwipe('right')}
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 hover:scale-110 transition-transform"
                >
                  <span className="text-green-500 text-3xl">✓</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
