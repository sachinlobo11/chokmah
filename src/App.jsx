import React, { useState, useEffect, useRef } from "react";
import "./BibleLMS.css";

const BibleLMS = () => {
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const sidebarRef = useRef(null);

  const bibleStudies = [
    { id: 1, date: "21-06-2024", title: "The Power of Prayer", videoUrl: "https://www.youtube.com/embed/4Q2JicFD5GM", 
     description: "Understanding the strength of prayer in daily life. Highlights 📖 91 ಹೀಮ್ನ್‌ಗಳನ್ನು ಓದುವ ಮೂಲಕ ಬೈಬಲ್ ಅಧ್ಯಯನ🍚 ಕೇವಲ ಅಕ್ಕಿ ತಿನ್ನುವುದರಿಂದ ಶಕ್ತಿ ಸಿಕ್ಕುವುದಿಲ್ಲ🛡️ ಆಧ್ಯಾತ್ಮಿಕ ಶಕ್ತಿಗೆ ಬೈಬಲ್ ಓದುವುದು ಅಗತ್ಯ",
     desc1:"✝️ ಯೇಸು ಹೇಳಿದ ಸತ್ಯ ನಿಮಗೆ ಮುಕ್ತಿಯೊಂದಿಗೆ ಬರುವದು",
desc2:"🔥 ಪ್ರಾರ್ಥನೆ ಮತ್ತು ನಂಬಿಕೆ ಶಕ್ತಿಯ ಮೂಲ",
desc3:"✍️ ಬೈಬಲ್ ಹಕ್ಕಿಯನ್ನು ಕಳೆಯುವುದು ಆಧ್ಯಾತ್ಮಿಕ ಯುದ್ಧ",
desc4:"🙏 ದೇವರ ಶಕ್ತಿಯನ್ನು ಅನುಭವಿಸಲು ನಂಬಿಕೆ ಅಗತ್ಯ",
desc5:"Key Insights",
desc6:"📜 ಭಜನೆ ಮತ್ತು ಓದು: ಭಜನೆ ಹಾಡುಗಳು ಧಾರ್ಮಿಕ ಜೀವನದ ಮಹತ್ವವನ್ನು ತೋರಿಸುತ್ತವೆ, ಆದರೆ ಸಂಪೂರ್ಣ ಬೈಬಲ್ ಓದುವುದರಿಂದ ಆಧ್ಯಾತ್ಮಿಕ ದೃಢತೆಯ ಅನುಭವವಾಗುತ್ತದೆ.",
desc7:"💪 ಆಧ್ಯಾತ್ಮಿಕ ಶಕ್ತಿ: ಕೇವಲ ಹೀಮ್ನ್‌ಗಳನ್ನು ಓದಿದರೆ ಮಾತ್ರವಾಗುವುದಿಲ್ಲ; ಸಂಪೂರ್ಣ ಬೈಬಲ್ ಓದಿದರೆ ಮಾತ್ರ ಆಧ್ಯಾತ್ಮಿಕ ಶಕ್ತಿ ಸಿಗುತ್ತದೆ.",
desc8:"🌱 ಆಧ್ಯಾತ್ಮಿಕ ಬೆಳವಣಿಗೆ: ಪ್ರತಿದಿನವೂ ಬೈಬಲ್ ಓದುವ ಮೂಲಕ, ವ್ಯಕ್ತಿಯ ನಂಬಿಕೆ ಮತ್ತು ಪ್ರಾರ್ಥನೆ ಶಕ್ತಿಶಾಲಿಯಾಗಿ ಬೆಳೆಯುತ್ತದೆ.",
desc9:"🛡️ ಆಧ್ಯಾತ್ಮಿಕ ಯುದ್ಧ: ದೇವರ ಶಕ್ತಿಯನ್ನು ಪಡೆದು, ಶ್ರೇಷ್ಠವಾದ ಆಧ್ಯಾತ್ಮಿಕ ಶಕ್ತಿಯೊಂದಿಗೆ ಶತ್ರುಗಳನ್ನು ಎದುರಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತದೆ.",
desc10:"✨ ನಂಬಿಕೆಯ ಮಹತ್ವ: ಯೇಸು ಹೇಳಿದಂತೆ, ನಂಬಿಕೆ ಶಕ್ತಿಯಾಗಿದೆ; ಸಣ್ಣ ಹಕ್ಕಿಯಷ್ಟು ನಂಬಿಕೆ ಬೆಟ್ಟಗಳನ್ನು ಚಲಾಯಿಸಬಹುದು.",
desc11:"📚 ಬುದ್ಧಿವಂತಿಕೆ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಬೆಳವಣಿಗೆ: ಬೈಬಲ್ ಅಧ್ಯಯನವು ಬುದ್ಧಿವಂತಿಕೆಗೆ ಕಾರಣವಾಗುತ್ತದೆ, ಇದು ವ್ಯಕ್ತಿಯ ಜೀವನವನ್ನು ರೂಪಿಸುತ್ತದೆ.",
desc12:"🙌 ದೇವರ ಶಕ್ತಿಯ ಅನುಭವ: ನಂಬಿಕೆ ಮತ್ತು ಪ್ರಾರ್ಥನೆಯ ಮೂಲಕ ದೇವರ ಶಕ್ತಿಯನ್ನು ಅನುಭವಿಸುವುದು ಸಧ್ಯವಾಗಿದೆ." },
    
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
              <p>{selectedStudy.desc1}</p>
              <p>{selectedStudy.desc2}</p>
              <p>{selectedStudy.desc3}</p>
              <p>{selectedStudy.desc4}</p>
              <p>{selectedStudy.desc5}</p>
              <p>{selectedStudy.desc6}</p>
              <p>{selectedStudy.desc7}</p>
              <p>{selectedStudy.desc8}</p>
              <p>{selectedStudy.desc9}</p>
              <p>{selectedStudy.desc10}</p>
              <p>{selectedStudy.desc11}</p>
              <p>{selectedStudy.desc12}</p>
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
