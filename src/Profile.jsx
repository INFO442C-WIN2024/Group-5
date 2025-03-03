function Profile() {
    return (
      <div className = "min-h-screen pt-18 bg-white"> 
      <div className="max-w-sm mx-auto p-4">
        <div className="lg:text-3xl text-sm mb-2 dark:text-white flex justify-center">
        <h1>Edit your Profile</h1>
        </div>
      {/* Profile Pic Upload */}
        <img className="mx-auto mb=2 flex justify-center w-[141px] h-[141px] rounded-full overflow-hidden" src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f" alt="Study Mate Profile"/>
        <button className="mt-2 w-full bg-white rounded-lg shadow-md py-2 px-4 text-gray-700 font-medium flex items-center justify-center gap-2 hover:bg-gray-50">Upload a new photo</button>
      <div class="grid grid-cols-2 flex flex-col lg:flex-row gap-1 justify-center w-full text-sm">
          <div class="w-full  mb-2 mt-6"> 
              <label for="" class="mb-2 bg-white">Name</label>
              <input type="text"
                      class="mt-2 p-2 w-full border rounded-lg dark:text-gray-200 border-gray-200 dark:bg-gray-800"
                      disabled="disabled" placeholder="Sarah"/>
          </div>
          <div class="w-full  mb-2 lg:mt-6">
              <label for="" class=" dark:text-gray-300">Major</label>
              <input type="text"
                      class="mt-2 p-2 w-full border rounded-lg dark:text-gray-200 border-gray-200 dark:bg-gray-800"
                      disabled="disabled" placeholder="Computer Science"/>
          </div>
          <div class="w-full  mb-2 mt-2">
              <label for="" class="mb-2 dark:text-gray-300">Minor</label>
              <input type="text"
                      class="mt-2 mb-2 p-2 w-full border rounded-lg dark:text-gray-200 border-gray-200 dark:bg-gray-800"
                      disabled="disabled" placeholder="Mathematics"/>
          </div>
          <div class="w-full  mb-2 lg:mt-2">
              <label for="" class=" dark:text-gray-300">Campus</label>
              <input type="text"
                      class="mt-2 mb-2 p-2 w-full border rounded-lg dark:text-gray-200 border-gray-200 dark:bg-gray-800"
                      disabled="disabled" placeholder="Main Campus"/>
          </div>
      </div>
     <div className="mt=6 mb=2">
        <label for="message" class="block mb-2 text-sm dark:text-gray-300">About</label>
        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled="disabled" 
        placeholder="Looking for motivated study partners who are interested in algorithm optimization and machine learning. I'm particularly strong in mathematics and can help with calculus and linear algebra concepts."></textarea>
      </div> 
      <button className="mt-4 mb-6 w-full bg-white rounded-lg shadow-md py-2 px-4 text-gray-700 font-medium flex items-center justify-center gap-2 hover:bg-gray-50">Edit Profile</button>
      </div>
      </div>
    );
  }
  
  export default Profile;