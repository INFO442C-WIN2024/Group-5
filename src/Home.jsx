import { useState } from 'react';

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  // Mock data for cards
  const cards = [
    {
      name: "Sarah",
      age: 20,
      major: "Computer Science",
      minor: "Mathematics",
      gpa: "3.8",
      campus: "Main Campus",
      courses: ["CS 401 - Advanced Algorithms", "MATH 301 - Linear Algebra", "CS 380 - Database Systems"],
      preferences: [
        "Prefers evening study sessions",
        "Library or quiet study spaces",
        "Focuses on practice problems"
      ],
      bio: "Looking for motivated study partners who are interested in algorithm optimization and machine learning. I'm particularly strong in mathematics and can help with calculus and linear algebra concepts.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f"
    },
    // Add more mock cards here
    {
      name: "Jackson",
      age: 19,
      major: "Computer Science",
      minor: "Mathematics",
      gpa: "2.5",
      campus: "Main Campus",
      courses: ["CS 401 - Advanced Algorithms", "MATH 301 - Linear Algebra", "CS 380 - Database Systems"],
      preferences: [
        "Prefers evening study sessions",
        "Library or quiet study spaces",
        "Focuses on practice problems"
      ],
      bio: "Looking for motivated study partners who are interested in algorithm optimization and machine learning. I'm particularly strong in mathematics and can help with calculus and linear algebra concepts.",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Hugh_Jackman_by_Gage_Skidmore_3.jpg"
    },

    {
      name: "Jamie",
      age: 20,
      major: "Computer Science",
      minor: "Mathematics",
      gpa: "3.8",
      campus: "Main Campus",
      courses: ["CS 401 - Advanced Algorithms", "MATH 301 - Linear Algebra", "CS 380 - Database Systems"],
      preferences: [
        "Prefers evening study sessions",
        "Library or quiet study spaces",
        "Focuses on practice problems"
      ],
      bio: "Looking for motivated study partners who are interested in algorithm optimization and machine learning. I'm particularly strong in mathematics and can help with calculus and linear algebra concepts.",
      image: "https://snworksceo.imgix.net/dth/e39edf84-9f8c-49b6-b69a-9d2a79f8a233.sized-1000x1000.jpg?w=1000"
    },

    {
      name: "Sarah",
      age: 20,
      major: "Computer Science",
      minor: "Mathematics",
      gpa: "3.8",
      campus: "Main Campus",
      courses: ["CS 401 - Advanced Algorithms", "MATH 301 - Linear Algebra", "CS 380 - Database Systems"],
      preferences: [
        "Prefers evening study sessions",
        "Library or quiet study spaces",
        "Focuses on practice problems"
      ],
      bio: "Looking for motivated study partners who are interested in algorithm optimization and machine learning. I'm particularly strong in mathematics and can help with calculus and linear algebra concepts.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f"
    },
  ];

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

  return (
    <div className="min-h-screen pt-20 bg-gray-100">
      <div className="max-w-md mx-auto p-4">
        {/* Filters Button */}
        <div className="mb-4">
          <button className="w-full bg-white rounded-lg shadow-md py-2 px-4 text-gray-700 font-medium flex items-center justify-center gap-2 hover:bg-gray-50">
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

        {/* Card Stack */}
        <div className="relative h-[600px]">
          {cards.map((card, index) => (
            <div
              key={index}
              style={getCardStyle(index)}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              {/* Profile Header */}
              <div className="relative aspect-[4/3]">
                <img
                  src={card.image}
                  alt={`${card.name} studying`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h2 className="text-2xl font-bold text-white">{card.name}, {card.age}</h2>
                  <p className="text-gray-200">{card.major} • Junior</p>
                </div>
              </div>

              {/* Academic Info */}
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

              {/* Current Courses */}
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

              {/* Study Preferences */}
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

              {/* Bio */}
              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-900 mb-2">About</h3>
                <p className="text-gray-600">{card.bio}</p>
              </div>

              {/* Action Buttons */}
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
                  <span className="text-green-500 text-3xl">♥</span>
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
