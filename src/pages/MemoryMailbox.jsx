import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const quotesData = [
  {
    id: 1,
    text: "Gạo đem vào giã bao đau đớn,\nGạo giã xong rồi trắng tựa bông.\nSống ở trên đời người cũng vậy,\nGian nan rèn luyện mới thành công.",
    theme: "Rèn luyện",
    source: "Bài thơ \"Nghe tiếng giã gạo\" — Nhật ký trong tù, 1942",
    hasStory: true,
    storyTitle: "Sự hủy diệt để tái sinh",
    context: "Thưa thầy cô và các bạn, bài thơ này được Bác viết năm 1942, từ trong ngục tối Quảng Tây. Khi nghe tiếng chày giã gạo chát chúa nện xuống cối đá, Bác nhìn thấy thân phận con người. Hạt gạo bị đập nát lớp vỏ sần sùi, chịu lực ép nghiền nát để lộ ra phần lõi trắng. Sự trưởng thành không bao giờ là một con đường êm ái, nó là một quá trình bị cuộc đời 'giã' liên tục, bị chèn ép đến mức tưởng chừng tan nát cả thể xác lẫn tinh thần.",
    modern: "Ngày nay, chúng ta thường nói với nhau những lời hoa mỹ về việc 'bước ra khỏi vùng an toàn'. Nhưng thực chất, đó là việc bạn phải chấp nhận để cho áp lực cuộc sống, những deadline nghẹt thở, những lần thất bại trần trụi... 'đập' nát cái tôi yếu ớt của mình. Đừng sợ hãi sự đau đớn. Bởi vì chỉ khi lớp vỏ ngây thơ bị nghiền nát, bản thể cứng cáp và sắc bén nhất của bạn mới thực sự được sinh ra."
  },
  {
    id: 2,
    text: "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người.",
    theme: "Con người",
    source: "Lớp học chính trị của giáo viên, năm 1958",
    hasStory: true,
    storyTitle: "Sự nghiệp nâng cấp con người",
    context: "Mùa xuân năm 1958, Bác đã mượn ý của người xưa để nhấn mạnh chữ 'Trồng'. Trồng cây cần đất tốt, nước trong. 'Trồng người' cũng cần một môi trường văn minh, không độc hại. Đối với Bác, con người luôn là trung tâm của mọi sự phát triển, mọi cuộc cách mạng cuối cùng đều phải hướng tới hạnh phúc thực sự của nhân dân.",
    modern: "Sự nghiệp 'trồng người' của thế kỷ 21 chính là quá trình chúng ta không ngừng tự nâng cấp bản thân. Trong kỷ nguyên công nghệ phát triển vũ bão, máy móc có thể tính toán nhanh hơn, code giỏi hơn chúng ta. Nhưng tri thức, đạo đức, sự thấu cảm và trách nhiệm – những giá trị 'người' nhất – là thứ công nghệ không bao giờ thay thế được."
  },
  {
    id: 3,
    text: "Trời có bốn mùa: Xuân, Hạ, Thu, Đông.\nĐất có bốn phương: Đông, Tây, Nam, Bắc.\nNgười có bốn đức: Cần, Kiệm, Liêm, Chính.\nThiếu một mùa, thì không thành trời.\nThiếu một phương, thì không thành đất.\nThiếu một đức, thì không thành người.",
    theme: "Đạo đức",
    source: "Báo Cứu Quốc, tháng 6/1949",
    hasStory: true,
    storyTitle: "Mã nguồn đạo đức cốt lõi",
    context: "Giữa lúc cuộc kháng chiến năm 1949 đang vô cùng cam go, Bác không dùng những lý luận chính trị khô khan. Bác mượn ngay quy luật bất biến của vũ trụ – Trời ắt phải có 4 mùa, Đất ắt phải có 4 phương – để khẳng định: Cần, Kiệm, Liêm, Chính là cấu trúc nền tảng của một con người. Mất đi một yếu tố, toàn bộ cấu trúc đó sẽ sụp đổ.",
    modern: "4 chữ này không hề cũ, nó chính là bộ kỹ năng sinh tồn trong thời đại số:\n\n• Cần: Là sự chủ động cập nhật kiến thức liên tục để không bị tụt hậu.\n\n• Kiệm: Là tư duy tối ưu hóa. Tiết kiệm quỹ thời gian thay vì lướt mạng vô thức. Nó giống như nguyên tắc giữ mọi thứ đơn giản và gọn gàng, loại bỏ sự rườm rà để tập trung vào giá trị cốt lõi.\n\n• Liêm: Là sự minh bạch, không 'sống ảo' hay chạy theo những giá trị vật chất phù phiếm.\n\n• Chính: Là tính chính trực, dám bảo vệ cái đúng và hành xử văn minh, có trách nhiệm với từng cú click chuột của mình trên không gian mạng."
  },
  {
    id: 4,
    text: "Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì.",
    theme: "Con người",
    source: "Thư gửi Ủy ban nhân dân các bộ, tỉnh, huyện và làng, 1945"
  },
  {
    id: 5,
    text: "Có tài mà không có đức là người vô dụng, có đức mà không có tài thì làm việc gì cũng khó.",
    theme: "Con người",
    source: "Bài nói chuyện tại Trường Sư phạm Trung ương, 1956"
  },
  {
    id: 6,
    text: "Đời sống mới không phải cái gì cũ cũng bỏ hết, không phải cái gì mới cũng làm theo.",
    theme: "Đạo đức",
    source: "Tác phẩm \"Đời sống mới\", 1947"
  },
  {
    id: 7,
    text: "Mình đánh giá người khác thế nào thì người khác cũng đánh giá mình thế ấy.",
    theme: "Đạo đức",
    source: "Bài nói tại lớp chỉnh huấn cán bộ, 1953"
  },
  {
    id: 8,
    text: "Văn hóa phải soi đường cho quốc dân đi.",
    theme: "Văn hóa",
    source: "Hội nghị Văn hóa toàn quốc lần thứ nhất, 1946"
  },
  {
    id: 9,
    text: "Học hỏi là một việc phải tiếp tục suốt đời. Không ai có thể tự cho mình đã biết đủ rồi, biết hết rồi.",
    theme: "Văn hóa",
    source: "Bài nói tại lớp bổ túc văn hóa cán bộ Trung ương, 1959"
  },
  {
    id: 10,
    text: "Thực tiễn không có lý luận hướng dẫn thì thành thực tiễn mù quáng. Lý luận mà không liên hệ với thực tiễn là lý luận suông.",
    theme: "Văn hóa",
    source: "Bài nói tại lớp học chính trị khóa I Trường Đại học Nhân dân Việt Nam, 1955"
  }
];

export default function MemoryMailbox() {
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [activeTab, setActiveTab] = useState("Tất cả");
  const [countdown, setCountdown] = useState(3);
  const [showDetails, setShowDetails] = useState(false);
  const [copied, setCopied] = useState(false);
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-primary border-b-2 border-primary pb-1 font-bold font-body-md text-body-md"
      : "text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md";
  };

  // Timer logic for storytelling envelope
  useEffect(() => {
    let timer;
    if (selectedQuote && selectedQuote.hasStory && !showDetails) {
      setCountdown(3);
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setShowDetails(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [selectedQuote, showDetails]);

  const handleOpenQuote = (quote) => {
    setSelectedQuote(quote);
    setCopied(false);
    if (quote.hasStory) {
      setShowDetails(false);
      setCountdown(3);
    } else {
      setShowDetails(true);
    }
  };

  const handleSkipCountdown = () => {
    setShowDetails(true);
    setCountdown(0);
  };

  const handleCloseModal = () => {
    setSelectedQuote(null);
    setShowDetails(false);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Filter quotes
  const filteredQuotes = activeTab === "Tất cả"
    ? quotesData
    : quotesData.filter(q => q.theme === activeTab);

  return (
    <div className="bg-background text-on-background lotus-bg paper-texture min-h-screen flex flex-col pt-20">
      <style>{`
        .quote-card {
          background: #fcf9f8;
          border: 1px solid rgba(140, 113, 110, 0.15);
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .quote-card:hover {
          border-color: #801318;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(128, 19, 24, 0.05);
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.4s ease-out forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30">
        <div className="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto">
          <Link to="/" className="font-display-md text-display-md text-primary tracking-tight">Ký Ức Văn Hóa</Link>
          <div className="hidden md:flex items-center gap-lg">
            <Link className={getLinkClass('/')} to="/">Trang chủ</Link>
            <Link className={getLinkClass('/map')} to="/map">Bản đồ số</Link>
            <Link className={getLinkClass('/mailbox')} to="/mailbox">Hộp thư ký ức</Link>
            <Link className={getLinkClass('/quiz')} to="/quiz">Trắc nghiệm</Link>
          </div>
          <div className="w-10"></div> {/* Spacer */}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow max-w-4xl mx-auto px-gutter py-xl w-full">
        
        {/* Simple Page Header */}
        <header className="text-center max-w-2xl mx-auto mb-xl mt-6">
          <span className="text-primary font-label-md text-label-md tracking-[0.2em] uppercase mb-xs block">Ngăn kéo thời gian</span>
          <h1 className="font-display-lg text-display-lg text-primary font-serif font-bold leading-tight mb-xs">
            Hộp Thư Ký Ức
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Tuyển chọn 10 lời dạy di sản của Chủ tịch Hồ Chí Minh. Nhấp chọn một tấm bưu thiếp để chiêm nghiệm sâu và sao chép.
          </p>
        </header>

        {/* Minimalist Tabs Filter */}
        <div className="flex justify-center flex-wrap gap-xs mb-xl">
          {["Tất cả", "Rèn luyện", "Con người", "Đạo đức", "Văn hóa"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-md py-1.5 rounded-full font-label-md text-xs transition-all border cursor-pointer ${activeTab === tab ? 'bg-primary text-on-primary border-primary' : 'bg-surface hover:bg-surface-container border-outline-variant/30 text-on-surface-variant'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md animate-fade-in-up">
          {filteredQuotes.map((quote) => (
            <div 
              key={quote.id} 
              onClick={() => handleOpenQuote(quote)}
              className="quote-card p-lg rounded-xl cursor-pointer flex flex-col justify-between min-h-[160px] relative"
            >
              <div className="space-y-sm">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-primary/75 font-bold uppercase tracking-wider">
                    {quote.theme}
                  </span>
                  {quote.hasStory && (
                    <span className="text-[10px] text-tertiary font-bold uppercase tracking-wider flex items-center gap-xs">
                      ✨ Kể chuyện
                    </span>
                  )}
                </div>
                <blockquote className="font-serif text-body-md text-on-surface leading-relaxed italic">
                  "{quote.text.length > 100 ? `${quote.text.substring(0, 95)}...` : quote.text}"
                </blockquote>
              </div>
              <p className="font-caption text-caption text-on-surface-variant/70 mt-md pt-sm border-t border-outline-variant/10">
                — {quote.source.split("—")[0]}
              </p>
            </div>
          ))}
        </div>

      </main>

      {/* Unified Dialogue Modal */}
      {selectedQuote && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-md bg-black/60 backdrop-blur-sm transition-all duration-300">
          <div className="bg-[#fdfcf7] border border-primary/20 p-lg md:p-xl rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col relative overflow-hidden isolate animate-bloom-card">
            
            {/* Soft Paper Texture Background */}
            <div className="paper-texture absolute inset-0 opacity-10 pointer-events-none z-0"></div>

            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors cursor-pointer w-8 h-8 rounded-full border border-outline-variant/30 bg-white/70 backdrop-blur-xs flex items-center justify-center z-20"
              title="Đóng"
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>

            {/* Scrollable Container */}
            <div className="flex-grow overflow-y-auto custom-scrollbar relative z-10 pr-xs my-xs space-y-md text-center py-sm">
              
              {/* Header Label */}
              <span className="text-[10px] text-primary/80 font-bold uppercase tracking-widest block">
                Chủ đề: {selectedQuote.theme}
              </span>

              {/* Large quote */}
              <div className="py-md border-y border-outline-variant/20 relative">
                <blockquote className="font-serif text-headline-md md:text-headline-lg text-primary italic font-medium leading-relaxed max-w-xl mx-auto whitespace-pre-line">
                  "{selectedQuote.text}"
                </blockquote>
                <p className="font-caption text-caption text-secondary uppercase tracking-widest mt-sm">
                  — {selectedQuote.source} —
                </p>
              </div>

              {/* Storytelling logic for Quote 1, 2, 3 */}
              {selectedQuote.hasStory && (
                <div className="mt-md">
                  {!showDetails ? (
                    /* Elegant minimalist countdown loader */
                    <div className="py-md space-y-md">
                      <div className="flex items-center justify-center gap-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></div>
                        <span className="font-label-md text-xs text-primary font-bold">Đang suy ngẫm thông điệp ({countdown}s)...</span>
                      </div>
                      <button 
                        onClick={handleSkipCountdown}
                        className="text-xs text-on-surface-variant hover:text-primary underline cursor-pointer"
                      >
                        Xem diễn giải bối cảnh ngay
                      </button>
                    </div>
                  ) : (
                    /* The clean storytelling panels */
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-md text-left pt-sm animate-fade-in-up">
                      <div className="bg-[#fcfaf4] border border-[#dfbfbc]/30 p-md rounded-xl space-y-xs">
                        <h4 className="font-serif font-bold text-primary flex items-center gap-xs text-body-md border-b border-primary/10 pb-xs">
                          <span className="material-symbols-outlined text-sm">history</span> Bối cảnh lịch sử
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-justify whitespace-pre-line">
                          {selectedQuote.context}
                        </p>
                      </div>
                      
                      <div className="bg-[#f5f7f9] border border-[#b8c9d9]/30 p-md rounded-xl space-y-xs">
                        <h4 className="font-serif font-bold text-tertiary flex items-center gap-xs text-body-md border-b border-tertiary/10 pb-xs">
                          <span className="material-symbols-outlined text-sm">eco</span> Liên hệ hiện tại
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-justify whitespace-pre-line">
                          {selectedQuote.modern}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Actions footer */}
            <div className="pt-md border-t border-outline-variant/10 flex-shrink-0 z-10 flex justify-between items-center">
              <button
                onClick={() => handleCopy(selectedQuote.text)}
                className={`font-label-md text-xs flex items-center gap-xs cursor-pointer border px-md py-1.5 rounded-lg transition-colors ${copied ? 'border-tertiary text-tertiary font-bold bg-tertiary/5' : 'border-outline-variant/30 text-on-surface-variant hover:bg-surface-container'}`}
              >
                <span className="material-symbols-outlined text-sm">{copied ? 'done' : 'content_copy'}</span>
                {copied ? 'Đã sao chép!' : 'Sao chép thông điệp'}
              </button>
              
              <button
                onClick={handleCloseModal}
                className="bg-primary text-on-primary px-lg py-1.5 rounded-lg font-label-md text-xs font-bold hover:bg-primary-container transition-colors shadow-sm cursor-pointer"
              >
                Đóng
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
