
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
      description: "📖 ಬೈಬಲ್ ಅಧ್ಯಯನ...",
      desc1:"✝️ ಯೇಸು ಹೇಳಿದ ಸತ್ಯ ನಿಮಗೆ ಮುಕ್ತಿಯೊಂದಿಗೆ ಬರುವದು",
desc2:"🔥 ಪ್ರಾರ್ಥನೆ ಮತ್ತು ನಂಬಿಕೆ ಶಕ್ತಿಯ ಮೂಲ",
desc3:"✍️ ದೇವರ ಶಕ್ತಿಯನ್ನು ಅನುಭವಿಸಲು ನಂಬಿಕೆ ಅಗತ್ಯ",
desc4:"🙏 ದೇವರ ಶಕ್ತಿಯನ್ನು ಅನುಭವಿಸಲು ನಂಬಿಕೆ ಅಗತ್ಯ",
desc5:"Key Insights",
desc6:"📜 ಭಜನೆ ಮತ್ತು ಓದು: ಭಜನೆ ಹಾಡುಗಳು ಧಾರ್ಮಿಕ ಜೀವನದ ಮಹತ್ವವನ್ನು ತೋರಿಸುತ್ತವೆ, ಆದರೆ ಸಂಪೂರ್ಣ ಬೈಬಲ್ ಓದುವುದರಿಂದ ಆಧ್ಯಾತ್ಮಿಕ ದೃಢತೆಯ ಅನುಭವವಾಗುತ್ತದೆ.",
desc7:"💪 ಆಧ್ಯಾತ್ಮಿಕ ಶಕ್ತಿ: ಕೇವಲ ಹೀಮ್ನ್‌ಗಳನ್ನು ಓದಿದರೆ ಮಾತ್ರವಾಗುವುದಿಲ್ಲ; ಸಂಪೂರ್ಣ ಬೈಬಲ್ ಓದಿದರೆ ಮಾತ್ರ ಆಧ್ಯಾತ್ಮಿಕ ಶಕ್ತಿ ಸಿಗುತ್ತದೆ.",
desc8:"🌱 ಆಧ್ಯಾತ್ಮಿಕ ಬೆಳವಣಿಗೆ: ಪ್ರತಿದಿನವೂ ಬೈಬಲ್ ಓದುವ ಮೂಲಕ, ವ್ಯಕ್ತಿಯ ನಂಬಿಕೆ ಮತ್ತು ಪ್ರಾರ್ಥನೆ ಶಕ್ತಿಶಾಲಿಯಾಗಿ ಬೆಳೆಯುತ್ತದೆ.",
desc9:"🛡️ ಆಧ್ಯಾತ್ಮಿಕ ಯುದ್ಧ: ದೇವರ ಶಕ್ತಿಯನ್ನು ಪಡೆದು, ಶ್ರೇಷ್ಠವಾದ ಆಧ್ಯಾತ್ಮಿಕ ಶಕ್ತಿಯೊಂದಿಗೆ ಶತ್ರುಗಳನ್ನು ಎದುರಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತದೆ.",
desc10:"✨ ನಂಬಿಕೆಯ ಮಹತ್ವ: ಯೇಸು ಹೇಳಿದಂತೆ, ನಂಬಿಕೆ ಶಕ್ತಿಯಾಗಿದೆ; ಸಣ್ಣ ಹಕ್ಕಿಯಷ್ಟು ನಂಬಿಕೆ ಬೆಟ್ಟಗಳನ್ನು ಚಲಾಯಿಸಬಹುದು.",
desc11:"📚 ಬುದ್ಧಿವಂತಿಕೆ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಬೆಳವಣಿಗೆ: ಬೈಬಲ್ ಅಧ್ಯಯನವು ಬುದ್ಧಿವಂತಿಕೆಗೆ ಕಾರಣವಾಗುತ್ತದೆ, ಇದು ವ್ಯಕ್ತಿಯ ಜೀವನವನ್ನು ರೂಪಿಸುತ್ತದೆ.",
desc12:"🙌 ದೇವರ ಶಕ್ತಿಯ ಅನುಭವ: ನಂಬಿಕೆ ಮತ್ತು ಪ್ರಾರ್ಥನೆಯ ಮೂಲಕ ದೇವರ ಶಕ್ತಿಯನ್ನು ಅನುಭವಿಸುವುದು ಸಧ್ಯವಾಗಿದೆ.",
      descrip:{en:[
        { time: "00:00:00", label: "🙌 Experience of God's Power: Experiencing God's power through faith and prayer is possible." },
        { time: "00:15:00", label: "📚 Wisdom and Spiritual Growth: Studying the Bible leads to wisdom, shaping a person's life." },
        { time: "00:30:00", label: "✨ The Importance of Faith: As Jesus said, faith is powerful; even faith as small as a mustard seed can move mountains." },
        { time: "00:46:00", label:"🛡️ Spiritual Warfare: By obtaining God's power, it is possible to face enemies with great spiritual strength."},
        { time: "01:03:00", label:"🌱 Spiritual Growth: By reading the Bible daily, a person's faith and prayer grow stronger."},
        
        
      ],
        kk:[
          { time: "00:00:00", label: "🙌 ದೇವರ ಶಕ್ತಿಯ ಅನುಭವ: ನಂಬಿಕೆ ಮತ್ತು ಪ್ರಾರ್ಥನೆಯ ಮೂಲಕ ದೇವರ ಶಕ್ತಿಯನ್ನು ಅನುಭವಿಸುವುದು ಸಧ್ಯವಾಗಿದೆ." },
        { time: "00:15:00", label: "📚 ಬುದ್ಧಿವಂತಿಕೆ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಬೆಳವಣಿಗೆ: ಬೈಬಲ್ ಅಧ್ಯಯನವು ಬುದ್ಧಿವಂತಿಕೆಗೆ ಕಾರಣವಾಗುತ್ತದೆ, ಇದು ವ್ಯಕ್ತಿಯ ಜೀವನವನ್ನು ರೂಪಿಸುತ್ತದೆ." },
        { time: "00:30:00", label: "✨ ನಂಬಿಕೆಯ ಮಹತ್ವ: ಯೇಸು ಹೇಳಿದಂತೆ, ನಂಬಿಕೆ ಶಕ್ತಿಯಾಗಿದೆ; ಸಣ್ಣ ಹಕ್ಕಿಯಷ್ಟು ನಂಬಿಕೆ ಬೆಟ್ಟಗಳನ್ನು ಚಲಾಯಿಸಬಹುದು." },
        { time: "00:46:00", label:"🛡️ ಆಧ್ಯಾತ್ಮಿಕ ಯುದ್ಧ: ದೇವರ ಶಕ್ತಿಯನ್ನು ಪಡೆದು, ಶ್ರೇಷ್ಠವಾದ ಆಧ್ಯಾತ್ಮಿಕ ಶಕ್ತಿಯೊಂದಿಗೆ ಶತ್ರುಗಳನ್ನು ಎದುರಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತದೆ."},
        { time: "01:03:00", label:"🌱 ಆಧ್ಯಾತ್ಮಿಕ ಬೆಳವಣಿಗೆ: ಪ್ರತಿದಿನವೂ ಬೈಬಲ್ ಓದುವ ಮೂಲಕ, ವ್ಯಕ್ತಿಯ ನಂಬಿಕೆ ಮತ್ತು ಪ್ರಾರ್ಥನೆ ಶಕ್ತಿಶಾಲಿಯಾಗಿ ಬೆಳೆಯುತ್ತದೆ."},
      
        ],
        kn:[
          { time: "00:00:00", label: "🙌 ದೇವರ ಶಕ್ತಿಯ ಅನುಭವ: ನಂಬಿಕೆ ಮತ್ತು ಪ್ರಾರ್ಥನೆಯ ಮೂಲಕ ದೇವರ ಶಕ್ತಿಯನ್ನು ಅನುಭವಿಸುವುದು ಸಧ್ಯವಾಗಿದೆ." },
        { time: "00:15:00", label: "📚 ಬುದ್ಧಿವಂತಿಕೆ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಬೆಳವಣಿಗೆ: ಬೈಬಲ್ ಅಧ್ಯಯನವು ಬುದ್ಧಿವಂತಿಕೆಗೆ ಕಾರಣವಾಗುತ್ತದೆ, ಇದು ವ್ಯಕ್ತಿಯ ಜೀವನವನ್ನು ರೂಪಿಸುತ್ತದೆ." },
        { time: "00:30:00", label: "✨ ನಂಬಿಕೆಯ ಮಹತ್ವ: ಯೇಸು ಹೇಳಿದಂತೆ, ನಂಬಿಕೆ ಶಕ್ತಿಯಾಗಿದೆ; ಸಣ್ಣ ಹಕ್ಕಿಯಷ್ಟು ನಂಬಿಕೆ ಬೆಟ್ಟಗಳನ್ನು ಚಲಾಯಿಸಬಹುದು." },
        { time: "00:46:00", label:"🛡️ ಆಧ್ಯಾತ್ಮಿಕ ಯುದ್ಧ: ದೇವರ ಶಕ್ತಿಯನ್ನು ಪಡೆದು, ಶ್ರೇಷ್ಠವಾದ ಆಧ್ಯಾತ್ಮಿಕ ಶಕ್ತಿಯೊಂದಿಗೆ ಶತ್ರುಗಳನ್ನು ಎದುರಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತದೆ."},
        { time: "01:03:00", label:"🌱 ಆಧ್ಯಾತ್ಮಿಕ ಬೆಳವಣಿಗೆ: ಪ್ರತಿದಿನವೂ ಬೈಬಲ್ ಓದುವ ಮೂಲಕ, ವ್ಯಕ್ತಿಯ ನಂಬಿಕೆ ಮತ್ತು ಪ್ರಾರ್ಥನೆ ಶಕ್ತಿಶಾಲಿಯಾಗಿ ಬೆಳೆಯುತ್ತದೆ."},
        
        ]
             },
      timestamps: {
        en:[
        { time: "00:00:00", label: "Introduction to the necessity of reading the entire Bible" },
        { time: "00:15:00", label: "How Scripture provides clarity and direction" },
        { time: "00:30:00", label: " Emphasis on the need for prayer and fasting alongside Bible reading to enhance understanding and spiritual growth." },
        { time:"00:46:00", label:"Insight into the transformative impact of God’s Word on personal character, integrity, and ethical living."},
        { time:"01:03:00", label:"Discussion on the eternal significance of living by God’s Word and how it shapes one’s destiny and purpose in life."},
        
        
      ],
        kk:[
          { time: "00:00:00", label: "ಸಂಪೊರ್ಣ ಬೈಬಲ್ ವಾಚ್ಚೋಪ್ ಕಿತ್ಲೆಂ ಜರೂರಿ, ಹ್ಯಾ ವಿವರಣೆನ್ ಸೋಡೊವ್ನ್."},
        { time: "00:15:00", label: "ಪವಿತ್ರ ಶಾಸ್ತ್ರೊ ನಿಷ್ಪತ್ತಿ ಆನಿ ನಿರ್ಧಾರ ಗಿವ್ಚೆಂ ಸ್ಪಷ್ಟಪಣ್ ದಿತಾ, ಜೀವುಪಾ ನಿದ್ರೇಷಣ್ ಮಿಲೋವ್ನ್."},
          { time: "00:30:00", label: "ಪ್ರಾರ್ಥು ಆನಿ ಉಪವಾಸದ ಅಗತ್ಯತೆ" },
          { time: "00:45:00", label: "ದೇವಾಚೆಂ ಉಕ್ಗ್ತ ಜೀವುಪ ಬದಲೋತಾ" },
          { time: "01:03:00", label: "ನಿತ್ಯ ಜೀವನದಲ್ಲಿ ದೇವರ ಮಾತಿನ ಪ್ರಭಾವ" }
        ],
        kn:[
          { time: "00:00:00", label: "ಬೈಬಲ್‌ನ ಪ್ರತಿಯೊಂದು ಭಾಗವನ್ನು ಓದುವುದು ಆಧ್ಯಾತ್ಮಿಕ ಬೆಳವಣಿಗೆಯ ಅಗತ್ಯವಿರಿಸುವುದನ್ನು ಪರಿಚಯಿಸುವುದು. ಪ್ಸಾಮ್ಸ್ ಮುಂತಾದ ಆಯ್ಕೆ ಮಾಡಲಾಗಿರುವ ಭಾಗಗಳನ್ನು ಮಾತ್ರ ಓದುವುದು ತೃಪ್ತಿಕರವಾಗುವುದಿಲ್ಲ ಎಂಬುದನ್ನು ಒತ್ತಿಹೇಳುವುದು."},
        { time: "00:15:00", label: "ನಿರ್ಧಾರ ಕೈಗೊಂಡು ಬದುಕನ್ನು ಮಾರ್ಗದರ್ಶನ ಮಾಡಲು ಶ್ರದ್ಧೆ ಸ್ಪಷ್ಟತೆ ಮತ್ತು ದಾರಿದೀಪದ ಕಲ್ಪನೆಯನ್ನು ಒದಗಿಸುವುದು."},
          { time: "00:30:00", label: "ಬೈಬಲ್ ಓದುತ್ತಿದ್ದಂತೆ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಬೆಳವಣಿಗೆಯನ್ನು ಹೆಚ್ಚಿಸಲು ಪ್ರಾರ್ಥನೆ ಮತ್ತು ಉಪವಾಸದ ಅಗತ್ಯವನ್ನು ಒತ್ತಿಹೇಳುವುದು." },
          { time: "00:45:00", label: "ದೇವರ ವಾಕ್ಯದ ವ್ಯಕ್ತಿಗತ ಸ್ವಭಾವ, ನೈತಿಕತೆ ಮತ್ತು ಸಜ್ಜನಿಕೆಯಲ್ಲಿ ಬದಲಾವಣೆಮಾಡುವ ಪರಿಣಾಮದ ಕುರಿತ ವಿವರ." },
          { time: "01:03:00", label: "ನಿತ್ಯ ಜೀವನದಲ್ಲಿ ದೇವರ ಮಾತಿನ ಪ್ರಭಾವ" }
        ],
    }//time
    },//id



    
    {
      id: 2,
      date: "28-06-24",
      title: "The Power of Faith, Prayer, and Trust in God's Word: Overcoming Distractions and Embracing Spiritual Discipline",
      videoUrl: "https://www.youtube.com/embed/_KBJYf4viGE",
      description: "",
      desc1:"",
     
      desc2:"",
      desc3:"",
      desc4:"",
       descrip:{en:[
        { time: "00:00:00", label: "🔥 importance of living according to God's word and trusting in His promises, regardless of personal challenges or doubts. It emphasizes that God's word is unchanging, and by meditating on Scripture, one can overcome temptations and hardships, leading to spiritual victory and fulfillment of God's promises." },
        { time: "00:15:00", label: "🔥 importance of God's word, prayer, and Bible reading. Specifically, it talks about how to worship God's word, how to pray, and how we should ask for the help of the Holy Spirit to know God.It states that while reading God's word, individuals need the guidance of the Holy Spirit to receive God's message. \n Personally, we should meditate on God's word in our minds and offer sincere prayer in accordance with God's heart.Look, this is the path that must be followed wholeheartedly." },
        { time: "00:30:00", label: "💪 focusing on the importance of spiritual discipline, prayer, and the challenges of resisting worldly distractions, such as news and social media, which can hinder spiritual growth" },
        { time: "00:46:00", label:"🧠📖💪 emphasizing the need to protect the mind from negative influences and maintaining focus on God's word to stay spiritually strong"},
        { time: "01:03:00", label:"🙏 In the Book of Job, true faith, trust, and belief come from the heart and must align with God’s will, as opposed to mere human understanding. Martha’s story illustrates that faith is not only about believing in words"},
        
        
      ],
        kk:[
          { time: "00:00:00", label: "" },
        { time: "00:15:00", label: "" },
        { time: "00:30:00", label: "" },
        { time: "00:46:00", label:""},
        { time: "01:03:00", label:""},
      
        ],
        kn:[
          { time: "00:00:00", label: "🔥 ದೇವರ ವಚನದ ಪ್ರಕಾರ ಬದುಕುವುದನ್ನು ಮತ್ತು ಅವನ ಭರವಸೆಗಳಲ್ಲಿ ವಿಶ್ವಾಸವನ್ನು ನೀಡುತ್ತದೆ, ಇವು ನಮ್ಮ ಆಧ್ಯಾತ್ಮಿಕ ವಿಜಯಕ್ಕೆ ಮಾರ್ಗದರ್ಶನ ಮಾಡುತ್ತವೆ." },
        { time: "00:15:00", label: "🔥 ದೇವರ ವಚನದ ಮಹತ್ವ, ಪ್ರಾರ್ಥನೆ ಮತ್ತು ಬೈಬಲ್ ಓದು. ವಿಶೇಷವಾಗಿ, ದೇವರ ವಚನವನ್ನು ಹೇಗೆ ಪೂಜಿಸಬೇಕು, ಹೇಗೆ ಪ್ರಾರ್ಥಿಸಬೇಕು ಮತ್ತು ದೇವರನ್ನು ತಿಳಿಯಲು ಪವಿತ್ರ ಆತ್ಮದ ಸಹಾಯವನ್ನು ನಾವು ಹೇಗೆ ಕೇಳಬೇಕು ಎಂಬುದನ್ನು ವಿವರಿಸುತ್ತದೆ. ದೇವರ ವಚನವನ್ನು ಓದುವಾಗ, ವ್ಯಕ್ತಿಗಳು ದೇವರ ಸಂದೇಶವನ್ನು ಸ್ವೀಕರಿಸಲು ಪವಿತ್ರ ಆತ್ಮದ ಮಾರ್ಗದರ್ಶನವನ್ನು ಅಗತ್ಯವಿದೆ. ವೈಯಕ್ತಿಕವಾಗಿ, ನಾವು ದೇವರ ವಚನವನ್ನು ನಮ್ಮ ಮನಸ್ಸಿನಲ್ಲಿ ಧ್ಯಾನಿಸಬೇಕು ಮತ್ತು ದೇವರ ಹೃದಯದ ಪ್ರಕಾರ ಪ್ರಾರ್ಥನೆ ಸಲ್ಲಿಸಬೇಕು. ಇದು ಹೃದಯಪೂರ್ವಕವಾಗಿ ಅನುಸರಿಸಬೇಕಾದ ಮಾರ್ಗವಾಗಿದೆ." },
        { time: "00:30:00", label: "💪 ಆಧ್ಯಾತ್ಮಿಕ ಶಿಸ್ತಿನ ಮಹತ್ವ, ಪ್ರಾರ್ಥನೆ ಮತ್ತು ಜಾಗೃತಿಯಲ್ಲಿ ಪ್ರಗತಿ ತಡೆಯುವ ಪ್ರಪಂಚೀಯ ವ್ಯತ್ಯಾಸಗಳನ್ನು, ಉದಾಹರಣೆಗೆ ಸುದ್ದಿ ಮತ್ತು ಸೋಷಿಯಲ್ ಮೀಡಿಯಾವನ್ನು ಪ್ರತಿಬಂಧಿಸುವ ಸವಾಲುಗಳ ಮೇಲೆ ಒತ್ತು." },
        { time: "00:46:00", label: "🧠📖💪 ಮನಸ್ಸನ್ನು ನಕಾರಾತ್ಮಕ ಪ್ರಭಾವಗಳಿಂದ ರಕ್ಷಿಸಲು ಮತ್ತು ದೇವರ ಪದವನ್ನು ಅವಲಂಬಿಸಿ ಆಧ್ಯಾತ್ಮಿಕವಾಗಿ ಬಲವಾಗಿರಲು ಒತ್ತು ನೀಡುವುದು." },
        { time: "01:03:00", label: "🙏 ಯೋಬಿನ ಪುಸ್ತಕದಲ್ಲಿ, ನಿಜವಾದ ನಂಬಿಕೆ, ಭರವಸೆ ಮತ್ತು ವಿಶ್ವಾಸವು ಹೃದಯದಿಂದ ಬರುತ್ತದೆ ಮತ್ತು ಅದು ದೇವರ ಇಚ್ಛೆಯೊಂದಿಗೆ ಹೊಂದಿಕೆಯಾಗಬೇಕು, ಸರಳ ಮಾನವ ಸಮಜ್ದಾರಿಯ ಬದಲು. ಮಾರ್ತಾ ಅವರ ಕಥೆ ಇದು ಸಾಬೀತುಪಡಿಸುತ್ತದೆ, ನಂಬಿಕೆ ಎಂದರೆ ಕೇವಲ ಪದಗಳನ್ನು ನಂಬುವುದು ಅಲ್ಲ." },
        
        ]
             },
      timestamps: {
        en:[
        { time: "00:00:00", label: "Living According to God's Word: Overcoming Doubts and Embracing His Promises" },
        { time: "00:15:00", label: "Power of God's Word: A Journey of Faith and Transformation" },
        { time: "00:39:00", label: " Importance of God's Word, Prayer, and the Guidance of the Holy Spirit" },
        { time: "00:58:48", label:"Spiritual Discipline and the Power of Prayer: Overcoming Distractions and Embracing God's Truth"},
        { time: "01:29:20", label:"Understanding Faith, Trust, and Belief: Insights from the Book of Job and the Power of Prayer"},
        
        
      ],
        kk:[
          { time: "00:00:00", label: "To be translated. click on google forms to add tanslations"},
        { time: "00:15:00", label: "Power of God's Word: A Journey of Faith and Transformation"},
          { time: "00:30:00", label: "" },
          { time: "00:45:00", label: "" },
          { time: "01:03:00", label: "" }
        ],
        kn:[
          { time: "00:00:00", label: "ದೇವರ ವಾಕ್ಯದ ಪ್ರಕಾರ ಜೀವನ ನಡೆಸುವುದು: ಸಂಶಯಗಳನ್ನು ನಿಭಾಯಿಸುವುದು ಮತ್ತು ಅವರ ವಾಗ್ದಾನಗಳನ್ನು ಅಳವಡಿಸು"},
        { time: "00:15:00", label: "ದೇವರ ವಾಕ್ಯದ ಶಕ್ತಿ: ನಂಬಿಕೆ ಮತ್ತು ಪರಿವರ್ತನೆಯ ಯಾತ್ರೆ"},
          { time: "00:39:00", label: "ದೇವರ ವಾಕ್ಯ, ಪ್ರಾರ್ಥನೆ ಮತ್ತು ಪವಿತ್ರಾತ್ಮನ ಮಾರ್ಗದರ್ಶನದ ಪ್ರಾಮುಖ್ಯತೆ" },
          { time: "00:58:00", label: "ಆಧ್ಯಾತ್ಮಿಕ ಶಿಸ್ತು ಮತ್ತು ಪ್ರಾರ್ಥನೆಯ ಶಕ್ತಿ: ವಿಗ್ರಹಗಳನ್ನು ಜಯಿಸಿ ದೇವರ ಸತ್ಯವನ್ನು ಅಂಗೀಕರಿಸೋದು" },
          { time: "01:29:30", label: "ವಿಶ್ವಾಸ, ನಂಬಿಕೆ ಮತ್ತು ಭರವಸೆ: ಯೋಬಿನ ಪುಸ್ತಕದಿಂದ ದೊರಕುವ ಗುರುತುಗಳು ಮತ್ತು ಪ್ರಾರ್ಥನೆಯ ಶಕ್ತಿ" }
        ],
    }},





    {
      id: 3,
      date: "05-07-24",
      title: "The Power of Faith, session 3",
      videoUrl: "https://www.youtube.com/embed/Tg4P1vfukKg",
      description: "Not updated",
      desc1:"",
     
      desc2:"",
      desc3:"",
      desc4:"",
       descrip:{en:[
        { time: "00:00:00", label: "God's Love as the Foundation: God is love, and He created humans in His image to share and spread that love." },
        { time: "00:15:00", label: "Angels vs Humans: Angels don't have souls or emotions, unlike humans, who were made with the ability to love and feel, reflecting God's nature." },
        { time: "00:30:00", label: "Purpose of Creation: God created humans not just for existence, but to experience and share His love, to worship and serve Him in return" },
        { time: "00:46:00", label:"Jesus' Sacrifice and Resurrection: Jesus' death and resurrection were part of God's plan for redemption, showing His endless love and preparing the way for humanity's salvation."},
        { time: "01:03:00", label:"Holy Spirit's Role: Jesus' departure allowed the Holy Spirit to come, guiding and empowering believers, emphasizing that His presence would now be limitless, accessible to all."},
        
        
      ],
        kk:[
          { time: "00:00:00", label: "" },
        { time: "00:15:00", label: "" },
        { time: "00:30:00", label: "" },
        { time: "00:46:00", label:""},
        { time: "01:03:00", label:""},
      
        ],
        kn:[
          { time: "00:00:00", label: "ದೇವರ ಪ್ರೀತಿ ಮೂಲವಾಗಿದೆ: ದೇವರು ಪ್ರೀತಿಯಲ್ಲಿದ್ದಾರೆ, ಮತ್ತು ಆತನ ಸ್ವರೂಪದಲ್ಲಿ ಹೃದಯವನ್ನು ಹಂಚಿಕೊಳ್ಳಲು ಮಾನವರನ್ನು ಸೃಷ್ಟಿಸಿದನು." },
        { time: "00:15:00", label: "ಏಂಜೆಲ್ಸ್ ಹಾಗೂ ಮಾನವರು: ಏಂಜೆಲ್ಸ್ ಗಳು ಆತ್ಮ ಹಾಗೂ ಭಾವನೆಗಳನ್ನು ಹೊಂದಿರುತ್ತಿಲ್ಲ, ಆದರೆ ಮಾನವರು ದೇವರ ಸ್ವರೂಪದಲ್ಲಿ ಪ್ರೀತಿ ಮತ್ತು ಭಾವನೆಗಳನ್ನು ಅನುಭವಿಸಲು ರಚನೆಗೊಂಡಿದ್ದಾರೆ." },
        { time: "00:30:00", label: "ಸೃಷ್ಟಿಯ ಉದ್ದೇಶ: ದೇವರು ಮಾನವರನ್ನು ಕೇವಲ ಬದುಕಿಸಲು ಅಲ್ಲ, ತನ್ನ ಪ್ರೀತಿಯನ್ನು ಅನುಭವಿಸಿ ಹಂಚಿಕೊಳ್ಳಲು, ಆರಾಧನೆ ಮತ್ತು ಸೇವೆಗಾಗಿ ಸೃಷ್ಟಿಸಿದನು." },
        { time: "00:46:00", label: "ಯೇಸು ಬಲಿದಾನ ಮತ್ತು ಪುನರುತ್ಥಾನ: ಯೇಸು ಕ್ರಿಸ್ತನ ಮರಣ ಮತ್ತು ಪುನರುತ್ಥಾನವು ದೇವರ ರಕ್ಷಣೆ ಯೋಜನೆಯ ಭಾಗವಾಗಿದ್ದು, ದೇವರ ಶಾಶ್ವತ ಪ್ರೀತಿಯನ್ನು ಹೊರಹಾಕುತ್ತದೆ." },
        { time: "01:03:00", label: "ಪವಿತ್ರ ಆತ್ಮದ ಪಾತ್ರ: ಯೇಸು ಹೋದ ನಂತರ, ಪವಿತ್ರ ಆತ್ಮ ನಮ್ಮಲ್ಲಿರುತ್ತಾರೆ, ಅದು ಎಲ್ಲೆಡೆ ಉಲ್ಲಾಸವನ್ನು ಹಾಗೂ ಮಾರ್ಗದರ್ಶನವನ್ನು ನೀಡುತ್ತದೆ, ಅವನ ಪ್ರಸ್ತುತಿಯು ಅನಂತವಾಗುತ್ತದೆ." },
        
        ]
             },
      timestamps: {
        en:[
        { time: "00:00:00", label: "" },
        { time: "00:15:00", label: "" },
        { time: "00:39:00", label: "" },
        { time: "00:58:48", label:""},
        { time: "01:29:20", label:""},
        
        
      ],
        kk:[
          { time: "00:00:00", label: ""},
        { time: "00:15:00", label: ""},
          { time: "00:30:00", label: "" },
          { time: "00:45:00", label: "" },
          { time: "01:03:00", label: "" }
        ],
        kn:[
          { time: "00:00:00", label: "" },
          { time: "00:15:00", label: "" },
          { time: "00:39:00", label: "" },
          { time: "00:58:00", label: "" },
          { time: "01:29:30", label: "" }
        ],
    }},




    
    {
      id: 4,
      date: "19-07-24",
      title: "The Nature of the Holy Spirit and God's Creation of Humanity",
      videoUrl: "https://www.youtube.com/embed/-ZSNDZjxuD4",
      description: "Not updated",
      desc1:"",
     
      desc2:"",
      desc3:"",
      desc4:"",
       descrip:{en:[
        { time: "00:00:00", label: "God's Love as the Foundation: God is love, and He created humans in His image to share and spread that love." },
        { time: "00:15:00", label: "Angels vs Humans: Angels don't have souls or emotions, unlike humans, who were made with the ability to love and feel, reflecting God's nature." },
        { time: "00:30:00", label: "Purpose of Creation: God created humans not just for existence, but to experience and share His love, to worship and serve Him in return" },
        { time: "00:46:00", label:"Jesus' Sacrifice and Resurrection: Jesus' death and resurrection were part of God's plan for redemption, showing His endless love and preparing the way for humanity's salvation."},
        { time: "01:03:00", label:"Holy Spirit's Role: Jesus' departure allowed the Holy Spirit to come, guiding and empowering believers, emphasizing that His presence would now be limitless, accessible to all."},
        
        
      ],
        kk:[
          { time: "00:00:00", label: "" },
        { time: "00:15:00", label: "" },
        { time: "00:30:00", label: "" },
        { time: "00:46:00", label:""},
        { time: "01:03:00", label:""},
      
        ],
        kn:[
          { time: "00:00:00", label: "ದೇವರ ಪ್ರೀತಿ ಮೂಲವಾಗಿದೆ: ದೇವರು ಪ್ರೀತಿಯಲ್ಲಿದ್ದಾರೆ, ಮತ್ತು ಆತನ ಸ್ವರೂಪದಲ್ಲಿ ಹೃದಯವನ್ನು ಹಂಚಿಕೊಳ್ಳಲು ಮಾನವರನ್ನು ಸೃಷ್ಟಿಸಿದನು." },
        { time: "00:15:00", label: "ಏಂಜೆಲ್ಸ್ ಹಾಗೂ ಮಾನವರು: ಏಂಜೆಲ್ಸ್ ಗಳು ಆತ್ಮ ಹಾಗೂ ಭಾವನೆಗಳನ್ನು ಹೊಂದಿರುತ್ತಿಲ್ಲ, ಆದರೆ ಮಾನವರು ದೇವರ ಸ್ವರೂಪದಲ್ಲಿ ಪ್ರೀತಿ ಮತ್ತು ಭಾವನೆಗಳನ್ನು ಅನುಭವಿಸಲು ರಚನೆಗೊಂಡಿದ್ದಾರೆ." },
        { time: "00:30:00", label: "ಸೃಷ್ಟಿಯ ಉದ್ದೇಶ: ದೇವರು ಮಾನವರನ್ನು ಕೇವಲ ಬದುಕಿಸಲು ಅಲ್ಲ, ತನ್ನ ಪ್ರೀತಿಯನ್ನು ಅನುಭವಿಸಿ ಹಂಚಿಕೊಳ್ಳಲು, ಆರಾಧನೆ ಮತ್ತು ಸೇವೆಗಾಗಿ ಸೃಷ್ಟಿಸಿದನು." },
        { time: "00:46:00", label: "ಯೇಸು ಬಲಿದಾನ ಮತ್ತು ಪುನರುತ್ಥಾನ: ಯೇಸು ಕ್ರಿಸ್ತನ ಮರಣ ಮತ್ತು ಪುನರುತ್ಥಾನವು ದೇವರ ರಕ್ಷಣೆ ಯೋಜನೆಯ ಭಾಗವಾಗಿದ್ದು, ದೇವರ ಶಾಶ್ವತ ಪ್ರೀತಿಯನ್ನು ಹೊರಹಾಕುತ್ತದೆ." },
        { time: "01:03:00", label: "ಪವಿತ್ರ ಆತ್ಮದ ಪಾತ್ರ: ಯೇಸು ಹೋದ ನಂತರ, ಪವಿತ್ರ ಆತ್ಮ ನಮ್ಮಲ್ಲಿರುತ್ತಾರೆ, ಅದು ಎಲ್ಲೆಡೆ ಉಲ್ಲಾಸವನ್ನು ಹಾಗೂ ಮಾರ್ಗದರ್ಶನವನ್ನು ನೀಡುತ್ತದೆ, ಅವನ ಪ್ರಸ್ತುತಿಯು ಅನಂತವಾಗುತ್ತದೆ." },
        
        ]
             },
      timestamps: {
        en:[
        { time: "00:57:20", label: "God's Plan of Redemption and Our Response to His Love Through Service" },
        { time: "01:07:55", label: "Jesus' Departure and the Promise of the Holy Spirit: Understanding the Need for His Ascension" },
        { time: "00:39:00", label: "Jesus' Ascension and the Promise of the Holy Spirit: Understanding the Need for His Ascension,The Greater Benefit" },
        { time: "00:58:48", label:""},
        { time: "01:29:20", label:""},
        
        
      ],
        kk:[
          { time: "00:00:00", label: ""},
        { time: "00:15:00", label: ""},
          { time: "00:30:00", label: "" },
          { time: "00:45:00", label: "" },
          { time: "01:03:00", label: "" }
        ],
        kn:[
          { time: "00:00:00", label: "" },
          { time: "00:15:00", label: "" },
          { time: "00:39:00", label: "" },
          { time: "00:58:00", label: "" },
          { time: "01:29:30", label: "" }
        ],
    }}
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
<br></br>
  <br></br>
              {/* Timestamps Section */}
              {selectedStudy.timestamps[language]?.length > 0 && (
                <div className="timestamps">
                  <h4>Jump to Section:</h4>
                  <ul>
                    {selectedStudy.timestamps[language].map((ts, index) => (
                      <li key={index}>
                        <button onClick={() => handleTimestampClick(selectedStudy, ts.time)}>
                          {ts.time}
                        </button>   - {ts.label}
                      </li>
                    ))}
                  </ul>
                </div>
            
              )}<br></br>
  <br></br>
              <p>{selectedStudy.description}</p>
                <p>{selectedStudy.desc1}</p>
              <p>{selectedStudy.desc2}</p>
              <p>{selectedStudy.desc3}</p>

              {selectedStudy.descrip[language]?.length > 0 && (
                <div className="descrip">
                  
                  <ul>
                    {selectedStudy.descrip[language].map((ts, index) => (
                      
                        
                          <p>{ts.label}</p>
                      
                    ))}
                  </ul>
                </div>
            
              )}
              
              
            </div> <p> We acknowledge that some content may have inaccuracies. Help us improve by submitting your feedback or suggestions through our Google Form</p><br></br><small>Created by ETFGH Church members</small>
          </div>
        ) : (
          <p className="no-selection">Select a study from the list.</p>
        )}
      </main>
    </div>
  );
};

export default BibleLMS;

