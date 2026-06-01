import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const travelData = {
    france: {
        title: "Paris - Pháp (1917 - 1923)",
        subtitle: "Nơi gặp gỡ những tư tưởng lớn",
        year: "1917",
        story: "Tại Paris, Người không chỉ lao động kiếm sống mà còn thâm nhập sâu vào đời sống văn hóa, nghệ thuật và chính trị phương Tây. Người học tiếng Pháp qua các tác phẩm văn học của Victor Hugo, Anatole France.",
        ideology: "Tự do - Bình đẳng - Bác ái",
        transformation: "Người nhận ra rằng những giá trị này chỉ thực sự có ý nghĩa khi được áp dụng cho mọi dân tộc, không chỉ riêng người Pháp. Người đã đưa 'quyền sống, quyền tự do và quyền mưu cầu hạnh phúc' vào Bản Tuyên ngôn Độc lập của Việt Nam sau này.",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
    },
    england: {
        title: "London - Anh (1913 - 1917)",
        subtitle: "Học tập và Rèn luyện",
        year: "1913",
        story: "Dưới cái lạnh giá của London, Người làm việc tại khách sạn Carlton. Đây là thời gian Người rèn luyện ngoại ngữ và quan sát thực tế bộ máy chính quyền của một đế quốc công nghiệp hàng đầu thế giới.",
        ideology: "Tính kỷ luật & Thực tiễn",
        transformation: "Phong cách làm việc khoa học, coi trọng thời gian và tính thực tiễn của người Anh đã được Người tiếp thu và chuyển hóa thành tư tưởng 'nói đi đôi với làm', 'thực sự, thực tế'.",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
    },
    russia: {
        title: "Moscow - Nga (1923 - 1924)",
        subtitle: "Ánh sáng từ phương Bắc",
        year: "1923",
        story: "Người đến nước Nga sau Cách mạng Tháng Mười, nơi Người tìm thấy con đường giải phóng dân tộc qua học thuyết Mác-Lênin. Người tham gia Đại hội Quốc tế Cộng sản lần thứ V.",
        ideology: "Công bằng Xã hội & Giải phóng",
        transformation: "Không rập khuôn máy móc, Người đã kết hợp chủ nghĩa Mác-Lênin với lòng yêu nước nồng nàn của dân tộc Việt Nam, khẳng định 'Chủ nghĩa dân tộc là một động lực lớn của đất nước'.",
        image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=1949&auto=format&fit=crop",
    },
    china: {
        title: "Quảng Châu - Trung Quốc (1924 - 1927)",
        subtitle: "Sự tương đồng văn hóa Á Đông",
        year: "1924",
        story: "Tại Quảng Châu, Người mở lớp huấn luyện chính trị, viết tác phẩm 'Đường Kách mệnh'. Người am tường sâu sắc Nho giáo và các tư tưởng truyền thống Á Đông.",
        ideology: "Nhân - Nghĩa - Trí - Dũng",
        transformation: "Người đã gạn đục khơi trong, giữ lại những giá trị nhân bản của Khổng giáo như 'Tu thân, Tề gia' nhưng mang một nội hàm mới: phục vụ nhân dân, phục vụ cách mạng thay vì trung quân ái quốc mù quáng.",
        image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=2070&auto=format&fit=crop",
    },
    vietnam: {
        title: "Pác Bó - Việt Nam (1941)",
        subtitle: "Sự hội tụ và Kết tinh",
        year: "1941",
        story: "Sau 30 năm bôn ba, Người trở về Tổ quốc. Tất cả những tinh hoa văn hóa nhân loại đã được Người đúc kết để lãnh đạo toàn dân tộc.",
        ideology: "Độc lập - Tự do - Hạnh phúc",
        transformation: "Đây là kết quả cuối cùng của quá trình 'Việt Nam hóa' mọi tư tưởng thế giới. Văn hóa Hồ Chí Minh là sự kết hợp nhuần nhuyễn giữa truyền thống dân tộc với tinh hoa văn hóa nhân loại, hướng tới mục tiêu tối thượng vì con người.",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop",
    }
};

export default function GlobeMap() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-primary border-b-2 border-primary pb-1 font-bold font-body-md text-body-md"
      : "text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md";
  };

  return (
    <div className="overflow-hidden bg-background text-on-surface font-body-md">
      <style>{`
        .map-marker { cursor: pointer; transition: all 0.3s ease; }
        .map-marker:hover { transform: scale(1.2); filter: drop-shadow(0 0 8px rgba(128, 19, 24, 0.4)); }
        .marker-pulse { animation: pulse 2s infinite; }
        @keyframes pulse { 0% { transform: scale(0.95); opacity: 0.7; } 70% { transform: scale(1.1); opacity: 0; } 100% { transform: scale(0.95); opacity: 0; } }
        .glass-panel { background: rgba(252, 249, 248, 0.85); backdrop-filter: blur(12px); border: 1px solid rgba(140, 113, 110, 0.2); }
        .vintage-border { border: 1px solid #dfbfbc; position: relative; }
        .vintage-border::before { content: ""; position: absolute; top: 4px; left: 4px; right: 4px; bottom: 4px; border: 1px solid rgba(223, 191, 188, 0.4); pointer-events: none; }
      `}</style>
      
      <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30">
        <div className="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto">
          <Link to="/" className="font-display-md text-display-md text-primary tracking-tight">Ký Ức Văn Hóa</Link>
          <div className="hidden md:flex items-center gap-lg">
            <Link className={getLinkClass('/')} to="/">Trang chủ</Link>
            <Link className={getLinkClass('/map')} to="/map">Bản đồ số</Link>
            <Link className={getLinkClass('/heritage-map')} to="/heritage-map">Bản đồ di sản</Link>
            <Link className={getLinkClass('/notebook')} to="/notebook">Tư liệu</Link>
            <Link className={getLinkClass('/mailbox')} to="/mailbox">Hộp thư ký ức</Link>
            <Link className={getLinkClass('/quiz')} to="/quiz">Trắc nghiệm</Link>
          </div>
          <div className="flex items-center gap-md">
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">search</span>
            <button className="bg-primary text-on-primary px-md py-xs rounded-lg font-label-md text-label-md transition-transform scale-95 active:scale-90">Đăng nhập</button>
          </div>
        </div>
      </nav>

      <main className="relative w-full h-screen pt-20 bg-secondary-container">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-75 brightness-110"></div>
          
          <svg className="absolute inset-0 w-full h-full pointer-events-auto" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 600">
            <g className="map-marker" onClick={() => setSelectedPlace('france')}>
              <circle className="fill-primary/20 marker-pulse" cx="560" cy="180" r="12"></circle>
              <circle className="fill-primary" cx="560" cy="180" r="6"></circle>
              <text className="font-label-md text-[12px] fill-on-surface font-semibold" textAnchor="middle" x="560" y="205">Pháp</text>
            </g>
            <g className="map-marker" onClick={() => setSelectedPlace('england')}>
              <circle className="fill-primary/20 marker-pulse" cx="545" cy="155" r="12"></circle>
              <circle className="fill-primary" cx="545" cy="155" r="6"></circle>
              <text className="font-label-md text-[12px] fill-on-surface font-semibold" textAnchor="middle" x="545" y="145">Anh</text>
            </g>
            <g className="map-marker" onClick={() => setSelectedPlace('russia')}>
              <circle className="fill-primary/20 marker-pulse" cx="680" cy="140" r="12"></circle>
              <circle className="fill-primary" cx="680" cy="140" r="6"></circle>
              <text className="font-label-md text-[12px] fill-on-surface font-semibold" textAnchor="middle" x="680" y="130">Nga</text>
            </g>
            <g className="map-marker" onClick={() => setSelectedPlace('china')}>
              <circle className="fill-primary/20 marker-pulse" cx="940" cy="240" r="12"></circle>
              <circle className="fill-primary" cx="940" cy="240" r="6"></circle>
              <text className="font-label-md text-[12px] fill-on-surface font-semibold" textAnchor="middle" x="940" y="265">Trung Quốc</text>
            </g>
            <g className="map-marker" onClick={() => setSelectedPlace('vietnam')}>
              <circle className="fill-tertiary/20 marker-pulse" cx="960" cy="330" r="16"></circle>
              <circle className="fill-tertiary" cx="960" cy="330" r="8"></circle>
              <text className="font-label-md text-[14px] fill-primary font-extrabold uppercase tracking-widest" textAnchor="middle" x="960" y="355">Việt Nam</text>
            </g>
          </svg>
        </div>

        <div className="absolute top-md left-gutter z-10 max-w-sm mt-4">
          <h1 className="font-display-md text-display-md text-primary leading-tight mb-sm">Hành trình Tiếp thu Tinh hoa Văn hóa Nhân loại</h1>
          <p className="font-body-md text-body-md text-on-surface-variant bg-surface/60 backdrop-blur-sm p-sm rounded-lg border border-outline-variant/30">Khám phá dấu chân của Người trên khắp năm châu và cách những tư tưởng vĩ đại được "Việt Nam hóa" qua lăng kính Hồ Chí Minh.</p>
        </div>
        
        <div className="absolute bottom-md left-gutter z-10 flex gap-sm">
          <div className="glass-panel px-md py-sm rounded-full flex items-center gap-xs">
            <span className="w-3 h-3 rounded-full bg-primary"></span>
            <span className="font-label-md text-label-md text-on-surface">Điểm dừng chân</span>
          </div>
          <div className="glass-panel px-md py-sm rounded-full flex items-center gap-xs">
            <span className="w-3 h-3 rounded-full bg-tertiary"></span>
            <span className="font-label-md text-label-md text-on-surface">Kết tinh Tư tưởng</span>
          </div>
        </div>

        <aside className={`absolute top-0 right-0 h-full w-full md:w-[450px] glass-panel transform transition-transform duration-500 ease-in-out z-40 flex flex-col ${selectedPlace ? 'translate-x-0' : 'translate-x-full'}`}>
          <button className="absolute top-md left-[-40px] md:left-[-50px] bg-primary text-on-primary w-10 h-10 flex items-center justify-center rounded-l-xl shadow-lg mt-20" onClick={() => setSelectedPlace(null)}>
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
          
          <div className="flex-1 overflow-y-auto custom-scrollbar p-xl mt-20">
            {selectedPlace ? (
              <>
                <div className="mb-lg">
                  <span className="font-label-md text-label-md text-primary bg-primary/10 px-sm py-1 rounded-full">{travelData[selectedPlace].year}</span>
                  <h2 className="font-display-md text-display-md text-primary mt-sm leading-tight">{travelData[selectedPlace].title}</h2>
                  <p className="font-headline-md text-headline-md text-on-surface-variant italic border-l-4 border-tertiary-container pl-sm mt-xs">{travelData[selectedPlace].subtitle}</p>
                </div>
                <div className="vintage-border rounded-lg overflow-hidden mb-lg shadow-sm">
                  <img src={travelData[selectedPlace].image} className="w-full h-48 object-cover" />
                </div>
                <div className="space-y-lg">
                  <section>
                    <div className="flex items-center gap-xs text-tertiary mb-xs">
                      <span className="material-symbols-outlined text-[20px]">history_edu</span>
                      <h3 className="font-label-md text-label-md uppercase tracking-widest">Câu chuyện di sản</h3>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface leading-relaxed">{travelData[selectedPlace].story}</p>
                  </section>
                  <section className="bg-secondary-container/30 p-md rounded-lg">
                    <div className="flex items-center gap-xs text-primary mb-xs">
                      <span className="material-symbols-outlined text-[20px]">lightbulb</span>
                      <h3 className="font-label-md text-label-md uppercase tracking-widest">Tư tưởng tiếp nhận</h3>
                    </div>
                    <p className="font-headline-md text-headline-md text-primary font-bold mb-xs">{travelData[selectedPlace].ideology}</p>
                  </section>
                  <section>
                    <div className="flex items-center gap-xs text-primary mb-xs">
                      <span className="material-symbols-outlined text-[20px]">eco</span>
                      <h3 className="font-label-md text-label-md uppercase tracking-widest">Việt Nam hóa</h3>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface leading-relaxed border-l-2 border-outline-variant pl-md italic">
                      "{travelData[selectedPlace].transformation}"
                    </p>
                  </section>
                </div>
                <button onClick={() => setSelectedPlace(null)} className="mt-xl w-full py-md border border-primary text-primary font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-all duration-300 rounded-lg">
                  Đóng chi tiết
                </button>
              </>
            ) : (
              <div className="text-center">
                <span className="material-symbols-outlined text-primary text-[48px] mb-md">public</span>
                <p className="font-body-lg text-body-lg italic">Vui lòng chọn một điểm trên bản đồ để khám phá câu chuyện...</p>
              </div>
            )}
          </div>
        </aside>
      </main>
    </div>
  );
}
