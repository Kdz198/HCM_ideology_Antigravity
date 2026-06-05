import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

const quotesData = [
  {
    id: 1,
    text: "Gạo đem vào giã bao đau đớn,\nGạo giã xong rồi trắng tựa bông.\nSống ở trên đời người cũng vậy,\nGian nan rèn luyện mới thành công.",
    theme: "Rèn luyện",
    source: "Bài thơ \"Nghe tiếng giã gạo\" — Nhật ký trong tù, 1942",
    hasStory: true,
    storyTitle: "Sự hủy diệt để tái sinh",
    epigraph: "Năm 1942, giữa ngục tối Quảng Tây, tiếng chày giã gạo vậng về như một lời nhắn gửi từ quá khứ...",
    takeaway: "Hãy nhớ: Viên kim cương phải chịu áp lực hàng triệu năm mới tỏa sáng. Bạn cũng vậy — mỗi lần bị cuộc đời 'giã' là một lần bạn được mài sáng hơn.",
    polaroidImg: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?q=80&w=600&auto=format&fit=crop",
    polaroidCaption: "Hạt gạo qua lửa thử...",
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
    epigraph: "Mùa xuân 1958, trước hàng trăm giáo viên trẻ, Bác đã gieo một hạt giống tư tưởng sẽ nảy mầm suốt nhiều thập kỷ...",
    takeaway: "Công nghệ thay đổi mỗi ngày, nhưng giá trị 'người' thì vĩnh cửu. Hãy đầu tư vào phân bản dài hạn nhất: chính bạn.",
    polaroidImg: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop",
    polaroidCaption: "Giáo dục là giá trị trường tồn...",
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
    epigraph: "Giữa chiến trường khói lửa 1949, Bác không nói về súng đạn — Bác nói về Trời, Đất, và Người...",
    takeaway: "4 chữ Cần – Kiệm – Liêm – Chính không phải khẩu hiệu. Nó là hệ điều hành của một con người hoàn chỉnh. Thiếu một món, hệ thống sụp đổ.",
    polaroidImg: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600&auto=format&fit=crop",
    polaroidCaption: "Những trang sách không phai...",
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
  const [countdown, setCountdown] = useState(3);
  const [modalState, setModalState] = useState('closed');
  const [copied, setCopied] = useState(false);
  const [stamped, setStamped] = useState(false);
  const [transformStyle, setTransformStyle] = useState({});
  const [scrollProgress, setScrollProgress] = useState(0);
  const rightPageRef = useRef(null);
  const location = useLocation();

  const handleRightPageScroll = useCallback(() => {
    if (rightPageRef.current) {
      const el = rightPageRef.current;
      const progress = el.scrollTop / (el.scrollHeight - el.clientHeight);
      setScrollProgress(Math.min(progress, 1));
    }
  }, []);

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-primary border-b-2 border-primary pb-1 font-bold font-body-md text-body-md"
      : "text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md";
  };

  const storyQuotes = quotesData.filter(q => q.hasStory);
  const otherQuotes = quotesData.filter(q => !q.hasStory);

  // Animation Sequence Logic
  useEffect(() => {
    let t;
    if (modalState === 'flying_in') {
      t = setTimeout(() => {
        setTransformStyle({ transform: 'translate(-50%, -50%) scale(1)', opacity: 1 });
        setModalState('countdown');
        setCountdown(3);
      }, 50); // Small delay to let browser paint starting position
    }
    return () => clearTimeout(t);
  }, [modalState]);

  useEffect(() => {
    let timer;
    if (modalState === 'countdown') {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setModalState('opening');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [modalState]);

  useEffect(() => {
    let t1, t2;
    if (modalState === 'opening') {
      // Đợi nắp thư mở ra và thư lướt lên trên rồi chuyển sang book modal (1 giây)
      t1 = setTimeout(() => setModalState('flying'), 1000); 
    } else if (modalState === 'flying') {
      // Kích hoạt transition phóng to cuốn sổ
      t2 = setTimeout(() => setModalState('reading'), 50); 
    }
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [modalState]);

  const handleOpenQuote = (quote, event) => {
    setSelectedQuote(quote);
    setCopied(false);
    setStamped(false);
    setScrollProgress(0);
    
    if (event && quote.hasStory) {
      const rect = event.currentTarget.getBoundingClientRect();
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const ox = rect.left + rect.width / 2;
      const oy = rect.top + rect.height / 2;
      const deltaX = ox - cx;
      const deltaY = oy - cy;
      const scale = rect.width / 400; // approximate scaling of envelope

      setTransformStyle({
        transform: `translate(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px)) scale(${scale})`,
        opacity: 0
      });
      setModalState('flying_in');
    } else if (quote.hasStory) {
      setTransformStyle({ transform: 'translate(-50%, -50%) scale(1)', opacity: 1 });
      setModalState('countdown');
      setCountdown(3);
    } else {
      setModalState('reading'); // Instant open
    }
  };

  const handleCloseModal = () => {
    setSelectedQuote(null);
    setModalState('closed');
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-background text-on-background lotus-bg paper-texture min-h-screen flex flex-col pt-20 relative overflow-hidden">
      
      {/* Warm Spotlight */}
      <div className="spotlight-bg"></div>
      
      {/* Vignette Overlay */}
      <div className="vignette-overlay"></div>
      
      {/* Floating Dust Particles */}
      <div className="dust-particle"></div>
      <div className="dust-particle"></div>
      <div className="dust-particle"></div>
      <div className="dust-particle"></div>
      <div className="dust-particle"></div>
      <div className="dust-particle"></div>
      <div className="dust-particle"></div>
      <div className="dust-particle"></div>

      <style>{`
        .spotlight-bg {
          background: radial-gradient(circle at 50% 30%, rgba(255,235,180,0.35) 0%, rgba(140,113,110,0.05) 60%, transparent 80%);
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          pointer-events: none;
          z-index: 0;
          animation: candleFlicker 4s ease-in-out infinite;
        }
        @keyframes candleFlicker {
          0%, 100% { opacity: 1; }
          25% { opacity: 0.92; }
          50% { opacity: 1; }
          75% { opacity: 0.88; }
        }

        /* Vignette edges */
        .vignette-overlay {
          position: fixed;
          inset: 0;
          box-shadow: inset 0 0 150px 60px rgba(0,0,0,0.3);
          pointer-events: none;
          z-index: 2;
        }

        /* Floating Dust Particles */
        .dust-particle {
          position: fixed;
          width: 3px; height: 3px;
          background: radial-gradient(circle, rgba(212,175,55,0.8), rgba(212,175,55,0));
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
          animation: floatDust linear infinite;
        }
        .dust-particle:nth-child(1) { left: 12%; top: 20%; width: 4px; height: 4px; animation-duration: 12s; animation-delay: 0s; }
        .dust-particle:nth-child(2) { left: 28%; top: 70%; animation-duration: 15s; animation-delay: 2s; }
        .dust-particle:nth-child(3) { left: 55%; top: 15%; width: 5px; height: 5px; animation-duration: 18s; animation-delay: 4s; }
        .dust-particle:nth-child(4) { left: 72%; top: 60%; animation-duration: 14s; animation-delay: 1s; }
        .dust-particle:nth-child(5) { left: 88%; top: 35%; width: 4px; height: 4px; animation-duration: 16s; animation-delay: 3s; }
        .dust-particle:nth-child(6) { left: 40%; top: 80%; animation-duration: 13s; animation-delay: 5s; }
        .dust-particle:nth-child(7) { left: 65%; top: 45%; width: 3px; height: 3px; animation-duration: 17s; animation-delay: 6s; }
        .dust-particle:nth-child(8) { left: 8%; top: 50%; animation-duration: 11s; animation-delay: 7s; }
        @keyframes floatDust {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.8; }
          50% { transform: translateY(-120px) translateX(30px); opacity: 0.5; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-250px) translateX(-20px); opacity: 0; }
        }

        /* Header Wax Seal Pulse */
        .header-seal-pulse {
          animation: sealPulse 3s ease-in-out infinite;
        }
        @keyframes sealPulse {
          0%, 100% { box-shadow: inset 0 0 10px rgba(0,0,0,0.6), 0 4px 6px rgba(0,0,0,0.3), 0 0 0 0 rgba(128,19,24,0); }
          50% { box-shadow: inset 0 0 10px rgba(0,0,0,0.6), 0 4px 6px rgba(0,0,0,0.3), 0 0 15px 5px rgba(128,19,24,0.3); }
        }
        
        /* Typography Header Animations */
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .vintage-title {
          background: linear-gradient(to right, #801318, #4a0b0e, #801318);
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: text-shimmer 4s linear infinite;
        }

        /* Postcards list */
        .vintage-postcard {
          position: relative;
          background: #fdfaf6;
          border: 1px solid rgba(140, 113, 110, 0.2);
          border-radius: 4px;
          box-shadow: 2px 4px 15px rgba(128, 19, 24, 0.08);
          padding: 2.5rem 2rem 2rem;
          transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
          cursor: pointer;
          z-index: 10;
          background-image: repeating-linear-gradient(transparent, transparent 31px, rgba(140, 113, 110, 0.1) 31px, rgba(140, 113, 110, 0.1) 32px);
          background-position: 0 40px;
          min-height: 280px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .vintage-postcard:nth-child(1) { transform: rotate(-2deg); }
        .vintage-postcard:nth-child(2) { transform: rotate(1deg) translateY(10px); }
        .vintage-postcard:nth-child(3) { transform: rotate(-1.5deg); }

        .vintage-postcard:hover {
          transform: translateY(-15px) rotate(0deg);
          box-shadow: 5px 20px 40px rgba(128, 19, 24, 0.15);
          border-color: rgba(128, 19, 24, 0.3);
          z-index: 20;
        }
        .vintage-postcard::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.5) 45%, rgba(255,255,255,0) 50%);
          opacity: 0;
          transition: opacity 0.6s ease, transform 0.6s ease;
          pointer-events: none;
          z-index: 30;
          border-radius: inherit;
        }
        .vintage-postcard:hover::after {
          opacity: 1;
          animation: postcardShimmer 1.5s ease forwards;
        }
        @keyframes postcardShimmer {
          0% { background-position: -200% 0; transform: translateX(-100%); opacity: 0; }
          30% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        .postage-stamp {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 45px;
          height: 55px;
          background: #e8dbce;
          border: 2px dashed white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(128, 19, 24, 0.8);
          opacity: 0.9;
          filter: drop-shadow(1px 1px 2px rgba(0,0,0,0.1));
        }
        .postmark {
          position: absolute;
          top: 30px;
          right: 35px;
          width: 60px;
          height: 60px;
          border: 2px solid rgba(128, 19, 24, 0.3);
          border-radius: 50%;
          color: rgba(128, 19, 24, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotate(-15deg);
          pointer-events: none;
        }
        
        /* Vintage Dossier / Book Modal */
        .book-modal {
          background-color: #e2d5bd; /* Màu giấy ố vàng */
          background-image: 
            linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px);
          background-size: 20px 20px;
          border-radius: 4px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.6), inset 0 0 120px rgba(0,0,0,0.15);
          display: flex;
          overflow: hidden;
          width: 100%;
          max-width: 1000px;
          min-height: 500px;
          max-height: 90vh;
          position: relative;
        }
        .book-modal::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          box-shadow: inset 0 0 60px rgba(80, 50, 20, 0.4);
          z-index: 50;
        }
        .book-page-left {
          background-color: rgba(255,255,255,0.03);
          border-right: 2px solid rgba(80, 50, 20, 0.1);
          box-shadow: inset -10px 0 20px rgba(0,0,0,0.05);
          position: relative;
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow-y: auto;
        }
        .book-page-right {
          padding: 3rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          position: relative;
        }
        
        /* Big Envelope Magical Animations */
        .magical-glow {
          animation: magicalGlow 3s ease-in-out infinite;
        }
        @keyframes magicalGlow {
          0%, 100% { box-shadow: 0 0 30px rgba(128, 19, 24, 0.2), 0 0 60px rgba(212, 175, 55, 0.1); }
          50% { box-shadow: 0 0 50px rgba(128, 19, 24, 0.4), 0 0 90px rgba(212, 175, 55, 0.3); }
        }
        .shimmer-wrapper {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          overflow: hidden;
          border-radius: inherit;
          pointer-events: none;
          z-index: 25;
        }
        .shimmer-line {
          position: absolute;
          top: 0; left: 0; bottom: 0; width: 50%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
          transform: translateX(-150%) skewX(-20deg);
          animation: shimmerSweep 3s infinite 1s;
        }
        @keyframes shimmerSweep {
          0% { transform: translateX(-150%) skewX(-20deg); }
          100% { transform: translateX(250%) skewX(-20deg); }
        }
        .heartbeat-seal {
          animation: heartbeat 1s ease-in-out infinite;
        }
        @keyframes heartbeat {
          0%, 100% { transform: translateX(-50%) scale(1); }
          50% { transform: translateX(-50%) scale(1.15); }
        }
        
        /* Single Card Modal */
        .single-card-modal {
          background-color: #e2d5bd;
          background-image: 
            linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px);
          background-size: 20px 20px;
          border-radius: 4px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.6), inset 0 0 120px rgba(0,0,0,0.15);
          width: 100%;
          max-width: 600px;
          min-height: 400px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          padding: 4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .single-card-modal::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          box-shadow: inset 0 0 60px rgba(80, 50, 20, 0.4);
          z-index: 50;
        }

        /* Scrapbook Decorators */
        .polaroid-photo {
          background: #fdfdfd;
          padding: 12px 12px 45px 12px;
          box-shadow: 2px 4px 15px rgba(0,0,0,0.15), inset 0 0 20px rgba(140, 113, 110, 0.05);
          transform: rotate(2deg);
          position: relative;
          border: 1px solid rgba(140, 113, 110, 0.1);
        }
        .polaroid-img {
          width: 100%;
          height: 140px;
          object-fit: cover;
          filter: sepia(0.6) contrast(1.1) brightness(0.9);
        }
        .washi-tape {
          position: absolute;
          background-color: rgba(235, 225, 210, 0.8);
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          opacity: 0.85;
          z-index: 10;
        }
        .washi-tape::before, .washi-tape::after {
          content: ''; position: absolute; top: 0; bottom: 0; width: 4px;
          background-image: linear-gradient(to right, transparent, rgba(0,0,0,0.05));
        }
        .washi-tape-1 {
          width: 90px; height: 26px;
          top: -12px; left: 50%; transform: translateX(-50%) rotate(-3deg);
        }
        .washi-tape-2 {
          width: 70px; height: 22px;
          top: -10px; right: -20px; transform: rotate(40deg);
          background-color: rgba(210, 180, 160, 0.7);
        }
        .coffee-stain {
          position: absolute;
          width: 140px; height: 140px;
          border-radius: 50%;
          border: 5px solid rgba(107, 52, 17, 0.08);
          border-right-width: 8px;
          border-top-color: rgba(107, 52, 17, 0.03);
          border-bottom-width: 2px;
          filter: blur(1px);
          pointer-events: none;
          z-index: 0;
        }
        .vintage-stamp {
          position: absolute;
          color: #b32d2d;
          border: 4px solid #b32d2d;
          padding: 8px 18px;
          font-family: "Courier New", Courier, monospace;
          font-weight: 900;
          font-size: 1.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          transform: rotate(-18deg);
          pointer-events: none;
          border-radius: 6px;
          z-index: 10;
          mix-blend-mode: multiply;
          opacity: 0.85;
          /* CSS noise overlay for grunge */
          background-image: repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.3) 3px);
        }
        .vintage-stamp::after {
          content: ''; position: absolute; inset: 3px; border: 1px solid #b32d2d; border-radius: 2px;
        }

        /* Dossier Elements */
        .paperclip {
          position: absolute;
          width: 16px;
          height: 50px;
          border: 3px solid #888;
          border-radius: 8px;
          top: -20px; left: 20px;
          transform: rotate(5deg);
          z-index: 25;
          box-shadow: 2px 2px 3px rgba(0,0,0,0.2);
          background: transparent;
        }
        .paperclip::before {
          content: ''; position: absolute;
          width: 8px; height: 35px;
          border: 3px solid #888;
          border-top: none;
          border-radius: 0 0 5px 5px;
          bottom: 2px; left: 1px;
        }
        .vintage-paper-lined {
          background-color: #f4ebd8;
          background-image: repeating-linear-gradient(transparent, transparent 27px, rgba(0,0,0,0.06) 28px);
          padding: 2.5rem 1.5rem 1.5rem 1.5rem;
          box-shadow: 2px 4px 12px rgba(0,0,0,0.15);
          transform: rotate(-1deg);
          font-family: serif;
          position: relative;
        }
        .vintage-paper-lined::before {
          content: ''; position: absolute; top: 0; bottom: 0; left: 25px; width: 2px; background: rgba(180, 40, 40, 0.2);
        }
        .typewriter-memo {
          background-color: #fcfcfc;
          padding: 2rem;
          box-shadow: 1px 3px 10px rgba(0,0,0,0.15);
          border: 1px solid rgba(0,0,0,0.1);
          font-family: "Courier New", Courier, monospace;
          color: #2c2c2a;
          position: relative;
        }
        .blue-ink {
          color: #1a4b8c;
          font-family: 'Caveat', 'Dancing Script', cursive, serif;
          font-size: 1.3rem;
          font-style: italic;
          opacity: 0.85;
          transform: rotate(-2deg);
        }

        /* Wax Seal */
        .wax-seal {
          width: 55px; height: 55px;
          background: #801318;
          border-radius: 50%;
          box-shadow: inset 0 0 10px rgba(0,0,0,0.6), 0 4px 6px rgba(0,0,0,0.3);
          position: absolute;
          display: flex; align-items: center; justify-content: center;
          color: #e6c5c5;
          font-family: serif;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.9);
          z-index: 10;
          border: 2px solid #4a0b0e;
        }
        .wax-seal::before {
          content: ''; position: absolute; inset: 4px; border-radius: 50%; border: 1px dashed #5a0b0d; opacity: 0.5;
        }

        /* Stamp Button */
        .stamp-btn {
          position: relative;
          cursor: pointer;
          border: 2px solid #801318;
          background: transparent;
          padding: 10px 24px;
          border-radius: 4px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .stamp-btn:hover {
          background: rgba(128,19,24,0.05);
          border-color: #4a0b0e;
        }
        .stamp-btn .seal-icon {
          width: 36px; height: 36px;
          background: #801318;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: #e6c5c5;
          box-shadow: inset 0 0 6px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3);
          border: 2px solid #4a0b0e;
          transition: all 0.3s ease;
        }

        /* Full-screen Stamp Slam Overlay */
        .stamp-overlay {
          position: absolute;
          inset: 0;
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(226,213,189,0.85);
          pointer-events: none;
          animation: overlayFadeIn 0.3s ease forwards;
          overflow: hidden;
        }
        @keyframes overlayFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .stamp-slam {
          width: 280px; height: 280px;
          border: 8px solid #801318;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #801318;
          mix-blend-mode: multiply;
          position: relative;
          animation: slamDown 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0.85;
        }
        .stamp-slam::before {
          content: ''; position: absolute; inset: 8px; border: 3px solid #801318; border-radius: 50%;
        }
        .stamp-slam::after {
          content: ''; position: absolute; inset: 16px; border: 1px dashed #801318; border-radius: 50%; opacity: 0.5;
        }
        .stamp-slam-text {
          font-family: 'Courier New', Courier, monospace;
          font-weight: 900;
          font-size: 1.8rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-align: center;
          line-height: 1.3;
        }
        .stamp-slam-date {
          font-family: 'Courier New', Courier, monospace;
          font-size: 0.85rem;
          letter-spacing: 0.15em;
          margin-top: 8px;
          opacity: 0.7;
        }
        .stamp-slam-icon {
          font-size: 2.5rem;
          margin-bottom: 8px;
        }
        @keyframes slamDown {
          0% { transform: scale(3) rotate(-25deg); opacity: 0; }
          60% { transform: scale(0.9) rotate(2deg); opacity: 0.9; }
          80% { transform: scale(1.05) rotate(-1deg); opacity: 0.85; }
          100% { transform: scale(1) rotate(0deg); opacity: 0.85; }
        }
        .stamp-shockwave {
          position: absolute;
          width: 300px; height: 300px;
          border: 3px solid rgba(128,19,24,0.3);
          border-radius: 50%;
          animation: shockwave 0.8s ease-out forwards;
        }
        @keyframes shockwave {
          0% { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(2.5); opacity: 0; }
        }

        /* Reading Progress Bar */
        .reading-progress {
          position: sticky;
          top: 0;
          z-index: 30;
          height: 3px;
          background: rgba(0,0,0,0.05);
          margin: -3rem -3rem 1rem -3rem;
          border-radius: 0 0 2px 2px;
          overflow: hidden;
        }
        .reading-progress-fill {
          height: 100%;
          background: linear-gradient(to right, #801318, #d4af37);
          transition: width 0.15s ease-out;
          border-radius: inherit;
        }

        /* Torn Paper Takeaway */
        .torn-paper {
          background: #f9f3e3;
          padding: 1.5rem 1.8rem;
          position: relative;
          box-shadow: 2px 4px 10px rgba(0,0,0,0.12);
          transform: rotate(1deg);
          margin-top: 1rem;
        }
        .torn-paper::before {
          content: '';
          position: absolute;
          top: -8px; left: 0; right: 0; height: 8px;
          background: linear-gradient(135deg, #f9f3e3 33.33%, transparent 33.33%) -12px 0,
                      linear-gradient(225deg, #f9f3e3 33.33%, transparent 33.33%) -12px 0;
          background-size: 16px 8px;
        }

        /* Dossier Cover & Telegram */
        .dossier-cover-bg {
          background-image: 
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .telegram-card {
          background-color: #f3ecd6;
          border: 1px solid rgba(0,0,0,0.1);
          padding: 1.8rem 1.5rem;
          box-shadow: 2px 5px 15px rgba(0,0,0,0.2);
          position: relative;
          width: 95%;
          margin: 0 auto;
          transform: rotate(-1.5deg);
        }

        /* 3D Envelope Animation Logic */
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .rotate-x-180 { transform: rotateX(180deg); opacity: 0; }
        
        /* Staggered Text Animations */
        .stagger-1 { opacity: 0; animation: fadeInText 1s forwards 0.3s; }
        .stagger-2 { opacity: 0; animation: fadeInText 1s forwards 0.8s; }
        .stagger-3 { opacity: 0; animation: fadeInText 1s forwards 1.3s; }
        .stagger-4 { opacity: 0; animation: fadeInText 1s forwards 1.8s; }
        
        @keyframes fadeInText {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Marquee Film Strips */
        .marquee-wrapper {
          display: flex;
          overflow: hidden;
          width: 100vw;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          padding: 2rem 0;
        }
        .marquee-wrapper::before, .marquee-wrapper::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0; width: 15vw; z-index: 2; pointer-events: none;
        }
        .marquee-wrapper::before {
          left: 0; background: linear-gradient(to right, #fcf9f8, transparent);
        }
        .marquee-wrapper::after {
          right: 0; background: linear-gradient(to left, #fcf9f8, transparent);
        }
        .marquee-content {
          display: flex; width: max-content; animation: scrollX 40s linear infinite;
        }
        .marquee-content:hover { animation-play-state: paused; }
        @keyframes scrollX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .film-strip {
          background: #1a1a1a;
          border-radius: 4px;
          padding: 16px 6px;
          box-shadow: 2px 2px 10px rgba(0,0,0,0.4);
          transition: all 0.4s ease;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: 
            radial-gradient(circle, transparent 3px, #1a1a1a 4px),
            radial-gradient(circle, transparent 3px, #1a1a1a 4px);
          background-size: 20px 20px;
          background-position: top center, bottom center;
          background-repeat: repeat-x;
          cursor: pointer;
        }
        .film-strip::before {
          /* White circles to simulate holes if background-image fails */
          content: ''; position: absolute; top: 4px; left: 0; right: 0; height: 8px;
          background-image: radial-gradient(circle, #fcf9f8 3px, transparent 4px);
          background-size: 20px 8px;
        }
        .film-strip::after {
          content: ''; position: absolute; bottom: 4px; left: 0; right: 0; height: 8px;
          background-image: radial-gradient(circle, #fcf9f8 3px, transparent 4px);
          background-size: 20px 8px;
        }
        .film-inner {
          background: #fdfaf6;
          border-radius: 2px;
          height: 100%;
          width: 100%;
          box-shadow: inset 0 0 20px rgba(140, 113, 110, 0.4);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 1rem 1.5rem;
          filter: sepia(0.6) contrast(1.1);
          transition: all 0.4s ease;
        }
        .film-strip:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 4px 15px 30px rgba(128, 19, 24, 0.2);
          z-index: 20;
        }
        .film-strip:hover .film-inner {
          filter: sepia(0) contrast(1);
          background: #fff;
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
          <div className="w-10"></div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-gutter w-full relative z-10 flex flex-col justify-between h-[calc(100vh-80px)] pt-6 pb-4">
        
        {/* Compact Header */}
        <header className="flex items-center justify-center gap-4 flex-shrink-0" style={{ animation: 'fadeSlideUp 1s ease-out forwards' }}>
          <div className="h-px w-12 bg-primary/30"></div>
          <div className="wax-seal header-seal-pulse" style={{width: '28px', height: '28px', position: 'relative'}}>
            <span className="material-symbols-outlined text-[14px] relative z-10">history_edu</span>
          </div>
          <h1 className="vintage-title font-serif text-2xl md:text-3xl font-bold text-primary drop-shadow-sm">
            Hộp Thư Ký Ức
          </h1>
          <div className="h-px w-12 bg-primary/30"></div>
        </header>

        {/* Featured Story Postcards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20 px-4 md:px-0 flex-shrink-0">
          {storyQuotes.map((quote) => (
            <div 
              key={quote.id} 
              onClick={(e) => handleOpenQuote(quote, e)}
              className="vintage-postcard"
              style={{ animation: 'fadeSlideUp 1s ease-out forwards' }}
            >
              <div className="postage-stamp">
                <span className="material-symbols-outlined text-[24px]">local_florist</span>
              </div>
              <div className="postmark">
                <span className="font-serif text-[10px] uppercase font-bold tracking-widest">1945</span>
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-4">
                  <span className="text-[10px] text-primary/80 font-bold uppercase tracking-[0.2em] block mb-4 bg-white/60 inline-block px-2 py-1 rounded">
                    {quote.theme}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-primary font-medium leading-snug mb-2 drop-shadow-sm">
                    {quote.storyTitle}
                  </h3>
                </div>
                
                <div className="mt-auto pt-6 flex justify-between items-center text-tertiary">
                  <p className="font-serif text-sm text-on-surface-variant/70 italic">
                    Nhấp để mở thư...
                  </p>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-lg">auto_awesome</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">Kể chuyện</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee Paper Strips */}
        {otherQuotes.length > 0 && (
          <div className="relative z-10 flex-shrink-0" style={{ animation: 'fadeSlideUp 1.5s ease-out forwards' }}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-outline-variant/30"></div>
              <h3 className="text-center font-label-md text-sm text-on-surface-variant uppercase tracking-[0.3em]">
                Dòng chảy thời gian
              </h3>
              <div className="h-px w-12 bg-outline-variant/30"></div>
            </div>
            
            <div className="marquee-wrapper">
              <div className="marquee-content gap-6">
                {[...otherQuotes, ...otherQuotes, ...otherQuotes].map((quote, index) => (
                  <div 
                    key={`${quote.id}-${index}`} 
                    onClick={(e) => handleOpenQuote(quote, e)}
                    className="film-strip h-[180px] w-[340px] flex-shrink-0"
                  >
                    <div className="film-inner">
                      <span className="text-[9px] text-primary/60 font-bold uppercase tracking-widest block mb-3 text-center border-b border-primary/10 pb-2">
                        {quote.theme}
                      </span>
                      <blockquote className="font-serif text-body-md text-on-surface/90 leading-snug italic mb-4 text-center">
                        "{quote.text.length > 80 ? `${quote.text.substring(0, 75)}...` : quote.text}"
                      </blockquote>
                      <p className="font-caption text-[10px] text-on-surface-variant/70 uppercase tracking-wider mt-auto text-center font-bold">
                        — {quote.source.split("—")[0]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Animation Sequence Modal */}
      {modalState !== 'closed' && selectedQuote && (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm transition-all duration-700 ${modalState === 'flying_in' ? 'opacity-0' : 'opacity-100'}`}>
          
          {/* Phase 1 & 2: Big Envelope (Flying In, Countdown & Opening) */}
          {(modalState === 'flying_in' || modalState === 'countdown' || modalState === 'opening') && (
            <div 
              className={`absolute top-1/2 left-1/2 perspective-1000 w-[400px] h-[260px] transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] z-[105] ${modalState === 'countdown' ? 'magical-glow rounded-lg' : ''}`}
              style={transformStyle}
            >
              
              {/* Back of Envelope */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f2e9e1] to-[#e8dbce] rounded-lg shadow-2xl border border-[#c2aa93] z-0 overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] mix-blend-multiply"></div>
              </div>
              
              {/* The Letter (Slides up during 'opening') */}
              <div className={`absolute left-4 right-4 bg-[#fdfcf7] rounded shadow-inner z-10 transition-all duration-1000 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${modalState === 'opening' ? '-top-32 bottom-8 opacity-0 scale-95' : 'top-4 bottom-4 opacity-100 scale-100'}`}>
                <div className="mx-6 mt-8 h-px bg-outline-variant/10"></div>
                <div className="mx-6 mt-4 h-px bg-outline-variant/10"></div>
                <div className="mx-6 mt-4 h-px bg-outline-variant/10"></div>
              </div>

              {/* Front layers of Envelope */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="absolute bottom-0 left-0 right-0 h-[160px] bg-gradient-to-t from-[#e6d8ca] to-[#fdfaf6] border-t border-[#c2aa93]/40 rounded-b-lg" style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }}></div>
                <div className="absolute top-0 bottom-0 left-0 w-[200px] bg-gradient-to-r from-[#e6d8ca] to-[#fcf8f3]" style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>
                <div className="absolute top-0 bottom-0 right-0 w-[200px] bg-gradient-to-l from-[#e6d8ca] to-[#fcf8f3]" style={{ clipPath: 'polygon(100% 0, 0 50%, 100% 100%)' }}></div>
              </div>
              
              {/* Shimmer effect during countdown */}
              {modalState === 'countdown' && (
                <div className="shimmer-wrapper">
                  <div className="shimmer-line"></div>
                </div>
              )}

              {/* Envelope Flap (Rotates up) */}
              <div className={`absolute top-0 left-0 right-0 h-[150px] bg-gradient-to-b from-[#e8dbce] to-[#f7efe8] border-b border-[#c2aa93]/60 z-30 transform-style-3d origin-top transition-all duration-700 ease-in-out ${modalState === 'opening' ? 'rotate-x-180' : 'rotate-x-0'}`} style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}>
                 <div className={`wax-seal bottom-1 left-1/2 -translate-x-1/2 ${modalState === 'countdown' ? 'heartbeat-seal' : ''}`}>
                    {modalState === 'countdown' ? (
                      <span className="font-serif font-bold text-2xl drop-shadow-md relative z-10">{countdown}</span>
                    ) : (
                      <span className="material-symbols-outlined text-[24px] relative z-10">mark_email_read</span>
                    )}
                 </div>
              </div>

              {/* Message below */}
              <div className="absolute -bottom-16 left-0 right-0 text-center text-white/90 font-label-md tracking-[0.2em] uppercase text-[10px] drop-shadow-sm">
                {modalState === 'countdown' ? (
                  <span className="animate-pulse">Đang giải mã phong thư...</span>
                ) : (
                  <span>Đang mở thư...</span>
                )}
              </div>
            </div>
          )}

          {/* Phase 3 & 4: Flying Book Modal (For Quotes with Story) */}
          {(modalState === 'flying' || modalState === 'reading') && selectedQuote.hasStory && (
              <div className={`book-modal flex-col md:flex-row transition-all duration-1000 ease-[cubic-bezier(0.25,0.8,0.25,1)] origin-bottom ${modalState === 'flying' ? 'scale-[0.4] opacity-0 translate-y-32' : 'scale-100 opacity-100 translate-y-0'}`}>
                
                {/* Left Page: Classified Document or Telegram */}
                <div className={`book-page-left w-full md:w-2/5 flex-shrink-0 relative ${selectedQuote.text.length < 150 ? 'dossier-cover-bg' : ''}`}>
                  
                  {selectedQuote.text.length < 150 ? (
                    /* Layout: Bìa Hồ Sơ + Bức Điện Tín (Thư Ngắn) */
                    <>
                      <div className="absolute top-8 left-6 text-[#2c2c2a]/10 font-serif transform -rotate-12 pointer-events-none z-0">
                        <div className="border-[3px] border-[#2c2c2a]/10 px-3 py-1.5 uppercase font-bold text-xl tracking-[0.2em]">Tuyệt Mật</div>
                        <div className="mt-1 text-xs">Kho lưu trữ số 04</div>
                      </div>
                      
                      <div className="telegram-card z-10 mt-4">
                        <div className="paperclip" style={{top: '-20px', left: '50%', transform: 'translateX(-50%)'}}></div>
                        <div className="text-[10px] text-[#2c2c2a]/50 uppercase tracking-widest border-b border-[#2c2c2a]/10 pb-2 mb-5 flex justify-between">
                          <span>Trích lục đính kèm</span>
                          <span>HS: {selectedQuote.theme}</span>
                        </div>
                        <blockquote className="font-serif text-[22px] md:text-[26px] font-medium leading-snug text-[#2c2c2a] mb-6 text-center drop-shadow-sm px-2">
                          "{selectedQuote.text}"
                        </blockquote>
                        <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-[#2c2c2a]/60 text-right mt-5 pt-3 border-t border-[#2c2c2a]/10">
                          Nguồn: {selectedQuote.source}
                        </p>
                      </div>
                    </>
                  ) : (
                    /* Layout: Bản Báo Cáo Toàn Trang (Thư Dài) */
                    <>
                      <div className="absolute top-8 left-8 border-2 border-[#b32d2d]/30 text-[#b32d2d]/40 font-serif font-bold tracking-[0.3em] px-3 py-1 text-xs uppercase transform -rotate-2">
                        TÀI LIỆU MẬT
                      </div>
                      <div className="mb-8 stagger-1 mt-10 relative z-10">
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/60 border-b border-primary/20 pb-1">
                          Hồ sơ: {selectedQuote.theme}
                        </span>
                      </div>
                      
                      <blockquote className="relative z-10 font-serif text-[20px] md:text-[22px] font-medium leading-[1.8] text-[#2c2c2a] mb-8 stagger-2 text-justify">
                        {selectedQuote.text}
                      </blockquote>
                      
                      <p className="relative z-10 font-mono text-xs uppercase tracking-widest text-[#2c2c2a]/60 mt-auto pt-6 border-t border-outline-variant/30 stagger-2">
                        Trích xuất từ: {selectedQuote.source}
                      </p>
                    </>
                  )}

                  <div className="mt-8 pt-6 border-t border-[#2c2c2a]/10 flex justify-center w-full">
                    <button
                      onClick={() => { handleCopy(selectedQuote.text); setStamped(true); setTimeout(() => handleCloseModal(), 2000); }}
                      disabled={stamped}
                      className="stamp-btn w-full justify-center"
                    >
                      <div className="seal-icon flex-shrink-0">
                        <span className="material-symbols-outlined text-[18px]">{stamped ? 'done' : 'approval'}</span>
                      </div>
                      <span className="font-mono text-xs uppercase tracking-widest text-[#2c2c2a]/70">
                        {stamped ? 'Đã lưu trữ!' : 'Đóng dấu lưu trữ'}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Right Page: Scrapbook Timeline */}
                <div className="book-page-right custom-scrollbar relative" ref={rightPageRef} onScroll={handleRightPageScroll}>
                  
                  {/* Reading Progress Bar */}
                  <div className="reading-progress">
                    <div className="reading-progress-fill" style={{width: `${scrollProgress * 100}%`}}></div>
                  </div>

                  {/* Background watermark with parallax */}
                  <span 
                    className="material-symbols-outlined absolute left-1/2 -translate-x-1/2 text-[200px] text-primary/5 pointer-events-none z-0"
                    style={{top: `calc(50% - ${scrollProgress * 60}px)`}}
                  >history_edu</span>

                  {/* Epigraph */}
                  {selectedQuote.epigraph && (
                    <div className="relative z-10 mb-6 stagger-1">
                      <p className="font-serif italic text-[#2c2c2a]/50 text-sm leading-relaxed text-center border-b border-[#2c2c2a]/10 pb-4">
                        <span className="material-symbols-outlined text-sm align-bottom mr-1 opacity-40">format_quote</span>
                        {selectedQuote.epigraph}
                      </p>
                    </div>
                  )}

                  <div className="flex justify-between items-center mb-8 stagger-1 relative z-10">
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary drop-shadow-sm">
                      {selectedQuote.storyTitle || "Suy ngẫm"}
                    </h2>
                  </div>

                  <div className="flex-grow relative z-10">
                    <div className="relative pl-8 pb-4">
                      {/* Timeline line */}
                      <div className="absolute left-[11px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-primary/30 via-tertiary/30 to-transparent stagger-2"></div>
                      
                      {/* Coffee Stain Decorator */}
                      <div className="coffee-stain top-0 right-10 stagger-1"></div>
                      <div className="coffee-stain top-2 right-12 scale-90 rotate-45 opacity-50 stagger-1"></div>
                      
                      {/* History Node (Lined Paper) */}
                      <div className="relative mb-14 stagger-3">
                        <div className="absolute -left-[42px] top-4 w-5 h-5 rounded-full bg-[#e2d5bd] border-[3px] border-primary flex items-center justify-center shadow-md z-10">
                           <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        </div>
                        
                        <div className="vintage-paper-lined z-20">
                          {/* Paperclip */}
                          <div className="paperclip"></div>
                          
                          <h4 className="font-serif font-bold text-[#801318] flex items-center gap-2 text-lg border-b border-[#801318]/20 pb-2 mb-3">
                            <span className="material-symbols-outlined text-lg">history_edu</span> Bối cảnh lịch sử
                          </h4>
                          <p className="text-[#2c2c2a] leading-relaxed text-justify whitespace-pre-line text-[15px]">
                            {selectedQuote.context}
                          </p>
                        </div>
                      </div>

                      {/* Polaroid Image Node */}
                      <div className="relative mb-12 stagger-3">
                        <div className="absolute -left-[42px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#e2d5bd] border-[3px] border-secondary flex items-center justify-center shadow-md z-10">
                           <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                        </div>
                        
                        <div className="flex justify-center pl-4 relative z-20">
                          <div className="polaroid-photo w-3/4 max-w-[280px]">
                            {/* Washi tape 1 */}
                            <div className="washi-tape washi-tape-1"></div>
                            <img 
                              src={selectedQuote.polaroidImg || "https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=600&auto=format&fit=crop"} 
                              alt="Vintage memory" 
                              className="polaroid-img border border-outline-variant/10"
                            />
                            <div className="absolute bottom-3 left-0 right-0 text-center font-serif italic text-on-surface-variant/70 text-xs">
                              {selectedQuote.polaroidCaption || "Ký ức đọng lại..."}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Modern Node (Typewriter Memo) */}
                      <div className="relative mb-12 stagger-4">
                        <div className="absolute -left-[42px] top-4 w-5 h-5 rounded-full bg-[#e2d5bd] border-[3px] border-tertiary flex items-center justify-center shadow-md z-10">
                           <div className="w-1.5 h-1.5 rounded-full bg-tertiary"></div>
                        </div>
                        
                        <div className="typewriter-memo z-20 transform rotate-1">
                          {/* Paperclip */}
                          <div className="paperclip" style={{left: 'auto', right: '30px', transform: 'rotate(-5deg)'}}></div>
                          
                          <h4 className="font-bold flex items-center gap-2 text-base border-b border-[#2c2c2a]/20 pb-2 mb-3 uppercase tracking-widest">
                            <span className="material-symbols-outlined text-base">notes</span> Biên bản đính kèm
                          </h4>
                          <p className="leading-relaxed text-justify whitespace-pre-line text-sm">
                            {selectedQuote.modern}
                          </p>
                        </div>
                      </div>

                      {/* Takeaway — Torn Paper */}
                      <div className="relative pl-2 mt-10 stagger-4">
                        <div className="torn-paper">
                          <div className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-[#801318] text-xl mt-1 flex-shrink-0">auto_awesome</span>
                            <div>
                              <p className="font-serif font-bold text-[#801318] text-sm uppercase tracking-widest mb-2">Lời nhắn gửi hậu thế</p>
                              <p className="font-serif italic text-[#2c2c2a] leading-relaxed text-[15px]">
                                {selectedQuote.takeaway || "Hãy sống xứng đáng với những gì tiền nhân đã gửi gắm."}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>

                </div>

                {/* Stamp Slam Overlay for Book Modal */}
                {stamped && (
                  <div className="stamp-overlay" style={{ borderRadius: '4px' }}>
                    <div className="stamp-shockwave"></div>
                    <div className="stamp-slam">
                      <span className="material-symbols-outlined stamp-slam-icon">verified</span>
                      <div className="stamp-slam-text">ĐÃ<br/>LƯU TRỮ</div>
                      <div className="stamp-slam-date">{new Date().toLocaleDateString('vi-VN')}</div>
                    </div>
                  </div>
                )}
              </div>
          )}

          {/* Phase 3 & 4: Single Card Modal (For Short Quotes) */}
          {(modalState === 'flying' || modalState === 'reading') && !selectedQuote.hasStory && (
              <div className={`single-card-modal transition-all duration-1000 ease-[cubic-bezier(0.25,0.8,0.25,1)] origin-bottom ${modalState === 'flying' ? 'scale-[0.4] opacity-0 translate-y-32' : 'scale-100 opacity-100 translate-y-0'}`}>
                <div className="absolute top-8 left-8 border-2 border-[#b32d2d]/30 text-[#b32d2d]/40 font-serif font-bold tracking-[0.3em] px-3 py-1 text-xs uppercase transform -rotate-2">
                  TÀI LIỆU MẬT
                </div>
                
                <button
                  onClick={handleCloseModal}
                  className="absolute top-6 right-6 text-[#2c2c2a] hover:text-[#b32d2d] transition-colors cursor-pointer w-10 h-10 rounded-full border border-[#2c2c2a]/20 flex items-center justify-center bg-white/30 backdrop-blur-sm shadow-sm z-20"
                >
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
                
                <div className="paperclip" style={{top: '-15px', left: '50%', transform: 'translateX(-50%) rotate(3deg)'}}></div>
                
                <span className="material-symbols-outlined text-5xl text-[#2c2c2a]/10 mb-6 stagger-1">format_quote</span>
                
                <blockquote className="font-serif text-3xl font-medium leading-relaxed text-[#2c2c2a] mb-10 stagger-2 px-8">
                  "{selectedQuote.text}"
                </blockquote>
                
                <div className="stagger-3 mt-auto w-full pt-8 border-t border-[#2c2c2a]/20 flex flex-col items-center relative z-10">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2c2c2a]/60 mb-6 font-bold">
                    Trích từ: {selectedQuote.source}
                  </p>
                  
                  <button
                    onClick={() => { handleCopy(selectedQuote.text); setStamped(true); setTimeout(() => handleCloseModal(), 2000); }}
                    disabled={stamped}
                    className="stamp-btn"
                  >
                    <div className="seal-icon">
                      <span className="material-symbols-outlined text-[18px]">{stamped ? 'done' : 'approval'}</span>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest text-[#2c2c2a]/70">
                      {stamped ? 'Đã lưu trữ!' : 'Đóng dấu lưu trữ'}
                    </span>
                  </button>
                </div>

                {/* Stamp Slam Overlay for Single Card Modal */}
                {stamped && (
                  <div className="stamp-overlay" style={{ borderRadius: '8px' }}>
                    <div className="stamp-shockwave"></div>
                    <div className="stamp-slam">
                      <span className="material-symbols-outlined stamp-slam-icon">verified</span>
                      <div className="stamp-slam-text">ĐÃ<br/>LƯU TRỮ</div>
                      <div className="stamp-slam-date">{new Date().toLocaleDateString('vi-VN')}</div>
                    </div>
                  </div>
                )}
              </div>
          )}
        </div>
      )}

    </div>
  );
}
