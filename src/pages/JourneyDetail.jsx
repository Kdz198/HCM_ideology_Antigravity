import { Link } from 'react-router-dom';

export default function JourneyDetail() {
  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary-fixed-dim selection:text-on-primary-fixed scroll-smooth paper-texture min-h-screen flex flex-col">
      <header className="bg-surface/95 border-b border-outline-variant/20 backdrop-blur-sm fixed top-0 w-full z-50">
        <div className="flex justify-between items-center w-full px-gutter py-md max-w-container-max mx-auto">
          <div className="font-headline-md text-headline-md text-primary tracking-tight">Heritage & Horizon</div>
          <nav className="hidden md:flex gap-lg">
            <Link className="text-on-surface-variant font-medium hover:text-tertiary transition-colors duration-300 font-label-md text-label-md uppercase tracking-wider" to="/map">Bản đồ di sản</Link>
            <Link className="text-primary border-b-2 border-primary pb-1 font-semibold font-label-md text-label-md uppercase tracking-wider" to="/detail">Hành trình</Link>
            <Link className="text-on-surface-variant font-medium hover:text-tertiary transition-colors duration-300 font-label-md text-label-md uppercase tracking-wider" to="/notebook">Tư liệu</Link>
            <Link className="text-on-surface-variant font-medium hover:text-tertiary transition-colors duration-300 font-label-md text-label-md uppercase tracking-wider" to="/">Văn hóa</Link>
            <Link className="text-on-surface-variant font-medium hover:text-tertiary transition-colors duration-300 font-label-md text-label-md uppercase tracking-wider" to="/quiz">Giáo dục</Link>
          </nav>
          <button className="bg-primary-container text-on-primary-container px-md py-xs rounded-lg hover:bg-primary transition-colors duration-300 font-label-md text-label-md scale-95 active:scale-90 transition-transform">Tham gia</button>
        </div>
      </header>

      <main className="flex-grow pt-[80px] px-gutter max-w-container-max mx-auto w-full">
        <section className="py-xl text-center relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 0" }}>castle</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-primary mb-xs">Nước Pháp</h1>
          <p className="font-headline-md text-headline-md text-secondary italic">Điểm dừng chân của Tự do, Bình đẳng và Bác ái</p>
          <div className="mt-md w-16 h-1 bg-tertiary-container mx-auto rounded-full"></div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-lg pb-xl">
          <div className="md:col-span-7 flex flex-col justify-center">
            <article className="bg-surface-container-low p-lg border border-outline-variant/30 rounded-lg relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-24 h-24 bg-surface/50 -translate-y-12 translate-x-12 rotate-45 border-b border-outline-variant/20"></div>
              <div className="flex items-center gap-sm mb-md text-tertiary">
                <span className="material-symbols-outlined">description</span>
                <h2 className="font-headline-md text-headline-md font-bold uppercase tracking-wide">Điện tín từ Quá khứ</h2>
              </div>
              <div className="space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed">
                <p className="border-l-4 border-tertiary-container pl-md italic">"Tự do, Bình đẳng, Bác ái - Tôi muốn đi ra nước ngoài xem người Pháp và các nước khác làm như thế nào rồi sẽ trở về giúp đồng bào ta."</p>
                <p>Tại Paris những năm đầu thế kỷ 20, dưới cái tên Nguyễn Ái Quốc, Người đã không ngừng học hỏi. Từ những giờ làm thuê vất vả, Người dành dụm từng xu để mua sách báo, học tiếng Pháp qua các tờ báo "Nhân đạo" (L'Humanité). Người nhận ra rằng những giá trị cao đẹp mà nước Pháp tuyên xướng chính là chìa khóa để giải phóng dân tộc mình.</p>
                <p>Đây là nơi Người gia nhập Đảng Xã hội Pháp, tham gia thành lập Đảng Cộng sản Pháp tại Đại hội Tours năm 1920, đánh dấu một bước ngoặt vĩ đại trong tư tưởng cách mạng Việt Nam.</p>
              </div>
              <div className="mt-lg flex gap-md">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-outline flex items-center justify-center mb-xs">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>history_edu</span>
                  </div>
                  <span className="font-caption text-caption uppercase tracking-tighter">Bút tích</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-outline flex items-center justify-center mb-xs">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>newspaper</span>
                  </div>
                  <span className="font-caption text-caption uppercase tracking-tighter">Báo chí</span>
                </div>
              </div>
            </article>
          </div>
          
          <div className="md:col-span-5 relative group">
            <div className="aspect-[4/5] bg-surface-container-highest border border-outline-variant/30 rounded-lg overflow-hidden relative">
              <img alt="Eiffel Tower Paris" className="w-full h-full object-cover ink-effect group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL5Fv4BZm-GxqXuTnCoj9Q_iuU4_WMkN4Z7-qufo0_pPOJSjl2nal3mh12zH4B-YOqM6kUb6Gs6hIy34p42pgowd1o2Tt83MysY6mKLx2T0Bxg1aoOuEqcdlqdO5N9vLjDKQk_2AYT8TlRDAnHR-U8C3hvtougn1G9xyOzvBlGLRkpuUmLSg40ODOh6rA8k8KeOhXok874z0ZhY7MpkG1PJDpx6oCMnr1BqRI-3Vi-OoDZbnm7x1WwlsxBXfvChWN_Kmj11Bm2IJPc" />
              <div className="absolute bottom-md left-md bg-surface/90 backdrop-blur-md p-md border border-outline-variant/20 rounded shadow-lg max-w-[80%]">
                <span className="font-label-md text-label-md text-primary block mb-xs">Mảnh ghép di sản</span>
                <p className="font-body-md text-body-md text-on-surface">Khu phố Latinh - Nơi khởi nguồn của những tư tưởng tiến bộ và những buổi thảo luận sôi nổi của Hội những người Việt Nam yêu nước.</p>
              </div>
            </div>
          </div>
        </div>

        <section className="py-xl border-t border-outline-variant/20">
          <div className="flex items-end justify-between mb-lg">
            <div>
              <h2 className="font-display-md text-display-md text-on-background">Kho tàng Trí tuệ</h2>
              <p className="font-body-md text-body-md text-secondary">Những cổ vật tinh thần được thu thập tại Pháp</p>
            </div>
            <span className="font-label-md text-label-md text-tertiary-container uppercase tracking-widest px-md py-xs border border-tertiary-container rounded-full">3/5 Đã mở khóa</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <div className="bg-surface p-md border border-outline-variant/30 rounded-lg flex gap-md items-start hover:border-primary/40 transition-colors">
              <div className="w-16 h-16 bg-surface-container flex-shrink-0 flex items-center justify-center rounded">
                <span className="material-symbols-outlined text-[32px] text-primary">translate</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-background mb-xs">Ngoại ngữ</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Thành thạo tiếng Pháp và nghiên cứu cơ bản tiếng Anh qua công việc thực tế.</p>
              </div>
            </div>
            <div className="bg-surface p-md border border-outline-variant/30 rounded-lg flex gap-md items-start hover:border-primary/40 transition-colors">
              <div className="w-16 h-16 bg-surface-container flex-shrink-0 flex items-center justify-center rounded">
                <span className="material-symbols-outlined text-[32px] text-primary">menu_book</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-background mb-xs">Bản yêu sách</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Bản yêu sách của nhân dân An Nam gửi tới Hội nghị Versailles (1919).</p>
              </div>
            </div>
            <div className="bg-surface p-md border border-outline-variant/30 rounded-lg flex gap-md items-start hover:border-primary/40 transition-colors">
              <div className="w-16 h-16 bg-surface-container flex-shrink-0 flex items-center justify-center rounded">
                <span className="material-symbols-outlined text-[32px] text-primary">gavel</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-background mb-xs">Tư tưởng Pháp</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Nghiên cứu sâu sắc về triết học Khai sáng và các cuộc cách mạng dân chủ.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-xl flex flex-col items-center justify-center text-center">
          <div className="relative mb-lg">
            <div className="w-24 h-1 bg-outline-variant/30 mb-md mx-auto"></div>
            <p className="font-body-md text-body-md text-secondary max-w-md mx-auto">Hành trình tìm đường cứu nước vẫn tiếp diễn. Điểm đến tiếp theo đang chờ đón bạn.</p>
          </div>
          <Link to="/map" className="group relative flex flex-col items-center">
            <div className="wax-seal w-24 h-24 rounded-full flex items-center justify-center text-white mb-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
              <span className="material-symbols-outlined text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>explore</span>
            </div>
            <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-[0.2em] group-hover:text-tertiary transition-colors">Về lại Bản đồ</span>
            <div className="mt-sm flex gap-xs opacity-40">
              <div className="w-1 h-1 bg-primary rounded-full"></div>
              <div className="w-8 h-px bg-primary self-center"></div>
              <div class="w-1 h-1 bg-primary rounded-full"></div>
            </div>
          </Link>
        </section>
      </main>

      <footer className="bg-surface-container-highest mt-xl border-t border-outline-variant/30">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-gutter py-lg max-w-container-max mx-auto gap-md">
          <div className="flex flex-col gap-xs items-center md:items-start">
            <div className="font-headline-sm text-headline-sm text-primary">Heritage & Horizon</div>
            <p className="font-caption text-caption text-on-surface-variant text-center md:text-left">© 2026 Di sản Văn hóa Hồ Chí Minh. Bảo tồn và Phát triển cho thế hệ mai sau.</p>
          </div>
          <nav className="flex gap-lg">
            <a className="text-on-surface-variant hover:text-primary underline transition-all font-label-md text-label-md" href="#">Giới thiệu</a>
            <a className="text-on-surface-variant hover:text-primary underline transition-all font-label-md text-label-md" href="#">Liên hệ</a>
            <a className="text-on-surface-variant hover:text-primary underline transition-all font-label-md text-label-md" href="#">Thư viện</a>
            <a className="text-on-surface-variant hover:text-primary underline transition-all font-label-md text-label-md" href="#">Bản quyền</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
