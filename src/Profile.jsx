import { useState } from 'react';

function Profile() {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        name: "Sarah",
        major: "Computer Science",
        minor: "Mathematics",
        campus: "Main Campus",
        about: "Looking for motivated study partners who are interested in algorithm optimization and machine learning. I'm particularly strong in mathematics and can help with calculus and linear algebra concepts."
    });

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
        // ADD BACKEND HERE
        console.log('Saving profile:', profile);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
      <div className = "min-h-screen pt-20 bg-gray-100"> 
      <div className="max-w-md mx-auto p-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="lg:text-3xl text-sm mb-2 text-black flex justify-center p-4">
            <h1>Edit your Profile</h1>
          </div>
          {/* Profile Pic Upload */}
          <div className="p-4 border-b">
            <img className="mx-auto mb-2 flex justify-center w-[141px] h-[141px] rounded-full overflow-hidden" src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f" alt="Study Mate Profile"/>
            <button className="mt-2 w-full bg-white rounded-lg shadow-md py-2 px-4 text-black font-medium flex items-center justify-center gap-2 hover:bg-gray-50">Upload a new photo</button>
          </div>
          <div className="p-4 border-b">
            <div className="grid grid-cols-2 gap-4">
              <div className="w-full"> 
                <label htmlFor="name" className="block text-sm text-black mb-1">Name</label>
                <input type="text"
                        id="name"
                        name="name"
                        value={profile.name}
                        onChange={handleChange}
                        className={`w-full p-3 bg-gray-50 rounded-lg text-black border border-gray-200 ${isEditing ? '' : 'cursor-not-allowed'}`}
                        disabled={!isEditing}
                        placeholder="Your name"/>
              </div>
              <div className="w-full">
                <label htmlFor="major" className="block text-sm text-black mb-1">Major</label>
                <input type="text"
                        id="major"
                        name="major"
                        value={profile.major}
                        onChange={handleChange}
                        className={`w-full p-3 bg-gray-50 rounded-lg text-black border border-gray-200 ${isEditing ? '' : 'cursor-not-allowed'}`}
                        disabled={!isEditing}
                        placeholder="Your major"/>
              </div>
              <div className="w-full">
                <label htmlFor="minor" className="block text-sm text-black mb-1">Minor</label>
                <input type="text"
                        id="minor"
                        name="minor"
                        value={profile.minor}
                        onChange={handleChange}
                        className={`w-full p-3 bg-gray-50 rounded-lg text-black border border-gray-200 ${isEditing ? '' : 'cursor-not-allowed'}`}
                        disabled={!isEditing}
                        placeholder="Your minor"/>
              </div>
              <div className="w-full">
                <label htmlFor="campus" className="block text-sm text-black mb-1">Campus</label>
                <input type="text"
                        id="campus"
                        name="campus"
                        value={profile.campus}
                        onChange={handleChange}
                        className={`w-full p-3 bg-gray-50 rounded-lg text-black border border-gray-200 ${isEditing ? '' : 'cursor-not-allowed'}`}
                        disabled={!isEditing}
                        placeholder="Your campus"/>
              </div>
            </div>
          </div>
          <div className="p-4 border-b">
            <label htmlFor="about" className="block text-sm text-black mb-1">About</label>
            <textarea id="about"
                      name="about"
                      rows="4"
                      value={profile.about}
                      onChange={handleChange}
                      className={`w-full p-3 bg-gray-50 rounded-lg text-black border border-gray-200 ${isEditing ? '' : 'cursor-not-allowed'}`}
                      disabled={!isEditing}
                      placeholder="Tell us about yourself..."></textarea>
          </div> 
          <div className="p-4">
            {isEditing ? (
              <button 
                onClick={handleSave}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl py-3 px-4 font-medium hover:from-green-700 hover:to-green-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
              >
                Save Changes
              </button>
            ) : (
              <button 
                onClick={handleEdit}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl py-3 px-4 font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
      </div>
    );
  }
  
  export default Profile;