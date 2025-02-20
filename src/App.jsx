import React, { useState, useEffect, useRef } from "react";
import "./BibleLMS.css";

const BibleLMS = () => {
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [language, setLanguage] = useState("en"); // Default language is English
  const sidebarRef = useRef(null);

  const bibleStudies = [
    {
      id: 1,
      date: "21-06-2024",
      title: "The Transformative Power of Comprehensive Bible Reading",
      videoUrl: "https://www.youtube.com/embed/4Q2JicFD5GM",
      description: "📖 Bible Study...",
      desc1: "✝️ Jesus said, the truth will set you free",
      desc2: "🔥 The power of prayer and belief",
      desc3: "✍️ Faith is needed to experience God's power",
      // Other properties...
      timestamps: {
        en: [
          { time: "00:00:00", label: "Introduction to Bible Reading" },
          { time: "00:15:00", label: "Prayer and Faith" },
          // More timestamps...
        ],
        kk: [
          { time: "00:00:00", label: "Introduction to Bible Reading" },
          // More timestamps...
        ],
        kn: [
          { time: "00:00:00", label: "Introduction to Bible Reading" },
          // More timestamps...
        ],
      },
      scriptureReferences: [
        {
          label: "John 3:16 - God's love for the world",
          time: "00:10:00",
        },
        {
          label: "Romans 8:28 - All things work together for good",
          time: "00:30:00",
        },
        {
          label: "Psalm 23:1 - The Lord is my shepherd",
          time: "00:45:00",
        },
      ],
    },
    // Other studies...
  ];

  const filteredStudies = bibleStudies.filter(
    (study) =>
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.date.includes(searchQuery)
  );

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

  const handleTimestampClick = (study, time) => {
    const baseUrl = study.videoUrl.split("?")[0];
    const updatedVideoUrl = `${baseUrl}?start=${convertToSeconds(time)}`;
    setSelectedStudy({ ...study, videoUrl: updatedVideoUrl });
  };

  const handleScriptureClick = (time) => {
    if (selectedStudy) {
      handleTimestampClick(selectedStudy, time);
    }
  };

  const convertToSeconds = (time) => {
    const [hh, mm, ss] = time.split(":").map(Number);
    return hh * 3600 + mm * 60 + ss;
  };

  return (
    <div className="dashboard">
      <button className="toggle-button" onClick={() => setSidebarOpen(!sidebarOpen)}>
        ☰
      </button>

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
                className={`sidebar-button ${selectedStudy?.id === study.id ? "active" : ""}`}
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

              {/* Language Switcher */}
              <div className="language-switcher">
                <button onClick={() => setLanguage("en")} className={language === "en" ? "active" : ""}>English</button>
                <button onClick={() => setLanguage("kk")} className={language === "kk" ? "active" : ""}>Konkani</button>
                <button onClick={() => setLanguage("kn")} className={language === "kn" ? "active" : ""}>ಕನ್ನಡ</button>
              </div>
              <br />
              <br />
              {/* Timestamps Section */}
              {selectedStudy.timestamps[language]?.length > 0 && (
                <div className="timestamps">
                  <h4>Jump to Section:</h4>
                  <ul>
                    {selectedStudy.timestamps[language].map((ts, index) => (
                      <li key={index}>
                        <button onClick={() => handleTimestampClick(selectedStudy, ts.time)}>
                          {ts.time}
                        </button> - {ts.label}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <br />
              <br />

              <p>{selectedStudy.description}</p>
              <p>{selectedStudy.desc1}</p>
              <p>{selectedStudy.desc2}</p>
              <p>{selectedStudy.desc3}</p>

              {/* Scripture References Section */}
              {selectedStudy.scriptureReferences?.length > 0 && (
                <div className="scripture-references">
                  <h4>Scripture References:</h4>
                  <ul>
                    {selectedStudy.scriptureReferences.map((ref, index) => (
                      <li key={index}>
                        <button onClick={() => handleScriptureClick(ref.time)}>
                          {ref.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <br />
              <br />
              <p>We acknowledge that some content may have inaccuracies. Help us improve by submitting your feedback or suggestions through our Google Form.</p>
              <br />
              <small>Created by ETFGH Church members</small>
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
