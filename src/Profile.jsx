import { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

// Empty sections for us to fill out
function Profile() {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        name: "",
        major: "",
        minor: "",
        campus: "",
        about: "",
        gpa: "",
        courses: [],
        preferences: [],
        image: ""
    });

    const [profiles, setProfiles] = useState([]); // Store all profiles from Firestore
    // gets existing profiles from Firestore when component loads
    useEffect(() => {
        const fetchProfiles = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "profiles"));
                const profilesData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProfiles(profilesData);
                console.log("Fetched profiles:", profilesData);
            } catch (error) {
                console.error("Error fetching profiles:", error);
            }
        };

        fetchProfiles();
    }, []);

    // Profile editing (setting as true to start)
    const handleEdit = () => {
        setIsEditing(true);
    };

    // Changing the profile
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Courses and Preferences are set as arrays in Firestore, so these are necessary
    const handleCoursesChange = (e) => {
        setProfile(prev => ({
            ...prev,
            courses: e.target.value.split(",").map(course => course.trim())
        }));
    };
    const handlePreferencesChange = (e) => {
        setProfile(prev => ({
            ...prev,
            preferences: e.target.value.split(",").map(pref => pref.trim())
        }));
    };

    // Saving (sending to firestore)
    const handleSave = async () => {
      setIsEditing(false);
      try {
          const profilesCollection = collection(db, "profiles");
          const docRef = await addDoc(profilesCollection, profile);
          console.log("Profile saved to Firestore with ID:", docRef.id);
      } catch (error) {
          console.error("Error saving profile:", error);
      }
  };

    return (
      <div className="min-h-screen pt-20 bg-gray-100 flex justify-center items-center">
        <div className="max-w-md w-full p-6 bg-white rounded-2xl shadow-xl">
          <h1 className="text-xl font-bold text-center mb-4">Edit your Profile</h1>

          <div className="mb-4 text-center">
            <img 
              className="mx-auto w-[141px] h-[141px] rounded-full border-2 border-gray-300"
              src={profile.image || "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"} 
              alt="Profile" 
            />
            {isEditing && (
              <input 
                type="text"
                name="image"
                value={profile.image}
                onChange={handleChange}
                placeholder="Enter image URL..."
                className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-gray-700 font-semibold mb-1">Name</label>
              <input type="text" name="name" value={profile.name} onChange={handleChange} disabled={!isEditing} 
                     className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Major</label>
              <input type="text" name="major" value={profile.major} onChange={handleChange} disabled={!isEditing} 
                     className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Minor</label>
              <input type="text" name="minor" value={profile.minor} onChange={handleChange} disabled={!isEditing} 
                     className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700 font-semibold mb-1">Campus</label>
              <input type="text" name="campus" value={profile.campus} onChange={handleChange} disabled={!isEditing} 
                     className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 font-semibold mb-1">About</label>
            <textarea name="about" value={profile.about} onChange={handleChange} disabled={!isEditing}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="4"></textarea>
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 font-semibold mb-1">GPA</label>
            <input type="number" name="gpa" value={profile.gpa} onChange={handleChange} disabled={!isEditing}
                   className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 font-semibold mb-1">Courses (ex: INFO442, INFO340, ...)</label>
            <input type="text" name="courses" value={profile.courses.join(", ")} onChange={handleCoursesChange} disabled={!isEditing}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 font-semibold mb-1">Preferences (ex: Remote, Prefers Odegardd Library, ...)</label>
            <input type="text" name="preferences" value={profile.preferences?.length > 0 ? profile.preferences.join(", ") : "None"} onChange={handlePreferencesChange} disabled={!isEditing}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

          <div className="mt-4">
            {isEditing ? (
              <button onClick={handleSave} className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                Save Changes
              </button>
            ) : (
              <button onClick={handleEdit} className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    );
}

export default Profile;
