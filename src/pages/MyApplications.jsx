import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaDollarSign, FaClock, FaTrash } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

function MyApplications() {
  const [applications, setApplications] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    // Load applications from localStorage
    const savedApplications = JSON.parse(localStorage.getItem('appliedJobs') || '[]');
    setApplications(savedApplications);
  }, []);

  const handleWithdraw = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const confirmWithdraw = () => {
    if (selectedJob) {
      const updatedApplications = applications.filter(app => app.id !== selectedJob.id);
      localStorage.setItem('appliedJobs', JSON.stringify(updatedApplications));
      setApplications(updatedApplications);
      toast.success('Application withdrawn successfully!');
      setShowModal(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">My Applications</h1>
        <p className="text-gray-600">
          Track and manage your job applications
        </p>
      </div>

      {applications.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm">
          <p className="text-gray-500 text-lg">You haven't applied to any jobs yet.</p>
          <a
            href="/chore-jobs"
            className="inline-block mt-4 text-purple-600 hover:text-purple-700"
          >
            Browse Available Jobs
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                  <button
                    onClick={() => handleWithdraw(job)}
                    className="text-red-500 hover:text-red-600 transition-colors duration-200"
                  >
                    <FaTrash />
                  </button>
                </div>

                <p className="text-gray-600 mb-4">{job.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaDollarSign className="mr-2" />
                    <span>${job.pay}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaClock className="mr-2" />
                    <span>{job.duration}</span>
                  </div>
                </div>

                <div className="text-sm text-gray-500">
                  Applied on: {formatDate(job.appliedAt)}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Withdrawal Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">Withdraw Application</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to withdraw your application for "{selectedJob?.title}"?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={confirmWithdraw}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Withdraw
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyApplications; 