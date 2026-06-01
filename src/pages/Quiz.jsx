import { useState } from 'react';
import { Link } from 'react-router-dom';

const quizData = [
  {
    q: "Bạn thường làm gì khi nhận thấy mình có một khoản tiền dư nhỏ cuối tháng?",
    options: [
      "Dành dụm vào quỹ tiết kiệm cho những dự định lớn trong tương lai.",
      "Mua một món đồ nhỏ tự thưởng cho bản thân sau thời gian làm việc vất vả.",
      "Sử dụng để mời bạn bè một bữa cà phê thân mật."
    ]
  },
  {
    q: "Khi đối mặt với một kỹ năng mới cần học (như ngoại ngữ hay code), cách tiếp cận của bạn là:",
    options: [
      "Tự mày mò, tìm kiếm tài liệu từ mọi nguồn có thể.",
      "Đăng ký ngay một khóa học bài bản để có người hướng dẫn.",
      "Học cùng nhóm bạn để có động lực trao đổi."
    ]
  },
  {
    q: "Nếu thấy một người bạn đang lãng phí thực phẩm hoặc tài nguyên công cộng, bạn sẽ:",
    options: [
      "Khéo léo nhắc nhở bằng cách lấy chính mình làm gương.",
      "Im lặng vì không muốn làm mất lòng bạn.",
      "Góp ý thẳng thắn về giá trị của sự tiết kiệm."
    ]
  }
];

export default function Quiz() {
  const [started, setStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [finished, setFinished] = useState(false);
  const [animating, setAnimating] = useState(false);

  const startQuiz = () => {
    setStarted(true);
  };

  const nextQuestion = () => {
    setAnimating(true);
    setTimeout(() => {
      if (currentStep < quizData.length - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        setFinished(true);
      }
      setAnimating(false);
    }, 300);
  };

  const percent = Math.round(((currentStep + 1) / quizData.length) * 100);
  const question = quizData[currentStep];

  return (
    <div className="bg-background text-on-background font-body-md paper-texture min-h-screen flex flex-col">
      <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30">
        <div className="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto">
          <div className="font-display-md text-display-md text-primary tracking-tight">Ký Ức Văn Hóa</div>
          <div className="hidden md:flex items-center gap-lg">
            <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/">Trang chủ</Link>
            <Link className="font-label-md text-label-md text-primary border-b-2 border-primary pb-1 font-bold" to="/quiz">Trắc nghiệm</Link>
            <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/map">Bản đồ số</Link>
          </div>
          <button className="bg-primary text-on-primary px-lg py-2 rounded-lg font-label-md text-label-md hover:opacity-90 transition-all scale-95 active:scale-90">
            Đăng nhập
          </button>
        </div>
      </nav>

      <main className="flex-grow pt-32 pb-xl px-gutter max-w-container-max mx-auto w-full">
        {!started && (
          <header className="text-center max-w-3xl mx-auto mb-xl">
            <span className="text-primary font-label-md text-label-md tracking-[0.2em] uppercase mb-sm block">Khám phá bản thân</span>
            <h1 className="font-display-lg text-display-lg text-primary mb-md">Lối sống của bạn tương đồng với câu chuyện nào của Bác?</h1>
            <p className="font-body-lg text-body-lg text-secondary mb-lg">
              Mỗi hành động nhỏ trong cuộc sống hiện đại đều mang trong mình những giá trị văn hóa cốt lõi. Hãy cùng tìm hiểu xem triết lý sống của bạn gặp gỡ tư tưởng Hồ Chí Minh ở câu chuyện lịch sử nào.
            </p>
            <button onClick={startQuiz} className="inline-flex items-center gap-sm bg-primary text-on-primary px-xl py-md rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all group">
              BẮT ĐẦU TRẮC NGHIỆM
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </header>
        )}

        {started && !finished && (
          <section className="max-w-2xl mx-auto animate-bloom">
            <div className="mb-xl">
              <div className="flex justify-between items-end mb-sm">
                <span className="font-label-md text-label-md text-primary">Câu hỏi {currentStep + 1} / {quizData.length}</span>
                <span className="font-caption text-caption text-secondary">{percent}% Hoàn thành</span>
              </div>
              <div className="w-full h-1 bg-outline-variant/30 overflow-hidden">
                <div className="h-full bg-primary transition-all duration-500" style={{ width: `${percent}%` }}></div>
              </div>
            </div>

            <div className={`bg-surface border border-outline-variant/50 p-lg rounded-xl relative overflow-hidden transition-all duration-300 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              <div className="absolute top-0 right-0 p-lg opacity-5 pointer-events-none">
                <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
              </div>
              <div className="relative z-10">
                <h2 className="font-headline-md text-headline-md text-on-surface mb-xl">{question.q}</h2>
                <div className="space-y-md">
                  {question.options.map((opt, i) => (
                    <button key={i} onClick={nextQuestion} className="w-full text-left p-md border border-outline-variant/50 hover:border-primary hover:bg-primary/5 transition-all group flex items-center justify-between quiz-transition">
                      <span className="font-body-md text-body-md">{opt}</span>
                      <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 text-primary transition-opacity">check_circle</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {finished && (
          <section className="max-w-4xl mx-auto animate-bloom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg items-center">
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-surface-variant">
                <img className="w-full h-full object-cover" alt="Result" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMuoeLDYZ5l7_dvqxwhgj88jTV9doObYMqNBTpzeBemoe8t71aCWYFiv6xmDgQNeLdiwP9eX-HkK1-FH6GNCHHbRvP9v0qZlsYadGfGI_dgDh4X14Ypvl8UZZZXc24eQjzH2Han1tNM_jM-LLpw8SIPS0Q4EIVQs29fPnLIMNea8h71u-ZLo-wBi89DLqFcuhRMYXVhmPHQeewVMDIl0Y6eOZNFNI0V4URTYSs3kvbdfz3KGaKYA7KWLJh9q0mVVmhsIyqYSR3arYR" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-lg">
                  <h3 className="font-headline-md text-headline-md text-on-primary">Câu chuyện của bạn:</h3>
                  <p className="font-display-md text-display-md text-white">Chiếc đồng hồ</p>
                </div>
              </div>
              <div className="space-y-md">
                <span className="text-tertiary font-label-md text-label-md tracking-widest uppercase">Kết quả trắc nghiệm</span>
                <h2 className="font-headline-lg text-headline-lg text-primary">Tư duy Kỷ luật & Trân trọng Thời gian</h2>
                <p className="font-body-md text-body-md text-on-surface-variant italic border-l-4 border-tertiary pl-md">
                  "Thời gian quý báu lắm. Khi đã mất đi thì không bao giờ lấy lại được."
                </p>
                <p className="font-body-md text-body-md text-secondary">
                  Lối sống của bạn cho thấy một sự kỷ luật tự giác đáng ngưỡng mộ. Bạn hiểu rõ giá trị của sự tích lũy và biết cách điều phối nguồn lực của mình một cách thông minh. Điều này rất tương đồng với bài học từ câu chuyện "Chiếc đồng hồ" của Bác - bài học về sự phân công lao động và ý thức trách nhiệm trong từng vị trí.
                </p>
                <div className="pt-md flex gap-md">
                  <Link to="/notebook" className="bg-primary text-on-primary px-lg py-md rounded-lg font-label-md text-label-md flex items-center gap-sm">
                    ĐỌC CÂU CHUYỆN ĐẦY ĐỦ
                    <span className="material-symbols-outlined">book</span>
                  </Link>
                  <button onClick={() => window.location.reload()} className="border border-primary text-primary px-lg py-md rounded-lg font-label-md text-label-md flex items-center gap-sm">
                    LÀM LẠI
                    <span className="material-symbols-outlined">refresh</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-secondary-container py-xl mt-xl border-t border-outline-variant/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg max-w-container-max mx-auto px-gutter">
          <div className="space-y-md">
            <div className="font-headline-md text-headline-md text-primary">Ký Ức Văn Hóa</div>
            <p className="font-caption text-caption text-on-secondary-container/80">
              Dự án số hóa và lan tỏa tư tưởng văn hóa Hồ Chí Minh trong cộng đồng sinh viên hiện đại.
            </p>
          </div>
          <div className="flex flex-col gap-sm">
            <a className="font-caption text-caption text-on-secondary-container/80 hover:text-primary underline underline-offset-4 transition-all" href="#">Về dự án</a>
            <a className="font-caption text-caption text-on-secondary-container/80 hover:text-primary underline underline-offset-4 transition-all" href="#">Chính sách bảo mật</a>
          </div>
          <div className="text-right">
            <p className="font-caption text-caption text-on-secondary-container/80">
              © 2026 Ký Ức Văn Hóa - Hành trình Di sản Hồ Chí Minh
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
