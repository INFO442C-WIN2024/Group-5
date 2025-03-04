function Friends() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Friends</h2>
          <span className="text-sm text-gray-500">3 online • 12 total</span>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search friends..."
              className="w-full bg-white rounded-xl shadow-sm py-3 px-12 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            />
            <svg
              className="h-5 w-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
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
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Friend Item Component */}
          {[
            {
              name: "Sarah Chen",
              lastMessage: "Great! See you in the library",
              status: "online",
              image: "https://placekitten.com/100/100",
            },
            {
              name: "Mike Johnson",
              lastMessage: "Thanks for the help!",
              status: "2 hours ago",
              image: "https://placekitten.com/101/101",
            },
            {
              name: "Emily Taylor",
              lastMessage: "When's our next study session?",
              status: "online",
              image: "https://placekitten.com/102/102",
            },
          ].map((friend, index) => (
            <div
              key={index}
              className="p-4 border-b last:border-b-0 hover:bg-gray-50 cursor-pointer transition-colors duration-150"
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={friend.image}
                    alt={friend.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-gray-100"
                  />
                  <div
                    className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white ${
                      friend.status === "online" ? "bg-green-500" : "bg-gray-300"
                    }`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 truncate">
                      {friend.name}
                    </h3>
                    <p className="text-xs text-gray-500 flex-shrink-0 ml-2">
                      {friend.status}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 truncate">
                    {friend.lastMessage}
                  </p>
                </div>
                <button className="p-1 hover:text-purple-600">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}

          {/* Add Friend Button */}
          <div className="p-4 bg-gray-50">
            <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl py-3 px-4 font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
              <svg
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