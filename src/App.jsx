import React, { useState, useEffect, useRef } from "react";
import "./BibleLMS.css";

const BibleLMS = () => {
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const sidebarRef = useRef(null);

  const bibleStudies = [
    { id: 1, date: "21-06-2024", title: "The Power of Prayer", videoUrl: "https://www.youtube.com/embed/4Q2JicFD5GM", description: "Understanding the strength of prayer in daily life." },
    { id: 2, date: "28-06-24", title: "Faith Over Fear", videoUrl: "https://www.youtube.com/embed/_KBJYf4viGE", description: "Overcoming fear with unwavering faith." },
    { id: 3, date: "05-07-24", title: "Love and Compassion", videoUrl: "https://www.youtube.com/embed/pqr789", description: "Exploring love and kindness in the Bible." },
  ];

  const filteredStudies = bibleStudies.filter(
    (study) =>
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.date.includes(searchQuery)
  );

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dashboard">
      {/* Toggle Button */}
      <button className="toggle-button" onClick={() => setSidebarOpen(!sidebarOpen)}>
        ☰
      </button>

      {/* Sidebar */}
      <aside ref={sidebarRef} className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <h2>Bible LMS</h2>
        <input
          type="text"
          placeholder="Search by title or date"
          className="search-bar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <nav>
          {filteredStudies.length > 0 ? (
            filteredStudies.map((study) => (
              <button
                key={study.id}
                className={`sidebar-button ${
                  selectedStudy?.id === study.id ? "active" : ""
                }`}
                onClick={() => setSelectedStudy(study)}
              >
                {study.date} - {study.title}
              </button>
            ))
          ) : (
            <p className="no-results">No studies found.</p>
          )}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">Bible Learning Archive</header>

        {selectedStudy ? (
          <div>
            <div className="video-container">
              <iframe
                title={selectedStudy.title}
                src={selectedStudy.videoUrl}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>

            <div className="description">
              <h3>{selectedStudy.title}</h3>
              <p>{selectedStudy.description}</p>
            </div>
          </div>
        ) : (
          <p className="no-selection">Select a study from the list.</p>
        )}
      </main>
    </div>
  );
};

export default BibleLMS;
