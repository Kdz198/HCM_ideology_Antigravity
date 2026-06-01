import { useState } from 'react';
import { Link } from 'react-router-dom';

const quotes = [
  {
    text: "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người.",
    category: "Giáo dục"
  },
  {
    text: "Người có đức mà không có tài thì làm việc gì cũng khó; người có tài mà không có đức là người vô dụng.",
    category: "Đạo đức"
  },
  {
    text: "Văn hoá nghệ thuật cũng là một mặt trận. Anh chị em là chiến sĩ trên mặt trận ấy.",
    category: "Văn hóa"
  },
  {
    text: "Học hỏi là một việc phải tiếp tục suốt đời. Suốt đời phải học tập, không bao giờ được dừng lại.",
    category: "Học tập"
  },
  {
    text: "Văn hóa soi đường cho quốc dân đi.",
    category: "Văn hóa"
  }
];

export default function MemoryMailbox() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const refreshQuote = () => {
    setOpacity(0);
    setTimeout(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
      setOpacity(1);
    }, 300);
  };

  const currentQuote = quotes[quoteIndex];

  return (
    <div className="bg-background text-on-background lotus-bg paper-texture selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen flex flex-col">
      <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30">
        <div className="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto">
          <div className="font-display-md text-display-md text-primary tracking-tight">Ký Ức Văn Hóa</div>
          <div className="hidden md:flex items-center gap-lg">
            <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" to="/">Trang chủ</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" to="/map">Bản đồ số</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" to="/heritage-map">Bản đồ di sản</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" to="/notebook">Tư liệu</Link>
            <Link className="text-primary border-b-2 border-primary pb-1 font-bold font-body-md text-body-md" to="/mailbox">Hộp thư ký ức</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" to="/quiz">Trắc nghiệm</Link>
          </div>
          <button className="bg-primary text-on-primary px-md py-sm rounded-lg font-label-md hover:opacity-90 transition-all active:scale-95">Đăng nhập</button>
        </div>
      </nav>

      <main className="flex-grow mt-xl pt-xl pb-xl px-gutter max-w-container-max mx-auto pt-24">
        <header className="text-center mb-xl">
          <h1 className="font-display-lg text-display-lg text-primary mb-sm">Hộp thư Ký ức</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Mỗi ngày một lời dạy của Bác về Văn hóa, Đạo đức và Giáo dục để soi sáng hành trình học tập của chúng ta.</p>
        </header>

        <section className="mb-xl relative">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden lg:block">
            <div className="flex flex-col items-center gap-xs">
              <div className="bamboo-line h-32"></div>
              <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
              <div className="bamboo-line h-32"></div>
            </div>
          </div>
          <div className="bg-surface-container-low border border-outline-variant/30 p-lg md:p-xl rounded-xl relative overflow-hidden flex flex-col md:flex-row gap-lg items-center shadow-sm">
            <div className="w-full md:w-1/2 space-y-md">
              <span className="material-symbols-outlined text-tertiary-container text-6xl opacity-40">format_quote</span>
              <blockquote className="border-l-4 border-tertiary-container pl-md">
                <p className="font-display-md text-display-md text-on-surface italic leading-relaxed transition-opacity duration-300 ease-in-out" style={{ opacity }}>
                  "{currentQuote.text}"
                </p>
                <cite className="block mt-sm font-label-md text-label-md text-primary tracking-widest">— CHỦ TỊCH HỒ CHÍ MINH</cite>
              </blockquote>
              <div className="flex gap-sm pt-md">
                <button onClick={refreshQuote} className="flex items-center gap-xs px-md py-sm bg-surface-container-high border border-outline-variant rounded-lg font-label-md text-on-surface hover:bg-secondary-container transition-colors">
                  <span className="material-symbols-outlined text-sm">refresh</span> Đổi danh ngôn
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative group">
                <div className="aspect-[4/5] w-full rounded-lg overflow-hidden border border-outline shadow-lg relative flex items-center justify-center p-md text-center">
                  <img className="absolute inset-0 w-full h-auto object-cover opacity-60" alt="Ho Chi Minh's stilt house" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIxuibB1juNLcT1f7S4nynvCvsxjTJn7rm0c2CRvgTaJmgwcBs2ev3lrH8-3VDLp1HUUttNRNf9nvvyPqowj0phmtICEGlLTWkAkR8Vt_XSTmC0HV2jl_GyHGfktFi7BKwgN7QEbeU0joEU7esLmuIW2I956TkpBdYRfLoTTRUEgTGoxtRybzWp195uSmoDxV8Czc7ssZd9gqDxn0UJ0cwO32Z_aWV-ixeXZNpL8TT5Ct1juAceUpEUbtWGKXOX8hM4B6tMuP9GaEi" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                  <div className="relative z-10 space-y-sm">
                    <p className="font-display-md text-headline-md text-white px-md drop-shadow-md transition-opacity duration-300 ease-in-out" style={{ opacity }}>"{currentQuote.text}"</p>
                    <p className="font-label-md text-caption text-white/90 tracking-tighter">— Hồ Chí Minh —</p>
                  </div>
                </div>
                <div className="mt-md flex justify-center gap-base">
                  <button className="flex-1 bg-primary text-on-primary py-sm rounded-lg font-label-md flex items-center justify-center gap-xs hover:shadow-lg transition-all active:scale-95">
                    <span className="material-symbols-outlined">download</span> Tải về
                  </button>
                  <button className="flex-1 border border-primary text-primary py-sm rounded-lg font-label-md flex items-center justify-center gap-xs hover:bg-primary-fixed transition-all active:scale-95">
                    <span className="material-symbols-outlined">share</span> Chia sẻ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-xl">
          <div className="flex justify-between items-end mb-lg border-b border-outline-variant/20 pb-base">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Các danh ngôn khác</h2>
            <Link to="/mailbox" className="font-label-md text-primary flex items-center gap-xs group">
              Xem tất cả <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {quotes.map((quote, i) => (
              <div key={i} className="p-md border border-outline-variant/30 rounded-lg hover:border-tertiary-container transition-all cursor-pointer group bg-surface-container-lowest">
                <span className="font-caption text-caption text-tertiary mb-base block uppercase tracking-widest">{quote.category}</span>
                <p className="font-headline-md text-headline-md text-on-surface mb-md leading-snug">"{quote.text}"</p>
                <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-caption font-caption text-on-surface-variant">Thư viện</span>
                  <span className="material-symbols-outlined text-primary">content_copy</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
