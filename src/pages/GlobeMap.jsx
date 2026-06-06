import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const travelData = {
  vietnam11: {
    title: "Bến cảng Nhà Rồng (Việt Nam)",
    subtitle: "Khát vọng vươn khơi và Bản lĩnh văn hóa từ hai bàn tay trắng",
    year: "05/06/1911",
    story:
      "Điểm khởi đầu của một tư duy văn hóa mở: Chủ động bước ra thế giới để tìm hiểu sự thật, từ chối lối mòn cứu nước cũ kỹ phong kiến của các bậc tiền bối.",
    ideology: "Khát vọng Giải phóng & Tự lực tự cường",
    transformation: "Sẵn sàng từ bỏ lối sống quen thuộc và con đường mòn cũ, tự lực dấn thân lên tàu tìm đường cứu nước chỉ với hai bàn tay trắng.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDUIZ65QqW84q8m0SLzwv7wBVMyetBoH-DV-hmX7WN0yUwTD_1NysMRYM79inbUm47pmG7s7mt-Y3V95yJAF5sJjvdSFXZQs_aTWp6NnLF-vdcU1kSpY6IIb4Vs5KiU8eHAxe8AsNsdD1NulyRX6xvCXQI-BfxH5w1qwL4lgljinE76RqYJCCoBmgh0q6LZ7i76npLgOVdwlEfj031JgjbbeFGfpLwwHXw69fxgSDOxnI8wQDf2V7rU3K2dVxdO2uI-ewuD01Ja2flo",
  },
  france: {
    title: "Kinh đô Ánh sáng Paris (Pháp)",
    subtitle: "Thử thách tự học và Cuộc đối thoại trực diện với Văn minh phương Tây",
    year: "1917 – 1923",
    story:
      "Tiếp thu giá trị dân chủ, tư duy lý tính và nghệ thuật tiến bộ của nhân loại; khẳng định văn hóa phải gắn liền với độc lập dân tộc và quyền tự do của con người.",
    ideology: "Dân chủ, Tự do & Tư duy Lý tính Khai phóng",
    transformation:
      "Học hỏi tinh hoa phương Tây, nghiên cứu sâu sắc tư tưởng Khai sáng và các cuộc cách mạng dân chủ nhưng giữ vững độc bản văn hóa Việt Nam.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
  },
  russia: {
    title: "Thủ đô Moscow (Nga)",
    subtitle: "Ánh sáng lý luận và Sứ mệnh văn hóa phục vụ nhân dân lao động",
    year: "1923 – 1924",
    story:
      'Định hình văn hóa là một "mặt trận", người làm nghệ thuật là "chiến sĩ". Văn hóa không phải là xa xỉ phẩm mà phải phục vụ đại chúng quần chúng lao động.',
    ideology: "Văn hóa Cách mạng & Phụng sự Nhân dân",
    transformation:
      "Định hướng văn hóa phải đồng hành cùng chính trị và kinh tế, văn hóa soi đường cho quốc dân, nghệ thuật thuộc về nhân dân lao động.",
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=1949&auto=format&fit=crop",
  },
  china: {
    title: "Quảng Châu & Diên An (Trung Quốc)",
    subtitle: "Giao thoa phương Đông và Đỉnh cao nghệ thuật giữa chốn ngục tù",
    year: "1924 – 1927",
    story:
      "Gạn đục khơi trong triết học phương Đông (Nho giáo, Phật giáo); dùng ngòi bút làm vũ khí văn hóa để thức tỉnh tinh thần tự chủ và đoàn kết dân tộc.",
    ideology: "Định hình Nhân cách Cách mạng & Thơ ca chiến đấu",
    transformation:
      "Chuyển hóa Nho giáo truyền thống thành đạo đức cách mạng mới (Cần, Kiệm, Liêm, Chính, Chí công vô tư); rèn luyện ý chí vượt khó vô song.",
    image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=2070&auto=format&fit=crop",
  },
  vietnam41: {
    title: "Hang Pác Bó, Cao Bằng (Việt Nam)",
    subtitle: "Trở về cội nguồn và Khái niệm tối giản về một nền văn hóa mới",
    year: "28/01/1941",
    story:
      "Hòa nhập chứ không hòa tan. Tinh hoa nhân loại sau 30 năm được đúc kết lại thành một lối sống tối giản thanh bạch, một nền văn hóa đậm đà bản sắc Việt Nam.",
    ideology: "Tinh hoa Kết tinh & Lối sống Tối giản Hòa hợp Thiên nhiên",
    transformation:
      "Lối sống ung dung, tự tại chốn rừng núi Cao Bằng thể hiện đỉnh cao nhân cách: hòa quyện sâu sắc với đất trời mà vẫn làm chủ vận mệnh cách mạng.",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop",
  },
};

const placesCoords = {
  vietnam11: {
    x: 965,
    y: 340,
    flagUrl: "https://flagcdn.com/w80/vn.png",
    label: "1. Bến Nhà Rồng",
    labelXOffset: 12,
    labelYOffset: 4,
    textAnchor: "start",
    rot: 0,
  },
  france: {
    x: 560,
    y: 180,
    flagUrl: "https://flagcdn.com/w80/fr.png",
    label: "2. Paris (Pháp)",
    labelXOffset: 0,
    labelYOffset: 22,
    textAnchor: "middle",
    rot: 45,
  },
  russia: {
    x: 680,
    y: 140,
    flagUrl: "https://flagcdn.com/w80/ru.png",
    label: "3. Moscow (Nga)",
    labelXOffset: 0,
    labelYOffset: 22,
    textAnchor: "middle",
    rot: -25,
  },
  china: {
    x: 930,
    y: 250,
    flagUrl: "https://flagcdn.com/w80/cn.png",
    label: "4. Quảng Châu",
    labelXOffset: -12,
    labelYOffset: 4,
    textAnchor: "end",
    rot: 25,
  },
  vietnam41: {
    x: 955,
    y: 305,
    flagUrl: "https://flagcdn.com/w80/vn.png",
    label: "5. Pác Bó",
    labelXOffset: -12,
    labelYOffset: 4,
    textAnchor: "end",
    rot: -12,
  },
};

const stopsOrder = ["vietnam11", "france", "russia", "china", "vietnam41"];

export default function GlobeMap() {
  const [visitedIndex, setVisitedIndex] = useState(0); // Progressive index (0 to 4)
  const [selectedPlace, setSelectedPlace] = useState("vietnam11");
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-primary border-b-2 border-primary pb-1 font-bold font-body-md text-body-md"
      : "text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md";
  };

  const handleNextStop = () => {
    if (visitedIndex < 4) {
      const nextIdx = visitedIndex + 1;
      setVisitedIndex(nextIdx);
      setSelectedPlace(stopsOrder[nextIdx]);

      // Auto-trigger completion modal with delay once boat reaches 5th stop (Pác Bó)
      if (nextIdx === 4) {
        setTimeout(() => {
          setShowCompletionModal(true);
        }, 2700);
      }
    }
  };

  const handlePrevStop = () => {
    if (visitedIndex > 0) {
      const prevIdx = visitedIndex - 1;
      setVisitedIndex(prevIdx);
      setSelectedPlace(stopsOrder[prevIdx]);
    }
  };

  const handleMarkerClick = (placeKey) => {
    const placeIdx = stopsOrder.indexOf(placeKey);
    // Allow viewing details only for unlocked/visited stops
    if (placeIdx <= visitedIndex) {
      setSelectedPlace(placeKey);
    }
  };

  const activePlaceData = travelData[selectedPlace] || travelData.vietnam11;
  const boatCoords = placesCoords[stopsOrder[visitedIndex]];

  const isFocused = selectedPlace !== null && !showCompletionModal;
  const activeCoords = placesCoords[selectedPlace];

  let mapTransform = "translate(0%, 0%) scale(1.15) rotate(0deg) translate(0%, 0%)";
  if (isFocused && activeCoords) {
    const dx = 600 - activeCoords.x;
    const dy = 300 - activeCoords.y;
    const pctX = (dx / 1200) * 100;
    const pctY = (dy / 600) * 100;

    // Shift focus target coordinates slightly to the right on larger viewports
    // to prevent the stop from being covered by the left floating panel.
    const screenOffsetX = isLargeScreen ? 12 : 0;

    // Mathematically precise camera system:
    // 1. translate(pctX, pctY) centers the active stop at the map center (unrotated)
    // 2. rotate(rot) rotates the map around this active stop
    // 3. scale(2.6) zooms in centered on the active stop
    // 4. translate(screenOffsetX, 0) offsets the stop to the right on screen coordinates
    mapTransform = `translate(${screenOffsetX}%, 0%) scale(2.6) rotate(${activeCoords.rot}deg) translate(${pctX}%, ${pctY}%)`;
  }

  return (
    <div className="overflow-hidden bg-background text-on-surface font-body-md h-screen flex flex-col pt-20">
      <style>{`
        .map-marker { cursor: pointer; }
        .map-marker circle { transition: all 0.3s ease-in-out; }
        .marker-pulse { animation: pulse 2s infinite; }
        @keyframes pulse { 0% { transform: scale(0.95); opacity: 0.7; } 70% { transform: scale(1.2); opacity: 0; } 100% { transform: scale(0.95); opacity: 0; } }
        .glass-panel { background: rgba(252, 249, 248, 0.85); backdrop-filter: blur(12px); border: 1px solid rgba(140, 113, 110, 0.2); }
        .vintage-border { border: 1px solid #dfbfbc; position: relative; }
        .vintage-border::before { content: ""; position: absolute; top: 4px; left: 4px; right: 4px; bottom: 4px; border: 1px solid rgba(223, 191, 188, 0.4); pointer-events: none; }
        .animate-dash {
          stroke-dasharray: 6 6;
          animation: dash-flow 2s linear infinite;
        }
        @keyframes dash-flow {
          to {
            stroke-dashoffset: -12;
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s forwards ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-bloom-card {
          animation: bloomCard 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes bloomCard {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-pop-pin {
          animation: popPin 0.4s forwards ease-out;
        }
        @keyframes popPin {
          0% { transform: scale(0); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes slideInLeft {
          from {
            transform: translateX(-40px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(140, 113, 110, 0.3); border-radius: 4px; }
      `}</style>

      <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30">
        <div className="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto">
          <Link to="/" className="font-display-md text-display-md text-primary tracking-tight">
            Ký Ức Văn Hóa
          </Link>
          <div className="hidden md:flex items-center gap-lg">
            <Link className={getLinkClass("/")} to="/">
              Trang chủ
            </Link>
            <Link className={getLinkClass("/map")} to="/map">
              Bản đồ số
            </Link>
            <Link className={getLinkClass("/mailbox")} to="/mailbox">
              Hộp thư ký ức
            </Link>
            <Link className={getLinkClass("/quiz")} to="/quiz">
              Trắc nghiệm
            </Link>
          </div>
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-primary/10 transition-colors cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className="material-symbols-outlined text-on-surface-variant">{showMenu ? "close" : "menu"}</span>
          </button>
        </div>
      </nav>
      {showMenu && (
        <div className="fixed top-20 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md border-b border-outline-variant/30 md:hidden animate-fade-in">
          <div className="flex flex-col px-gutter py-md gap-sm">
            <Link className={getLinkClass("/")} to="/" onClick={() => setShowMenu(false)}>
              Trang chủ
            </Link>
            <Link className={getLinkClass("/map")} to="/map" onClick={() => setShowMenu(false)}>
              Bản đồ số
            </Link>
            <Link className={getLinkClass("/mailbox")} to="/mailbox" onClick={() => setShowMenu(false)}>
              Hộp thư ký ức
            </Link>
            <Link className={getLinkClass("/quiz")} to="/quiz" onClick={() => setShowMenu(false)}>
              Trắc nghiệm
            </Link>
          </div>
        </div>
      )}

      <div className="flex-grow relative overflow-hidden flex flex-col">
        <div className="absolute inset-0 bg-secondary-container overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              transform: mapTransform,
              transformOrigin: "center center",
              transition: "transform 2.5s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-75 brightness-110"></div>

            <svg className="absolute inset-0 w-full h-full pointer-events-auto" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 600">
              {visitedIndex >= 1 && (
                <path
                  d="M 965 340 C 800 450, 650 300, 560 180"
                  fill="none"
                  stroke="#801318"
                  strokeDasharray="6 6"
                  strokeWidth="2.5"
                  className="opacity-75 animate-dash"
                />
              )}
              {visitedIndex >= 2 && (
                <path
                  d="M 560 180 C 590 150, 640 130, 680 140"
                  fill="none"
                  stroke="#801318"
                  strokeDasharray="6 6"
                  strokeWidth="2.5"
                  className="opacity-75 animate-dash"
                />
              )}
              {visitedIndex >= 3 && (
                <path
                  d="M 680 140 C 780 180, 850 220, 930 250"
                  fill="none"
                  stroke="#801318"
                  strokeDasharray="6 6"
                  strokeWidth="2.5"
                  className="opacity-75 animate-dash"
                />
              )}
              {visitedIndex >= 4 && (
                <path
                  d="M 930 250 C 940 270, 950 290, 955 305"
                  fill="none"
                  stroke="#801318"
                  strokeDasharray="6 6"
                  strokeWidth="2.5"
                  className="opacity-75 animate-dash"
                />
              )}

              {stopsOrder.map((key, index) => {
                const coords = placesCoords[key];
                const isUnlocked = visitedIndex >= index;
                if (!isUnlocked) return null;

                return (
                  <g key={key} transform={`translate(${coords.x}, ${coords.y - 25})`} className="pointer-events-none">
                    <g className="animate-pop-pin">
                      <line x1="0" y1="0" x2="0" y2="15" stroke="#801318" strokeWidth="1.2" />
                      <g transform="translate(0, -9)">
                        <defs>
                          <clipPath id={`clip-${key}`}>
                            <circle cx="0" cy="0" r="9" />
                          </clipPath>
                        </defs>
                        <circle r="10" fill="white" stroke="#801318" strokeWidth="1.5" />
                        <image
                          href={coords.flagUrl}
                          x="-9"
                          y="-9"
                          width="18"
                          height="18"
                          preserveAspectRatio="xMidYMid slice"
                          clipPath={`url(#clip-${key})`}
                        />
                      </g>
                    </g>
                  </g>
                );
              })}

              <g
                transform={`translate(${boatCoords.x}, ${boatCoords.y})`}
                className="pointer-events-none z-30"
                style={{ transition: "transform 2.5s cubic-bezier(0.25, 1, 0.5, 1)" }}
              >
                <circle r="18" fill="rgba(128, 19, 24, 0.2)" className="marker-pulse" />
                <g transform="translate(-10, -11) scale(0.9)">
                  <path d="M 2 15 L 20 15 L 17 9 L 5 9 Z" fill="#801318" />
                  <line x1="11" y1="2" x2="11" y2="15" stroke="#801318" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M 11 2 L 5 8 L 11 8 Z" fill="#b88a8c" />
                  <path d="M 11 4 L 18 10 L 11 10 Z" fill="#e8d5d6" />
                </g>
                <g transform="translate(0, -18)">
                  <polygon points="0,0 8,-3 0,-6" fill="#cca830" />
                  <line x1="0" y1="0" x2="0" y2="6" stroke="#cca830" strokeWidth="1.2" />
                </g>
              </g>

              {stopsOrder.map((key, index) => {
                const coords = placesCoords[key];
                const isUnlocked = visitedIndex >= index;
                const isSelected = selectedPlace === key;
                const labelX = coords.x + (coords.labelXOffset || 0);
                const labelY = coords.y + (coords.labelYOffset || 22);
                const textAnchor = coords.textAnchor || "middle";

                return (
                  <g
                    key={key}
                    className={`map-marker transition-opacity duration-300 ${isUnlocked ? "opacity-100" : "opacity-40 cursor-not-allowed"}`}
                    onClick={() => handleMarkerClick(key)}
                  >
                    <circle className="fill-primary/20 marker-pulse" cx={coords.x} cy={coords.y} r="12"></circle>
                    <circle
                      className={`transition-all duration-300 ${isSelected ? "fill-tertiary" : "fill-primary"}`}
                      cx={coords.x}
                      cy={coords.y}
                      r={isSelected ? 8 : 5}
                    ></circle>
                    {isSelected && <circle className="fill-tertiary/40 animate-ping pointer-events-none" cx={coords.x} cy={coords.y} r="16"></circle>}
                    <text
                      className="font-label-md text-[11px] fill-on-surface font-semibold animate-fade-in"
                      textAnchor={textAnchor}
                      x={labelX}
                      y={labelY}
                    >
                      {coords.label} {!isUnlocked && "🔒"}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Floating description block top-left */}
          <div className="absolute top-4 left-4 z-10 max-w-xs mt-2">
            <h1 className="font-display-md text-[20px] text-primary leading-tight font-serif font-bold">Hành trình Văn hóa Hồ Chí Minh</h1>
            <p className="font-body-sm text-xs text-on-surface-variant bg-surface/85 backdrop-blur-sm p-sm rounded-lg border border-outline-variant/30 leading-relaxed shadow-sm mt-1">
              Nhổ neo di chuyển con thuyền ⛵ lần lượt qua các điểm chặng. Khi thuyền đi qua, hải trình đứt nét và lá cờ của nơi đến sẽ được mở khóa!
            </p>
          </div>

          {/* Map navigation control panel (Floating bottom center) */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 w-11/12 max-w-sm">
            <div className="glass-panel p-md rounded-xl shadow-lg border border-outline-variant/30 flex items-center justify-between gap-md">
              <button
                onClick={handlePrevStop}
                disabled={visitedIndex === 0}
                className="p-sm bg-surface hover:bg-primary/5 disabled:opacity-40 disabled:hover:bg-transparent rounded-lg border border-outline-variant/50 text-primary cursor-pointer flex items-center justify-center transition-all"
                title="Quay lại chặng trước"
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span>
              </button>

              <div className="text-center flex-grow">
                <span className="text-[10px] text-primary font-bold uppercase tracking-wider block">Hải trình văn hóa</span>
                <span className="font-serif text-label-md font-bold text-on-surface block mt-0.5 truncate max-w-[180px] mx-auto">
                  {placesCoords[stopsOrder[visitedIndex]].label}
                </span>
              </div>

              {visitedIndex < 4 ? (
                <button
                  onClick={handleNextStop}
                  className="bg-primary text-on-primary py-sm px-md rounded-lg font-label-md text-xs font-bold hover:bg-primary-container transition-all flex items-center gap-xs cursor-pointer shadow-md"
                >
                  <span>Nhổ neo ⛵</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              ) : (
                <button
                  onClick={() => setShowCompletionModal(true)}
                  className="bg-tertiary text-on-tertiary py-sm px-md rounded-lg font-label-md text-xs font-bold flex items-center gap-xs hover:bg-tertiary-container transition-all shadow-md cursor-pointer animate-pulse"
                >
                  <span>Tổng kết 🏆</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Floating Details Panel (displayed on the left space of the map) */}
        {selectedPlace && (
          <div className="absolute top-24 left-4 right-4 md:right-auto md:w-[410px] max-h-[calc(100vh-220px)] z-40 bg-surface/90 backdrop-blur-md rounded-2xl border border-outline-variant/30 shadow-2xl flex flex-col overflow-hidden animate-slide-in-left">
            {/* Scrollable details container */}
            <div className="overflow-y-auto custom-scrollbar p-md md:p-lg space-y-md text-left">
              <div className="flex justify-between items-start border-b border-outline-variant/30 pb-sm">
                <div>
                  <span className="font-label-md text-xs text-primary bg-primary/10 px-sm py-1 rounded-full font-bold uppercase tracking-wider">
                    {activePlaceData.year}
                  </span>
                  <h2 className="font-display-md text-[20px] text-primary mt-xs leading-snug font-serif font-bold">{activePlaceData.title}</h2>
                  <p className="font-headline-md text-[13px] text-on-surface-variant font-bold italic mt-xs leading-relaxed">
                    "{activePlaceData.subtitle}"
                  </p>
                </div>
                <button
                  onClick={() => setSelectedPlace(null)}
                  className="p-1 hover:bg-surface-container rounded-full text-on-surface-variant cursor-pointer transition-colors flex-shrink-0"
                  title="Đóng bảng chi tiết"
                >
                  <span className="material-symbols-outlined text-md">close</span>
                </button>
              </div>

              <div className="vintage-border rounded-lg overflow-hidden shadow-sm">
                <img src={activePlaceData.image} className="w-full h-36 object-cover" alt={activePlaceData.title} />
              </div>

              <div className="space-y-sm">
                <section className="bg-surface/50 p-sm rounded-lg border border-outline-variant/20">
                  <div className="flex items-center gap-xs text-tertiary mb-xs">
                    <span className="material-symbols-outlined text-[18px]">history_edu</span>
                    <h3 className="font-label-md text-[11px] font-bold uppercase tracking-wider">Hành trình & Di sản</h3>
                  </div>
                  <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">{activePlaceData.story}</p>
                </section>

                <section className="bg-secondary-container/40 p-sm rounded-lg border border-outline-variant/30">
                  <div className="flex items-center gap-xs text-primary mb-xs">
                    <span className="material-symbols-outlined text-[18px]">lightbulb</span>
                    <h3 className="font-label-md text-[11px] font-bold uppercase tracking-wider">Tư tưởng cốt lõi</h3>
                  </div>
                  <p className="font-headline-md text-[12px] text-primary font-bold leading-relaxed">{activePlaceData.ideology}</p>
                </section>

                <section className="bg-primary/5 p-sm rounded-lg border border-primary/10">
                  <div className="flex items-center gap-xs text-primary mb-xs">
                    <span className="material-symbols-outlined text-[18px]">eco</span>
                    <h3 className="font-label-md text-[11px] font-bold uppercase tracking-wider">Tinh hoa đọng lại</h3>
                  </div>
                  <p className="font-body-sm text-[12px] text-on-surface leading-relaxed border-l-4 border-primary pl-xs italic">
                    {activePlaceData.transformation}
                  </p>
                </section>
              </div>

              <button
                onClick={() => setSelectedPlace(null)}
                className="mt-xs w-full py-sm border border-primary text-primary font-label-md text-xs hover:bg-primary hover:text-on-primary transition-all duration-300 rounded-lg cursor-pointer font-bold animate-fade-in"
              >
                Đóng xem chi tiết
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Journey Completion Modal */}
      {showCompletionModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-md bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-surface border-2 border-primary/40 p-lg rounded-2xl shadow-2xl max-w-xl w-full max-h-[85vh] flex flex-col relative overflow-hidden animate-bloom-card isolate">
            {/* Paper texture overlay inside the card to avoid multiply blend with dark backdrop */}
            <div className="paper-texture absolute inset-0 opacity-15 pointer-events-none z-0"></div>

            <button
              onClick={() => setShowCompletionModal(false)}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors cursor-pointer w-8 h-8 rounded-full border border-outline-variant/40 flex items-center justify-center z-10 bg-surface/80 backdrop-blur-sm"
              title="Đóng lại"
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>

            {/* Scrollable inner wrapper */}
            <div className="flex-grow overflow-y-auto custom-scrollbar pr-xs space-y-md text-center py-sm my-xs relative z-10">
              {/* Success stamp icon */}
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-xs flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-3xl animate-bounce">emoji_events</span>
              </div>

              <h2 className="font-display-md text-headline-lg font-bold text-primary font-serif">Chúc mừng bạn đã hoàn thành Hải trình Di sản!</h2>

              <p className="text-xs text-secondary font-semibold uppercase tracking-widest">Thông điệp Tư tưởng Hồ Chí Minh về Văn hóa</p>

              {/* Gold Quote Block */}
              <div className="bg-primary/5 border-y-2 border-primary/30 py-md px-sm relative overflow-hidden rounded-xl flex-shrink-0">
                <span className="material-symbols-outlined text-primary/10 text-[72px] absolute top-1/2 left-4 -translate-y-1/2 pointer-events-none">
                  format_quote
                </span>
                <blockquote className="font-display-md text-headline-md text-primary italic leading-snug font-serif">
                  "Văn hóa soi đường cho quốc dân đi."
                </blockquote>
                <p className="text-[10px] text-secondary-variant mt-sm uppercase tracking-widest">— Hồ Chí Minh —</p>
              </div>

              <div className="space-y-sm text-sm text-on-surface-variant leading-relaxed text-justify px-xs">
                <p>
                  Qua 30 năm bôn ba khảo sát khắp các lục địa, Chủ tịch Hồ Chí Minh đã tiếp thu tinh hoa văn hóa của nhân loại để kiến tạo nên một hệ
                  thống tư tưởng toàn diện, nhân văn và sâu sắc. Người khẳng định:{" "}
                  <strong>văn hóa không đứng ngoài mà phải nằm trong kinh tế và chính trị</strong>, đóng vai trò là nền tảng tinh thần vững chắc và là
                  động lực quyết định thúc đẩy sự tiến bộ xã hội.
                </p>
                <p>
                  Thế hệ trẻ chúng ta ngày nay, đứng trước làn sóng toàn cầu hóa và công nghệ số bão táp, thừa hưởng di sản văn hóa vĩ đại đó. Sứ mệnh
                  của Gen Z chính là <strong>hội nhập quốc tế chủ động, không ngừng học hỏi và sáng tạo</strong>, nhưng đồng thời phải giữ vững, bảo
                  tồn và làm tỏa sáng bản sắc văn hóa Việt Nam độc bản.
                </p>
              </div>
            </div>

            {/* Fixed Action Footer */}
            <div className="pt-md border-t border-outline-variant/20 flex-shrink-0 relative z-10">
              <div className="flex justify-center">
                <Link
                  to="/quiz"
                  className="w-full bg-primary text-on-primary py-sm px-md rounded-lg font-label-md text-xs font-bold text-center hover:bg-primary-container transition-colors shadow-sm"
                >
                  Làm trắc nghiệm 🧠
                </Link>
              </div>

              <button
                onClick={() => setShowCompletionModal(false)}
                className="w-full text-xs text-on-surface-variant hover:text-primary transition-all font-semibold pt-sm block text-center cursor-pointer"
              >
                Tiếp tục xem bản đồ số ↺
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
