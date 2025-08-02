import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Simulating API call with faster loading
        // const response = await axios.get('http://localhost:5000/api/user');
        // setUserData(response.data);
        
        // Fallback data with Indian context
        setUserData({
          name: "Priya Sharma",
          referralCode: "priya2025",
          donations: 1250
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    // Reduced loading time for better UX
    setTimeout(() => {
      fetchUserData();
    }, 500);
  }, []);

  const rewards = [
    { title: "Bronze Supporter", requirement: "₹500+", unlocked: true, icon: "🥉", description: "First step in empowerment" },
    { title: "Silver Champion", requirement: "₹1000+", unlocked: true, icon: "🥈", description: "Making real impact" },
    { title: "Gold Advocate", requirement: "₹2000+", unlocked: false, icon: "🥇", description: "Leading the change" },
    { title: "Platinum Hero", requirement: "₹5000+", unlocked: false, icon: "💎", description: "Transforming lives" },
    { title: "Community Leader", requirement: "₹10000+", unlocked: false, icon: "👑", description: "Inspiring others" },
    { title: "Changemaker", requirement: "₹25000+", unlocked: false, icon: "⭐", description: "Revolutionary impact" }
  ];

  const getProgressToNext = () => {
    const current = userData?.donations || 0;
    const nextMilestone = rewards.find(r => !r.unlocked);
    if (!nextMilestone) return 100;
    
    const target = parseInt(nextMilestone.requirement.replace('₹', '').replace('+', ''));
    return Math.min((current / target) * 100, 100);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-red-200 border-t-red-500 rounded-full animate-spin mx-auto mb-4"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-orange-400 rounded-full animate-spin mx-auto" style={{animationDelay: '0.1s'}}></div>
          </div>
          <div className="text-xl text-white font-semibold">Welcome back...</div>
          <div className="text-gray-400 mt-2">Loading your impact dashboard</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Welcome back, <span className="text-orange-100">{userData?.name}</span>!
            </h1>
            <p className="text-red-100 text-lg max-w-2xl mx-auto">
              Your journey in empowering women continues. Every step creates opportunities for change.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">👤</span>
                  </div>
                </div>
                <div className="ml-5 flex-1">
                  <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                    Fundraiser
                  </h3>
                  <p className="text-xl font-bold text-white mt-1">
                    {userData?.name}
                  </p>
                  <p className="text-xs text-gray-500">She Can Foundation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">#</span>
                  </div>
                </div>
                <div className="ml-5 flex-1">
                  <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                    Referral Code
                  </h3>
                  <p className="text-xl font-bold text-white font-mono mt-1 bg-gray-700 px-2 py-1 rounded inline-block">
                    {userData?.referralCode}
                  </p>
                  <p className="text-xs text-gray-500">Share to multiply impact</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">₹</span>
                  </div>
                </div>
                <div className="ml-5 flex-1">
                  <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                    Total Raised
                  </h3>
                  <p className="text-2xl font-bold text-green-400 mt-1">
                    ₹{userData?.donations?.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500">Empowering women</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress to Next Milestone */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-xl mb-8 overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Next Milestone</h3>
              <span className="text-sm text-gray-400">{Math.round(getProgressToNext())}% Complete</span>
            </div>
            <div className="bg-gray-700 rounded-full h-4 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-red-500 to-orange-400 h-4 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${getProgressToNext()}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-gray-400 mt-2">
              <span>₹{userData?.donations?.toLocaleString()}</span>
              <span>{rewards.find(r => !r.unlocked)?.requirement || 'All unlocked!'}</span>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-xl mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-6 py-4 border-b border-gray-600">
            <h3 className="text-2xl font-bold text-white">Your Impact</h3>
            <p className="text-gray-300 mt-1">Lives touched through your contributions</p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                <div className="text-4xl font-bold text-purple-400 mb-3">
                  {Math.floor(userData?.donations / 50)}
                </div>
                <div className="text-white font-semibold mb-1">Women Educated</div>
                <div className="text-gray-400 text-sm">Through skill development programs</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
                <div className="text-4xl font-bold text-green-400 mb-3">
                  {Math.floor(userData?.donations / 100)}
                </div>
                <div className="text-white font-semibold mb-1">Healthcare Services</div>
                <div className="text-gray-400 text-sm">Medical care and wellness support</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg border border-orange-500/20">
                <div className="text-4xl font-bold text-orange-400 mb-3">
                  {Math.floor(userData?.donations / 200)}
                </div>
                <div className="text-white font-semibold mb-1">Micro-enterprises</div>
                <div className="text-gray-400 text-sm">Economic independence initiatives</div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Badges */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-xl mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-6 py-4 border-b border-gray-600">
            <h3 className="text-2xl font-bold text-white">Achievements</h3>
            <p className="text-gray-300 mt-1">Milestones in your fundraising journey</p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rewards.map((reward, index) => (
                <div 
                  key={index}
                  className={`relative p-6 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                    reward.unlocked 
                      ? 'border-orange-500 bg-gradient-to-br from-orange-500/20 to-red-500/20 shadow-lg' 
                      : 'border-gray-600 bg-gray-700/50 hover:border-gray-500'
                  }`}
                >
                  {reward.unlocked && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{reward.icon}</span>
                    <div>
                      <h4 className={`font-bold text-lg ${
                        reward.unlocked ? 'text-orange-400' : 'text-gray-400'
                      }`}>
                        {reward.title}
                      </h4>
                      <p className={`text-sm ${
                        reward.unlocked ? 'text-orange-300' : 'text-gray-500'
                      }`}>
                        {reward.requirement}
                      </p>
                    </div>
                  </div>
                  <p className={`text-sm mb-4 ${
                    reward.unlocked ? 'text-white' : 'text-gray-500'
                  }`}>
                    {reward.description}
                  </p>
                  <div className="mt-4">
                    {reward.unlocked ? (
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg">
                        ✓ ACHIEVED
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-gray-600 text-gray-300">
                        🔒 LOCKED
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-xl p-8 shadow-2xl">
          <div className="text-center">
            <div className="text-6xl mb-4">💪</div>
            <blockquote className="text-white text-xl italic mb-4 max-w-3xl mx-auto leading-relaxed">
              "Together, we can break down barriers and empower women. Every contribution makes a difference in creating a world where every woman has the opportunity to thrive and succeed."
            </blockquote>
            <div className="text-orange-100">
              <div className="font-bold text-lg">REETA MISHRA</div>
              <div className="text-sm opacity-90">Founder & President, She Can Foundation</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl">
            Share Your Code
          </button>
          <button className="bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-200 border border-gray-600">
            View Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;