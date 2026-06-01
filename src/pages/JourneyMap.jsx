import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const mapData = {
    vietnam: {
        title: "Bến Nhà Rồng, Việt Nam",
        date: "05/06/1911",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800",
        content: ["Tại đây, chàng thanh niên Nguyễn Tất Thành đã xuống con tàu Amiral Latouche-Tréville, bắt đầu cuộc hành trình 30 năm đi tìm con đường giải phóng dân tộc.", "Đây là cột mốc lịch sử quan trọng nhất, khởi nguồn cho toàn bộ sự nghiệp vĩ đại của Người sau này."]
    },
    france: {
        title: "Paris, Pháp",
        date: "1917 - 1923",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800",
        content: ["Trong thời gian ở Pháp, Người gia nhập Đảng Xã hội Pháp, tham gia sáng lập Đảng Cộng sản Pháp và viết Bản yêu sách 8 điểm gửi Hội nghị Versailles.", "Người cũng sáng lập báo 'Le Paria' (Người cùng khổ) để vạch trần tội ác thực dân."]
    },
    uk: {
        title: "London, Vương quốc Anh",
        date: "1913 - 1917",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800",
        content: ["Nguyễn Tất Thành sống và làm việc tại London. Những trải nghiệm thực tế về đời sống công nhân và xã hội phương Tây đã giúp Người hình thành những nhận thức sơ khởi về bản chất của chủ nghĩa đế quốc."]
    },
    russia: {
        title: "Moscow, Liên Xô",
        date: "1923 - 1924",
        image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=800",
        content: ["Người đến quê hương của Cách mạng tháng Mười, tham gia học tập tại Trường Đại học Phương Đông của Quốc tế Cộng sản.", "Đây là giai đoạn Người nghiên cứu sâu sắc về chủ nghĩa Mác-Lênin và chuẩn bị tư tưởng cho cuộc cách mạng tại Việt Nam."]
    },
    china: {
        title: "Quảng Châu, Trung Quốc",
        date: "1924 - 1927",
        image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=800",
        content: ["Người thành lập Hội Việt Nam Cách mạng Thanh niên, mở các lớp huấn luyện cán bộ và xuất bản tác phẩm 'Đường Kách mệnh'.", "Đây là bước chuẩn bị quan trọng về tổ chức để tiến tới thành lập Đảng Cộng sản Việt Nam năm 1930."]
    }
};

export default function JourneyMap() {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-primary border-b-2 border-primary pb-1 font-bold font-body-md text-body-md"
      : "text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md";
  };

  const handlePointClick = (id) => {
    setSelectedPoint(id);
    document.getElementById(`point-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary-fixed-dim selection:text-on-primary-fixed">
      <style>{`
        .map-dot { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .map-dot:hover { transform: scale(1.5); }
        .line-pattern { background-image: radial-gradient(#dfbfbc 1px, transparent 1px); background-size: 24px 24px; }
        .lotus-pulse { animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes pulse-ring { 0% { transform: scale(0.9); opacity: 0.8; } 50% { transform: scale(1.1); opacity: 0.4; } 100% { transform: scale(0.9); opacity: 0.8; } }
        .sidebar-scroll::-webkit-scrollbar { width: 2px; }
        .sidebar-scroll::-webkit-scrollbar-thumb { background: #8c716e; }
      `}</style>
      
      <header className="bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 docked full-width top-0 sticky z-50">
        <div className="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto h-20">
          <Link to="/" className="font-headline-md text-headline-md font-bold text-primary">Ký ức Văn hóa</Link>
          <nav className="hidden md:flex items-center gap-md">
            <Link className={getLinkClass('/')} to="/">Trang chủ</Link>
            <Link className={getLinkClass('/map')} to="/map">Bản đồ số</Link>
            <Link className={getLinkClass('/heritage-map')} to="/heritage-map">Bản đồ di sản</Link>
            <Link className={getLinkClass('/notebook')} to="/notebook">Tư liệu</Link>
            <Link className={getLinkClass('/mailbox')} to="/mailbox">Hộp thư ký ức</Link>
            <Link className={getLinkClass('/quiz')} to="/quiz">Trắc nghiệm</Link>
          </nav>
          <div className="flex items-center gap-sm">
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
              <input className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full text-body-md focus:ring-1 focus:ring-primary w-64 transition-all" placeholder="Tìm kiếm di sản..." type="text"/>
            </div>
            <button className="p-2 hover:bg-surface-container-low rounded-full transition-colors">
              <span className="material-symbols-outlined text-primary">menu</span>
            </button>
          </div>
        </div>
      </header>

      <main className="relative min-h-[calc(100vh-80px)] flex flex-col md:flex-row overflow-hidden">
        <aside className="w-full md:w-80 bg-surface-container-low/50 backdrop-blur-sm border-r border-outline-variant/30 z-20 flex flex-col">
          <div className="p-gutter border-b border-outline-variant/20">
            <h1 className="font-headline-md text-headline-md text-primary mb-2">Hành trình Di sản</h1>
            <p className="font-body-md text-on-surface-variant leading-relaxed">Theo chân người thanh niên yêu nước Nguyễn Tất Thành qua các đại lục trong cuộc tìm đường cứu nước.</p>
          </div>
          <div className="flex-grow overflow-y-auto sidebar-scroll p-md space-y-md">
            <button className="group flex items-start gap-md p-md rounded-lg hover:bg-surface-container transition-all text-left w-full border border-transparent hover:border-outline-variant/30" onClick={() => handlePointClick('vietnam')}>
              <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-[18px]">location_on</span>
              </div>
              <div>
                <span className="font-label-md text-primary uppercase tracking-widest block mb-1">1911</span>
                <h3 className="font-headline-md text-[20px] text-on-surface group-hover:text-primary transition-colors">Việt Nam</h3>
                <p className="font-caption text-on-surface-variant line-clamp-2">Bến cảng Nhà Rồng - Điểm khởi đầu của cuộc hành trình vĩ đại.</p>
              </div>
            </button>
            <button className="group flex items-start gap-md p-md rounded-lg hover:bg-surface-container transition-all text-left w-full border border-transparent hover:border-outline-variant/30" onClick={() => handlePointClick('france')}>
              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-surface-variant text-[18px]">location_on</span>
              </div>
              <div>
                <span className="font-label-md text-on-surface-variant uppercase tracking-widest block mb-1">1917 - 1923</span>
                <h3 className="font-headline-md text-[20px] text-on-surface group-hover:text-primary transition-colors">Pháp</h3>
                <p className="font-caption text-on-surface-variant line-clamp-2">Paris - Nơi Người gia nhập Đảng Xã hội Pháp và viết Bản yêu sách.</p>
              </div>
            </button>
            <button className="group flex items-start gap-md p-md rounded-lg hover:bg-surface-container transition-all text-left w-full border border-transparent hover:border-outline-variant/30" onClick={() => handlePointClick('uk')}>
              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-surface-variant text-[18px]">location_on</span>
              </div>
              <div>
                <span className="font-label-md text-on-surface-variant uppercase tracking-widest block mb-1">1913 - 1917</span>
                <h3 className="font-headline-md text-[20px] text-on-surface group-hover:text-primary transition-colors">Anh</h3>
                <p className="font-caption text-on-surface-variant line-clamp-2">London - Những năm tháng lao động vất vả và tìm tòi lý luận.</p>
              </div>
            </button>
            <button className="group flex items-start gap-md p-md rounded-lg hover:bg-surface-container transition-all text-left w-full border border-transparent hover:border-outline-variant/30" onClick={() => handlePointClick('russia')}>
              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-surface-variant text-[18px]">location_on</span>
              </div>
              <div>
                <span className="font-label-md text-on-surface-variant uppercase tracking-widest block mb-1">1923 - 1924</span>
                <h3 className="font-headline-md text-[20px] text-on-surface group-hover:text-primary transition-colors">Nga</h3>
                <p className="font-caption text-on-surface-variant line-clamp-2">Moscow - Tiếp cận chủ nghĩa Mác-Lênin tại quê hương Cách mạng tháng Mười.</p>
              </div>
            </button>
            <button className="group flex items-start gap-md p-md rounded-lg hover:bg-surface-container transition-all text-left w-full border border-transparent hover:border-outline-variant/30" onClick={() => handlePointClick('china')}>
              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-surface-variant text-[18px]">location_on</span>
              </div>
              <div>
                <span className="font-label-md text-on-surface-variant uppercase tracking-widest block mb-1">1924 - 1927</span>
                <h3 className="font-headline-md text-[20px] text-on-surface group-hover:text-primary transition-colors">Trung Quốc</h3>
                <p className="font-caption text-on-surface-variant line-clamp-2">Quảng Châu - Thành lập Hội Việt Nam Cách mạng Thanh niên.</p>
              </div>
            </button>
          </div>
          <div className="p-md bg-surface-container-high/30">
            <Link to="/detail" className="w-full py-3 bg-primary text-on-primary font-label-md rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined text-[18px]">auto_stories</span>
              XEM TOÀN BỘ TIẾN TRÌNH
            </Link>
          </div>
        </aside>

        <section className="flex-grow relative bg-surface-container-lowest line-pattern flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none grayscale contrast-125">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDazNsABTDLRUYrU8oZK1RGPuw-LDIppDA2Y2u8wDayOuWtQJyiJa4DFaXSonKyqV-bkAsggTGhCKkWRaaAFvF6HXLU3HI6EgthXkVRdqWzm6oxnPlwHjxo--sjwsTLblnmO7r3SukMnScnwQUpKm4Q3xs1XZHHpEACXDTOgDoZu1F6BPaFoenddhg1Pocnk7YwHYC85gwLdbj74oxgKSIbsxRweH6sl6JzDAQjPbFnaqF7iu6NSAa-SKRkNqDdYnAQbLi4ZO0CZ6FZ"/>
          </div>
          <div className="relative w-full h-full max-w-[1400px] mx-auto overflow-hidden">
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 1000 600">
              <path d="M850,450 Q750,300 350,280" fill="none" stroke="#8c716e" strokeDasharray="4 4" strokeWidth="1"></path>
              <path d="M350,280 Q320,220 380,180" fill="none" stroke="#8c716e" strokeDasharray="4 4" strokeWidth="1"></path>
              <path d="M350,280 Q500,200 650,150" fill="none" stroke="#8c716e" strokeDasharray="4 4" strokeWidth="1"></path>
              <path d="M650,150 Q750,200 820,300" fill="none" stroke="#8c716e" strokeDasharray="4 4" strokeWidth="1"></path>
            </svg>

            <div className="absolute top-[75%] left-[85%] -translate-x-1/2 -translate-y-1/2 group" id="point-vietnam">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-12 h-12 bg-primary/10 rounded-full lotus-pulse"></div>
                <div className="w-4 h-4 bg-primary rounded-full border-2 border-on-primary shadow-lg cursor-pointer z-10" onClick={() => handlePointClick('vietnam')}></div>
                <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-64 bg-surface p-md rounded-xl shadow-xl border border-outline-variant opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-50">
                  <h4 className="font-headline-md text-primary text-[18px]">Việt Nam</h4>
                  <p className="font-caption text-on-surface mt-1">Bến Nhà Rồng, Sài Gòn. Ngày 5/6/1911, Nguyễn Tất Thành rời Tổ quốc trên con tàu Amiral Latouche-Tréville.</p>
                  <img className="w-full h-24 object-cover mt-2 rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUIZ65QqW84q8m0SLzwv7wBVMyetBoH-DV-hmX7WN0yUwTD_1NysMRYM79inbUm47pmG7s7mt-Y3V95yJAF5sJjvdSFXZQs_aTWp6NnLF-vdcU1kSpY6IIb4Vs5KiU8eHAxe8AsNsdD1NulyRX6xvCXQI-BfxH5w1qwL4lgljinE76RqYJCCoBmgh0q6LZ7i76npLgOVdwlEfj031JgjbbeFGfpLwwHXw69fxgSDOxnI8wQDf2V7rU3K2dVxdO2uI-ewuD01Ja2flo"/>
                </div>
              </div>
            </div>

            <div className="absolute top-[30%] left-[35%] -translate-x-1/2 -translate-y-1/2 group" id="point-france">
              <div className="relative flex items-center justify-center">
                <div className="w-4 h-4 bg-primary rounded-full border-2 border-on-primary shadow-lg cursor-pointer z-10" onClick={() => handlePointClick('france')}></div>
                <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-64 bg-surface p-md rounded-xl shadow-xl border border-outline-variant opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-50">
                  <h4 className="font-headline-md text-primary text-[18px]">Pháp</h4>
                  <p className="font-caption text-on-surface mt-1">Số 9 ngõ Compoint, Paris. Nơi Người hoạt động trong phong trào công nhân và gia nhập Đảng Xã hội Pháp.</p>
                  <img className="w-full h-24 object-cover mt-2 rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuXigwK1dCMich-xh0wj63dNxXqWVobPUpYBZ73U26WWK7kIsUO8wMBt1iP6dSwyb1QuhRuJvrxsFMc_iitN1qctwefPQwRAtTPR9G11ga5pRy7KN10KMzH2LV_8s_jG37qfzegkuba77aGUEmjhct9037TzJ6ymKBI1iWm5GYMTnG-Exvd74J6uYzhnbd4TUtR5k_dezkuYRXmFh7RxhmKzhV_F0ipLJhXdKpPyo9-Ho2AZ4eBlQ12nMpKG01Hdy2XqWqPv_MrrCY"/>
                </div>
              </div>
            </div>

            <div className="absolute top-[22%] left-[32%] -translate-x-1/2 -translate-y-1/2 group" id="point-uk">
              <div className="relative flex items-center justify-center">
                <div className="w-4 h-4 bg-primary rounded-full border-2 border-on-primary shadow-lg cursor-pointer z-10" onClick={() => handlePointClick('uk')}></div>
                <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-64 bg-surface p-md rounded-xl shadow-xl border border-outline-variant opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-50">
                  <h4 className="font-headline-md text-primary text-[18px]">Vương quốc Anh</h4>
                  <p className="font-caption text-on-surface mt-1">Khách sạn Carlton, London. Người làm phụ bếp và nghiên cứu các học thuyết chính trị phương Tây.</p>
                </div>
              </div>
            </div>

            <div className="absolute top-[20%] left-[65%] -translate-x-1/2 -translate-y-1/2 group" id="point-russia">
              <div className="relative flex items-center justify-center">
                <div className="w-4 h-4 bg-primary rounded-full border-2 border-on-primary shadow-lg cursor-pointer z-10" onClick={() => handlePointClick('russia')}></div>
                <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-64 bg-surface p-md rounded-xl shadow-xl border border-outline-variant opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-50">
                  <h4 className="font-headline-md text-primary text-[18px]">Liên Xô (Nga)</h4>
                  <p className="font-caption text-on-surface mt-1">Quảng trường Đỏ, Moscow. Tham dự Đại hội V Quốc tế Cộng sản và làm việc tại Ban Phương Đông.</p>
                </div>
              </div>
            </div>

            <div className="absolute top-[48%] left-[82%] -translate-x-1/2 -translate-y-1/2 group" id="point-china">
              <div className="relative flex items-center justify-center">
                <div className="w-4 h-4 bg-primary rounded-full border-2 border-on-primary shadow-lg cursor-pointer z-10" onClick={() => handlePointClick('china')}></div>
                <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-64 bg-surface p-md rounded-xl shadow-xl border border-outline-variant opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-50">
                  <h4 className="font-headline-md text-primary text-[18px]">Trung Quốc</h4>
                  <p className="font-caption text-on-surface mt-1">Quảng Châu. Nơi mở các lớp huấn luyện cán bộ cách mạng, tiền thân của Đảng Cộng sản Việt Nam.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-gutter right-gutter flex flex-col gap-sm">
            <button className="w-10 h-10 bg-surface rounded-lg shadow-lg border border-outline-variant/30 flex items-center justify-center hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-primary">add</span>
            </button>
            <button className="w-10 h-10 bg-surface rounded-lg shadow-lg border border-outline-variant/30 flex items-center justify-center hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-primary">remove</span>
            </button>
            <button className="w-10 h-10 bg-surface rounded-lg shadow-lg border border-outline-variant/30 flex items-center justify-center hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-primary">my_location</span>
            </button>
          </div>

          <div className="absolute bottom-gutter left-gutter max-w-sm hidden lg:block">
            <div className="p-md bg-surface/80 backdrop-blur-sm border-l-4 border-tertiary-container">
              <p className="font-display-md text-[20px] italic text-on-surface leading-snug">"Tôi muốn đi ra ngoài, xem nước Pháp và các nước khác. Sau khi xem xét họ làm thế nào, tôi sẽ trở về giúp đồng bào chúng ta."</p>
              <p className="font-label-md text-primary mt-2 uppercase tracking-widest">— Nguyễn Tất Thành, 1911</p>
            </div>
          </div>
        </section>
      </main>

      {selectedPoint && (
        <div className="fixed inset-0 bg-on-background/60 backdrop-blur-sm z-[100] flex items-center justify-center p-gutter">
          <div className="bg-surface max-w-4xl w-full max-h-[921px] overflow-y-auto rounded-xl shadow-2xl relative">
            <button className="absolute top-4 right-4 p-2 hover:bg-surface-container-low rounded-full" onClick={() => setSelectedPoint(null)}>
              <span className="material-symbols-outlined text-primary">close</span>
            </button>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 h-80 md:h-auto overflow-hidden">
                <img className="w-full h-full object-cover" src={mapData[selectedPoint].image}/>
              </div>
              <div className="p-xl md:w-1/2">
                <span className="font-label-md text-tertiary uppercase tracking-widest">{mapData[selectedPoint].date}</span>
                <h2 className="font-display-md text-primary mb-md mt-sm">{mapData[selectedPoint].title}</h2>
                <div className="w-12 h-1 bg-outline-variant mb-md"></div>
                <div className="font-body-lg text-on-surface space-y-md">
                  {mapData[selectedPoint].content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <div className="mt-xl flex gap-md">
                  <Link to="/detail" className="px-md py-3 bg-primary text-on-primary font-label-md rounded-lg hover:opacity-90 transition-all text-center">KHÁM PHÁ CHI TIẾT</Link>
                  <button className="px-md py-3 border border-primary text-primary font-label-md rounded-lg hover:bg-primary-fixed/20 transition-all">XEM TƯ LIỆU ẢNH</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-surface-container border-t border-outline-variant/50">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-gutter py-md max-w-container-max mx-auto">
          <div className="font-headline-sm text-headline-sm text-on-surface font-bold">Ký ức Văn hóa</div>
          <div className="flex gap-md my-md md:my-0">
            <Link className="text-on-secondary-container hover:text-primary transition-opacity font-body-md text-body-md" to="/">Về dự án</Link>
            <Link className="text-on-secondary-container hover:text-primary transition-opacity font-body-md text-body-md" to="/">Chính sách bảo mật</Link>
            <Link className="text-on-secondary-container hover:text-primary transition-opacity font-body-md text-body-md" to="/">Liên hệ</Link>
            <Link className="text-on-secondary-container hover:text-primary transition-opacity font-body-md text-body-md" to="/">Đóng góp</Link>
          </div>
          <p className="font-caption text-caption text-on-secondary-container opacity-60">© 2026 Ký ức Văn hóa. Hành trình Di sản Hồ Chí Minh.</p>
        </div>
      </footer>
    </div>
  );
}
