import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AmazingTaskApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [showNotification, setShowNotification] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const tasks = [
    { title: "Monthly leaderboard winner 🏆", points: 10, color: "from-pink-500 to-rose-500", icon: "🏆" },
    { title: "Share With 5 friends!", points: 10, color: "from-purple-500 to-indigo-500", icon: "👥" },
    { title: "Earn daily win Big Reward!", points: 10, color: "from-yellow-400 to-amber-500", icon: "💰" },
    { title: "Claim 10 Point Every Hour", points: 10, color: "from-green-400 to-emerald-500", icon: "⏰" },
    { title: "Weekly Leaderboard Prize", points: 10, color: "from-blue-500 to-cyan-500", icon: "🎖️" },
    { title: "Like the Instagram Post", points: 10, color: "from-red-500 to-orange-500", icon: "❤️" }
  ];

  const showNotificationBriefly = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gray-900 h-screen flex flex-col relative overflow-hidden font-sans">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwMDAwMjAiPjwvcmVjdD4KPHBhdGggZD0iTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVoiIHN0cm9rZT0iIzIwMjAyMDMwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-20"></div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-3 flex justify-between items-center shadow-lg relative z-10">
        <motion.span 
          className="text-lg font-semibold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </motion.span>
        <div className="flex items-center space-x-2">
          {['signal', 'wifi', 'battery'].map((icon, index) => (
            <motion.svg
              key={icon}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {icon === 'signal' && <path d="M2 22h20V2z"/>}
              {icon === 'wifi' && <path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/>}
              {icon === 'battery' && <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/>}
            </motion.svg>
          ))}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-4 py-6 space-y-6 relative z-10">
        <motion.h1 
          className="text-3xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Task Details
        </motion.h1>
        
        {/* Stats */}
        <motion.div 
          className="flex justify-between items-center bg-gray-800 bg-opacity-50 p-4 rounded-xl shadow-lg backdrop-blur-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center space-x-3">
            <div className="bg-purple-900 p-2 rounded-full">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-purple-300">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <span className="text-purple-300 font-bold text-2xl">3,982</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-green-400 font-bold text-2xl">₹2,875.00</span>
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-lg font-bold">V</span>
            </div>
          </div>
        </motion.div>

        {/* Task Cards */}
        <div className="space-y-4">
          {tasks.map((task, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-r ${task.color} rounded-xl p-4 shadow-lg overflow-hidden relative`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center relative z-10">
                <div className="w-12 h-12 bg-white bg-opacity-30 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md backdrop-blur-sm">
                  <span className="text-2xl">{task.icon}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-white font-semibold text-lg mb-1">{task.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="bg-white bg-opacity-30 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
                      {task.points} Points
                    </span>
                    <motion.button 
                      className="text-[#000000] text-sm font-bold bg-white bg-opacity-30 px-3 py-1 rounded-full backdrop-blur-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={showNotificationBriefly}
                    >
                      Claim Now
                    </motion.button>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -mr-16 -mt-16 backdrop-blur-sm"></div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-gray-800 bg-opacity-50 backdrop-blur-md text-white py-2 px-4 flex justify-between items-center relative z-10">
        {['home', 'tasks', 'add', 'settings', 'profile'].map((tab) => (
          <motion.button
            key={tab}
            className={`flex flex-col items-center ${tab === 'add' ? '-mt-8' : ''} ${activeTab === tab && tab !== 'add' ? 'bg-white bg-opacity-20 rounded-full p-2' : ''}`}
            onClick={() => setActiveTab(tab)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab === 'add' ? (
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-3 shadow-lg">
                <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
              </div>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" className={activeTab === tab ? 'w-8 h-8' : 'w-6 h-6'}>
                {tab === 'home' && <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>}
                {tab === 'tasks' && <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>}
                {tab === 'settings' && <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>}
                {tab === 'profile' && <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>}
              </svg>
            )}
            <span className="text-xs mt-1 capitalize">{tab}</span>
          </motion.button>
        ))}
      </nav>

      {/* Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
           className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50"
          >
            Points claimed successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}