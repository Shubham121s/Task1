

import { Home, FileText, Plus, Settings, User, Instagram, Signal, Wifi, Battery } from "lucide-react"

export default function TaskDetails() {
  return (
    <div className="max-w-md mx-auto bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <span className="text-lg font-bold">8:13</span>
        <div className="flex items-center space-x-2">
          <Signal className="h-5 w-5" />
          <Wifi className="h-5 w-5" />
          <Battery className="h-5 w-5" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">Task Details</h1>
        
        {/* Stats */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <User className="h-6 w-6 text-purple-500 mr-2" />
            <span className="font-bold text-purple-500">3982</span>
          </div>
          <div className="flex items-center">
            <span className="font-bold text-green-500 mr-2">₹2875.00</span>
            <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
          </div>
        </div>

        {/* Task Cards */}
        <div className="space-y-4">
          {[
            "Monthly leaderboard winner 🏆",
            "Share With 5 friends!",
            "Earn daily win Big Reward!",
            "Claim 10 Point Every Hour",
            "Weekly Leaderboard Prize",
            "Like the Instagram Post"
          ].map((task, index) => (
            <div key={index} className="bg-red-500 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-4">
                  <Instagram className="w-8 h-8 text-pink-500" />
                </div>
                <span className="text-white font-medium">{task}</span>
              </div>
              <span className="bg-white text-red-500 px-3 py-1 rounded-full font-bold">10 Points</span>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-blue-500 text-white p-2 flex justify-between items-center">
        <button className="flex flex-col items-center justify-center w-16">
          <Home className="h-6 w-6" />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center justify-center w-16">
          <FileText className="h-6 w-6" />
          <span className="text-xs mt-1">Tasks</span>
        </button>
        <button className="flex flex-col items-center justify-center w-16 -mt-6">
          <div className="bg-white rounded-full p-3">
            <Plus className="h-8 w-8 text-blue-500" />
          </div>
        </button>
        <button className="flex flex-col items-center justify-center w-16">
          <Settings className="h-6 w-6" />
          <span className="text-xs mt-1">Settings</span>
        </button>
        <button className="flex flex-col items-center justify-center w-16">
          <User className="h-6 w-6" />
          <span className="text-xs mt-1">Profile</span>
        </button>
      </nav>
    </div>
  )
}