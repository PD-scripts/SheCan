import React, { useState, useEffect } from 'react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        // Simulating API call since axios isn't available
        // const response = await axios.get('http://localhost:5000/api/leaderboard');
        // setLeaderboard(response.data);
        
        // Fallback data with women's names to match the foundation theme
        setLeaderboard([
          { name: "Priya Sharma", donations: 2500, referralCode: "priya2025" },
          { name: "Anita Desai", donations: 2100, referralCode: "anita2025" },
          { name: "Meera Patel", donations: 1800, referralCode: "meera2025" },
          { name: "Kavya Singh", donations: 1600, referralCode: "kavya2025" },
          { name: "Riya Gupta", donations: 1250, referralCode: "riya2025" },
          { name: "Shreya Jain", donations: 1100, referralCode: "shreya2025" },
          { name: "Nisha Kumar", donations: 950, referralCode: "nisha2025" }
        ]);
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      } finally {
        setLoading(false);
      }
    };

    // Simulate loading delay
    setTimeout(() => {
      fetchLeaderboard();
    }, 1000);
  }, []);

  const getRankIcon = (index) => {
    switch (index) {
      case 0: return "🥇";
      case 1: return "🥈";
      case 2: return "🥉";
      default: return `#${index + 1}`;
    }
  };

  const getRankGradient = (index) => {
    switch (index) {
      case 0: return "from-yellow-400 via-yellow-500 to-orange-500";
      case 1: return "from-gray-300 via-gray-400 to-gray-500";
      case 2: return "from-orange-400 via-orange-500 to-red-500";
      default: return "from-gray-600 to-gray-700";
    }
  };

  const getRankBorder = (index) => {
    switch (index) {
      case 0: return "border-l-yellow-500";
      case 1: return "border-l-gray-400";
      case 2: return "border-l-orange-500";
      default: return "border-l-red-500";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
          <div className="text-xl text-white">Loading leaderboard...</div>
          <div className="text-gray-400 mt-2">Empowering women through fundraising</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fundraising Leaderboard
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            "Together, we can break down barriers and empower women. Every donation creates opportunities for women to thrive and succeed."
          </p>
          <div className="mt-6 text-red-200">
            <span className="text-sm font-medium tracking-wider uppercase">She Can Foundation</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Leaderboard */}
        <div className="bg-gray-800 shadow-2xl rounded-lg overflow-hidden border border-gray-700">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-6 py-4 border-b border-gray-600">
            <h2 className="text-2xl font-bold text-white">Top Fundraisers</h2>
            <p className="text-gray-300 mt-1">Champions making a difference</p>
          </div>
          
          <div className="divide-y divide-gray-700">
            {leaderboard.map((user, index) => (
              <div key={index} className={`border-l-4 ${getRankBorder(index)} bg-gray-800 hover:bg-gray-750 transition-colors duration-200`}>
                <div className="px-6 py-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${getRankGradient(index)} rounded-full flex items-center justify-center shadow-lg`}>
                          <span className="text-xl font-bold text-white">
                            {getRankIcon(index)}
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <h3 className="text-xl font-semibold text-white">
                            {user.name}
                          </h3>
                          {index < 3 && (
                            <span className="ml-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-500 text-white">
                              Top 3
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-400 font-mono bg-gray-700 px-2 py-1 rounded inline-block">
                          Code: {user.referralCode}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-green-400">
                        ₹{user.donations.toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-400">raised</p>
                    </div>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="mt-4">
                    <div className="bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-red-500 to-orange-400 h-3 rounded-full transition-all duration-1000 ease-out shadow-sm"
                        style={{ 
                          width: `${(user.donations / leaderboard[0].donations) * 100}%` 
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>{Math.round((user.donations / leaderboard[0].donations) * 100)}% of top performer</span>
                      <span>Goal: ₹5,000</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white text-lg">👥</span>
                  </div>
                </div>
                <div className="ml-5 flex-1">
                  <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                    Total Participants
                  </h3>
                  <p className="text-2xl font-bold text-white mt-1">
                    {leaderboard.length}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Women making impact</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white text-lg">💰</span>
                  </div>
                </div>
                <div className="ml-5 flex-1">
                  <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                    Total Raised
                  </h3>
                  <p className="text-2xl font-bold text-white mt-1">
                    ₹{leaderboard.reduce((sum, user) => sum + user.donations, 0).toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Empowering communities</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white text-lg">📊</span>
                  </div>
                </div>
                <div className="ml-5 flex-1">
                  <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                    Average Raised
                  </h3>
                  <p className="text-2xl font-bold text-white mt-1">
                    ₹{Math.round(leaderboard.reduce((sum, user) => sum + user.donations, 0) / leaderboard.length).toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Per participant</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-lg p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Mission
            </h2>
            <p className="text-red-100 text-lg mb-6 max-w-2xl mx-auto">
              Every contribution helps us create opportunities for women to thrive and succeed. 
              Together, we can break down barriers and build a more equitable society.
            </p>
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              START FUNDRAISING
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;