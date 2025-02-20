import React, { useState, useEffect, useRef } from "react";
import "./BibleLMS.css";

const BibleLMS = () => {
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [language, setLanguage] = useState("en");
  const [player, setPlayer] = useState(null); // YouTube player reference
  const sidebarRef = useRef(null);

  // Loading the YouTube IFrame API
  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      const playerInstance = new YT.Player("player", {
        height: "390",
        width: "640",
        videoId: "M7lc1UVf-VE", // You can replace this with your dynamic `selectedStudy.videoUrl` ID
        playerVars: { playsinline: 1 },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
      setPlayer(playerInstance); // Set the player reference
    };

    // Clean up function to remove the API script after component unmounts
    return () => {
      const script = document.querySelector("script[src='https://www.youtube.com/iframe_api']");
      if (script) script.remove();
    };
  }, []);

  const onPlayerReady = (event) => {
    event.target.playVideo(); // Autoplay the video
  };

  const onPlayerStateChange = (event) => {
    if (event.data === YT.PlayerState.PLAYING) {
      // Perform any state change actions here, if needed
    }
  };

  const handleTimestampClick = (study, time) => {
    const baseUrl = study.videoUrl.split("?")[0];
    const updatedVideoUrl = `${baseUrl}?start=${convertToSeconds(time)}`;
    setSelectedStudy({ ...study, videoUrl: updatedVideoUrl });

    // Seek the video to the new time
    if (player) {
      player.seekTo(convertToSeconds(time), true);
    }
  };

  const convertToSeconds = (time) => {
    const [hh, mm, ss] = time.split(":").map(Number);
    return hh * 3600 + mm * 60 + ss;
  };

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
              <div id="player"></div> {/* YouTube player will be rendered here */}
            </div>

            <div className="description">
              <h3>{selectedStudy.title}</h3>

              {/* Language Switcher */}
              <div className="language-switcher">
                <button onClick={() => setLanguage("en")} className={language === "en" ? "active" : ""}>English</button>
                <button onClick={() => setLanguage("kk")} className={language === "kk" ? "active" : ""}>Konkani</button>
                <button onClick={() => setLanguage("kn")} className={language === "kn" ? "active" : ""}>ಕನ್ನಡ</button>
              </div>

              {/* Timestamps Section */}
              {selectedStudy.timestamps[language]?.length > 0 && (
                <div className="timestamps">
                  <h4>Jump to Section:</h4>
                  <ul>
                    {selectedStudy.timestamps[language].map((ts, index) => (
                      <li key={index}>
                        <button onClick={() => handleTimestampClick(selectedStudy, ts.time)}>
                          {ts.time}
                        </button> 
                        - {ts.label}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

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
