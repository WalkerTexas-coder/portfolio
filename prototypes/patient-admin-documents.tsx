import React, { useState } from 'react';
import { Download, FileText, MessageSquare, Upload, X } from 'lucide-react';

const PatientAdminDocuments = () => {
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "MEDICAL_HISTORY_1.PDF",
      uploadDate: "08/14/2025",
      source: "Questionnaire",
      type: "pdf"
    },
    {
      id: 2,
      name: "Lab_Results_Thyroid.pdf",
      uploadDate: "08/12/2025", 
      source: "Chat",
      type: "pdf"
    },
    {
      id: 3,
      name: "Insurance_Card_Front.jpg",
      uploadDate: "08/10/2025",
      source: "Questionnaire", 
      type: "image"
    },
    {
      id: 4,
      name: "Previous_Prescription_List.docx",
      uploadDate: "08/08/2025",
      source: "Chat",
      type: "document"
    },
    {
      id: 5,
      name: "Additional_Lab_Work.pdf",
      uploadDate: "08/07/2025",
      source: "Patient",
      type: "pdf"
    }
  ]);

  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      const newDoc = {
        id: documents.length + 1,
        name: selectedFile.name,
        uploadDate: new Date().toLocaleDateString('en-US'),
        source: "Patient",
        type: "pdf"
      };
      
      setDocuments([newDoc, ...documents]);
      setSelectedFile(null);
      setShowUploadModal(false);
      setUploadSuccess(true);
      
      setTimeout(() => setUploadSuccess(false), 3000);
    }
  };

  const handleDownload = (doc) => {
    console.log('Downloading:', doc.name);
    // Simulate download
    alert(`Downloading ${doc.name}`);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Navigation */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <h1 className="text-xl font-semibold text-gray-900">HealthPlatform US</h1>
        </div>
        
        <nav className="mt-8">
          <div className="px-4 space-y-2">
            <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <span className="mr-3">📊</span>
              Dashboard
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <span className="mr-3">💬</span>
              Messages
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <span className="mr-3">📦</span>
              Products
            </a>
            
            <div className="pt-4">
              <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Orders and Services</p>
              <div className="mt-2 space-y-1">
                <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  All orders
                </a>
                <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Consultations
                </a>
                <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Subscriptions
                </a>
              </div>
            </div>

            <div className="pt-4">
              <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <span className="mr-3">⚙️</span>
                Store settings
              </a>
              <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <span className="mr-3">🏥</span>
                Medical Care
              </a>
              <a href="#" className="flex items-center px-4 py-2 text-blue-600 bg-blue-50 rounded-md font-medium">
                <span className="mr-3">📄</span>
                Documents
              </a>
              <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <span className="mr-3">👥</span>
                Patients
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <span>Patients</span>
              <span className="mx-2">›</span>
              <span>Austin Walker</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Documents</h1>
                <p className="text-gray-600 mt-1">All documents uploaded by the patient through questionnaires, chat, and direct uploads</p>
              </div>
              <button
                onClick={() => setShowUploadModal(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Upload className="h-4 w-4 mr-2" />
                Upload Document
              </button>
            </div>
          </div>

          {/* Success Message */}
          {uploadSuccess && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-md p-3">
              <div className="flex items-center">
                <div className="text-green-800 text-sm">
                  Document uploaded successfully.
                </div>
              </div>
            </div>
          )}

          {/* Documents Table */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Patient Documents</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Document Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Upload Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Source
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {documents.map((doc) => (
                    <tr key={doc.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-gray-400 mr-3" />
                          <span className="text-sm font-medium text-gray-900">{doc.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {doc.uploadDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {doc.source === 'Questionnaire' ? (
                            <FileText className="h-4 w-4 text-blue-500 mr-2" />
                          ) : doc.source === 'Chat' ? (
                            <MessageSquare className="h-4 w-4 text-green-500 mr-2" />
                          ) : (
                            <Upload className="h-4 w-4 text-purple-500 mr-2" />
                          )}
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            doc.source === 'Questionnaire' 
                              ? 'bg-blue-100 text-blue-800' 
                              : doc.source === 'Chat'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-purple-100 text-purple-800'
                          }`}>
                            {doc.source}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => handleDownload(doc)}
                          className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Empty State (hidden when documents exist) */}
          {documents.length === 0 && (
            <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No documents uploaded</h3>
              <p className="text-gray-500 mb-4">This patient hasn't uploaded any documents through questionnaires, chat, or direct uploads yet.</p>
              <button
                onClick={() => setShowUploadModal(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                <Upload className="h-4 w-4 mr-2" />
                Upload First Document
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Upload Document</h3>
                  <button
                    onClick={() => setShowUploadModal(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select file to upload
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">
                      PDF, DOC, DOCX up to 10MB each
                    </p>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Choose File
                    </label>
                  </div>
                  
                  {selectedFile && (
                    <div className="mt-4 p-3 bg-gray-50 rounded-md">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-900">{selectedFile.name}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={handleUpload}
                  disabled={!selectedFile}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Upload Document
                </button>
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientAdminDocuments;