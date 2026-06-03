import { useState } from 'react';
import { Link } from 'react-router-dom';
import digitalAgeImg from '../assets/digital_age_hcm.png';

const quotes = [
  "Văn hóa soi đường cho quốc dân đi.",
  "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người.",
  "Văn hóa nghệ thuật cũng là một mặt trận. Anh chị em là chiến sĩ trên mặt trận ấy.",
  "Muốn xây dựng chủ nghĩa xã hội, trước hết cần có những con người xã hội chủ nghĩa.",
  "Sức mạnh của dân tộc chủ yếu là ở sự đoàn kết và văn hoá."
];

export default function Home() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  // States for Digital Book
  const [activePoint, setActivePoint] = useState('dongluc'); // 'dongluc' | 'muctieu' | 'doisongmoi'
  const [digitalAspect, setDigitalAspect] = useState(null); // null | 'tri' | 'duc' | 'the' | 'my'
  const [showDigitalAge, setShowDigitalAge] = useState(false);
  const [activeLH, setActiveLH] = useState(null); // null | 1 | 2 | 3 | 4 | 5

  // Quiz states
  const [quizQ1, setQuizQ1] = useState(null); // null | 'A' | 'B'
  const [quizQ2, setQuizQ2] = useState(null); // null | 'A' | 'B'

  // Flip states for open questions in 1.1
  const [flippedQ1, setFlippedQ1] = useState(false);
  const [flippedQ2, setFlippedQ2] = useState(false);

  const handleRefreshQuote = () => {
    setOpacity(0);
    setTimeout(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
      setOpacity(1);
    }, 300);
  };

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden lotus-bg">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30">
        <nav className="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto">
          <Link to="/" className="font-display-md text-display-md text-primary tracking-tight">Ký Ức Văn Hóa</Link>
          <div className="hidden md:flex items-center gap-lg">
            <Link className="text-primary border-b-2 border-primary pb-1 font-bold font-body-md text-body-md" to="/">Trang chủ</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" to="/map">Bản đồ số</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" to="/mailbox">Hộp thư ký ức</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" to="/quiz">Trắc nghiệm</Link>
          </div>
          <div className="flex items-center gap-md">
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">search</span>
            <div className="w-4"></div> {/* Empty spacer to maintain layout balance without the login button */}
          </div>
        </nav>
      </header>
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" alt="Hero background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZHFUnZhziLFYiN9nmpteewpwPw0h8cC9qnoda2dhRJ_DtnoDNe0moB3_uuOf3oJ9KbVVVq9fy587NTtFiitySQ5MqECXIx4h5Csbd3_gSZp5qilbey0CYbDI6w1PSl3xVHDNkg9EOJ-NgFEME-I0UKPKDB3EEbPPb8TLqp7clJDhZnyLnjLSXkmHD3skG2ElkoZVAnAOd3NAVEw8GIwF1k2LcY0MK6imb9HUuQRrrplUZAzBl86lsjD6KW_9fW3wA9KRK3aEppjaZ" />
            <div className="absolute inset-0 hero-gradient"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full">
            <div className="max-w-2xl">
              <span className="inline-block px-md py-xs bg-primary/10 text-primary font-label-md text-label-md rounded-full mb-md">Dự án Di sản Kỹ thuật số</span>
              <h1 className="font-display-lg text-display-lg text-on-surface mb-md">
                Tư tưởng Hồ Chí Minh về Văn hóa - <span className="text-primary italic font-medium">Ngọn đuốc soi đường</span> cho thế hệ trẻ
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg leading-relaxed">
                Khám phá chiều sâu di sản tư tưởng của Bác, nơi truyền thống hòa quyện cùng hiện đại để định hình bản sắc Việt Nam trong kỷ nguyên mới.
              </p>
              <div className="flex flex-wrap gap-md">
                <Link to="/map" className="bg-primary text-on-primary px-xl py-md font-label-md text-label-md rounded-lg flex items-center gap-sm hover:shadow-lg transition-all">
                  Bắt đầu hành trình <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <a href="#digital-book" className="border border-primary text-primary px-xl py-md font-label-md text-label-md rounded-lg hover:bg-primary/5 transition-all flex items-center justify-center">
                  Tìm hiểu thêm
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Widget: Hộp thư ký ức */}
        <section className="py-xl bg-surface-container-low relative">
          <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
            <div className="order-2 md:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 border border-outline-variant/50 rounded-xl transition-transform duration-500 group-hover:scale-105"></div>
                <div className="bg-surface border border-outline-variant p-lg rounded-lg shadow-sm relative overflow-hidden">
                  <div className="paper-texture absolute inset-0 opacity-20 pointer-events-none"></div>
                  <div className="flex justify-between items-start mb-lg">
                    <span className="material-symbols-outlined text-primary text-4xl">format_quote</span>
                    <div className="flex gap-xs">
                      <div className="w-2 h-2 rounded-full bg-primary/20"></div>
                      <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                  </div>
                  <blockquote className="mb-xl min-h-[120px]">
                    <p className="font-display-md text-display-md text-on-surface leading-tight italic" style={{ opacity, transition: 'opacity 0.3s ease-in-out' }}>
                      "{quotes[quoteIndex]}"
                    </p>
                  </blockquote>
                  <div className="flex items-center justify-between pt-lg border-t border-outline-variant/30 relative z-10">
                    <div className="flex items-center gap-sm">
                      <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                        <span className="material-symbols-outlined text-on-secondary-container">history_edu</span>
                      </div>
                      <div>
                        <p className="font-label-md text-label-md text-on-surface">Hồ Chí Minh</p>
                        <p className="font-caption text-caption text-on-surface-variant">Danh ngôn Văn hóa</p>
                      </div>
                    </div>
                    <div className="flex gap-sm">
                      <button className="p-base rounded-full border border-outline hover:bg-surface-variant transition-colors" title="Lưu ảnh card">
                        <span className="material-symbols-outlined text-on-surface-variant">download</span>
                      </button>
                      <button className="p-base rounded-full border border-outline hover:bg-surface-variant transition-colors" title="Chia sẻ">
                        <span className="material-symbols-outlined text-on-surface-variant">share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-md relative z-10">
              <h2 className="font-display-md text-display-md text-primary">Hộp thư Ký ức</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Mỗi lần mở hộp thư là một lời nhắn nhủ từ quá khứ mang hơi thở thời đại. Những đúc kết tinh túy về vai trò của văn hóa đối với sự sinh tồn và phát triển của dân tộc.
              </p>
              <button onClick={handleRefreshQuote} className="flex items-center gap-sm text-primary font-label-md text-label-md group">
                <span className="material-symbols-outlined group-hover:rotate-180 transition-transform duration-500">refresh</span>
                Khám phá câu nói khác
              </button>
            </div>
          </div>
        </section>

        {/* Section: Lý thuyết (Digital Book) */}
        <section id="digital-book" className="py-xl max-w-container-max mx-auto px-gutter scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-xl">
            <span className="font-label-md text-label-md text-primary uppercase tracking-widest block mb-xs">I. Digital Book (Lý thuyết)</span>
            <h2 className="font-display-md text-display-md text-on-surface mb-base">
              1. Tư tưởng HCM về Văn hóa - Ngọn đuốc soi đường cho thế hệ trẻ
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-md"></div>
            <p className="font-body-md text-body-md text-on-surface-variant italic">
              "Khám phá chiều sâu di sản tư tưởng của Bác, nơi truyền thống hòa quyện cùng hiện đại để định hình bản sắc Việt Nam trong kỷ nguyên mới."
            </p>
            <p className="font-body-sm text-body-sm text-secondary-variant mt-xs">
              Hệ thống tư tưởng toàn diện, định hướng xây dựng một nền văn hóa mới mang đậm bản sắc dân tộc và tinh thần sâu sắc. (Nhấp chọn các luận điểm cốt lõi dưới đây để khám phá chi tiết)
            </p>
          </div>

          {/* Core 3 Points Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xl">
            {/* Card 1 */}
            <div
              onClick={() => setActivePoint('dongluc')}
              className={`group relative bg-surface border p-lg rounded-lg transition-all duration-300 cursor-pointer ${
                activePoint === 'dongluc'
                  ? 'border-primary shadow-lg bg-surface-container-low ring-1 ring-primary/20 scale-102'
                  : 'border-outline-variant hover:border-primary hover:shadow-md'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-md transition-colors ${
                activePoint === 'dongluc' ? 'bg-primary text-on-primary' : 'bg-primary/5 text-primary group-hover:bg-primary group-hover:text-on-primary'
              }`}>
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-sm flex items-center gap-xs justify-between">
                <span>1.1. Văn hóa là động lực</span>
                {activePoint === 'dongluc' && <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                Văn hóa không đứng ngoài mà ở trong kinh tế và chính trị. Nó là sức mạnh tinh thần khơi dậy tinh thần yêu nước và sáng tạo.
              </p>
              <span className="inline-flex items-center gap-xs font-label-md text-label-md text-primary font-bold">
                {activePoint === 'dongluc' ? 'Đang đọc chương này' : 'Bấm để đọc ngay'}
                <span className={`material-symbols-outlined text-sm transition-transform duration-300 ${activePoint === 'dongluc' ? 'rotate-90' : 'group-hover:translate-x-1'}`}>
                  arrow_right_alt
                </span>
              </span>
            </div>

            {/* Card 2 */}
            <div
              onClick={() => setActivePoint('muctieu')}
              className={`group relative bg-surface border p-lg rounded-lg transition-all duration-300 cursor-pointer ${
                activePoint === 'muctieu'
                  ? 'border-primary shadow-lg bg-surface-container-low ring-1 ring-primary/20 scale-102'
                  : 'border-outline-variant hover:border-primary hover:shadow-md'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-md transition-colors ${
                activePoint === 'muctieu' ? 'bg-primary text-on-primary' : 'bg-primary/5 text-primary group-hover:bg-primary group-hover:text-on-primary'
              }`}>
                <span className="material-symbols-outlined">ads_click</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-sm flex items-center gap-xs justify-between">
                <span>1.2. Văn hóa là mục tiêu</span>
                {activePoint === 'muctieu' && <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                Xây dựng một xã hội văn minh, nơi con người phát triển toàn diện về Đức, Trí, Thể, Mỹ là đích đến cuối cùng của cách mạng.
              </p>
              <span className="inline-flex items-center gap-xs font-label-md text-label-md text-primary font-bold">
                {activePoint === 'muctieu' ? 'Đang đọc chương này' : 'Bấm để đọc ngay'}
                <span className={`material-symbols-outlined text-sm transition-transform duration-300 ${activePoint === 'muctieu' ? 'rotate-90' : 'group-hover:translate-x-1'}`}>
                  arrow_right_alt
                </span>
              </span>
            </div>

            {/* Card 3 */}
            <div
              onClick={() => setActivePoint('doisongmoi')}
              className={`group relative bg-surface border p-lg rounded-lg transition-all duration-300 cursor-pointer ${
                activePoint === 'doisongmoi'
                  ? 'border-primary shadow-lg bg-surface-container-low ring-1 ring-primary/20 scale-102'
                  : 'border-outline-variant hover:border-primary hover:shadow-md'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-md transition-colors ${
                activePoint === 'doisongmoi' ? 'bg-primary text-on-primary' : 'bg-primary/5 text-primary group-hover:bg-primary group-hover:text-on-primary'
              }`}>
                <span className="material-symbols-outlined">eco</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-sm flex items-center gap-xs justify-between">
                <span>1.3. Đời sống văn hóa mới</span>
                {activePoint === 'doisongmoi' && <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                Cải tạo những thói quen cũ lạc hậu, xây dựng lối sống khoa học, cần kiệm, liêm chính để làm giàu vốn quý dân tộc.
              </p>
              <span className="inline-flex items-center gap-xs font-label-md text-label-md text-primary font-bold">
                {activePoint === 'doisongmoi' ? 'Đang đọc chương này' : 'Bấm để đọc ngay'}
                <span className={`material-symbols-outlined text-sm transition-transform duration-300 ${activePoint === 'doisongmoi' ? 'rotate-90' : 'group-hover:translate-x-1'}`}>
                  arrow_right_alt
                </span>
              </span>
            </div>
          </div>

          {/* Interactive Digital Book Display (Paper Texture Container) */}
          <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl shadow-xl overflow-hidden relative animate-bloom">
            <div className="absolute top-4 right-4 flex gap-xs">
              <div className="w-3 h-3 rounded-full bg-primary/20"></div>
              <div className="w-3 h-3 rounded-full bg-tertiary/20"></div>
              <div className="w-3 h-3 rounded-full bg-outline-variant"></div>
            </div>

            <div className="p-md md:p-xl">
              {/* Point 1.1: Văn hóa là động lực */}
              {activePoint === 'dongluc' && (
                <div className="space-y-lg">
                  <div className="border-b border-outline-variant/30 pb-md">
                    <span className="text-primary font-label-md text-label-md uppercase tracking-wider block mb-xs">Luận điểm 1.1</span>
                    <h3 className="font-display-md text-display-md text-primary mb-sm">Văn hóa là động lực phát triển kinh tế - xã hội</h3>
                    <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed border-l-4 border-primary/50 pl-md italic">
                      "Văn hóa không đứng ngoài mà ở trong kinh tế và chính trị. Nó là sức mạnh tinh thần khơi dậy tinh thần yêu nước và sáng tạo."
                    </p>
                  </div>

                  {/* 4 Pillars of Internal Strength */}
                  <div>
                    <h4 className="font-headline-md text-headline-md text-on-surface mb-md flex items-center gap-xs">
                      <span className="material-symbols-outlined text-primary">diversity_1</span>
                      Văn hóa là sức mạnh nội sinh của dân tộc
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                      <div className="bg-surface-container-low p-md border border-outline-variant/30 rounded-lg hover:border-primary/50 transition-colors">
                        <h5 className="font-label-md text-label-md text-primary font-bold uppercase mb-xs">1. Nền tảng tinh thần xã hội</h5>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                          Văn hóa là nền tảng tinh thần vững chắc của xã hội. Nó vừa là mục tiêu, vừa là động lực thúc đẩy kinh tế - xã hội phát triển, tạo nên bản sắc, ý chí kiên cường và sức sống bền bỉ của một quốc gia.
                        </p>
                      </div>

                      <div className="bg-surface-container-low p-md border border-outline-variant/30 rounded-lg hover:border-primary/50 transition-colors">
                        <h5 className="font-label-md text-label-md text-primary font-bold uppercase mb-xs">2. Không tách rời Kinh tế & Chính trị</h5>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                          Hồ Chí Minh khẳng định: <span className="italic">"Văn hóa, nghệ thuật cũng như mọi hoạt động khác, không thể đứng ngoài, mà phải ở trong kinh tế và chính trị."</span> Văn hóa tác động trực tiếp đến cách con người lao động, quản lý và hành xử. Kinh tế muốn bền vững cần có trách nhiệm xã hội và đạo đức làm nền móng.
                        </p>
                      </div>

                      <div className="bg-surface-container-low p-md border border-outline-variant/30 rounded-lg hover:border-primary/50 transition-colors">
                        <h5 className="font-label-md text-label-md text-primary font-bold uppercase mb-xs">3. Khơi dậy lòng yêu nước & Tự cường</h5>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                          Nền văn hóa Việt Nam trường tồn nhờ nuôi dưỡng tinh thần đoàn kết sâu sắc, lòng yêu nước nồng nàn, khát vọng độc lập, tự do và ý chí tự lực tự cường vững vàng qua nhiều thế hệ.
                        </p>
                      </div>

                      <div className="bg-surface-container-low p-md border border-outline-variant/30 rounded-lg hover:border-primary/50 transition-colors">
                        <h5 className="font-label-md text-label-md text-primary font-bold uppercase mb-xs">4. Thúc đẩy sáng tạo & Con người</h5>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                          Văn hóa định hình và phát triển con người toàn diện có tri thức rộng mở, đạo đức chuẩn mực và ý thức trách nhiệm. Bác Hồ luôn coi con người vừa là chủ thể sáng tạo văn hóa, vừa là động lực quyết định thúc đẩy sự tiến bộ xã hội.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Golden Quote Block */}
                  <div className="bg-primary/5 border-y-2 border-primary/30 py-lg px-md text-center my-lg relative overflow-hidden rounded-xl">
                    <div className="absolute top-1/2 left-4 -translate-y-1/2 opacity-5 pointer-events-none">
                      <span className="material-symbols-outlined text-[96px] text-primary">gavel</span>
                    </div>
                    <span className="material-symbols-outlined text-primary text-4xl block mb-sm">format_quote</span>
                    <blockquote className="font-display-lg text-display-md text-primary italic leading-tight max-w-2xl mx-auto">
                      "Văn hóa phải soi đường cho quốc dân đi."
                    </blockquote>
                    <p className="font-caption text-caption text-secondary mt-base uppercase tracking-widest">- Hồ Chí Minh</p>
                  </div>

                  {/* Modern Connection & Reflective Questions */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg pt-md">
                    <div className="space-y-md">
                      <h4 className="font-headline-md text-headline-md text-tertiary flex items-center gap-xs">
                        <span className="material-symbols-outlined">link</span>
                        Liên hệ hiện đại
                      </h4>
                      
                      <div className="space-y-sm">
                        <div className="bg-secondary-container/40 p-md border-l-4 border-tertiary rounded-r-lg">
                          <h5 className="font-label-md text-label-md text-tertiary font-bold mb-xs">LH1: Sức mạnh nội sinh thời đại mới</h5>
                          <p className="font-body-md text-body-md text-on-surface-variant">
                            Một dân tộc mạnh không chỉ mạnh về kinh tế mà còn ở ý thức xã hội, đạo đức cộng đồng và bản sắc văn hóa đặc trưng. 
                            <br />
                            <span className="text-sm font-semibold text-primary block mt-xs">
                              • Ví dụ thực tế: Nhật Bản sau chiến tranh vươn lên thần kỳ nhờ kỷ luật sắt và ý thức tập thể cao độ. Việt Nam kiên cường vượt đại dịch COVID-19 nhờ phát huy cao độ tinh thần tương thân tương ái, đoàn kết dân tộc.
                            </span>
                          </p>
                        </div>

                        <div className="bg-secondary-container/40 p-md border-l-4 border-tertiary rounded-r-lg">
                          <h5 className="font-label-md text-label-md text-tertiary font-bold mb-xs">LH2: Nguy cơ suy thoái ứng xử ở giới trẻ</h5>
                          <p className="font-body-md text-body-md text-on-surface-variant">
                            Nếu thế hệ trẻ đánh mất văn hóa ứng xử văn minh và tinh thần dân tộc sâu sắc, sự phát triển chung của toàn xã hội sẽ lung lay, khó có thể bền vững.
                            <br />
                            <span className="text-sm font-semibold text-primary block mt-xs">
                              • Ví dụ báo động: Vấn nạn bạo lực mạng, phát ngôn thiếu chuẩn mực trên MXH; xu hướng sính ngoại, thờ ơ với cội nguồn văn hóa truyền thống dân tộc; thiếu ý thức trách nhiệm với cộng đồng và môi trường sống.
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-primary/5 p-lg rounded-xl border border-primary/10 flex flex-col justify-center">
                      <h4 className="font-headline-md text-headline-md text-primary mb-md flex items-center gap-xs">
                        <span className="material-symbols-outlined">psychology</span>
                        Góc suy ngẫm & Câu hỏi mở
                      </h4>
                      <div className="space-y-md">
                        {/* Card 1 */}
                        <div className="perspective-1000 w-full h-[350px]">
                          <div className={`relative w-full h-full duration-700 preserve-3d transition-transform ${flippedQ1 ? 'rotate-y-180' : ''}`}>
                            
                            {/* Card 1 Front */}
                            <div className="absolute inset-0 w-full h-full backface-hidden bg-surface p-md rounded-lg border border-outline-variant/40 shadow-xs hover:border-primary hover:shadow-md transition-all duration-300 flex flex-col justify-between group/card">
                              <div>
                                <div className="flex justify-between items-center text-primary font-bold mb-xs">
                                  <span className="font-body-md text-label-md flex items-center gap-xs">
                                    <span className="material-symbols-outlined text-sm">psychology</span>
                                    Câu hỏi 1
                                  </span>
                                  <span className="material-symbols-outlined text-sm text-outline opacity-40 group-hover/card:opacity-100 group-hover/card:text-primary transition-opacity">visibility</span>
                                </div>
                                <p className="font-body-md text-body-md text-on-surface leading-relaxed mt-sm font-serif">
                                  Một đất nước có thể cực kỳ giàu có về mặt vật chất kinh tế, nhưng con người lại thiếu thốn tinh thần trách nhiệm và suy thoái đạo đức, thì liệu đất nước đó có thể phát triển phồn vinh bền vững được hay không?
                                </p>
                              </div>
                              <button
                                onClick={() => setFlippedQ1(true)}
                                className="w-full mt-sm text-xs text-primary font-semibold py-sm rounded-lg bg-primary/5 hover:bg-primary/10 border border-primary/20 hover:border-primary/40 transition-all flex items-center justify-center gap-xs cursor-pointer"
                              >
                                <span>Xem gợi ý & định hướng suy ngẫm →</span>
                              </button>
                            </div>

                            {/* Card 1 Back */}
                            <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-surface border-2 border-primary/30 p-md rounded-lg shadow-md flex flex-col justify-between overflow-hidden paper-texture">
                              <div className="flex justify-between items-center border-b border-outline-variant/30 pb-xs">
                                <span className="font-body-md text-label-md text-primary font-bold flex items-center gap-xs">
                                  <span className="material-symbols-outlined text-sm">lightbulb</span>
                                  Gợi ý Suy ngẫm - Q1
                                </span>
                                <button
                                  onClick={() => setFlippedQ1(false)}
                                  className="w-7 h-7 rounded-full border border-outline-variant/50 hover:border-primary flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                                  title="Quay lại câu hỏi"
                                >
                                  <span className="material-symbols-outlined text-xs">undo</span>
                                </button>
                              </div>

                              <div className="flex-1 overflow-y-auto custom-scrollbar my-sm space-y-xs pr-xs text-[12px] text-on-surface-variant leading-relaxed text-left">
                                <div className="bg-secondary-container/40 p-xs px-sm rounded border-l-2 border-primary">
                                  <span className="font-bold text-primary block mb-0.5">💡 Bản chất của Sự phát triển:</span>
                                  <span>Kinh tế được ví như bộ khung xương cung cấp nền tảng vật chất, còn văn hóa đạo đức chính là sinh khí, là linh hồn của xã hội. Nếu linh hồn rệu rã, lòng tin xã hội bị đổ vỡ do tham lam và ích kỷ, hệ thống kinh tế cũng sớm muộn sẽ sụp đổ từ bên trong.</span>
                                </div>
                                <div className="bg-secondary-container/40 p-xs px-sm rounded border-l-2 border-primary">
                                  <span className="font-bold text-primary block mb-0.5">💡 Lời dạy cốt lõi của Bác:</span>
                                  <span>Hồ Chí Minh từng khuyên răn: <span className="italic">"Có tài mà không có đức là người vô dụng..."</span>. Việc chấn hưng văn hóa, nuôi dưỡng tinh thần trách nhiệm luôn phải đồng hành mật thiết với xây dựng và phát triển kinh tế.</span>
                                </div>
                                <div className="bg-secondary-container/40 p-xs px-sm rounded border-l-2 border-primary">
                                  <span className="font-bold text-primary block mb-0.5">💡 Định hướng hành động Gen Z:</span>
                                  <span>Mỗi bạn trẻ cần rèn luyện ý thức thượng tôn luật pháp, sống trung thực, yêu thương đồng bào và thực hành lối sống tử tế từ những hành động giản đơn nhất hằng ngày (như tắt điện tiết kiệm, giữ vệ sinh, nhường nhịn).</span>
                                </div>
                              </div>

                              <button
                                onClick={() => setFlippedQ1(false)}
                                className="w-full text-xs text-primary font-semibold py-sm rounded-lg bg-primary/5 hover:bg-primary/10 border border-primary/20 transition-all flex items-center justify-center gap-xs cursor-pointer"
                              >
                                <span>Quay lại câu hỏi ↺</span>
                              </button>
                            </div>

                          </div>
                        </div>

                        {/* Card 2 */}
                        <div className="perspective-1000 w-full h-[350px]">
                          <div className={`relative w-full h-full duration-700 preserve-3d transition-transform ${flippedQ2 ? 'rotate-y-180' : ''}`}>
                            
                            {/* Card 2 Front */}
                            <div className="absolute inset-0 w-full h-full backface-hidden bg-surface p-md rounded-lg border border-outline-variant/40 shadow-xs hover:border-primary hover:shadow-md transition-all duration-300 flex flex-col justify-between group/card">
                              <div>
                                <div className="flex justify-between items-center text-primary font-bold mb-xs">
                                  <span className="font-body-md text-label-md flex items-center gap-xs">
                                    <span className="material-symbols-outlined text-sm">psychology</span>
                                    Câu hỏi 2
                                  </span>
                                  <span className="material-symbols-outlined text-sm text-outline opacity-40 group-hover/card:opacity-100 group-hover/card:text-primary transition-opacity">visibility</span>
                                </div>
                                <p className="font-body-md text-body-md text-on-surface leading-relaxed mt-sm font-serif">
                                  Trong kỷ nguyên trí tuệ nhân tạo (AI) phát triển bão táp và toàn cầu hóa mạnh mẽ ngày nay, làm thế nào để giới trẻ chúng ta hội nhập quốc tế toàn diện mà vẫn giữ vững và tỏa sáng bản sắc văn hóa Việt Nam độc bản?
                                </p>
                              </div>
                              <button
                                onClick={() => setFlippedQ2(true)}
                                className="w-full mt-sm text-xs text-primary font-semibold py-sm rounded-lg bg-primary/5 hover:bg-primary/10 border border-primary/20 hover:border-primary/40 transition-all flex items-center justify-center gap-xs cursor-pointer"
                              >
                                <span>Xem gợi ý & định hướng suy ngẫm →</span>
                              </button>
                            </div>

                            {/* Card 2 Back */}
                            <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-surface border-2 border-primary/30 p-md rounded-lg shadow-md flex flex-col justify-between overflow-hidden paper-texture">
                              <div className="flex justify-between items-center border-b border-outline-variant/30 pb-xs">
                                <span className="font-body-md text-label-md text-primary font-bold flex items-center gap-xs">
                                  <span className="material-symbols-outlined text-sm">lightbulb</span>
                                  Gợi ý Suy ngẫm - Q2
                                </span>
                                <button
                                  onClick={() => setFlippedQ2(false)}
                                  className="w-7 h-7 rounded-full border border-outline-variant/50 hover:border-primary flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                                  title="Quay lại câu hỏi"
                                >
                                  <span className="material-symbols-outlined text-xs">undo</span>
                                </button>
                              </div>

                              <div className="flex-1 overflow-y-auto custom-scrollbar my-sm space-y-xs pr-xs text-[12px] text-on-surface-variant leading-relaxed text-left">
                                <div className="bg-secondary-container/40 p-xs px-sm rounded border-l-2 border-primary">
                                  <span className="font-bold text-primary block mb-0.5">💡 Nguyên tắc "Hòa nhập nhưng không hòa tan":</span>
                                  <span>Giới trẻ cần chủ động làm chủ các công cụ công nghệ mới nhất (AI, ChatGPT, khoa học dữ liệu...) để gia tăng tối đa sức mạnh tri thức cạnh tranh với bạn bè quốc tế, nhưng luôn dùng công nghệ như một chiếc cầu nối truyền tải và quảng bá vẻ đẹp cội nguồn bản sắc Việt.</span>
                                </div>
                                <div className="bg-secondary-container/40 p-xs px-sm rounded border-l-2 border-primary">
                                  <span className="font-bold text-primary block mb-0.5">💡 Gìn giữ cội nguồn tinh thần:</span>
                                  <span>Luôn kiêu hãnh tìm hiểu sâu sắc về lịch sử dân tộc đấu tranh kiên cường, trân trọng và bảo tồn tiếng Việt trong sáng, nâng niu kho tàng văn hóa dân gian (âm nhạc cổ truyền, trang phục, ẩm thực Việt độc đáo).</span>
                                </div>
                                <div className="bg-secondary-container/40 p-xs px-sm rounded border-l-2 border-primary">
                                  <span className="font-bold text-primary block mb-0.5">💡 Tinh thần chọn lọc thông thái:</span>
                                  <span>Học hỏi cởi mở tinh hoa tri thức nhân loại một cách có chọn lọc thông minh, kiên quyết phản bác các lối sống độc hại, thờ ơ hay các luồng văn hóa lai căng, phản tiến bộ trực tuyến.</span>
                                </div>
                              </div>

                              <button
                                onClick={() => setFlippedQ2(false)}
                                className="w-full text-xs text-primary font-semibold py-sm rounded-lg bg-primary/5 hover:bg-primary/10 border border-primary/20 transition-all flex items-center justify-center gap-xs cursor-pointer"
                              >
                                <span>Quay lại câu hỏi ↺</span>
                              </button>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Point 1.2: Văn hóa là mục tiêu */}
              {activePoint === 'muctieu' && (
                <div className="space-y-lg">
                  <div className="border-b border-outline-variant/30 pb-md">
                    <span className="text-primary font-label-md text-label-md uppercase tracking-wider block mb-xs">Luận điểm 1.2</span>
                    <h3 className="font-display-md text-display-md text-primary mb-sm">Văn hóa là mục tiêu phát triển của con người</h3>
                    <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                      <span className="font-bold text-primary">Khái niệm cốt lõi:</span> Xây dựng một xã hội văn minh, tiến bộ, nơi mỗi con người được tạo điều kiện tối đa để phát triển toàn diện về <span className="font-bold text-primary">Đức, Trí, Thể, Mỹ</span> chính là mục tiêu, là đích đến cuối cùng của sự nghiệp cách mạng vĩ đại.
                    </p>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-sm">
                      Theo Hồ Chí Minh, mục tiêu cách mạng không chỉ dừng lại ở độc lập dân tộc, mà phải đi tới xây dựng một xã hội tự do, ấm no, hạnh phúc. Nơi mà đời sống vật chất lẫn tinh thần của người dân không ngừng được nâng cao, thực hiện đúng khát khao cháy bỏng của Người: <span className="italic">"ai cũng có cơm ăn áo mặc, ai cũng được học hành"</span>, lấy con người làm trung tâm cốt lõi của sự phát triển.
                    </p>
                  </div>

                  {/* Đức - Trí - Thể - Mỹ Interactive Block */}
                  <div>
                    <h4 className="font-headline-md text-headline-md text-on-surface mb-md">
                      Bốn mặt phát triển toàn diện của Con người
                    </h4>
                    <p className="font-caption text-caption text-secondary-variant mb-sm">Nhấp vào từng khối để xem định nghĩa giá trị kinh điển:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-sm">
                      <div
                        onClick={() => setDigitalAspect(digitalAspect === 'duc_classic' ? null : 'duc_classic')}
                        className={`p-md border rounded-lg text-center cursor-pointer transition-all duration-300 ${
                          digitalAspect === 'duc_classic' ? 'bg-primary text-on-primary border-primary shadow-md' : 'bg-surface hover:bg-surface-container border-outline-variant/60'
                        }`}
                      >
                        <span className="text-3xl block mb-xs">❤️</span>
                        <h5 className="font-label-md text-label-md font-bold uppercase">ĐỨC</h5>
                        {digitalAspect === 'duc_classic' && (
                          <p className="text-xs mt-sm text-on-primary leading-normal animate-bloom">
                            Đạo đức cách mạng, lòng nhân ái rộng mở, tính trung thực, liêm khiết và trách nhiệm xã hội cao cả.
                          </p>
                        )}
                      </div>

                      <div
                        onClick={() => setDigitalAspect(digitalAspect === 'tri_classic' ? null : 'tri_classic')}
                        className={`p-md border rounded-lg text-center cursor-pointer transition-all duration-300 ${
                          digitalAspect === 'tri_classic' ? 'bg-primary text-on-primary border-primary shadow-md' : 'bg-surface hover:bg-surface-container border-outline-variant/60'
                        }`}
                      >
                        <span className="text-3xl block mb-xs">🧠</span>
                        <h5 className="font-label-md text-label-md font-bold uppercase">TRÍ</h5>
                        {digitalAspect === 'tri_classic' && (
                          <p className="text-xs mt-sm text-on-primary leading-normal animate-bloom">
                            Tri thức vững vàng, năng lực tư duy nhạy bén, tinh thần khoa học hiện đại và sự tự học suốt đời.
                          </p>
                        )}
                      </div>

                      <div
                        onClick={() => setDigitalAspect(digitalAspect === 'the_classic' ? null : 'the_classic')}
                        className={`p-md border rounded-lg text-center cursor-pointer transition-all duration-300 ${
                          digitalAspect === 'the_classic' ? 'bg-primary text-on-primary border-primary shadow-md' : 'bg-surface hover:bg-surface-container border-outline-variant/60'
                        }`}
                      >
                        <span className="text-3xl block mb-xs">🏃</span>
                        <h5 className="font-label-md text-label-md font-bold uppercase">THỂ</h5>
                        {digitalAspect === 'the_classic' && (
                          <p className="text-xs mt-sm text-on-primary leading-normal animate-bloom">
                            Sức khỏe thể chất bền bỉ, thói quen thể thao rèn luyện lành mạnh và lối sống năng động, tích cực.
                          </p>
                        )}
                      </div>

                      <div
                        onClick={() => setDigitalAspect(digitalAspect === 'my_classic' ? null : 'my_classic')}
                        className={`p-md border rounded-lg text-center cursor-pointer transition-all duration-300 ${
                          digitalAspect === 'my_classic' ? 'bg-primary text-on-primary border-primary shadow-md' : 'bg-surface hover:bg-surface-container border-outline-variant/60'
                        }`}
                      >
                        <span className="text-3xl block mb-xs">🎨</span>
                        <h5 className="font-label-md text-label-md font-bold uppercase">MỸ</h5>
                        {digitalAspect === 'my_classic' && (
                          <p className="text-xs mt-sm text-on-primary leading-normal animate-bloom">
                            Đời sống tinh thần phong phú, thị hiếu thẩm mỹ văn minh và khả năng cảm thụ sâu sắc cái đẹp Chân-Thiện-Mỹ.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Classic Quote */}
                  <div className="bg-primary/5 border-y-2 border-primary/30 py-lg px-md text-center my-lg relative overflow-hidden rounded-xl">
                    <span className="material-symbols-outlined text-primary text-4xl block mb-sm">local_florist</span>
                    <blockquote className="font-display-lg text-display-md text-primary italic leading-tight max-w-2xl mx-auto">
                      "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người."
                    </blockquote>
                    <p className="font-caption text-caption text-secondary mt-base uppercase tracking-widest">- Hồ Chí Minh</p>
                  </div>

                  {/* SPECIAL INTERACTIVE WIDGET: Uncle Ho in the Digital Era */}
                  <div className="bg-surface-container border border-outline-variant/80 p-lg rounded-xl my-lg">
                    <div className="flex flex-col lg:flex-row gap-lg items-center">
                      <div className="flex-1 space-y-md">
                        <div className="flex items-center gap-sm">
                          <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
                          <h4 className="font-headline-md text-headline-md text-primary font-bold">
                            Nếu Hồ Chí Minh sống trong thời đại số?
                          </h4>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                          Tư tưởng lớn của Bác luôn mang hơi thở thời đại. Khi áp dụng các giá trị nhân văn Đức - Trí - Thể - Mỹ vào kỷ nguyên số 4.0 và trí tuệ nhân tạo (AI), chúng ta sẽ có những biểu hiện đột phá nào?
                        </p>
                        <p className="font-caption text-caption text-primary font-bold">Bấm chọn các mặt phát triển để xem chuyển đổi số của giới trẻ:</p>

                        <div className="grid grid-cols-2 gap-sm">
                          <button
                            onClick={() => { setDigitalAspect('tri'); setShowDigitalAge(true); }}
                            className={`p-sm font-label-md text-label-md rounded-lg flex items-center justify-center gap-xs transition-all ${
                              digitalAspect === 'tri' ? 'bg-primary text-on-primary shadow-md scale-102' : 'bg-surface hover:bg-surface-container-high border border-outline-variant text-on-surface'
                            }`}
                          >
                            <span>🧠 Trí</span>
                          </button>
                          <button
                            onClick={() => { setDigitalAspect('duc'); setShowDigitalAge(true); }}
                            className={`p-sm font-label-md text-label-md rounded-lg flex items-center justify-center gap-xs transition-all ${
                              digitalAspect === 'duc' ? 'bg-primary text-on-primary shadow-md scale-102' : 'bg-surface hover:bg-surface-container-high border border-outline-variant text-on-surface'
                            }`}
                          >
                            <span>❤️ Đức</span>
                          </button>
                          <button
                            onClick={() => { setDigitalAspect('the'); setShowDigitalAge(true); }}
                            className={`p-sm font-label-md text-label-md rounded-lg flex items-center justify-center gap-xs transition-all ${
                              digitalAspect === 'the' ? 'bg-primary text-on-primary shadow-md scale-102' : 'bg-surface hover:bg-surface-container-high border border-outline-variant text-on-surface'
                            }`}
                          >
                            <span>🏃 Thể</span>
                          </button>
                          <button
                            onClick={() => { setDigitalAspect('my'); setShowDigitalAge(true); }}
                            className={`p-sm font-label-md text-label-md rounded-lg flex items-center justify-center gap-xs transition-all ${
                              digitalAspect === 'my' ? 'bg-primary text-on-primary shadow-md scale-102' : 'bg-surface hover:bg-surface-container-high border border-outline-variant text-on-surface'
                            }`}
                          >
                            <span>🎨 Mỹ</span>
                          </button>
                        </div>

                        {/* Display message based on clicked digital aspect */}
                        {showDigitalAge && digitalAspect && ['tri', 'duc', 'the', 'my'].includes(digitalAspect) && (
                          <div className="bg-surface p-md rounded-lg border-l-4 border-primary shadow-sm animate-bloom mt-md">
                            {digitalAspect === 'tri' && (
                              <div>
                                <h5 className="font-label-md text-label-md text-primary font-bold uppercase mb-xs">🧠 Trí thời đại số</h5>
                                <p className="font-body-md text-body-md text-on-surface-variant font-medium">
                                  "Học tập suốt đời, chủ động tự học sâu sắc và làm chủ hoàn toàn các công cụ AI, công nghệ số để phục vụ lý tưởng tốt đẹp."
                                </p>
                              </div>
                            )}
                            {digitalAspect === 'duc' && (
                              <div>
                                <h5 className="font-label-md text-label-md text-primary font-bold uppercase mb-xs">❤️ Đức thời đại số</h5>
                                <p className="font-body-md text-body-md text-on-surface-variant font-medium">
                                  "Ứng xử cực kỳ văn minh, trách nhiệm trên không gian mạng xã hội, lên tiếng chống bắt nạt online và bài trừ tin giả tiêu cực."
                                </p>
                              </div>
                            )}
                            {digitalAspect === 'the' && (
                              <div>
                                <h5 className="font-label-md text-label-md text-primary font-bold uppercase mb-xs">🏃 Thể thời đại số</h5>
                                <p className="font-body-md text-body-md text-on-surface-variant font-medium">
                                  "Không chỉ khỏe mạnh về cơ bắp, mà luôn chú trọng chăm sóc rèn luyện sức khỏe tinh thần lành mạnh trước áp lực số hóa khổng lồ."
                                </p>
                              </div>
                            )}
                            {digitalAspect === 'my' && (
                              <div>
                                <h5 className="font-label-md text-label-md text-primary font-bold uppercase mb-xs">🎨 Mỹ thời đại số</h5>
                                <p className="font-body-md text-body-md text-on-surface-variant font-medium">
                                  "Xây dựng một đời sống tinh thần phong phú, lành mạnh trên mạng; tiếp nhận chủ động và chọn lọc thông minh các luồng văn hóa thế giới."
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      
                      {/* Premium AI Generated Image Display */}
                      <div className="w-full lg:w-72 flex-shrink-0">
                        <div className="relative group rounded-lg overflow-hidden border border-outline-variant shadow-lg bg-surface">
                          <img
                            alt="Hồ Chí Minh di sản số"
                            className="w-full h-auto aspect-square object-cover hover:scale-105 transition-transform duration-500"
                            src={digitalAgeImg}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent flex flex-col justify-end p-sm">
                            <span className="font-label-md text-label-md text-on-primary-container font-bold text-xs uppercase">Di sản trong kỷ nguyên số</span>
                            <p className="font-caption text-caption text-white/90 text-[11px] leading-tight mt-xs">
                              Sự giao thoa hoàn mỹ giữa đóa sen truyền thống kiêu hãnh và các tinh hoa công nghệ AI toàn cầu.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 5 Gen Z Accordion links */}
                  <div>
                    <h4 className="font-headline-md text-headline-md text-on-surface mb-md">
                      Tư tưởng "Trồng Người" và Kết Nối Gen Z thời đại 4.0
                    </h4>
                    <p className="font-caption text-caption text-secondary-variant mb-base">Nhấp vào từng tiêu đề (LH1 - LH5) để mở rộng bài học thực tiễn:</p>
                    <div className="space-y-sm">
                      {/* LH1 */}
                      <div className="border border-outline-variant/60 rounded-lg overflow-hidden bg-surface">
                        <div
                          onClick={() => setActiveLH(activeLH === 1 ? null : 1)}
                          className="flex justify-between items-center p-md cursor-pointer hover:bg-surface-container-low transition-colors"
                        >
                          <span className="font-body-md text-body-md text-primary font-bold">
                            LH1: "Trồng người" – Đầu tư dài hạn cho tương lai dân tộc
                          </span>
                          <span className="material-symbols-outlined transition-transform duration-300 text-primary">
                            {activeLH === 1 ? 'expand_less' : 'expand_more'}
                          </span>
                        </div>
                        {activeLH === 1 && (
                          <div className="p-md bg-surface-container-lowest border-t border-outline-variant/30 text-on-surface-variant font-body-md text-body-md space-y-sm animate-bloom">
                            <p>
                              Hồ Chí Minh đặt con người là vốn quý nhất của quốc gia. Muốn xây dựng quốc gia bền vững, việc đầu tiên cần chú trọng chính là giáo dục nâng tầm và bồi dưỡng chiều sâu thế hệ trẻ.
                            </p>
                            <p className="font-bold text-primary">⚡ Kết nối Gen Z:</p>
                            <ul className="list-disc pl-md space-y-xs">
                              <li>Không ngừng tự học, nâng cấp bản thân toàn diện trong thời đại bùng nổ AI.</li>
                              <li>Tích cực phát triển các kỹ năng mềm quan trọng bên cạnh kiến thức chuyên môn vững vàng.</li>
                              <li>Luôn cân bằng và chú trọng nâng niu sức khỏe thể chất lẫn tâm hồn.</li>
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* LH2 */}
                      <div className="border border-outline-variant/60 rounded-lg overflow-hidden bg-surface">
                        <div
                          onClick={() => setActiveLH(activeLH === 2 ? null : 2)}
                          className="flex justify-between items-center p-md cursor-pointer hover:bg-surface-container-low transition-colors"
                        >
                          <span className="font-body-md text-body-md text-primary font-bold">
                            LH2: Đạo đức – Nền móng vững chãi của một xã hội văn minh
                          </span>
                          <span className="material-symbols-outlined transition-transform duration-300 text-primary">
                            {activeLH === 2 ? 'expand_less' : 'expand_more'}
                          </span>
                        </div>
                        {activeLH === 2 && (
                          <div className="p-md bg-surface-container-lowest border-t border-outline-variant/30 text-on-surface-variant font-body-md text-body-md space-y-sm animate-bloom">
                            <p>
                              Đạo đức chính là "gốc rễ" sâu xa của nhân cách con người. Một xã hội văn minh thực sự không chỉ đòi hỏi những người tài giỏi vượt trội mà cốt yếu cần những người có phông văn hóa đạo đức tốt đẹp: Trung thực, Trách nhiệm, Yêu thương đồng loại, Cần, Kiệm, Liêm, Chính.
                            </p>
                            <p className="font-bold text-primary">🌐 Đối thoại Gen Z trong môi trường số:</p>
                            <ul className="list-disc pl-md space-y-xs">
                              <li>Ứng xử văn hóa chuẩn mực, tử tế trên mọi diễn đàn mạng xã hội.</li>
                              <li>Tuyệt đối không tiếp tay hoặc lan truyền những tin đồn vô căn cứ, tin giả hại người.</li>
                              <li>Tôn trọng sự khác biệt của người khác và tích cực chống bắt nạt, bạo lực mạng.</li>
                            </ul>
                            <div className="bg-primary/5 p-sm rounded border border-primary/20 mt-sm">
                              <p className="font-semibold text-primary">❓ Câu hỏi mở suy ngẫm:</p>
                              <p className="italic">Một người vô cùng tài giỏi nhưng lại thiếu thốn tinh thần trách nhiệm và lòng trung thực liệu có thể coi là thành công thực sự hay không?</p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* LH3 */}
                      <div className="border border-outline-variant/60 rounded-lg overflow-hidden bg-surface">
                        <div
                          onClick={() => setActiveLH(activeLH === 3 ? null : 3)}
                          className="flex justify-between items-center p-md cursor-pointer hover:bg-surface-container-low transition-colors"
                        >
                          <span className="font-body-md text-body-md text-primary font-bold">
                            LH3: Giáo dục – Chìa khóa vàng khai mở bản thân
                          </span>
                          <span className="material-symbols-outlined transition-transform duration-300 text-primary">
                            {activeLH === 3 ? 'expand_less' : 'expand_more'}
                          </span>
                        </div>
                        {activeLH === 3 && (
                          <div className="p-md bg-surface-container-lowest border-t border-outline-variant/30 text-on-surface-variant font-body-md text-body-md space-y-sm animate-bloom">
                            <p>
                              Bác Hồ đề cao dân trí và khao khát: "Ai cũng được học hành." Giáo dục là nấc thang mở rộng tri thức, nâng tầm năng lực lao động sáng tạo, bồi đắp nhân cách tử tế và kiến tạo cơ hội phát triển công bằng cho toàn dân.
                            </p>
                            <p className="font-bold text-primary">⚡ Kết nối Gen Z:</p>
                            <ul className="list-disc pl-md space-y-xs">
                              <li>Định hình tư duy học tập suốt đời, chủ động nghiên cứu rộng.</li>
                              <li>Rèn luyện năng lực tự học bền bỉ, làm chủ kỹ năng số và các giải pháp AI tiên phong để làm chủ tương lai.</li>
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* LH4 */}
                      <div className="border border-outline-variant/60 rounded-lg overflow-hidden bg-surface">
                        <div
                          onClick={() => setActiveLH(activeLH === 4 ? null : 4)}
                          className="flex justify-between items-center p-md cursor-pointer hover:bg-surface-container-low transition-colors"
                        >
                          <span className="font-body-md text-body-md text-primary font-bold">
                            LH4: Văn hóa đời sống – Khởi nguồn từ những hành động nhỏ nhặt
                          </span>
                          <span className="material-symbols-outlined transition-transform duration-300 text-primary">
                            {activeLH === 4 ? 'expand_less' : 'expand_more'}
                          </span>
                        </div>
                        {activeLH === 4 && (
                          <div className="p-md bg-surface-container-lowest border-t border-outline-variant/30 text-on-surface-variant font-body-md text-body-md space-y-sm animate-bloom">
                            <p>
                              Xây dựng văn hóa không nằm ở những khẩu hiệu vĩ mô xa vời mà thể hiện rõ nét ngay trong cách ứng xử, lối sống sinh hoạt nhỏ nhặt hàng ngày của mỗi cá nhân: biết sống vì cộng đồng, tôn trọng người khác, tiết kiệm, kỷ luật.
                            </p>
                            <p className="font-bold text-primary">☘️ Lối sống văn minh Gen Z ngày nay:</p>
                            <ul className="list-disc pl-md space-y-xs">
                              <li>Văn hóa xếp hàng quy củ và tự giác chấp hành an toàn giao thông.</li>
                              <li>Văn hóa phát ngôn lịch thiệp trên mạng xã hội; có ý thức cao độ bảo vệ môi trường, giảm rác thải nhựa.</li>
                            </ul>
                            <div className="bg-primary/5 p-sm rounded border border-primary/20 mt-sm">
                              <p className="font-semibold text-primary">❓ Câu hỏi mở suy ngẫm:</p>
                              <p className="italic">Bạn có tin rằng mình đang góp phần kiến tạo một xã hội văn minh vượt bậc từ chính những thói quen hành động nhỏ bé tử tế mỗi ngày không?</p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* LH5 */}
                      <div className="border border-outline-variant/60 rounded-lg overflow-hidden bg-surface">
                        <div
                          onClick={() => setActiveLH(activeLH === 5 ? null : 5)}
                          className="flex justify-between items-center p-md cursor-pointer hover:bg-surface-container-low transition-colors"
                        >
                          <span className="font-body-md text-body-md text-primary font-bold">
                            LH5: Hạnh phúc đích thực của Con người là đích đến sau cùng
                          </span>
                          <span className="material-symbols-outlined transition-transform duration-300 text-primary">
                            {activeLH === 5 ? 'expand_less' : 'expand_more'}
                          </span>
                        </div>
                        {activeLH === 5 && (
                          <div className="p-md bg-surface-container-lowest border-t border-outline-variant/30 text-on-surface-variant font-body-md text-body-md space-y-sm animate-bloom">
                            <p>
                              Bác Hồ từng nhấn mạnh nền độc lập tự do chỉ thực sự trọn vẹn và có ý nghĩa thiêng liêng khi mang lại cho toàn dân cuộc sống cơm no áo ấm, bình yên và hạnh phúc trọn vẹn. Con người chính là mục tiêu phụng sự sau cùng của cách mạng.
                            </p>
                            <p className="font-bold text-primary">⚡ Trải nghiệm Hạnh phúc Gen Z hiện đại:</p>
                            <p>
                              Trong vòng xoay áp lực xã hội hiện đại, hạnh phúc đích thực không chỉ giới hạn ở tiền tài hay thành công vật chất, mà cốt yếu nằm ở:
                            </p>
                            <ul className="list-disc pl-md space-y-xs">
                              <li>Sức khỏe tâm hồn thư thái, bình yên.</li>
                              <li>Sự kết nối chân thành từ các mối quan hệ tích cực ngoài đời thực.</li>
                              <li>Sự cân bằng khôn ngoan giữa học tập, làm việc hăng say và nghỉ ngơi điều độ.</li>
                            </ul>
                            <div className="bg-primary/5 p-sm rounded border border-primary/20 mt-sm">
                              <p className="font-semibold text-primary">❓ Câu hỏi mở suy ngẫm:</p>
                              <p className="italic">Một xã hội sở hữu gia sản kinh tế cực kỳ giàu có nhưng trong lòng nhiều người lại cô đơn và trầm cảm nặng nề, thì liệu đó có thể gọi là một xã hội thực sự hạnh phúc?</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Point 1.3: Đời sống văn hóa mới */}
              {activePoint === 'doisongmoi' && (
                <div className="space-y-lg">
                  <div className="border-b border-outline-variant/30 pb-md">
                    <span className="text-primary font-label-md text-label-md uppercase tracking-wider block mb-xs">Luận điểm 1.3</span>
                    <h3 className="font-display-md text-display-md text-primary mb-sm">Xây dựng đời sống văn hóa mới văn minh, tiến bộ</h3>
                    <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                      <span className="font-bold text-primary">Khái quát luận điểm:</span> Theo Hồ Chí Minh, xây dựng đời sống văn hóa mới là cuộc cách mạng bền bỉ nhằm loại bỏ triệt để những hủ tục, thói quen lạc hậu cũ để bồi đắp, kiến tạo một lối sống khoa học, cần kiệm, liêm chính, phù hợp với sự tiến bộ của xã hội mới.
                    </p>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-sm">
                      <span className="font-bold">Vì sao cần thiết?</span> Độc lập chính trị phải song hành cùng sự văn minh tinh thần. Những thói hư tật xấu, hủ tục cổ hủ trì trệ sẽ níu chân xã hội phát triển. Muốn chấn hưng đất nước văn minh, quyết định đầu tiên là phải bồi dưỡng rèn luyện nên những con người văn minh thực thụ.
                    </p>
                  </div>

                  {/* Phê phán thói quen cũ */}
                  <div className="bg-error/5 p-md border-l-4 border-error rounded-r-lg">
                    <h4 className="font-label-md text-label-md text-error font-bold uppercase mb-sm flex items-center gap-xs">
                      <span className="material-symbols-outlined text-error">warning</span>
                      Phê phán những thói quen cũ lạc hậu
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-sm">
                      Bác Hồ thẳng thắn chỉ rõ và phê phán gay gắt các thói hư tật xấu kìm hãm nhân cách xã hội:
                    </p>
                    <div className="flex flex-wrap gap-xs">
                      <span className="bg-surface border border-error/20 text-error font-label-md text-xs px-sm py-xs rounded-full">🚫 Mê tín dị đoan</span>
                      <span className="bg-surface border border-error/20 text-error font-label-md text-xs px-sm py-xs rounded-full">🚫 Lười lao động</span>
                      <span className="bg-surface border border-error/20 text-error font-label-md text-xs px-sm py-xs rounded-full">🚫 Tham ô lãng phí</span>
                      <span className="bg-surface border border-error/20 text-error font-label-md text-xs px-sm py-xs rounded-full">🚫 Quan liêu hách dịch</span>
                      <span className="bg-surface border border-error/20 text-error font-label-md text-xs px-sm py-xs rounded-full">🚫 Xa hoa, hình thức trống rỗng</span>
                      <span className="bg-surface border border-error/20 text-error font-label-md text-xs px-sm py-xs rounded-full">🚫 Hủ tục cổ hủ trong sinh hoạt</span>
                    </div>
                    <p className="font-caption text-caption text-secondary mt-sm italic">
                      Ý nghĩa: Những tệ nạn, thói quen lạc hậu này trực tiếp tàn phá đạo đức con người và kìm hãm sự trỗi dậy của đất nước.
                    </p>
                  </div>

                  {/* Cần - Kiệm - Liêm - Chính */}
                  <div>
                    <h4 className="font-headline-md text-headline-md text-on-surface mb-md">
                      Bộ Tứ Đạo Đức Cốt Lõi: Cần - Kiệm - Liêm - Chính & Trách Nhiệm
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-sm">
                      <div className="bg-surface-container-low p-sm border border-outline-variant/40 rounded-lg hover:border-primary transition-all duration-300 text-center flex flex-col justify-between">
                        <div>
                          <span className="text-3xl block mb-xs">⚒️</span>
                          <h5 className="font-label-md text-label-md text-primary font-bold uppercase mb-xs">Cần</h5>
                        </div>
                        <p className="font-caption text-caption text-on-surface-variant">Siêng năng lao động, chủ động học tập không ngừng.</p>
                      </div>

                      <div className="bg-surface-container-low p-sm border border-outline-variant/40 rounded-lg hover:border-primary transition-all duration-300 text-center flex flex-col justify-between">
                        <div>
                          <span className="text-3xl block mb-xs">💰</span>
                          <h5 className="font-label-md text-label-md text-primary font-bold uppercase mb-xs">Kiệm</h5>
                        </div>
                        <p className="font-caption text-caption text-on-surface-variant">Tiết kiệm thời gian, tiền bạc, tài sản công, tránh xa lãng phí hình thức.</p>
                      </div>

                      <div className="bg-surface-container-low p-sm border border-outline-variant/40 rounded-lg hover:border-primary transition-all duration-300 text-center flex flex-col justify-between">
                        <div>
                          <span className="text-3xl block mb-xs">🤝</span>
                          <h5 className="font-label-md text-label-md text-primary font-bold uppercase mb-xs">Liêm</h5>
                        </div>
                        <p className="font-caption text-caption text-on-surface-variant">Trung thực tuyệt đối, giữ tâm hồn trong sạch, không tham lam vị ích.</p>
                      </div>

                      <div className="bg-surface-container-low p-sm border border-outline-variant/40 rounded-lg hover:border-primary transition-all duration-300 text-center flex flex-col justify-between">
                        <div>
                          <span className="text-3xl block mb-xs">⚖️</span>
                          <h5 className="font-label-md text-label-md text-primary font-bold uppercase mb-xs">Chính</h5>
                        </div>
                        <p className="font-caption text-caption text-on-surface-variant">Ngay thẳng, trượng nghĩa, bảo vệ công lý và tôn trọng sự thật.</p>
                      </div>

                      <div className="col-span-2 md:col-span-1 bg-primary/5 p-sm border border-primary/20 rounded-lg hover:border-primary transition-all duration-300 text-center flex flex-col justify-between">
                        <div>
                          <span className="text-3xl block mb-xs">🎯</span>
                          <h5 className="font-label-md text-label-md text-primary font-bold uppercase mb-xs">Trách nhiệm</h5>
                        </div>
                        <p className="font-caption text-caption text-on-surface-variant">Có trách nhiệm với bản thân, cộng đồng xã hội và tiền đồ Tổ quốc.</p>
                      </div>
                    </div>
                  </div>

                  {/* Reflective Open Issues */}
                  <div className="bg-surface p-md border border-outline-variant rounded-lg">
                    <p className="font-label-md text-label-md text-primary font-bold uppercase mb-xs">🚨 Các hiện tượng suy ngẫm thời hiện đại:</p>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-xs">
                      Hãy tự nhìn nhận xem chúng ta hay cộng đồng xung quanh có đang vô thức mắc phải:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-xs text-xs font-semibold text-secondary">
                      <span className="flex items-center gap-xs">❌ Flex (khoe khoang) quá mức?</span>
                      <span className="flex items-center gap-xs">❌ Chạy đua theo vật chất xa xỉ?</span>
                      <span className="flex items-center gap-xs">❌ Hành xử toxic trên mạng xã hội?</span>
                      <span className="flex items-center gap-xs">❌ Tiêu dùng vô thức theo trend?</span>
                      <span className="flex items-center gap-xs">❌ Hội chứng nghiện mạng xã hội?</span>
                      <span className="flex items-center gap-xs">❌ Thờ ơ, thiếu trách nhiệm với chung?</span>
                    </div>
                  </div>

                  {/* Classic Quote */}
                  <div className="bg-primary/5 border-y-2 border-primary/30 py-lg px-md text-center my-lg relative overflow-hidden rounded-xl">
                    <span className="material-symbols-outlined text-primary text-4xl block mb-sm">psychology_alt</span>
                    <blockquote className="font-display-lg text-display-md text-primary italic leading-tight max-w-2xl mx-auto">
                      "Đời sống mới không phải cái gì cũ cũng bỏ hết, không phải cái gì mới cũng làm theo."
                    </blockquote>
                    <p className="font-caption text-caption text-secondary mt-base uppercase tracking-widest">- Hồ Chí Minh</p>
                  </div>

                  {/* Modern Connection */}
                  <div className="bg-secondary-container/40 p-md border-l-4 border-tertiary rounded-r-lg">
                    <h5 className="font-label-md text-label-md text-tertiary font-bold mb-xs">Nếu Bác Hồ nhìn ngắm đời sống hiện nay?</h5>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Chắc chắn Bác sẽ vô cùng biểu dương và khuyến khích những lối sống đẹp đẽ mang hơi thở mới này:
                    </p>
                    <div className="flex flex-wrap gap-xs mt-xs text-xs font-semibold text-tertiary">
                      <span className="bg-surface px-sm py-xs rounded-full border border-tertiary/20">🌟 Tinh thần tự học suốt đời</span>
                      <span className="bg-surface px-sm py-xs rounded-full border border-tertiary/20">🌟 Phong trào tình nguyện tích cực vì cộng đồng</span>
                      <span className="bg-surface px-sm py-xs rounded-full border border-tertiary/20">🌟 Ý thức bảo vệ môi trường, giảm thiểu rác thải</span>
                      <span className="bg-surface px-sm py-xs rounded-full border border-tertiary/20">🌟 Chia sẻ kiến thức rộng rãi, giúp đỡ bạn bè</span>
                    </div>
                  </div>

                  {/* INTERACTIVE MINI QUIZ SECTION */}
                  <div className="bg-secondary-container/30 border border-outline-variant/80 rounded-xl p-md md:p-lg">
                    <div className="flex items-center gap-sm mb-md">
                      <span className="material-symbols-outlined text-primary text-3xl">sports_esports</span>
                      <h4 className="font-headline-md text-headline-md text-primary font-bold">
                        Quiz nhỏ: Bác sẽ đánh giá lối sống của bạn thế nào?
                      </h4>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                      Hãy trả lời 2 câu hỏi tình huống siêu nhỏ dưới đây để xem mức độ hòa nhịp của lối sống của bạn đối với tư tưởng Cần - Kiệm - Liêm - Chính của Bác nhé!
                    </p>

                    <div className="space-y-md">
                      {/* Q1 */}
                      <div className="bg-surface p-md rounded-lg border border-outline-variant/40">
                        <p className="font-body-md text-body-md text-on-surface font-bold mb-sm">
                          Q1: Khi bất ngờ có một khoản tiền thưởng đột xuất, phản ứng đầu tiên của bạn là:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
                          <button
                            onClick={() => setQuizQ1('A')}
                            className={`p-sm rounded-lg text-left transition-all text-sm font-medium ${
                              quizQ1 === 'A' ? 'bg-primary text-on-primary shadow-xs' : 'bg-surface-container-low hover:bg-surface-container-high text-on-surface'
                            }`}
                          >
                            <span>A. Mua ngay món đồ đang hot từ lâu vì "thích là phải nhích"!</span>
                          </button>
                          <button
                            onClick={() => setQuizQ1('B')}
                            className={`p-sm rounded-lg text-left transition-all text-sm font-medium ${
                              quizQ1 === 'B' ? 'bg-primary text-on-primary shadow-xs' : 'bg-surface-container-low hover:bg-surface-container-high text-on-surface'
                            }`}
                          >
                            <span>B. Cân nhắc kỹ lưỡng nhu cầu thực tế rồi mới phân bổ chi tiêu thông minh.</span>
                          </button>
                        </div>
                      </div>

                      {/* Q2 */}
                      <div className="bg-surface p-md rounded-lg border border-outline-variant/40">
                        <p className="font-body-md text-body-md text-on-surface font-bold mb-sm">
                          Q2: Khi bất ngờ bắt gặp một ý kiến phê phán gay gắt, trái chiều với mình trên mạng xã hội:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
                          <button
                            onClick={() => setQuizQ2('A')}
                            className={`p-sm rounded-lg text-left transition-all text-sm font-medium ${
                              quizQ2 === 'A' ? 'bg-primary text-on-primary shadow-xs' : 'bg-surface-container-low hover:bg-surface-container-high text-on-surface'
                            }`}
                          >
                            <span>A. Lập tức tranh cãi gay gắt nảy lửa hoặc công kích cá nhân để bảo vệ lý lẽ.</span>
                          </button>
                          <button
                            onClick={() => setQuizQ2('B')}
                            className={`p-sm rounded-lg text-left transition-all text-sm font-medium ${
                              quizQ2 === 'B' ? 'bg-primary text-on-primary shadow-xs' : 'bg-surface-container-low hover:bg-surface-container-high text-on-surface'
                            }`}
                          >
                            <span>B. Tôn trọng góc nhìn khác biệt, bình tĩnh trao đổi cực kỳ văn minh, thiện chí.</span>
                          </button>
                        </div>
                      </div>

                      {/* Dynamic Result Panel */}
                      {quizQ1 && quizQ2 && (
                        <div className="bg-primary/5 p-lg rounded-xl border border-primary/20 shadow-inner space-y-md animate-bloom">
                          <div className="flex items-center gap-xs border-b border-primary/20 pb-xs">
                            <span className="material-symbols-outlined text-primary">verified</span>
                            <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">Đánh giá Lối sống của Bác dành cho bạn</span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-md text-sm">
                            {/* Q1 Answer Detail */}
                            <div className="space-y-xs">
                              <p className="font-bold text-primary">Về Chi tiêu (Q1):</p>
                              {quizQ1 === 'A' ? (
                                <p className="text-on-surface-variant leading-relaxed">
                                  Bạn có xu hướng tiêu dùng nghiêng nhiều về cảm xúc tức thời. Bác luôn đề cao đức tính <span className="font-bold text-primary">KIỆM</span> - không phải hà tiện kiệt sỉ mà là biết cách quản lý tiền bạc khoa học, hợp lý, tránh lãng phí tiền bạc vào việc chạy theo xu hướng hình thức trống rỗng.
                                </p>
                              ) : (
                                <p className="text-on-surface-variant leading-relaxed">
                                  Tuyệt vời! Bạn đang thực hành xuất sắc đức tính <span className="font-bold text-primary">KIỆM</span> của Bác trong đời sống thường nhật. Biết chi dùng hợp lý, có trách nhiệm với thành quả lao động chính là biểu hiện văn hóa chi tiêu thông thái.
                                </p>
                              )}
                            </div>

                            {/* Q2 Answer Detail */}
                            <div className="space-y-xs">
                              <p className="font-bold text-primary">Về Ứng xử (Q2):</p>
                              {quizQ2 === 'A' ? (
                                <p className="text-on-surface-variant leading-relaxed">
                                  Bạn đang phản ứng theo cảm xúc nỏng nảy tức thời. Bác luôn răn dạy tinh thần tôn trọng, chân thành và đoàn kết tương ái làm gốc. Văn hóa ứng xử giao tiếp chuẩn mực, khôn khéo chính là linh hồn cốt lõi của đời sống văn hóa mới.
                                </p>
                              ) : (
                                <p className="text-on-surface-variant leading-relaxed">
                                  Tuyệt vời! Bạn đang chưng cất hoàn hảo đức tính <span className="font-bold text-primary">CHÍNH</span> - luôn ngay thẳng, biết tôn trọng người khác, giữ thái độ ôn hòa và ứng xử có chừng mực văn minh trên không gian số.
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Final Seal / Badge */}
                          <div className="flex flex-col items-center justify-center pt-md border-t border-primary/10">
                            <div className="wax-seal text-on-primary font-bold text-sm px-lg py-md rounded-full shadow-lg text-center flex flex-col items-center justify-center select-none rotate-2">
                              <span className="text-xs uppercase tracking-widest text-on-primary/80">Ký ức Văn hóa</span>
                              {quizQ1 === 'B' && quizQ2 === 'B' && (
                                <span className="font-serif text-lg font-bold mt-xs">🏆 Tấm Gương Sáng Cần Kiệm Liêm Chính!</span>
                              )}
                              {quizQ1 === 'B' && quizQ2 === 'A' && (
                                <span className="font-serif text-lg font-bold mt-xs">🌱 Cần rèn thêm tinh thần CHÍNH (Ứng xử số)</span>
                              )}
                              {quizQ1 === 'A' && quizQ2 === 'B' && (
                                <span className="font-serif text-lg font-bold mt-xs">🌱 Cần rèn thêm tinh thần KIỆM (Tiết kiệm chi tiêu)</span>
                              )}
                              {quizQ1 === 'A' && quizQ2 === 'A' && (
                                <span className="font-serif text-lg font-bold mt-xs">⚠️ Hãy tự ngẫm thêm về chữ KIỆM và CHÍNH!</span>
                              )}
                            </div>
                            
                            <button
                              onClick={() => { setQuizQ1(null); setQuizQ2(null); }}
                              className="mt-md text-xs text-primary underline hover:text-primary-container font-semibold"
                            >
                              Làm trắc nghiệm lại ↺
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-xl bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img className="w-full h-full object-cover" alt="Background pattern" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNONah54eYxm1GiJTjKFvXZKrXCNbSAo7B_ntdEpJOPDI0dabs6v1HuHhPJwclw7m-Ot8i0-qmJei-Fkr82jZEkDMkqdNENirOCdKja4Rr1ITIO_Ci0vodg759dF494qH3O78ZWh_mlZ2AFfSf53_EOWuHEA3snaxHG1ymirOcb-rv_8BD8mvWKX8t2c_0LbWZi79H-c0QKHnMDgcFDDn5eqnpw8_cvl0-f7s6R-1AnxRs6q9RLstucxx2Tpr01NcCA8z-R69GqLZo" />
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-gutter text-center text-on-primary">
            <h2 className="font-display-md text-display-md mb-md">Trải nghiệm tương tác ngay hôm nay</h2>
            <p className="font-body-lg text-body-lg opacity-90 mb-xl max-w-2xl mx-auto">
              Kiểm tra kiến thức với các bộ trắc nghiệm sinh động hoặc khám phá các địa danh lịch sử văn hóa qua bản đồ số tích hợp.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-md">
              <Link to="/quiz" className="bg-surface text-primary px-xl py-md font-label-md text-label-md rounded-lg flex items-center justify-center gap-sm hover:scale-105 transition-transform shadow-lg">
                <span className="material-symbols-outlined">quiz</span> Làm trắc nghiệm
              </Link>
              <Link to="/map" className="bg-transparent border border-surface text-on-primary px-xl py-md font-label-md text-label-md rounded-lg flex items-center justify-center gap-sm hover:bg-surface/10 transition-colors">
                <span className="material-symbols-outlined">map</span> Khám phá Bản đồ số
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary-container text-on-secondary-container py-xl mt-xl border-t border-outline-variant/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg max-w-container-max mx-auto px-gutter">
          <div className="space-y-md">
            <h2 className="font-headline-md text-headline-md text-primary">Ký Ức Văn Hóa</h2>
            <p className="font-body-md text-body-md opacity-80">Dự án số hóa và lan tỏa giá trị tư tưởng Hồ Chí Minh về văn hóa cho cộng đồng sinh viên và thanh niên Việt Nam.</p>
            <div className="flex gap-md">
              <a className="material-symbols-outlined opacity-80 hover:opacity-100 hover:text-primary transition-all" href="#">public</a>
              <a className="material-symbols-outlined opacity-80 hover:opacity-100 hover:text-primary transition-all" href="#">mail</a>
              <a className="material-symbols-outlined opacity-80 hover:opacity-100 hover:text-primary transition-all" href="#">share</a>
            </div>
          </div>
          <div className="space-y-md md:pl-xl">
            <h4 className="font-label-md text-label-md font-bold uppercase tracking-wider">Khám phá</h4>
            <ul className="space-y-sm font-caption text-caption">
              <li><Link className="hover:text-primary underline-offset-4 hover:underline opacity-80" to="/">Về dự án</Link></li>
              <li><Link className="hover:text-primary underline-offset-4 hover:underline opacity-80" to="/notebook">Tư liệu tham khảo</Link></li>
              <li><Link className="hover:text-primary underline-offset-4 hover:underline opacity-80" to="/">Chính sách bảo mật</Link></li>
            </ul>
          </div>
          <div className="space-y-md">
            <h4 className="font-label-md text-label-md font-bold uppercase tracking-wider">Đăng ký bản tin</h4>
            <p className="font-caption text-caption opacity-80">Nhận những bài viết mới nhất về di sản văn hóa.</p>
            <div className="flex">
              <input className="bg-surface border-b border-outline focus:border-primary focus:ring-0 outline-none p-sm flex-1 text-sm rounded-l-lg" placeholder="Email của bạn" type="email" />
              <button className="bg-primary text-on-primary px-md rounded-r-lg hover:bg-primary-container transition-colors">
                Gửi
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-container-max mx-auto px-gutter mt-xl pt-lg border-t border-outline-variant/10 text-center">
          <p className="font-caption text-caption opacity-60">© 2026 Ký Ức Văn Hóa - Hành trình Di sản Hồ Chí Minh</p>
        </div>
      </footer>


    </div>
  );
}
