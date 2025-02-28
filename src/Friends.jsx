function Friends() {
  return (
    <div className="min-h-screen pt-20 bg-gray-100">
      <div className="max-w-3xl mx-auto p-4">
        {/* Search Bar */}
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search friends..."
              className="w-full bg-white rounded-lg shadow-md py-2 px-4 pl-10 text-gray-700"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-3 top-2.5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Friends List */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Friend Item */}
          <div className="p-4 border-b hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src="https://placekitten.com/100/100"
                  alt="Friend"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Sarah Chen</h3>
                <p className="text-sm text-gray-500">
                  Last message: Great! See you in the library
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">Online</p>
              </div>
            </div>
          </div>

          {/* Another Friend Item */}
          <div className="p-4 border-b hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src="https://placekitten.com/101/101"
                  alt="Friend"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-gray-300 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Mike Johnson</h3>
                <p className="text-sm text-gray-500">
                  Last message: Thanks for the help!
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
          </div>

          {/* More Friend Items */}
          <div className="p-4 border-b hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src="https://placekitten.com/102/102"
                  alt="Friend"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Emily Taylor</h3>
                <p className="text-sm text-gray-500">
                  Last message: When's our next study session?
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">Online</p>
              </div>
            </div>
          </div>

          {/* Add Friend Button */}
          <div className="p-4">
            <button className="w-full bg-purple-600 text-white rounded-lg py-2 px-4 font-medium hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
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
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add New Friend
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Friends;
