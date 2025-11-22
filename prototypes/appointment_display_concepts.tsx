import React, { useState } from 'react';
import { Calendar, Clock, User, MapPin, Search, Filter, MoreHorizontal, Video, RefreshCw, X } from 'lucide-react';

const AppointmentDisplayConcepts = () => {
  const [selectedConcept, setSelectedConcept] = useState('table');

  // Sample appointment data based on the screenshot
  const appointments = [
    {
      id: 1,
      patient: "Bryyyn Tele",
      type: "HealthPlatform Provider Appointment",
      date: "August 22, 2025",
      time: "11:00 AM - 11:30 AM",
      duration: "30 min",
      status: "Scheduled",
      host: "Patient Concierge",
      timezone: "Central Time",
      countdown: "3 days, 22 hours, 44 minutes",
      statusColor: "green"
    },
    {
      id: 2,
      patient: "Sarah Johnson",
      type: "HealthPlatform Provider Appointment", 
      date: "August 23, 2025",
      time: "2:00 PM - 2:30 PM",
      duration: "30 min",
      status: "Awaiting provider assignment",
      host: "TBD",
      timezone: "Central Time",
      countdown: "4 days, 2 hours, 15 minutes",
      statusColor: "yellow"
    },
    {
      id: 3,
      patient: "Michael Chen",
      type: "HealthPlatform Provider Appointment",
      date: "August 24, 2025", 
      time: "9:00 AM - 9:30 AM",
      duration: "30 min",
      status: "Scheduled",
      host: "Dr. Alexander Mauskop",
      timezone: "Central Time",
      countdown: "5 days, 21 hours, 30 minutes",
      statusColor: "green"
    },
    {
      id: 4,
      patient: "Emma Williams",
      type: "HealthPlatform Provider Appointment",
      date: "August 25, 2025",
      time: "3:30 PM - 4:00 PM", 
      duration: "30 min",
      status: "Scheduled",
      host: "Dr. Alexander Mauskop",
      timezone: "Central Time",
      countdown: "6 days, 4 hours, 45 minutes",
      statusColor: "green"
    },
    {
      id: 5,
      patient: "David Martinez",
      type: "HealthPlatform Provider Appointment",
      date: "August 26, 2025",
      time: "10:00 AM - 10:30 AM",
      duration: "30 min", 
      status: "Awaiting provider assignment",
      host: "TBD",
      timezone: "Central Time",
      countdown: "7 days, 22 hours, 10 minutes",
      statusColor: "yellow"
    }
  ];

  const LeftRail = () => (
    <div className="w-64 bg-white border-r border-gray-200 h-screen">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">HealthPlatform US</h2>
      </div>
      
      <nav className="mt-4">
        <div className="px-4 py-2">
          <div className="flex items-center text-gray-600 hover:text-gray-900 cursor-pointer">
            <span className="mr-3">📊</span>
            <span>Dashboard</span>
          </div>
        </div>
        
        <div className="px-4 py-2">
          <div className="flex items-center text-gray-600 hover:text-gray-900 cursor-pointer">
            <span className="mr-3">💬</span>
            <span>Messages</span>
          </div>
        </div>
        
        <div className="px-4 py-2">
          <div className="flex items-center text-gray-600 hover:text-gray-900 cursor-pointer">
            <span className="mr-3">📦</span>
            <span>Products</span>
          </div>
        </div>
        
        <div className="px-4 py-2">
          <div className="text-gray-600">
            <div className="flex items-center cursor-pointer hover:text-gray-900">
              <span className="mr-3">📋</span>
              <span>Orders and Services</span>
            </div>
            <div className="ml-6 mt-2 space-y-1">
              <div className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer">All orders</div>
              <div className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer">Consultations</div>
              <div className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer">Subscriptions</div>
              <div className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer">One-time purchases</div>
            </div>
          </div>
        </div>

        {/* NEW APPOINTMENTS SECTION */}
        <div className="px-4 py-2 bg-blue-50 border-l-4 border-blue-500">
          <div className="flex items-center text-blue-700 font-medium cursor-pointer">
            <Calendar className="mr-3 h-4 w-4" />
            <span>Appointments</span>
          </div>
        </div>
        
        <div className="px-4 py-2">
          <div className="flex items-center text-gray-600 hover:text-gray-900 cursor-pointer">
            <span className="mr-3">⚙️</span>
            <span>Store settings</span>
          </div>
        </div>
        
        <div className="px-4 py-2">
          <div className="flex items-center text-gray-600 hover:text-gray-900 cursor-pointer">
            <span className="mr-3">🏥</span>
            <span>Medical Care</span>
          </div>
        </div>
        
        <div className="px-4 py-2">
          <div className="flex items-center text-gray-600 hover:text-gray-900 cursor-pointer">
            <span className="mr-3">👥</span>
            <span>Patients</span>
          </div>
        </div>
        
        <div className="px-4 py-2">
          <div className="flex items-center text-gray-600 hover:text-gray-900 cursor-pointer">
            <span className="mr-3">👤</span>
            <span>Users</span>
          </div>
        </div>
      </nav>
    </div>
  );

  const StatusBadge = ({ status, color }) => {
    const colors = {
      green: 'bg-green-100 text-green-800',
      yellow: 'bg-yellow-100 text-yellow-800',
      red: 'bg-red-100 text-red-800'
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[color]}`}>
        {status}
      </span>
    );
  };

  const TableView = () => (
    <div className="flex-1 bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Appointments</h1>
              <p className="text-gray-600">Manage all upcoming patient appointments</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              + Appointment
            </button>
          </div>
          
          <div className="mt-4 flex space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search appointments or patients..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="bg-white rounded-lg shadow">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Host</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Starts In</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {appointments.map((apt) => (
                <tr key={apt.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900 hover:text-blue-600 cursor-pointer">{apt.patient}</div>
                      <div className="text-sm text-gray-500">{apt.type}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{apt.date}</div>
                    <div className="text-sm text-gray-500">{apt.time} ({apt.duration})</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={apt.status} color={apt.statusColor} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {apt.host}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {apt.countdown}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900 bg-blue-50 px-3 py-1 rounded">
                        <Video className="h-4 w-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900 bg-gray-50 px-3 py-1 rounded">
                        <RefreshCw className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900 bg-red-50 px-3 py-1 rounded">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const CardView = () => (
    <div className="flex-1 bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Appointments</h1>
              <p className="text-gray-600">Manage all upcoming patient appointments</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              + Appointment
            </button>
          </div>
          
          <div className="mt-4 flex space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search appointments or patients..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appointments.map((apt) => (
            <div key={apt.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-medium text-gray-900 hover:text-blue-600 cursor-pointer">{apt.patient}</h3>
                    <p className="text-sm text-gray-500">{apt.type}</p>
                  </div>
                  <StatusBadge status={apt.status} color={apt.statusColor} />
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="mr-2 h-4 w-4" />
                    {apt.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="mr-2 h-4 w-4" />
                    {apt.time} ({apt.duration})
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="mr-2 h-4 w-4" />
                    {apt.host}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="mr-2 h-4 w-4" />
                    {apt.timezone}
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 mb-4">
                  <p className="text-sm text-yellow-800 font-medium">Starts in {apt.countdown}</p>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 text-sm flex items-center justify-center">
                    <Video className="mr-1 h-4 w-4" />
                    Join
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                    <RefreshCw className="h-4 w-4" />
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const CalendarView = () => (
    <div className="flex-1 bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Appointments</h1>
              <p className="text-gray-600">Manage all upcoming patient appointments</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              + Appointment
            </button>
          </div>
          
          <div className="mt-4 flex space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search appointments or patients..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="bg-white rounded-lg shadow">
          <div className="border-b border-gray-200 p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">August 2025</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">Today</button>
                <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">Week</button>
                <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded">Month</button>
              </div>
            </div>
          </div>
          
          <div className="p-4">
            {/* Day-by-day timeline */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-3">Thursday, August 22, 2025</h3>
                <div className="border-l-2 border-blue-500 pl-4 pb-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-900 hover:text-blue-600 cursor-pointer">Bryyyn Tele</h4>
                        <p className="text-sm text-gray-600">HealthPlatform Provider Appointment</p>
                        <p className="text-sm text-gray-500">11:00 AM - 11:30 AM (30 min)</p>
                        <p className="text-sm text-gray-500">Host: Patient Concierge</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <StatusBadge status="Scheduled" color="green" />
                        <div className="flex space-x-1 mt-2">
                          <button className="text-blue-600 hover:text-blue-900 bg-white px-2 py-1 rounded border">
                            <Video className="h-4 w-4" />
                          </button>
                          <button className="text-gray-600 hover:text-gray-900 bg-white px-2 py-1 rounded border">
                            <RefreshCw className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-3">Friday, August 23, 2025</h3>
                <div className="border-l-2 border-yellow-500 pl-4 pb-4">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-900 hover:text-blue-600 cursor-pointer">Sarah Johnson</h4>
                        <p className="text-sm text-gray-600">HealthPlatform Provider Appointment</p>
                        <p className="text-sm text-gray-500">2:00 PM - 2:30 PM (30 min)</p>
                        <p className="text-sm text-gray-500">Host: TBD</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <StatusBadge status="Awaiting provider assignment" color="yellow" />
                        <div className="flex space-x-1 mt-2">
                          <button className="text-blue-600 hover:text-blue-900 bg-white px-2 py-1 rounded border">
                            <User className="h-4 w-4" />
                          </button>
                          <button className="text-gray-600 hover:text-gray-900 bg-white px-2 py-1 rounded border">
                            <RefreshCw className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-3">Saturday, August 24, 2025</h3>
                <div className="border-l-2 border-blue-500 pl-4 pb-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-900 hover:text-blue-600 cursor-pointer">Michael Chen</h4>
                        <p className="text-sm text-gray-600">HealthPlatform Provider Appointment</p>
                        <p className="text-sm text-gray-500">9:00 AM - 9:30 AM (30 min)</p>
                        <p className="text-sm text-gray-500">Host: Dr. Alexander Mauskop</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <StatusBadge status="Scheduled" color="green" />
                        <div className="flex space-x-1 mt-2">
                          <button className="text-blue-600 hover:text-blue-900 bg-white px-2 py-1 rounded border">
                            <Video className="h-4 w-4" />
                          </button>
                          <button className="text-gray-600 hover:text-gray-900 bg-white px-2 py-1 rounded border">
                            <RefreshCw className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const concepts = [
    { id: 'table', name: 'Table View', description: 'Traditional sortable table with all appointment data' },
    { id: 'cards', name: 'Card View', description: 'Visual cards with key appointment details' },
    { id: 'timeline', name: 'Timeline View', description: 'Chronological timeline organized by date' }
  ];

  return (
    <div className="w-full h-screen bg-gray-100">
      {/* Concept Selector */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-xl font-semibold text-gray-900 mb-4">Store Admin Appointment Display Concepts</h1>
          <div className="flex space-x-4">
            {concepts.map((concept) => (
              <button
                key={concept.id}
                onClick={() => setSelectedConcept(concept.id)}
                className={`px-4 py-2 rounded-md border transition-colors ${
                  selectedConcept === concept.id
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="text-left">
                  <div className="font-medium">{concept.name}</div>
                  <div className="text-xs opacity-75">{concept.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Interface */}
      <div className="flex h-full">
        <LeftRail />
        {selectedConcept === 'table' && <TableView />}
        {selectedConcept === 'cards' && <CardView />}
        {selectedConcept === 'timeline' && <CalendarView />}
      </div>
    </div>
  );
};

export default AppointmentDisplayConcepts;