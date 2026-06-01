import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Notebook() {
  const [activeColor, setActiveColor] = useState('#FFE8D6');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Cảm ơn bạn đã chia sẻ và lan tỏa những giá trị tốt đẹp!');
      setIsSubmitting(false);
      e.target.reset();
    }, 1000);
  };

  return (
    <div className="bg-surface font-body-md text-on-surface paper-texture min-h-screen">
      <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30">
        <div className="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto">
          <div className="font-display-md text-display-md text-primary tracking-tight">Ký Ức Văn Hóa</div>
          <div className="hidden md:flex items-center gap-md">
            <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300" to="/">Trang chủ</Link>
            <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300" to="/quiz">Trắc nghiệm</Link>
            <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300" to="/map">Bản đồ số</Link>
            <Link className="font-label-md text-label-md text-primary border-b-2 border-primary pb-1 font-bold" to="/notebook">Sổ tay</Link>
          </div>
          <button className="bg-primary text-on-primary px-md py-sm font-label-md text-label-md rounded-lg scale-95 active:scale-90 transition-transform">Đăng nhập</button>
        </div>
      </nav>

      <main className="pt-20">
        <section className="py-xl px-gutter max-w-container-max mx-auto text-center">
          <h1 className="font-display-lg text-display-lg text-primary mb-sm">Góc cảm nhận & Lan tỏa</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto italic">
            "Học để làm việc, làm người, làm cán bộ. Học để phụng sự đoàn thể, phụng sự giai cấp và nhân dân, phụng sự Tổ quốc và nhân loại."
          </p>
          <div className="w-16 h-1 bg-tertiary-container mx-auto mt-md"></div>
        </section>

        <section className="px-gutter max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-lg items-start">
          <aside className="lg:col-span-4 sticky top-24 bg-surface-container-low p-md rounded-xl border border-outline-variant/20 shadow-sm">
            <div className="flex items-center gap-sm mb-md">
              <span className="material-symbols-outlined text-primary">edit_note</span>
              <h2 className="font-headline-md text-headline-md text-on-surface">Viết cảm nhận</h2>
            </div>
            <form className="space-y-md" onSubmit={handleSubmit}>
              <div>
                <label className="font-label-md text-label-md text-on-surface-variant mb-xs block">Tên hiển thị</label>
                <input className="w-full line-input font-body-md text-body-md py-sm" placeholder="Nhập tên hoặc để trống để ẩn danh..." type="text" />
              </div>
              <div>
                <label className="font-label-md text-label-md text-on-surface-variant mb-xs block">Lời tâm huyết</label>
                <textarea className="w-full line-input font-body-md text-body-md py-sm resize-none" placeholder="Chia sẻ suy nghĩ của bạn về tư tưởng Hồ Chí Minh..." rows="4"></textarea>
              </div>
              <div>
                <label className="font-label-md text-label-md text-on-surface-variant mb-xs block">Cam kết hành động</label>
                <select className="w-full line-input font-body-md text-body-md py-sm">
                  <option value="">Chọn một lời hứa của bạn...</option>
                  <option value="Tự học">Không ngừng tự học, nâng cao trình độ</option>
                  <option value="Tiết kiệm">Tiết kiệm thời gian, tiền bạc, của công</option>
                  <option value="Đạo đức">Giữ gìn đạo đức cách mạng, lối sống lành mạnh</option>
                  <option value="Phụng sự">Tích cực tham gia các hoạt động cộng đồng</option>
                </select>
              </div>
              <div className="flex gap-sm pt-sm">
                <div onClick={() => setActiveColor('#FFE8D6')} className={`w-8 h-8 rounded-full bg-[#FFE8D6] border-2 cursor-pointer ${activeColor === '#FFE8D6' ? 'border-primary' : 'border-transparent'}`}></div>
                <div onClick={() => setActiveColor('#E2F0CB')} className={`w-8 h-8 rounded-full bg-[#E2F0CB] border-2 cursor-pointer ${activeColor === '#E2F0CB' ? 'border-primary' : 'border-transparent'}`}></div>
                <div onClick={() => setActiveColor('#D4E2F5')} className={`w-8 h-8 rounded-full bg-[#D4E2F5] border-2 cursor-pointer ${activeColor === '#D4E2F5' ? 'border-primary' : 'border-transparent'}`}></div>
                <div onClick={() => setActiveColor('#F5D4E2')} className={`w-8 h-8 rounded-full bg-[#F5D4E2] border-2 cursor-pointer ${activeColor === '#F5D4E2' ? 'border-primary' : 'border-transparent'}`}></div>
              </div>
              <button disabled={isSubmitting} className="w-full bg-primary text-on-primary font-label-md text-label-md py-sm rounded-lg hover:opacity-90 transition-opacity flex justify-center items-center gap-sm disabled:opacity-50" type="submit">
                <span className={`material-symbols-outlined ${isSubmitting ? 'animate-spin' : ''}`}>
                  {isSubmitting ? 'sync' : 'send'}
                </span>
                {isSubmitting ? 'Đang gửi...' : 'Dán lên tường'}
              </button>
            </form>
            <div className="mt-xl border-t border-outline-variant/20 pt-md">
              <p className="font-label-md text-label-md text-on-secondary-fixed-variant mb-sm">Gợi ý chủ đề</p>
              <div className="flex flex-wrap gap-xs">
                <span className="bg-secondary-container text-on-secondary-container px-sm py-xs rounded-full font-caption text-caption">#TiếtKiệm</span>
                <span className="bg-secondary-container text-on-secondary-container px-sm py-xs rounded-full font-caption text-caption">#TựHọc</span>
                <span className="bg-secondary-container text-on-secondary-container px-sm py-xs rounded-full font-caption text-caption">#ĐạoĐức</span>
                <span className="bg-secondary-container text-on-secondary-container px-sm py-xs rounded-full font-caption text-caption">#ThanhNiên</span>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <div className="flex items-center gap-md mb-lg overflow-x-auto pb-sm scrollbar-hide">
              <button className="whitespace-nowrap px-md py-xs rounded-full bg-primary text-on-primary font-label-md text-label-md">Tất cả</button>
              <button className="whitespace-nowrap px-md py-xs rounded-full bg-surface-container border border-outline-variant/30 text-on-surface-variant font-label-md text-label-md hover:bg-secondary-container transition-colors">Tiết kiệm</button>
              <button className="whitespace-nowrap px-md py-xs rounded-full bg-surface-container border border-outline-variant/30 text-on-surface-variant font-label-md text-label-md hover:bg-secondary-container transition-colors">Tự học</button>
              <button className="whitespace-nowrap px-md py-xs rounded-full bg-surface-container border border-outline-variant/30 text-on-surface-variant font-label-md text-label-md hover:bg-secondary-container transition-colors">Đạo đức</button>
              <button className="whitespace-nowrap px-md py-xs rounded-full bg-surface-container border border-outline-variant/30 text-on-surface-variant font-label-md text-label-md hover:bg-secondary-container transition-colors">Cộng đồng</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-md items-start">
              <div className="sticky-note bg-[#FFE8D6] p-md rounded-lg border border-black/5 shadow-sm rotate-1 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center opacity-20">
                  <span className="material-symbols-outlined text-primary text-[32px]">push_pin</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface mb-md">"Mình luôn tâm niệm lời Bác về việc tự học. Mỗi ngày dành ra 30 phút đọc sách không chỉ là nạp kiến thức mà là rèn luyện kỷ luật."</p>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="font-label-md text-label-md text-primary">@MinhQuan_K68</div>
                    <div className="font-caption text-caption text-on-surface-variant opacity-60">Cam kết: Tự học</div>
                  </div>
                  <button className="text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                    <span className="font-label-md text-label-md">24</span>
                  </button>
                </div>
              </div>

              <div className="sticky-note bg-[#D4E2F5] p-md rounded-lg border border-black/5 shadow-sm -rotate-2">
                <p className="font-body-md text-body-md text-on-surface mb-md">"Học cách tiết kiệm từ những việc nhỏ nhất như tắt điện khi rời phòng học. Đó cũng là cách yêu nước thực tế nhất."</p>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="font-label-md text-label-md text-primary">Ẩn danh</div>
                    <div className="font-caption text-caption text-on-surface-variant opacity-60">Cam kết: Tiết kiệm</div>
                  </div>
                  <button className="text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">favorite</span>
                    <span className="font-label-md text-label-md">12</span>
                  </button>
                </div>
              </div>

              <div className="sticky-note bg-[#E2F0CB] p-md rounded-lg border border-black/5 shadow-sm rotate-2">
                <p className="font-body-md text-body-md text-on-surface mb-md">"Di chúc của Bác nhắc nhở mình về trách nhiệm của thế hệ trẻ. Mình hứa sẽ cống hiến hết mình cho các dự án thiện nguyện sắp tới."</p>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="font-label-md text-label-md text-primary">Thanh_Huyen</div>
                    <div className="font-caption text-caption text-on-surface-variant opacity-60">Cam kết: Phụng sự</div>
                  </div>
                  <button className="text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                    <span className="font-label-md text-label-md">45</span>
                  </button>
                </div>
              </div>

              <div className="sticky-note bg-[#F5D4E2] p-md rounded-lg border border-black/5 shadow-sm -rotate-1">
                <p className="font-body-md text-body-md text-on-surface mb-md">"Đạo đức cách mạng không phải là cái gì xa vời, nó là lòng trung thực trong thi cử và sự tử tế với bạn bè."</p>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="font-label-md text-label-md text-primary">GenZ_HocBac</div>
                    <div className="font-caption text-caption text-on-surface-variant opacity-60">Cam kết: Đạo đức</div>
                  </div>
                  <button className="text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">favorite</span>
                    <span className="font-label-md text-label-md">31</span>
                  </button>
                </div>
              </div>

              <div className="md:col-span-2 mt-md rounded-xl overflow-hidden border border-outline-variant/30 h-64 relative group">
                <img alt="Student Community" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIYo2LB5D7H5C4P1nSHZJhZtwoHaTpgkTO3HiD7yPRr2Fb3gWe4zb781DwB1AYG8MPd9cqKDrm-ksmm9XQI2IHLt55x6Nj039q21YhpEpNw_bawBFoOCTo0xx-POV5nIQKrJk0KC-cf0UTAJ3NDLpvDVLZwRFDxtHFLMZhn1yztjF3_oJB38wLDXN_3sG-JxT-kbHJxImhALSsoUTFonZeKMUtipRG1R-rHm3Y7jyEY3lIk_X2_hmrsbb_NwwZVYOCAAMwa9v5lbVY" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-md">
                  <p className="text-on-primary font-headline-md text-headline-md">Hành trình của chúng ta, di sản của Bác.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <button className="fixed bottom-gutter right-gutter w-14 h-14 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform active:scale-95 z-40 md:hidden">
          <span className="material-symbols-outlined text-[28px]">add_comment</span>
        </button>
      </main>

      <footer className="bg-secondary-container w-full py-xl mt-xl border-t border-outline-variant/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg max-w-container-max mx-auto px-gutter">
          <div className="space-y-md">
            <div className="font-headline-md text-headline-md text-primary">Ký Ức Văn Hóa</div>
            <p className="font-caption text-caption text-on-secondary-container/80">Một dự án của sinh viên Đại học Quốc gia TP.HCM về việc gìn giữ và lan tỏa tư tưởng Hồ Chí Minh trong thời đại số.</p>
          </div>
          <div>
            <h3 className="font-label-md text-label-md text-on-secondary-container mb-md">Liên kết nhanh</h3>
            <ul className="space-y-sm">
              <li><a className="font-caption text-caption text-on-secondary-container/80 hover:text-primary underline underline-offset-4 transition-opacity" href="#">Về dự án</a></li>
              <li><a className="font-caption text-caption text-on-secondary-container/80 hover:text-primary underline underline-offset-4 transition-opacity" href="#">Chính sách bảo mật</a></li>
              <li><a className="font-caption text-caption text-on-secondary-container/80 hover:text-primary underline underline-offset-4 transition-opacity" href="#">Liên hệ</a></li>
              <li><a className="font-caption text-caption text-on-secondary-container/80 hover:text-primary underline underline-offset-4 transition-opacity" href="#">Tư liệu tham khảo</a></li>
            </ul>
          </div>
          <div className="space-y-md">
            <h3 className="font-label-md text-label-md text-on-secondary-container">Theo dõi hành trình</h3>
            <div className="flex gap-md">
              <span className="material-symbols-outlined text-on-secondary-container opacity-80 hover:opacity-100 cursor-pointer">social_leaderboard</span>
              <span className="material-symbols-outlined text-on-secondary-container opacity-80 hover:opacity-100 cursor-pointer">share</span>
              <span className="material-symbols-outlined text-on-secondary-container opacity-80 hover:opacity-100 cursor-pointer">mail</span>
            </div>
            <p className="font-caption text-caption text-on-secondary-container/60 mt-md">© 2026 Ký Ức Văn Hóa - Hành trình Di sản Hồ Chí Minh</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
