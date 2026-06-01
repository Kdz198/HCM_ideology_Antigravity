import { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" to="/heritage-map">Bản đồ di sản</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" to="/notebook">Tư liệu</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" to="/mailbox">Hộp thư ký ức</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" to="/quiz">Trắc nghiệm</Link>
          </div>
          <div className="flex items-center gap-md">
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">search</span>
            <button className="bg-primary text-on-primary px-md py-sm font-label-md text-label-md rounded-lg scale-95 active:scale-90 transition-transform">
              Đăng nhập
            </button>
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
                <Link to="/notebook" className="border border-primary text-primary px-xl py-md font-label-md text-label-md rounded-lg hover:bg-primary/5 transition-all">
                  Tìm hiểu thêm
                </Link>
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

        {/* Section: Lý thuyết */}
        <section className="py-xl max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-3xl mx-auto mb-xl">
            <h2 className="font-display-md text-display-md text-on-surface mb-base">Ba Luận điểm Cốt lõi</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-md"></div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Hệ thống tư tưởng toàn diện, định hướng xây dựng một nền văn hóa mới mang đậm bản sắc dân tộc và tính nhân văn sâu sắc.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {/* Card 1 */}
            <div className="group relative bg-surface border border-outline-variant p-lg rounded-lg hover:border-primary transition-all duration-300">
              <div className="w-12 h-12 bg-primary/5 text-primary rounded-lg flex items-center justify-center mb-md group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-sm">Văn hóa là động lực</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
                Văn hóa không đứng ngoài mà ở trong kinh tế và chính trị. Nó là sức mạnh tinh thần khơi dậy tinh thần yêu nước và sáng tạo.
              </p>
              <Link to="/detail" className="inline-flex items-center gap-xs font-label-md text-label-md text-primary group/link">
                Chi tiết luận điểm <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_right_alt</span>
              </Link>
            </div>
            {/* Card 2 */}
            <div className="group relative bg-surface border border-outline-variant p-lg rounded-lg hover:border-primary transition-all duration-300">
              <div className="w-12 h-12 bg-primary/5 text-primary rounded-lg flex items-center justify-center mb-md group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined">ads_click</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-sm">Văn hóa là mục tiêu</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
                Xây dựng một xã hội văn minh, nơi con người phát triển toàn diện về đức, trí, thể, mỹ là đích đến cuối cùng của cách mạng.
              </p>
              <Link to="/detail" className="inline-flex items-center gap-xs font-label-md text-label-md text-primary group/link">
                Chi tiết luận điểm <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_right_alt</span>
              </Link>
            </div>
            {/* Card 3 */}
            <div className="group relative bg-surface border border-outline-variant p-lg rounded-lg hover:border-primary transition-all duration-300">
              <div className="w-12 h-12 bg-primary/5 text-primary rounded-lg flex items-center justify-center mb-md group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined">eco</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-sm">Đời sống văn hóa mới</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
                Cải tạo những thói quen cũ lạc hậu, xây dựng lối sống khoa học, cần kiệm, liêm chính để làm giàu vốn quý dân tộc.
              </p>
              <Link to="/detail" className="inline-flex items-center gap-xs font-label-md text-label-md text-primary group/link">
                Chi tiết luận điểm <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_right_alt</span>
              </Link>
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
