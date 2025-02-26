function Profile() {
    return (
      <div className = "min-h-screen pt-20 bg-gray-100"> 
      <div className="max-w-md mx-auto p-4">
        <div className="lg:text-3xl md:text-2xl text-xl font-medium mb-2 dark:text-white">
        <h1>Edit Profile</h1>
        </div>
      {/* Profile Pic Upload */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f" alt="Study Mate"/>
          <h6 className="text-center mt-1 font-medium dark:text-gray-300 hover:opacity-10">Upload a different photo</h6>
        </div>
      <div class="flex flex-col lg:flex-row gap-2 justify-center w-full">
                        <div class="w-full  mb-4 mt-6">
                            <label for="" class="mb-4 dark:text-gray-300">Name</label>
                            <input type="text"
                                    class="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-200 dark:bg-gray-800"
                                    placeholder="Name"/>
                        </div>
                        <div class="w-full  mb-4 lg:mt-6">
                            <label for="" class=" dark:text-gray-300">Year</label>
                            <input type="text"
                                    class="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-200 dark:bg-gray-800"
                                    placeholder="Year"/>
                        </div>
                    </div>
      </div>
      </div>
    );
  }
  
  export default Profile;