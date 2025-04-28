
import React, { useState, useEffect, useRef } from "react";
import "./BibleLMS.css";
import { Helmet } from 'react-helmet';
import { Analytics } from "@vercel/analytics/react"

const BibleLMS = () => {
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [language, setLanguage] = useState("en"); // Default language is English
  const sidebarRef = useRef(null);
  const [clickedTime, setClickedTime] = useState(null);
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
    },//time
      scriptureReferences: [{label: "John 8:32", time: "00:00:48", },{label: "John 8:36",time: "00:01:37", },{label: "Matthew 12:43-45", time: "00:04:15",},{label: "Psalm 119:160",time:"00:16:17",},//The sum of God's word is truth
                            {label: "John 17:17",time:"00:16:35",},//John 17:17 (Sanctify them by Your truth; Your word is truth)
        {label: "Isaiah 41:23",time:"00:20:36",},//Isaiah 41:23 (The challenge of revealing the future as proof of being God)
        
                            {label: "Isaiah 45:21",time:"00:21:37",},//Isaiah 45:21 (God declares Himself as the only true God and the one who foretells the future)    
      {label: "John 15:3",time:"00:26:51",},{label: "Psalm 119:140",time:"00:27:35",},{label: "Psalm 119:11",time:"00:29:11",},{label: "Psalm 119:105",time:"00:30:44",},
      {label: "Psalm 119:130",time:"00:30:44",},{label: "Deuteronomy 4:5-6",time:"00:32:22",}                  ]//scr
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
    },scriptureReferences: [{label: "Matthew 4:4", time: "00:06:06", },{label: "Deuteronomy 6:16",time: "00:06:51", },{label: "Deuteronomy 5:6", time: "07:39",},{label: "Matthew 16:18",time:"08:54",},//The sum of God's word is truth
                            {label: "John 17:17",time:"00:16:35",},//John 17:17 (Sanctify them by Your truth; Your word is truth)
        {label: "Matthew 4:7",time:"00:10:29",},//Isaiah 41:23 (The challenge of revealing the future as proof of being God)
        
                            {label: "Matthew 4:10",time:"00:11:30",},//Isaiah 45:21 (God declares Himself as the only true God and the one who foretells the future)    
      {label: "Exodus 25:22",time:"00:19:37",},{label: "2 Peter 1:21",time:"00:20:57",},{label: "1 Samuel 3:21",time:"00:32:25",},{label: "Matthew 6:11",time:"00:39:04",},
      {label: "John 14:15-17",time:"00:47:07",},{label: "Proverbs 3:5-6",time:"00:46:13",},{label: "Psalm 12:6",time:"00:50:36",}   
      ]
    },





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
        { time: "00:00:00", label: "👼 Faith Building through Fasting and Prayer: level of faith determines the ability to overcome certain challenges. In the example of the disciples not being able to cast out a demon, Jesus mentioned that a higher level of faith was required. This higher level of faith can be attained through fasting and prayer, which are practices that help strengthen one's faith. Fasting and prayer create a deeper connection with God and are essential for building spiritual strength." },
        { time: "00:15:00", label: "✨ The Power of God's Word in Transforming Lives:God's Word has a creative and transformative power. When we fill ourselves with God's Word, it leads to changes within us. Just as God's Word has the power to create and shape the world, it has the power to change our lives. By internalizing and speaking God's Word, we can bring about transformation not only within ourselves but also influence others in positive ways, changing their lives as well" },
        { time: "00:30:00", label: "🌍covers various topics like spiritual warfare, the hierarchy of Satan's kingdom, the nature of demons and spirits, and their influence on the human world" },
        { time: "00:46:00", label:"Corruption and sin: A warning about the corruption that happens when one turns away from God’s commandments. The heart becomes corrupt and leads to sin."},
        { time: "01:03:00", label:"Spiritual cleansing: Emphasizing the need to cleanse the mind and heart from pollution. The analogy of water being cleaned and purified was used to illustrate how we need to stop spiritual pollution"},
        { time: "01:03:00", label:"Holy Spirit: The Holy Spirit is described as the breath of God, and it is through God's Spirit that His word is created and revealed. This process is similar to how our own breath and words work in our speech."},
        { time: "01:03:00", label:"The Role of the Holy Spirit in God's Word: The Holy Spirit brings God's word to life and makes it active. Without the movement of the Holy Spirit, God's word remains dry and inactive. When the Spirit moves and speaks through God's word, it becomes a tool for healing, blessing, and delivering people. The Spirit of God must be present for God's word to become effective and impactful in the lives of believers."},
        { time: "01:03:00", label:"The Holy Spirit as the Power of God: The Holy Spirit is described as the power of God that enables God's plans and purposes to be fulfilled. Just as God the Father has a plan, and Jesus the Son executes it, the Holy Spirit empowers the plan by bringing it into action and giving it the strength needed to be completed."},
        
              ],
        kk:[
          { time: "00:00:00", label: "" },
        { time: "00:15:00", label: "" },
        { time: "00:30:00", label: "" },
        { time: "00:46:00", label:""},
        { time: "01:03:00", label:""},
      
        ],
        kn:[
        { time: "00:00:00", label: "👼 Faith Building through Fasting and Prayer: level of faith determines the ability to overcome certain challenges. In the example of the disciples not being able to cast out a demon, Jesus mentioned that a higher level of faith was required. This higher level of faith can be attained through fasting and prayer, which are practices that help strengthen one's faith. Fasting and prayer create a deeper connection with God and are essential for building spiritual strength." },
        { time: "00:15:00", label: "✨ The Power of God's Word in Transforming Lives:God's Word has a creative and transformative power. When we fill ourselves with God's Word, it leads to changes within us. Just as God's Word has the power to create and shape the world, it has the power to change our lives. By internalizing and speaking God's Word, we can bring about transformation not only within ourselves but also influence others in positive ways, changing their lives as well" },
        { time: "00:30:00", label: "🌍covers various topics like spiritual warfare, the hierarchy of Satan's kingdom, the nature of demons and spirits, and their influence on the human world" },
        { time: "00:46:00", label:"Corruption and sin: A warning about the corruption that happens when one turns away from God’s commandments. The heart becomes corrupt and leads to sin."},
        { time: "01:03:00", label:"Spiritual cleansing: Emphasizing the need to cleanse the mind and heart from pollution. The analogy of water being cleaned and purified was used to illustrate how we need to stop spiritual pollution"},
        { time: "01:03:00", label:"Holy Spirit: The Holy Spirit is described as the breath of God, and it is through God's Spirit that His word is created and revealed. This process is similar to how our own breath and words work in our speech."},
        { time: "01:03:00", label:"The Role of the Holy Spirit in God's Word: The Holy Spirit brings God's word to life and makes it active. Without the movement of the Holy Spirit, God's word remains dry and inactive. When the Spirit moves and speaks through God's word, it becomes a tool for healing, blessing, and delivering people. The Spirit of God must be present for God's word to become effective and impactful in the lives of believers."},
        { time: "01:03:00", label:"The Holy Spirit as the Power of God: The Holy Spirit is described as the power of God that enables God's plans and purposes to be fulfilled. Just as God the Father has a plan, and Jesus the Son executes it, the Holy Spirit empowers the plan by bringing it into action and giving it the strength needed to be completed."},
        
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
      description: "God's Love, Our Response: The Role of Jesus' Ascension and the Holy Spirit",
      desc1:"",
     
      desc2:"",
      desc3:"",
      desc4:"",
       descrip:{en:[
        { time: "00:00:00", label: "💖🙏God's Love as the Foundation: God is love, and He created humans in His image to share and spread that love." },
        { time: "00:15:00", label: "👼✨ Angels vs. 🧑‍🤝‍🧑🌍 Humans: Angels don't have souls or emotions, unlike humans, who were made with the ability to love and feel, reflecting God's nature." },
        { time: "00:30:00", label: "🌍 Purpose of Creation: God created humans not just for existence, but to experience and share His love, to worship and serve Him in return" },
        { time: "00:46:00", label:"✝️🙏💔 Jesus' Sacrifice and Resurrection: Jesus' death and resurrection were part of God's plan for redemption, showing His endless love and preparing the way for humanity's salvation."},
        { time: "01:03:00", label:"🙏 Holy Spirit's Role: Jesus' departure allowed the Holy Spirit to come, guiding and empowering believers, emphasizing that His presence would now be limitless, accessible to all."},
        
        
      ],
        kk:[
          { time: "00:00:00", label: "" },
        { time: "00:15:00", label: "" },
        { time: "00:30:00", label: "" },
        { time: "00:46:00", label:""},
        { time: "01:03:00", label:""},
      
        ],
        kn:[
          { time: "00:00:00", label: "💖🙏ದೇವರ ಪ್ರೀತಿ ಮೂಲವಾಗಿದೆ: ದೇವರು ಪ್ರೀತಿಯಲ್ಲಿದ್ದಾರೆ, ಮತ್ತು ಆತನ ಸ್ವರೂಪದಲ್ಲಿ ಹೃದಯವನ್ನು ಹಂಚಿಕೊಳ್ಳಲು ಮಾನವರನ್ನು ಸೃಷ್ಟಿಸಿದನು." },
        { time: "00:15:00", label: "👼✨ಏಂಜೆಲ್ಸ್ ಹಾಗೂ 🧑‍🤝‍🧑🌍 ಮಾನವರು: ಏಂಜೆಲ್ಸ್ ಗಳು ಆತ್ಮ ಹಾಗೂ ಭಾವನೆಗಳನ್ನು ಹೊಂದಿರುತ್ತಿಲ್ಲ, ಆದರೆ ಮಾನವರು ದೇವರ ಸ್ವರೂಪದಲ್ಲಿ ಪ್ರೀತಿ ಮತ್ತು ಭಾವನೆಗಳನ್ನು ಅನುಭವಿಸಲು ರಚನೆಗೊಂಡಿದ್ದಾರೆ." },
        { time: "00:30:00", label: "🌍 ಸೃಷ್ಟಿಯ ಉದ್ದೇಶ: ದೇವರು ಮಾನವರನ್ನು ಕೇವಲ ಬದುಕಿಸಲು ಅಲ್ಲ, ತನ್ನ ಪ್ರೀತಿಯನ್ನು ಅನುಭವಿಸಿ ಹಂಚಿಕೊಳ್ಳಲು, ಆರಾಧನೆ ಮತ್ತು ಸೇವೆಗಾಗಿ ಸೃಷ್ಟಿಸಿದನು." },
        { time: "00:46:00", label: "✝️🙏💔 ಯೇಸು ಬಲಿದಾನ ಮತ್ತು ಪುನರುತ್ಥಾನ: ಯೇಸು ಕ್ರಿಸ್ತನ ಮರಣ ಮತ್ತು ಪುನರುತ್ಥಾನವು ದೇವರ ರಕ್ಷಣೆ ಯೋಜನೆಯ ಭಾಗವಾಗಿದ್ದು, ದೇವರ ಶಾಶ್ವತ ಪ್ರೀತಿಯನ್ನು ಹೊರಹಾಕುತ್ತದೆ." },
        { time: "01:03:00", label: "🙏 ಪವಿತ್ರ ಆತ್ಮದ ಪಾತ್ರ: ಯೇಸು ಹೋದ ನಂತರ, ಪವಿತ್ರ ಆತ್ಮ ನಮ್ಮಲ್ಲಿರುತ್ತಾರೆ, ಅದು ಎಲ್ಲೆಡೆ ಉಲ್ಲಾಸವನ್ನು ಹಾಗೂ ಮಾರ್ಗದರ್ಶನವನ್ನು ನೀಡುತ್ತದೆ, ಅವನ ಪ್ರಸ್ತುತಿಯು ಅನಂತವಾಗುತ್ತದೆ." },
        
        ]
             },
      timestamps: {
        en:[
        { time: "00:57:20", label: "God's Plan of Redemption and Our Response to His Love Through Service" },
        { time: "01:07:55", label: "Jesus' Departure and the Promise of the Holy Spirit: Understanding the Need for His Ascension" },
        { time: "00:39:00", label: "Jesus' Ascension and the Promise of the Holy Spirit: Understanding the Need for His Ascension,The Greater Benefit" },
        
        
        
      ],
        kk:[
          { time: "00:00:00", label: ""},
         { time: "00:15:00", label: ""},
          { time: "00:30:00", label: "" },
          { time: "00:45:00", label: "" },
          { time: "01:03:00", label: "" }
        ],
        kn:[
          { time: "00:57:20", label: "ದೇವರ ಪರಿಹಾರದ ಯೋಜನೆ ಮತ್ತು ಸೇವೆಯ ಮೂಲಕ ಅವನ ಪ್ರೀತಿಗೆ ನಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆ" },
          { time: "01:07:00", label: "ಯೇಸು ಅವರ ಹೊರಹೊಮ್ಮುವಿಕೆ ಮತ್ತು ಪವಿತ್ರ ಆತ್ಮದ ಭರವಸೆ: ಅವನ ಏರಿಕೆಯ ಅವಶ್ಯಕತೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು" },
          { time: "00:39:00", label: "ಯೇಸು ಅವರ ಏರಿಕೆ ಮತ್ತು ಪವಿತ್ರ ಆತ್ಮದ ಭರವಸೆ: ಅವನ ಏರಿಕೆಗೆ ಅವಶ್ಯಕತೆಯನ್ನು ಮತ್ತು ಅದರ ಹೆಚ್ಚಿದ ಲಾಭವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು" },
          
        ],
    }},

     {
      id: 5,
      date: "28-02-25",
      title: "From Glory to Glory, From Blessing to Blessing",
      videoUrl: "https://www.youtube.com/embed/iGElKM1Iocs",
      description: "Anniversary special Haggai 2:9 – The glory of this present house will be greater than the glory of the former house",
      desc1:"",
     
      desc2:"",
      desc3:"",
      desc4:"",
       descrip:{en:[
        { time: "00:00:00", label: "💖🙏From Glory to Glory → God has called us to a greater level than before" },
        { time: "00:15:00", label: "👼✨ From Blessing to Blessing → God continues to increase His blessings" },
        { time: "00:30:00", label: "🌍 From Miracle to Miracle → A small prayer can bring great works" },
        { time: "00:46:00", label:"✝️🙏 Faith is Important → Miracles happen through the belief that I trust in God's Word"},
        { time: "01:03:00", label:"🙏 The glory of this present house shall be greater than the glory of the former house"}
        
      ],
        kk:[
          { time: "00:00:00", label: "" },
        { time: "00:15:00", label: "" },
        { time: "00:30:00", label: "" },
        { time: "00:46:00", label:""},
        { time: "01:03:00", label:""},
      
        ],
        kn:[
          { time: "00:00:00", label: "💖🙏ಮಹಿಮೆಯಿಂದ ಮಹಿಮೆಗೆ → ದೇವರು ನಮ್ಮನ್ನು ಹಿಂದಿನ ಹಂತಕ್ಕಿಂತಲೂ ದೊಡ್ಡ ಹಂತಕ್ಕೆ ಕರೆದಿದ್ದಾರೆ" },
        { time: "00:15:00", label: "👼✨ಆಶೀರ್ವಾದದಿಂದ ಆಶೀರ್ವಾದಕ್ಕೆ → ದೇವರು ಆಶೀರ್ವಾದವನ್ನು ಹೆಚ್ಚಿಸುತ್ತಲೇ ಹೋಗುತ್ತಾರೆ" },
        { time: "00:30:00", label: "🌍 ಅದ್ಭುತದಿಂದ ಅದ್ಭುತಕ್ಕೆ → ಸಣ್ಣ ಪ್ರಾರ್ಥನೆಯು ದೊಡ್ಡ ಕಾರ್ಯಗಳನ್ನು ಮಾಡುತ್ತದೆ" },
        { time: "00:46:00", label: "✝️🙏💔 ನಂಬಿಕೆಯು ಮಹತ್ವದ್ದಾಗಿದೆ → ನಾನು ದೇವರ ವಾಕ್ಯವನ್ನು ನಂಬುತ್ತೇನೆ ಎಂಬ ಶ್ರದ್ಧೆಯ ಮೂಲಕ ಅದ್ಭುತಗಳು ಸಂಭವಿಸುತ್ತವೆ." },
        { time: "01:03:00", label: "🙏 ಹಗ್ಗಾಯ 2:9 – ಈ ಆಲಯದ ಮುಂದಿನ ವೈಭವವು ಹಿಂದಿನ ವೈಭವಕ್ಕಿಂತ ಶ್ರೇಷ್ಠವಾಗಿರುತ್ತದೆ." },
        
        ]
             },
      timestamps: {
        en:[
        { time: "01:11:20", label: "Gods Plan and Calling:God has called us to a greater glory than before. Instead of dwelling on the past, we must look forward with expectation to the mighty works that God is going to do." },
        { time: "01:14:55", label: "Solomon’s Temple vs. The Second Temple: The first temple was beautiful, but God made the second temple even more glorious." },
        { time: "01:17:00", label: "God’s Promise to Abraham and Sarah: Sarah giving birth to a son (Isaac) at the age of 90 was a divne miracle." },
         { time: "01:21:16", label: "Joseph's Interpretation of Dreams:  Joseph saw his future through his(pharoah) dreams." },
        { time: "01:26:00", label: " King Nebuchadnezzar’s Dream and Daniel: Daniel was a man of divine wisdom—God directly revealed the dream and its meaning to him." },
           { time: "01:34:00", label: "The Miraculous Works of Elijah and Elisha:Elijah: When there was no rain, he prayed → God brought a great rain from a small cloud." }
       



      ],
        kk:[
          { time: "00:00:00", label: ""},
         { time: "00:15:00", label: ""},
          { time: "00:30:00", label: "" },
          { time: "00:45:00", label: "" },
          { time: "01:03:00", label: "" }
        ],
        kn:[
          { time: "01:11:43", label: "ದೇವರ ಪ್ರಸ್ತಾವನೆ ದೇವರು ನಮ್ಮನ್ನು ಹಿಂದಿನ ಶ್ರೇಷ್ಠತೆಗಿಂತಲೂ ಹೆಚ್ಚಿನ ಮಹಿಮೆಗೆ ಕರೆದಿದ್ದಾರೆ. ಹಿಂದಿನ ದಿನಗಳನ್ನು ನೆನೆಯುವ ಬದಲು, ಮುಂದಿನ ದೇವರ ಕಾರ್ಯವನ್ನು ನಿರೀಕ್ಷಿಸಬೇಕು." },
          { time: "01:14:38", label: "ಸೋಲೊಮೋನನ ಆಲಯ vs. ಎರಡನೇ ಆಲಯ:ಮೊದಲು ನಿರ್ಮಿಸಲಾದ ಆಲಯವು ಭವ್ಯವಾಗಿತ್ತು, ಆದರೆ ದೇವರು ಮುಂದಿನ ಆಲಯವನ್ನು ಹೆಚ್ಚು ಶ್ರೇಷ್ಠಗೊಳಿಸುತ್ತಾರೆ." },
          { time: "01:17:00", label: "ಆಬ್ರಹಾಮ ಮತ್ತು ಸಾರಳಿಗೆ ದೇವರ ವಾಗ್ದಾನ:ಸಾರಳಿಗೆ 90ನೇ ವಯಸ್ಸಿನಲ್ಲಿ ಮಗುವಾದುದು (ಇಸಾಕ್) – ಇದು ಒಂದು ದೇವದತ್ತ ಅದ್ಭುತ." },
          { time: "01:21:16", label: "ಯೋಸೇಫನ ಕನಸುಗಳರ್ಥ:ಯೋಸೇಫ್ ತನ್ನ ಕನಸುಗಳ ಮೂಲಕ ತನ್ನ ಭವಿಷ್ಯವನ್ನು ನೋಡಿದನು.ಐಗುಪ್ತ ದೇಶದ ಪಡುವಣದ ಸನ್ನಿವೇಶದಲ್ಲಿ ಅವನು ರಾಜನೊಂದಿಗೆ ಎದ್ದು ಬಂದನು." },
         { time: "01:26:15", label: "ನೆಬೂಕದ್ನೇಸರ್ ರಾಜನ ಕನಸು ಮತ್ತು ದಾನಿಯೇಲನು:ದಾನಿಯೇಲನು ಒಬ್ಬ ದೈವಜ್ಞಾನಿ – ದೇವರು ದಾನಿಯೇಲನಿಗೆ ಕಂಡ ಕನಸು ಮತ್ತು ಅದರ ಅರ್ಥವನ್ನು ಪ್ರತ್ಯಕ್ಷವಾಗಿ ತಿಳಿಸಿದರು." },
  { time: "01:34:00", label: "ಎಲಿಯ ಮತ್ತು ಎಲೀಷನ ಅದ್ಭುತ ಕಾರ್ಯಗಳು ಎಲಿಯನು: ಮಳೆ ಬರದೆ ಇದ್ದಾಗ ಪ್ರಾರ್ಥನೆ ಮಾಡಿದರು → ದೇವರು ಚಿಕ್ಕ ಮೋಡದಿಂದ ಭಾರಿ ಮಳೆ ತರಿಸಿದರು. " }    ,
       { time: "01:37:00", label: "ಮರಣದಿಂದ ಜೀವಕ್ಕೆ: ಎಲಿಯ, ಎಲೀಷ ಮತ್ತು ಎಜ್ಕೆಲ್" } ,
{ time: "01:42:00", label: "ನೋಹ ಮತ್ತು ಪೇತ್ರನು:ನೋಹನ ಹಡಗು: 8 ಜನರು ಪೇತ್ರನು ಒಂದು ಪ್ರಸಂಗದಿಂದ 3000 ಜನರ ರಕ್ಷಣೆ." }
          
        ],
    }},


    {
      id: 6,
      date: "25-04-25",
      title: "Let us abide in God's meditation and be fruitful",
      videoUrl: "https://www.youtube.com/embed/NtH_5SLW7ss",
      description: "",
      desc1:"",
     
      desc2:"",
      desc3:"",
      desc4:"",
       descrip:{en:[
        { time: "00:00:00", label: "💖🙏To Bear Fruit, We Must Abide in Jesus (John 15:5-7)" },
        { time: "00:15:00", label: "👼✨ Prayer is not just about presenting a list of requests, but about building a true, intimate relationship with God." },
        { time: "00:30:00", label: "🌍 We should dedicate at least one hour daily for prayer" },
        { time: "00:46:00", label:"✝️🙏 We must listen to God's voice by meditating on His Word."},
        { time: "01:03:00", label:"🙏 We should choose the right time and place to maintain the presence of God.Sacrifice and devotion are essential for a truly strong and powerful life"}
        
      ],
        kk:[
          { time: "00:00:00", label: "" },
        { time: "00:15:00", label: "" },
        { time: "00:30:00", label: "" },
        { time: "00:46:00", label:""},
        { time: "01:03:00", label:""},
      
        ],
        kn:[
          { time: "00:00:00", label: "💖🙏ಫಲಕೊಡಲು ಯೇಸುವಿನಲ್ಲಿ ನೆಲೆಗೊಳ್ಳಬೇಕು (ಯೋಹಾನ 15:5-7)" },
        { time: "00:15:00", label: "👼✨ಪ್ರಾರ್ಥನೆ ಮಾತ್ರ ಬೇಡಿಕೆ ಪಟ್ಟಿಯನ್ನು ಅರ್ಪಿಸುವುದು ಅಲ್ಲ, ದೇವರೊಂದಿಗೆ ನಿಜವಾದ ಸಂಗಾತಿಯ ಸಂಬಂಧ ಕಟ್ಟಿಕೊಳ್ಳುವುದು." },
        { time: "00:30:00", label: "🌍 ದಿನವೂ ಕನಿಷ್ಠ ಒಂದು ಗಂಟೆ ಪ್ರಾರ್ಥನೆಗೆ ಸಮರ್ಪಿಸಬೇಕು" },
        { time: "00:46:00", label: "✝️🙏💔 ದೇವರ ವಾಕ್ಯದಲ್ಲಿ ಧ್ಯಾನ ಮಾಡುವ ಮೂಲಕ ದೇವರ ಸ್ವರವನ್ನು ಕೇಳಬೇಕು" },
        { time: "01:03:00", label: "🙏 ದೇವರ ಸಾನ್ನಿಧ್ಯವನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಲು ಸರಿಯಾದ ಸಮಯ ಮತ್ತು ಸ್ಥಳವನ್ನು ಆರಿಸಬೇಕು.ಸತ್ಯವಾಗಿ ಬಲಶಾಲಿ ಜೀವಿತಕ್ಕಾಗಿ ತ್ಯಾಗ ಮತ್ತು ಶ್ರದ್ಧೆ ಮುಖ್ಯ" },
        
        ]
             },
      timestamps: {
        en:[
        { time: "01:11:20", label: "Abiding in Jesus: Bearing fruit to bring glory to God" },
        { time: "01:14:55", label: "The Importance of Prayer and Meditation: At least one hour of prayer is mandatory; courage and perseverance are essential." },
        { time: "01:17:00", label: "Difference between Gifts and Fruits: Gifts are received instantly, but fruits require time and effort (example of a mango tree)." },
         { time: "01:21:16", label: "True Meaning of Prayer: A two-way conversation with God is essential." },
        { time: "01:26:00", label: " How to Grow in Prayer: Example of the widow’s oil." },
           { time: "01:34:00", label: "Simple Tips for Prayer: Choose a time with fewer distractions (morning or night)." },
          { time: "01:34:00", label: "Method of Praying" },{ time: "01:34:00", label: "Importance of Reading the Bible: First read the Bible, then pray." },
          { time: "01:34:00", label: "God pours out fire upon sacrifice." },
          { time: "01:34:00", label: "Sacrificing sleep and food is precious in God's sight." },
          { time: "01:34:00", label: "Fix a proper time for prayer." },
          { time: "01:34:00", label: "Small things make a big difference" },
          { time: "01:34:00", label: "Need for continuous meditation throughout the day." },
          { time: "01:34:00", label: "How holy the mind must be." },
          { time: "01:34:00", label: "Separating from the wicked (Psalm 1:1–3)." },
          { time: "01:34:00", label: "Need for continuous meditation throughout the day." },
          { time: "01:34:00", label: "Example of fruitful sowing (Matthew 13)" }
          
       



      ],
        kk:[
          { time: "00:00:00", label: ""},
         { time: "00:15:00", label: ""},
          { time: "00:30:00", label: "" },
          { time: "00:45:00", label: "" },
          { time: "01:03:00", label: "" }
        ],
        kn:[
          { time: "00:03:13", label: "ಯೇಸುವಿನಲ್ಲಿ ನೆಲೆಗೊಳ್ಳುವುದು:ಫಲ ಕೊಡುವುದು ದೇವರಿಗೆ ಮಹಿಮೆ ತರಿಸಲು" },
          { time: "00:03:53", label: "ಪ್ರಾರ್ಥನೆ ಮತ್ತು ಧ್ಯಾನದ ಮಹತ್ವ:ಕನಿಷ್ಠ ಒಂದು ಗಂಟೆ ಪ್ರಾರ್ಥನೆ ಕಡ್ಡಾಯ,ಧೈರ್ಯ ಮತ್ತು ಕಾಯುವಿಕೆ ಅಗತ್ಯ" },
          { time: "00:05:13", label: "ವರಗಳು vs ಫಲಗಳು ವ್ಯತ್ಯಾಸ:ವರಗಳು ತಕ್ಷಣ ದೊರೆಯುತ್ತವೆ,ಫಲಗಳಿಗೆ ಸಮಯ, ಪರಿಶ್ರಮ ಅಗತ್ಯ (mango tree ಉದಾಹರಣೆ)" },
          { time: "00:07:16", label: " ನಿಜವಾದ ಪ್ರಾರ್ಥನೆಯ ಅರ್ಥ:ದೇವರೊಂದಿಗೆ ದ್ವಿಮುಖ ಸಂಭಾಷಣೆ ಅಗತ್ಯ" },
         { time: "00:08:15", label: "ಪ್ರಾರ್ಥನೆಯಲ್ಲಿ ಹೇಗೆ ಬೆಳೆದುಕೊಳ್ಳಬೇಕು?.ವಿಧವೆಯ ಎಣ್ಣೆ ಉದಾಹರಣೆ." },
  { time: "00:09:00", label: "ಸರಳ ಟಿಪ್ಸ್ ಪ್ರಾರ್ಥನೆಗೆ:ಹೆಚ್ಚು ವ್ಯತ್ಯಯವಾಗದ ಸಮಯವನ್ನು ಆರಿಸಿ (ಬೆಳಿಗ್ಗೆ ಅಥವಾ ರಾತ್ರಿ)" }    ,
       { time: "00:09:43", label: "ಪ್ರಾರ್ಥನೆ ಮಾಡುವ ವಿಧಾನ" } ,
{ time: "00:11:00", label: "ಬೈಬಲ್ ಓದುವ ಮಹತ್ವ:ಮೊದಲಿಗೆ ಬೈಬಲ್ ಓದಿ, ನಂತರ ಪ್ರಾರ್ಥನೆ ಮಾಡಿ" },
          { time: "00:14:30", label: "ದೇವರು ಬೆಂಕಿಯನ್ನು ತ್ಯಾಗದ ಮೇಲೆ ಸುರಿಸುತ್ತಾರೆ" },
          
          { time: "00:14:30", label: "ನಿದ್ರೆ, ಊಟವನ್ನು ತ್ಯಾಗ ಮಾಡುವುದು ದೇವರ ದೃಷ್ಟಿಯಲ್ಲಿ ಬೆಲೆಬಾಳುತ್ತದೆ" },
          { time: "00:16:30", label: "ಪ್ರಾರ್ಥನೆಗೆ ಸರಿಯಾದ ಸಮಯ ಹಿಡಿಯಬೇಕು" },
          { time: "00:16:50", label: "ಸಣ್ಣ ಸಣ್ಣ ವಿಷಯಗಳು ದೊಡ್ಡ ವ್ಯತ್ಯಾಸವನ್ನು ಮಾಡುತ್ತವೆ" },
          { time: "00:14:30", label: "ದಿನವಿಡಿ ಧ್ಯಾನ ಮಾಡುವ ಅಗತ್ಯ" },
          { time: "00:14:30", label: "ತಲೆ ಎಷ್ಟು ಪವಿತ್ರವಾಗಿರಬೇಕು" },
           { time: "00:26:00", label: "ದುಷ್ಟರನ್ನು ತೊರೆಯುವುದು (ಕೀರ್ತನೆ 1:1-3)" }, { time: "00:21:30", label: "ಫಲ ಕೊಡುವ ಬಿತ್ತನೆ ಉದಾಹರಣೆ (ಮತ್ತಾಯ 13)" },
           { time: "00:14:30", label: "ಸೆಲ್ಫ್ ಸ್ಟಡಿ ಅಗತ್ಯ" },
          
          
          
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
    console.log(baseUrl);
    const updatedVideoUrl = `${baseUrl}?start=${convertToSeconds(time)}`;
    console.log(time);
    setClickedTime(time);
    setSelectedStudy({ ...study, videoUrl: updatedVideoUrl });
  };

  const convertToSeconds = (time) => {
    const [hh, mm, ss] = time.split(":").map(Number);
    return hh * 3600 + mm * 60 + ss;
  };

  return (

    <div>
      
            {/* <!-- Meta Tags Generated via https://www.opengraph.xyz https://img.youtube.com/vi/4Q2JicFD5GM/default.jpg-->*/}
                 
       <Analytics />
 
    <div className="dashboard">
      <button className="toggle-button" onClick={() => setSidebarOpen(!sidebarOpen)}>
        ☰
      </button>
<br></br><br></br>
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
        <header className="header">     Bible Learning Archive</header>

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


              {/* Scripture References Section */}
              {selectedStudy.scriptureReferences?.length > 0 && (
                <div className="scripture-references">
                  <h4>Scripture References:</h4>
                  <ul>
                    {selectedStudy.scriptureReferences.map((ref, index) => (
                      <li key={index}>
                        <button onClick={() => handleTimestampClick(selectedStudy,ref.time)}>
                          {ref.label} {ref.time}
                          
                          {/* {clickedTime === ref.time && ` time:${ref.time}`}*/}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <small><p className="no-selection"> We acknowledge that some content may have inaccuracies. Help us improve by submitting your feedback or suggestions through our Google Form</p></small>
<a href="https://forms.gle/E8MdisaLqDEzdjgB8">
      <button>Update Notes</button>
</a>
              
            </div> 
            .<br></br><small>Created by ETFGH Church members  </small>
          </div>
        ) : (
          <p className="no-selection"> Select a study from the list.<br></br> Bro Chethan</p>
           
        )}
      </main>
    </div>
  </div>
  );
};

export default BibleLMS;
