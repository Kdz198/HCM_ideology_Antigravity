import { Link } from 'react-router-dom';

export default function JourneyMap() {
  return (
    <div className="bg-background text-on-surface font-body-md paper-texture min-h-screen">
      <header className="docked full-width top-0 sticky z-50 bg-surface/95 border-b border-outline-variant/20 backdrop-blur-sm">
        <div className="flex justify-between items-center w-full px-gutter py-md max-w-container-max mx-auto">
          <div className="font-headline-md text-headline-md text-primary tracking-tight">Heritage & Horizon</div>
          <nav className="hidden md:flex items-center gap-lg">
            <Link className="font-label-md text-label-md text-primary border-b-2 border-primary pb-1 font-semibold hover:text-tertiary transition-colors duration-300" to="/map">Bản đồ di sản</Link>
            <Link className="font-label-md text-label-md text-on-surface-variant font-medium hover:text-tertiary transition-colors duration-300" to="/">Hành trình</Link>
            <Link className="font-label-md text-label-md text-on-surface-variant font-medium hover:text-tertiary transition-colors duration-300" to="/notebook">Tư liệu</Link>
            <Link className="font-label-md text-label-md text-on-surface-variant font-medium hover:text-tertiary transition-colors duration-300" to="/">Văn hóa</Link>
            <Link className="font-label-md text-label-md text-on-surface-variant font-medium hover:text-tertiary transition-colors duration-300" to="/quiz">Giáo dục</Link>
          </nav>
          <div className="flex items-center gap-md">
            <button className="material-symbols-outlined text-on-surface-variant">search</button>
            <button className="bg-primary text-on-primary px-gutter py-2 rounded-lg text-label-md font-semibold scale-95 active:scale-90 transition-transform">Tham gia</button>
          </div>
        </div>
      </header>
      <main className="max-w-container-max mx-auto px-gutter py-xl min-h-screen">
        <div className="flex flex-col lg:flex-row gap-xl items-start">
          <aside className="w-full lg:w-1/3 sticky top-[120px]">
            <div className="mb-lg">
              <span className="text-tertiary font-label-md tracking-widest uppercase">Biên niên sử</span>
              <h1 className="font-display-md text-display-md text-primary mt-base">Nhật ký Hành trình</h1>
              <p className="font-body-md text-body-md text-on-surface-variant mt-sm italic">"Chuyến hành trình đi tìm đường cứu nước của người thanh niên Nguyễn Tất Thành."</p>
            </div>
            <div className="relative pl-gutter border-l-2 border-outline-variant/30 flex flex-col gap-lg h-[500px] overflow-y-auto custom-scrollbar pr-sm">
              {/* Timeline Nodes */}
              <div className="relative group cursor-pointer">
                <div className="absolute -left-[33px] top-1 bg-primary w-4 h-4 rounded-full border-4 border-background transition-transform group-hover:scale-125"></div>
                <span className="font-headline-md text-headline-md text-tertiary block">1911</span>
                <h3 className="font-headline-sm text-headline-sm font-semibold mt-xs">Rời Bến Nhà Rồng</h3>
                <p className="text-body-md text-on-surface-variant mt-sm leading-relaxed">Ngày 5/6/1911, bắt đầu chuyến đi lịch sử trên con tàu Amiral Latouche-Tréville.</p>
                <div className="mt-sm border-t border-outline-variant/20 pt-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-caption text-primary flex items-center gap-xs">
                    <span className="material-symbols-outlined text-[16px]">anchor</span> Xem tư liệu gốc
                  </span>
                </div>
              </div>
              <div className="relative group cursor-pointer">
                <div className="absolute -left-[33px] top-1 bg-outline-variant w-4 h-4 rounded-full border-4 border-background transition-transform group-hover:scale-125 group-hover:bg-primary"></div>
                <span className="font-headline-md text-headline-md text-tertiary block">1917</span>
                <h3 className="font-headline-sm text-headline-sm font-semibold mt-xs">Paris rực lửa</h3>
                <p className="text-body-md text-on-surface-variant mt-sm leading-relaxed">Đến Pháp, tham gia vào phong trào công nhân và tìm hiểu các tư tưởng tiến bộ.</p>
              </div>
              <div className="relative group cursor-pointer">
                <div className="absolute -left-[33px] top-1 bg-outline-variant w-4 h-4 rounded-full border-4 border-background transition-transform group-hover:scale-125 group-hover:bg-primary"></div>
                <span className="font-headline-md text-headline-md text-tertiary block">1923</span>
                <h3 className="font-headline-sm text-headline-sm font-semibold mt-xs">Tới Liên Xô</h3>
                <p className="text-body-md text-on-surface-variant mt-sm leading-relaxed">Dự Đại hội lần thứ V Quốc tế Cộng sản tại Moscow.</p>
              </div>
              <div className="relative group cursor-pointer">
                <div className="absolute -left-[33px] top-1 bg-outline-variant w-4 h-4 rounded-full border-4 border-background transition-transform group-hover:scale-125 group-hover:bg-primary"></div>
                <span className="font-headline-md text-headline-md text-tertiary block">1930</span>
                <h3 className="font-headline-sm text-headline-sm font-semibold mt-xs">Hồng Kông & Quảng Châu</h3>
                <p className="text-body-md text-on-surface-variant mt-sm leading-relaxed">Hợp nhất các tổ chức cộng sản, thành lập Đảng Cộng sản Việt Nam.</p>
              </div>
            </div>
            <div className="mt-lg pt-lg">
              <Link to="/detail" className="group relative flex items-center justify-center w-full bg-primary-container text-on-primary px-xl py-md rounded-lg stamp-shadow hover:brightness-110 transition-all active:scale-95">
                <span className="font-headline-md text-headline-md tracking-widest">BẮT ĐẦU KHÁM PHÁ</span>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-tertiary-container rounded-full flex items-center justify-center border-2 border-primary rotate-12 group-hover:rotate-45 transition-transform">
                  <span className="material-symbols-outlined text-on-tertiary-container">history_edu</span>
                </div>
              </Link>
            </div>
          </aside>
          
          <section className="w-full lg:w-2/3">
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-xl border-8 border-surface-container-high bg-surface-container-lowest flex items-center justify-center">
              <div className="absolute inset-0 z-0">
                <img alt="Bản đồ thế giới cổ điển trên giấy da" className="w-full h-full object-cover scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBo_99_UgIKCIJr4Zcn_Eh0ASQUY9xyFLKFEgWUQVd5eZtrzAtbwzVY_hUa1WMQ8uhq4izDxN57qAn0H_Ndlxco6IdLHYetTvORxmV7Eum9IFNN5xcVtZn7RxbkP09Vw75XOw6dvqA9OB3qj2xbfk3LYAcQ_ZPDebT09rbHhdhR1HwzvXBMSdQqDVauC40LiiyQBMs0Ldt40pAWvVWDY3hA7bHvF1i6m377ZwHTZ_64G38KjGsd_TvrECeZScKKIgdxoMxS4CmJZpD" />
              </div>
              <div className="relative z-10 w-full h-full p-lg flex flex-col justify-between">
                <div className="bg-surface/90 backdrop-blur-md p-md border border-tertiary/20 max-w-[200px] rounded-lg">
                  <span className="font-label-md text-tertiary block">Tọa độ hiện tại</span>
                  <span className="font-headline-sm text-primary">Paris, 1917</span>
                </div>
                <div className="absolute bottom-10 right-10 opacity-80 pointer-events-none group">
                  <div className="relative animate-[spin_20s_linear_infinite]">
                    <span className="material-symbols-outlined text-primary text-[120px]" style={{ fontVariationSettings: "'FILL' 0" }}>explore</span>
                  </div>
                </div>
                {/* Map Markers */}
                <Link to="/detail" className="absolute top-[20%] left-[45%] group cursor-pointer block">
                  <div className="relative">
                    <span className="material-symbols-outlined text-primary text-md hover:scale-125 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                    <div className="absolute -top-12 -left-1/2 bg-white/95 px-sm py-xs border border-primary text-caption whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all rounded">
                      Marseille, France
                    </div>
                  </div>
                </Link>
                <div className="absolute top-[35%] right-[25%] group cursor-pointer block">
                  <div className="relative">
                    <span className="material-symbols-outlined text-primary text-md hover:scale-125 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                    <div className="absolute -top-12 -left-1/2 bg-white/95 px-sm py-xs border border-primary text-caption whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all rounded">
                      Moscow, USSR
                    </div>
                  </div>
                </div>
                {/* Controls */}
                <div className="flex justify-center gap-md mb-md">
                  <div className="flex items-center bg-surface/90 backdrop-blur-md rounded-full border border-outline-variant/30 px-md py-sm gap-lg">
                    <button className="material-symbols-outlined text-on-surface hover:text-primary transition-colors">zoom_in</button>
                    <div className="h-4 w-px bg-outline-variant"></div>
                    <button className="material-symbols-outlined text-on-surface hover:text-primary transition-colors">zoom_out</button>
                    <div className="h-4 w-px bg-outline-variant"></div>
                    <button className="material-symbols-outlined text-on-surface hover:text-primary transition-colors">layers</button>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply paper-texture"></div>
            </div>
            <div className="mt-md flex justify-between items-center px-sm">
              <div className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-tertiary">info</span>
                <span className="text-caption text-on-surface-variant font-medium">Bản đồ số tái hiện các điểm dừng chân chính trong giai đoạn 1911-1941.</span>
              </div>
              <div className="flex gap-xs">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
                <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
              </div>
            </div>
          </section>
        </div>

        <section className="mt-xl pt-xl border-t border-outline-variant/20">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-lg">Báu vật hành trình</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <div className="md:col-span-2 relative group overflow-hidden h-[320px] rounded-xl bg-surface-container border border-outline-variant/20">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Hải trình Amiral Latouche-Tréville" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ_vymdxThK8sf2kSd4r3okQFCJbFgmfIoLaf8xSQxZodZhiA5GRE1jvNrdPPditSu2wu6Z8-Td-162AqKZucBg-PZayBGucEX26Obg11Kgf7Yd2WX_8rg6O2Sw5vgP5DANtHANpowMhavIWJ0pgCvXj3GG-dFuV72vyU5oX20P1lEctDSKjzXCCDQ3CLQkDS9qDa4Km4mCL644B9yYWvYjio6vGEOA8qiNJa92kNjs5CGe5eAhv3Hu5heZzLdTsXbXq6ZsKyWEwUG" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-lg text-on-primary">
                <span className="font-label-md uppercase tracking-widest text-secondary-fixed">Hiện vật quý</span>
                <h3 className="font-headline-md text-headline-md mt-xs">Hải trình Amiral Latouche-Tréville</h3>
                <p className="font-body-md text-body-md mt-sm opacity-90 max-w-md">Bản sao nhật ký hải trình ghi lại lộ trình di chuyển của con tàu nơi Người đã làm việc.</p>
              </div>
            </div>
            <div className="relative group overflow-hidden h-[320px] rounded-xl bg-surface-container border border-outline-variant/20">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Góc bút nghiên" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB97oD-jTaMRSSj-U-FPv_rLhThMQqlaMrVeuGXUsn8PkAMAWUvZt8UNBg5E8J3VReIaVJlvXwW7_3MGdK2YFskbEYEAFabNx3Psx-FIbXKG6Yd_-gnLO9UhTvVbgp0sWzurPWYq--Zq9ZSJlpJeV-xNth8MMnYCPlJ9mYjGj99CXWCXTwLZ3oa5WYdRIDWlNcr2KpdkhyCEI9PcpcFdrWbu_TvFwYVf9C4LfjE5Mci15wGwYr__o6FnFm73BfU2uEOb7knxJI6dYir" />
              <div className="absolute inset-0 bg-gradient-to-t from-tertiary/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-lg text-on-primary">
                <span className="font-label-md uppercase tracking-widest text-secondary-fixed">Tư liệu</span>
                <h3 className="font-headline-md text-headline-md mt-xs">Góc bút nghiên</h3>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-surface-container-highest border-t border-outline-variant/30">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-gutter py-lg max-w-container-max mx-auto gap-md">
          <div className="flex flex-col gap-sm">
            <div className="font-headline-sm text-headline-sm text-primary">Heritage & Horizon</div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">© 2026 Di sản Văn hóa Hồ Chí Minh. Bảo tồn và Phát triển cho thế hệ mai sau.</p>
          </div>
          <nav className="flex gap-lg">
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary underline transition-all" href="#">Giới thiệu</a>
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary underline transition-all" href="#">Liên hệ</a>
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary underline transition-all" href="#">Thư viện</a>
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary underline transition-all" href="#">Bản quyền</a>
          </nav>
          <div className="flex gap-md">
            <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">public</span>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">share</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
