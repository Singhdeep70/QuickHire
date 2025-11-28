import React, { useState } from "react";
import { FaMapMarkerAlt, FaDollarSign, FaClock, FaCheck } from "react-icons/fa";
import { toast } from "react-hot-toast";

// Dummy data for available jobs
const dummyJobs = [
  {
    id: 1,
    title: "Lawn Mowing Service",
    location: "123 Main St, City",
    pay: 50,
    duration: "2 hours",
    description: "Need help mowing and maintaining a medium-sized lawn. Equipment provided.",
    posted: "2024-03-20",
  },
  {
    id: 2,
    title: "House Cleaning",
    location: "456 Oak Ave, Town",
    pay: 75,
    duration: "4 hours",
    description: "Deep cleaning service needed for a 3-bedroom house.",
    posted: "2024-03-19",
  },
  {
    id: 3,
    title: "Grocery Shopping",
    location: "789 Pine Rd, Village",
    pay: 30,
    duration: "1 hour",
    description: "Need someone to pick up groceries from the local supermarket.",
    posted: "2024-03-18",
  },
  {
    id: 4,
    title: "Pet Sitting",
    location: "321 Elm St, City",
    pay: 40,
    duration: "3 hours",
    description: "Looking for someone to walk and feed my dog while I'm at work.",
    posted: "2024-03-17",
  },
];

function ChoreJobs() {
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(dummyJobs);

  // Get applied jobs from localStorage
  const appliedJobs = JSON.parse(localStorage.getItem("appliedJobs") || "[]");

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = dummyJobs.filter(job => 
      job.title.toLowerCase().includes(term) ||
      job.location.toLowerCase().includes(term)
    );
    setFilteredJobs(filtered);
  };

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const confirmApply = () => {
    if (selectedJob) {
      const updatedAppliedJobs = [...appliedJobs, { ...selectedJob, appliedAt: new Date().toISOString() }];
      localStorage.setItem("appliedJobs", JSON.stringify(updatedAppliedJobs));
      toast.success("Successfully applied to the job!");
      setShowModal(false);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Available Chore Jobs</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
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

              <button
                onClick={() => handleApply(job)}
                disabled={appliedJobs.some(applied => applied.id === job.id)}
                className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-300 ${
                  appliedJobs.some(applied => applied.id === job.id)
                    ? "bg-green-100 text-green-600 cursor-not-allowed"
                    : "bg-purple-600 text-white hover:bg-purple-700"
                }`}
              >
                {appliedJobs.some(applied => applied.id === job.id) ? (
                  <span className="flex items-center justify-center">
                    <FaCheck className="mr-2" />
                    Applied
                  </span>
                ) : (
                  "Apply Now"
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">Confirm Application</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to apply for "{selectedJob?.title}"?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={confirmApply}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChoreJobs; 