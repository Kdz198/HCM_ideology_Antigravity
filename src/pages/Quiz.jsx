import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import { Link } from "react-router-dom";

const quizData = [
  {
    q: "Câu 1: Khi dọn dẹp phòng ngủ hoặc góc làm việc cá nhân, triết lý của bạn là gì?",
    options: [
      "Bỏ bớt những thứ không dùng trong 3 tháng qua, chỉ giữ lại những đồ vật thực sự có công năng. (Tối giản)",
      "Trang trí bằng những món đồ lưu niệm độc lạ từ nhiều nơi, sách vở đủ các thể loại. (Cởi mở)",
      "Sắp xếp sao cho linh hoạt nhất, dễ dàng đóng gói di chuyển hoặc thay đổi công năng khi cần. (Resilience)",
      "Phải có cây xanh, ánh sáng tự nhiên và một góc nhỏ để chill, nghe nhạc hoặc vẽ vời. (Sống xanh)",
    ],
  },
  {
    q: "Câu 2: Bạn được giao một dự án hoàn toàn mới mà bạn chưa từng có kinh nghiệm trước đây. Bạn sẽ:",
    options: [
      "Tìm cách đơn giản hóa quy trình, tập trung giải quyết đúng phần cốt lõi nhất của vấn đề.",
      "Hào hứng tìm đọc tài liệu nước ngoài, học hỏi cách làm của các nước tiên tiến để áp dụng.",
      "Bình tĩnh phân tích rủi ro, chuẩn bị sẵn phương án B, C để đối phó với mọi tình huống lật kèo.",
      "Tìm kiếm nguồn cảm hứng sáng tạo trước, muốn biến dự án này thành một sản phẩm có tính thẩm mỹ và cảm xúc.",
    ],
  },
  {
    q: "Câu 3: Cách bạn giải tỏa áp lực (Stress) sau một tuần làm việc căng thẳng là gì?",
    options: [
      "Tắt nguồn điện thoại, dọn dẹp nhà cửa, nấu một bữa cơm thanh đạm tại nhà.",
      "Đi xem một bộ phim nước ngoài, tham gia một cộng đồng mới hoặc học một kỹ năng mới.",
      "Đi tập thể thao cường độ cao (gym, chạy bộ) hoặc viết nhật ký để nhìn nhận lại bản thân.",
      "Đi camping (cắm trại) ngoại ô, tưới cây, nuôi cá hoặc dành thời gian sáng tác nghệ thuật.",
    ],
  },
  {
    q: "Câu 4: Khi xảy ra một cuộc tranh luận nảy lửa trong nhóm, vai trò thường thấy của bạn là gì?",
    options: [
      "Tập trung thẳng vào cốt lõi vấn đề, bỏ qua yếu tố cảm xúc cá nhân để tìm giải pháp nhanh nhất.",
      "Lắng nghe góc nhìn của từng người, cố gắng tìm điểm chung từ những sự khác biệt đó.",
      "Giữ cái đầu lạnh, quan sát toàn cục để điều hòa xung đột, sẵn sàng thay đổi cách tiếp cận để đạt mục tiêu chung.",
      'Đóng vai trò "bảo mẫu" xoa dịu cảm xúc của mọi người, ưu tiên bầu không khí hòa nhã, vui vẻ.',
    ],
  },
  {
    q: "Câu 5: Triết lý quản lý tài chính cá nhân (tiền tiêu vặt, tiền lương) của bạn là gì?",
    options: [
      "Chỉ mua những thứ thực sự cần (Needs), hạn chế tối đa những thứ chỉ là muốn (Wants); tích lũy là trên hết.",
      "Sẵn sàng chi tiền cho các trải nghiệm: học hành, mua sách, các khóa học kỹ năng hoặc đi du lịch nước ngoài.",
      "Luôn có một khoản quỹ dự phòng nghiêm ngặt cho những tình huống khẩn cấp, biến động bất ngờ.",
      "Dành một phần ngân sách ổn định để ủng hộ các sản phẩm xanh, Local Brand tử tế hoặc cho các sở thích nghệ thuật.",
    ],
  },
  {
    q: "Câu 6: Khi chọn một cuốn sách để đọc hoặc một kênh nội dung để theo dõi, bạn bị thu hút bởi thể loại nào?",
    options: [
      "Sách kỹ năng thực tế, tư duy tối giản, các bài viết ngắn gọn, súc tích và đi thẳng vào vấn đề.",
      "Lịch sử thế giới, văn hóa các nước, sách song ngữ hoặc các xu hướng công nghệ toàn cầu.",
      "Tiểu sử của các vĩ nhân vượt khó, sách về chiến lược, tâm lý học hành vi hoặc tư duy phản biện.",
      "Thơ ca, tản văn về thiên nhiên, sách về lối sống chữa lành (healing) hoặc nghệ thuật kiến trúc, hội họa.",
    ],
  },
  {
    q: "Câu 7: Nếu được tự do lên kế hoạch cho một chuyến du lịch ngắn ngày, bạn sẽ chọn hình thức nào?",
    options: [
      "Du lịch ba-lô (Backpacking), hành lý gọn nhẹ nhất có thể, không cần dịch vụ xa xỉ, chủ yếu là trải nghiệm thực tế.",
      "Đến một thành phố có bề dày lịch sử/văn hóa, thích đi bảo tàng và trò chuyện với người bản địa.",
      "Một chuyến đi ngẫu hứng, có thể thay đổi lịch trình bất cứ lúc nào tùy thuộc vào thời tiết và hoàn cảnh thực tế.",
      "Đi trốn ở một homestay vùng ngoại ô yên tĩnh, nơi có nhiều cây cối, có thể ngắm hoàng hôn và nghe nhạc.",
    ],
  },
  {
    q: "Câu 8: Khi đối mặt với một thói quen xấu của bản thân (ví dụ: trì hoãn, thức khuya), bạn thường làm gì?",
    options: [
      "Cắt bỏ tận gốc tác nhân gây xao nhãng (ví dụ: xóa bớt app giải trí, để điện thoại ra xa giường ngủ).",
      "Tìm hiểu các phương pháp khoa học của nước ngoài (như Pomodoro, Kaizen) để tự cải thiện bản thân.",
      "Tự kỷ luật bản thân nghiêm khắc, viết nhật ký theo dõi tiến độ mỗi ngày và không bao giờ viện cớ bỏ cuộc.",
      "Thay đổi không gian sống, cắm một lọ hoa, dọn lại bàn làm việc để tạo cảm hứng tích cực cho tâm hồn trước.",
    ],
  },
  {
    q: "Câu 9: Gặp tình huống bất ngờ khiến kế hoạch của bạn bị hủy hoàn toàn (ví dụ: mất điện, hoãn sự kiện), phản ứng đầu tiên của bạn là:",
    options: [
      "Chấp nhận ngay, tận dụng thời gian trống đó để nghỉ ngơi hoặc làm những việc vặt cơ bản khác.",
      "Lên mạng tìm kiếm xem có sự kiện trực tuyến hoặc giải pháp thay thế nào thú vị từ các cộng đồng khác không.",
      "Bình tĩnh xoay chuyển tình thế, lập tức kích hoạt phương án dự phòng để không lãng phí thời gian.",
      "Thắp một ngọn nến, tận hưởng khoảnh khắc chậm lại bất ngờ này để suy ngẫm hoặc ngắm cảnh.",
    ],
  },
  {
    q: "Câu 10: Khi chọn trang phục đi học hoặc đi làm hằng ngày, ưu tiên số một của bạn là gì?",
    options: [
      "Sự tiện lợi, nhanh chóng; tủ đồ chỉ có vài màu cơ bản (Trắng, Đen, Xám) rất dễ phối, không mất thời gian chọn.",
      "Có sự kết hợp độc đáo giữa nét truyền thống và hiện đại, hoặc mang hơi hướng phong cách thời trang quốc tế.",
      "Trang phục có tính đa dụng cao, bền bỉ, phù hợp cho cả đi học, đi làm lẫn đi gặp đối tác đột xuất.",
      "Chất liệu tự nhiên (như linen, cotton), màu sắc mang tone màu của tự nhiên (earth tone) và có gu thẩm mỹ riêng.",
    ],
  },
];

const resultsData = {
  A: {
    tag: "Nhà tối giản tự tại",
    coreValue: "Sự giản dị, thanh bạch, tiết kiệm",
    modernStyle: "Chủ nghĩa Tối giản (Minimalism)",
    description:
      "Bạn yêu thích sự gọn gàng, không thích lãng phí, luôn tìm kiếm giá trị cốt lõi thay vì vẻ bề ngoài hào nhoáng. Bạn hiểu rõ giá trị của sự vừa đủ và tìm thấy sự tự tại trong việc giải phóng mình khỏi những ràng buộc vật chất không cần thiết.",
    historyTitle: "Đôi dép cao su và căn nhà sàn gỗ",
    historyStory:
      'Sau khi trở thành Chủ tịch nước, Hồ Chí Minh khước từ việc ở trong Dinh Toàn quyền lộng lẫy mà chọn sống trong một căn nhà sàn gỗ đơn sơ cạnh bờ ao. Tài sản của một vị nguyên thủ quốc gia khi đó chỉ gói gọn trong vài bộ quần áo kaki sờn vai, một chiếc vali nhỏ và đôi dép cao su cắt ra từ lốp xe hỏng. Khi đôi dép bị mòn, các đồng chí bảo vệ muốn thay đôi mới, Người bảo: "Vẫn còn đi được, các chú chỉ cần đóng thêm đinh vào gót là xong".\n\nSự tối giản của Bác không phải là sự khổ hạnh bắt buộc, mà là một lựa chọn triết lý sống — giải phóng bản thân khỏi sự lệ thuộc vào vật chất để tâm trí hoàn toàn tập trung cho những việc đại sự của nhân dân.',
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800",
  },
  B: {
    tag: "Công dân toàn cầu cởi mở",
    coreValue: "Sự cởi mở, tự học, tiếp biến văn hóa",
    modernStyle: "Công dân toàn cầu (Global Citizen)",
    description:
      "Bạn tò mò với thế giới, đam mê học hỏi ngôn ngữ, văn hóa mới và không bao giờ tự giới hạn góc nhìn của mình. Bạn có tinh thần cởi mở, tôn trọng sự khác biệt và luôn khao khát hội nhập để hoàn thiện bản thân.",
    historyTitle: "Người bồi bàn tự học vĩ đại",
    historyStory:
      "Năm 1911, chàng thanh niên Nguyễn Tất Thành bước chân xuống con tàu Đô đốc Latouche-Tréville với hai bàn tay trắng. Để sinh tồn và nghiên cứu thế giới, Người đã làm đủ mọi nghề: phụ bếp trên tàu, cào tuyết ở London, thợ rửa ảnh ở Paris.\n\nỞ mỗi quốc gia đi qua, việc đầu tiên của Người là tự học ngôn ngữ bản địa. Người viết từ mới lên cánh tay để vừa làm việc vừa nhẩm thuộc lòng. Nhờ tư duy cởi mở đó, Người không chỉ thấu hiểu văn hóa phương Đông mà còn tinh thông triết học phương Tây, đọc viết thành thạo tiếng Pháp, Anh, Hoa, Nga... trở thành một biểu tượng của sự giao thoa văn hóa toàn cầu.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800",
  },
  C: {
    tag: "Bậc thầy thích ứng & Bản lĩnh",
    coreValue: '"Dĩ bất biến, ứng vạn biến"',
    modernStyle: "Thích ứng & Bản lĩnh (Resilience)",
    description:
      "Bạn có chỉ số vượt khó (AQ) cao, cực kỳ linh hoạt. Bạn hiểu rằng cuộc sống luôn biến động và cách duy nhất là giữ một cái đầu lạnh, một tinh thần thép cùng khả năng thích ứng linh hoạt trước mọi nghịch cảnh.",
    historyTitle: "Tâm thế ung dung trong ngục tù",
    historyStory:
      'Trong suốt hành trình cách mạng, Hồ Chí Minh đã sử dụng hơn 150 bí danh khác nhau (Nguyễn Ái Quốc, Thầu Chín, Lin, Già Thu...) để thích ứng với từng hoàn cảnh hoạt động bí mật. Đặc biệt, giai đoạn 1942 - 1943, khi bị chính quyền Tưởng Giới Thạch bắt giam vô cớ và giải qua hơn 30 nhà giam của tỉnh Quảng Tây, đối mặt với xiềng xích, ghẻ lở và đói khát, Người vẫn giữ nguyên tắc "Dĩ bất biến, ứng vạn biến".\n\nThay vì tuyệt vọng, Người biến nhà tù thành nơi rèn luyện tinh thần, viết nên tập thơ Nhật ký trong tù bằng chữ Hán với phong thái ung dung: "Thân thể ở trong lao / Tinh thần ở ngoài lao".',
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
  },
  D: {
    tag: "Tâm hồn sống xanh & Nghệ sĩ",
    coreValue: "Tâm hồn thi sĩ, hòa hợp với thiên nhiên",
    modernStyle: "Sống Xanh & Nghệ sĩ (Eco & Artistic)",
    description:
      "Bạn nhạy cảm với cái đẹp, yêu thiên nhiên, thích tìm kiếm sự bình yên trong tâm hồn và có xu hướng sống chữa lành (healing). Bạn trân trọng môi trường, yêu thích nghệ thuật và mong muốn tạo dựng một lối sống hài hòa, bền vững.",
    historyTitle: "Thi sĩ của thiên nhiên và những buổi chiều bên bờ suối",
    historyStory:
      'Dù là một nhà chính trị bận rộn với vận mệnh quốc gia, Hồ Chí Minh luôn giữ cho mình một khoảng không gian nghệ thuật thuần khiết. Giai đoạn ở chiến khu Việt Bắc, Người sống gắn bó với núi rừng: "Sáng ra bờ suối, tối vào hang / Cháo bẹ rau măng vẫn sẵn sàng".\n\nKhi về Hà Nội, Người tự tay chăm sóc vườn cây vú sữa, cho cá ăn mỗi buổi chiều sau giờ làm việc. Tình yêu thiên nhiên của Người không chỉ dừng lại ở việc thưởng ngoạn, mà đã nâng tầm thành một triết lý hành động với phong phong trào "Tết trồng cây" — một tư duy bền vững về môi trường (Eco-lifestyle) đi trước thời đại cả nửa thế kỷ.',
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=800",
  },
};

export default function Quiz() {
  const [started, setStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState([]); // Array of option indexes chosen (0, 1, 2, 3)
  const [finished, setFinished] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const quizUrl = typeof window !== "undefined" ? window.location.href : "";

  const startQuiz = () => {
    setStarted(true);
    setCurrentStep(0);
    setAnswers([]);
    setFinished(false);
  };

  const handleSelectOption = (optIndex) => {
    if (animating) return;

    const newAnswers = [...answers, optIndex];
    setAnswers(newAnswers);

    if (currentStep < quizData.length - 1) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
        setAnimating(false);
      }, 300);
    } else {
      setFinished(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0 && !animating) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentStep((prev) => prev - 1);
        setAnswers((prev) => prev.slice(0, -1));
        setAnimating(false);
      }, 200);
    }
  };

  // Determine result group
  const getResultGroup = () => {
    const counts = { A: 0, B: 0, C: 0, D: 0 };
    answers.forEach((val) => {
      if (val === 0) counts.A++;
      else if (val === 1) counts.B++;
      else if (val === 2) counts.C++;
      else if (val === 3) counts.D++;
    });

    let maxGroup = "A";
    let maxCount = counts.A;

    ["B", "C", "D"].forEach((g) => {
      if (counts[g] > maxCount) {
        maxCount = counts[g];
        maxGroup = g;
      }
    });

    return maxGroup;
  };

  const activeGroup = finished ? getResultGroup() : "A";
  const result = resultsData[activeGroup];
  const percent = Math.round(((currentStep + 1) / quizData.length) * 100);
  const question = quizData[currentStep];

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30">
        <div className="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto">
          <Link to="/" className="font-display-md text-display-md text-primary tracking-tight">
            Ký Ức Văn Hóa
          </Link>
          <div className="hidden md:flex items-center gap-lg">
            <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" to="/">
              Trang chủ
            </Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" to="/map">
              Bản đồ số
            </Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" to="/mailbox">
              Hộp thư ký ức
            </Link>
            <Link className="text-primary border-b-2 border-primary pb-1 font-bold font-body-md text-body-md" to="/quiz">
              Trắc nghiệm
            </Link>
          </div>
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-primary/10 transition-colors cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className="material-symbols-outlined text-on-surface-variant">{showMenu ? "close" : "menu"}</span>
          </button>
        </div>
      </nav>
      {showMenu && (
        <div className="fixed top-20 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md border-b border-outline-variant/30 md:hidden animate-fade-in">
          <div className="flex flex-col px-gutter py-md gap-sm">
            <Link
              className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md py-sm"
              to="/"
              onClick={() => setShowMenu(false)}
            >
              Trang chủ
            </Link>
            <Link
              className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md py-sm"
              to="/map"
              onClick={() => setShowMenu(false)}
            >
              Bản đồ số
            </Link>
            <Link
              className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md py-sm"
              to="/mailbox"
              onClick={() => setShowMenu(false)}
            >
              Hộp thư ký ức
            </Link>
            <Link className="text-primary font-bold font-body-md text-body-md py-sm" to="/quiz" onClick={() => setShowMenu(false)}>
              Trắc nghiệm
            </Link>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-32 pb-xl px-gutter max-w-container-max mx-auto w-full">
        {!started && (
          <header className="text-center max-w-3xl mx-auto mb-xl mt-6 relative">
            {/* Decorative lotus elements */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[200px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                local_florist
              </span>
            </div>

            {/* Top label */}
            <div className="relative inline-block mb-lg">
              <span className="text-primary font-label-md text-label-md tracking-[0.3em] uppercase block mb-sm relative z-10">Khám phá bản thân</span>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
            </div>

            {/* Main heading with text shadow */}
            <h1
              className="font-display-lg text-display-lg text-primary mb-lg font-serif leading-tight relative z-10"
              style={{
                textShadow: "0 2px 8px rgba(128, 19, 24, 0.08), 0 1px 2px rgba(128, 19, 24, 0.05)",
              }}
            >
              Lối sống của bạn tương đồng với phong cách nào của Bác?
            </h1>

            {/* Description */}
            <p
              className="font-body-lg text-body-lg text-on-surface-variant mb-xl leading-relaxed max-w-2xl mx-auto relative z-10"
              style={{
                textShadow: "0 1px 4px rgba(252, 249, 248, 0.8)",
              }}
            >
              Mỗi lựa chọn và thói quen nhỏ trong cuộc sống hiện đại đều mang trong mình những giá trị văn hóa và tư duy độc bản. Hãy cùng trả lời 10
              câu hỏi trắc nghiệm tâm lý thú vị này để khám phá xem triết lý sống của bạn gặp gỡ câu chuyện lịch sử nào của Chủ tịch Hồ Chí Minh.
            </p>

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-sm mb-xl">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40"></div>
              <span className="material-symbols-outlined text-primary/30 text-lg">local_florist</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40"></div>
            </div>

            {/* CTA Button - Clean elegant design */}
            <button
              onClick={startQuiz}
              className="inline-flex items-center gap-sm bg-primary text-on-primary px-xl py-lg rounded-full font-label-md text-label-md transition-all duration-300 group cursor-pointer hover:shadow-xl hover:shadow-primary/25 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                boxShadow: "0 4px 24px rgba(128, 19, 24, 0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
              <span className="material-symbols-outlined text-xl group-hover:rotate-[-12deg] transition-transform duration-300">play_arrow</span>
              BẮT ĐẦU TRẮC NGHIỆM
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
            </button>

            {/* Subtle hint */}
            <p className="font-caption text-caption text-on-surface-variant/60 mt-lg relative z-10">
              ⏱ Khoảng 5 phút · 10 câu hỏi · Kết quả phân tích chi tiết
            </p>

            {/* QR Code Button */}
            <div className="mt-xl relative z-10">
              <button
                onClick={() => setShowQR(true)}
                className="inline-flex items-center gap-sm bg-surface border border-outline-variant/50 text-on-surface-variant hover:text-primary hover:border-primary px-md py-sm rounded-full font-label-md text-label-sm transition-all cursor-pointer hover:shadow-md hover:bg-primary/5"
              >
                <span className="material-symbols-outlined text-xl">qr_code_2</span>
                Chia sẻ trắc nghiệm
              </button>
            </div>
          </header>
        )}

        {started && !finished && (
          <section className="max-w-2xl mx-auto animate-bloom mt-4">
            {/* Progress Bar */}
            <div className="mb-lg">
              <div className="flex justify-between items-end mb-sm">
                <div className="flex items-center gap-sm">
                  {currentStep > 0 && (
                    <button
                      onClick={handleBack}
                      className="text-primary hover:text-primary-container flex items-center gap-xs font-label-md text-xs cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-sm">arrow_back</span> Quay lại
                    </button>
                  )}
                  <span className="font-label-md text-label-sm text-primary font-bold">
                    Câu hỏi {currentStep + 1} / {quizData.length}
                  </span>
                </div>
                <span className="font-caption text-caption text-secondary">{percent}% Hoàn thành</span>
              </div>
              <div className="w-full h-1.5 bg-outline-variant/30 overflow-hidden rounded-full">
                <div className="h-full bg-primary transition-all duration-500 rounded-full" style={{ width: `${percent}%` }}></div>
              </div>
            </div>

            {/* Question Card */}
            <div
              className={`bg-surface border border-outline-variant/50 p-lg rounded-xl relative overflow-hidden transition-all duration-300 shadow-md ${animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
            >
              {/* Decorative background pattern */}
              <div className="absolute top-0 right-0 p-lg opacity-[0.03] pointer-events-none">
                <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  eco
                </span>
              </div>
              <div className="absolute bottom-0 left-0 p-lg opacity-[0.03] pointer-events-none rotate-180">
                <span className="material-symbols-outlined text-[80px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  local_florist
                </span>
              </div>
              <div className="relative z-10 space-y-lg">
                <h2
                  className="font-headline-md text-headline-md text-on-surface font-serif leading-snug"
                  style={{ textShadow: "0 1px 2px rgba(0,0,0,0.03)" }}
                >
                  {question.q}
                </h2>
                <div className="space-y-md">
                  {question.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelectOption(i)}
                      className="w-full text-left p-md border border-outline-variant/50 hover:border-primary hover:bg-primary/5 rounded-lg transition-all group flex items-center justify-between quiz-transition cursor-pointer hover:shadow-xs"
                    >
                      <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors pr-md">
                        {opt}
                      </span>
                      <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 text-primary transition-opacity shrink-0">
                        check_circle
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {finished && (
          <section className="max-w-4xl mx-auto mt-4">
            <div className="bg-surface border border-outline-variant/50 p-md md:p-xl rounded-2xl shadow-xl overflow-hidden relative quiz-result-enter">
              <div className="paper-texture absolute inset-0 opacity-10 pointer-events-none"></div>

              {/* Decorative header bar */}
              <div className="relative z-10 -mx-md md:-mx-xl -mt-4 md:-mt-8 mb-lg bg-gradient-to-r from-primary via-primary-container to-primary p-md md:p-lg text-center">
                <span className="font-label-md text-label-md text-on-primary/80 uppercase tracking-[0.2em]">Kết quả trắc nghiệm</span>
                <h2 className="font-display-md text-display-md text-white mt-xs" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
                  Bạn là: {result.tag}
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg relative z-10">
                {/* Result Image & Tag */}
                <div className="lg:col-span-5 space-y-md">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-surface-variant border border-outline-variant/30 shadow-md">
                    <img className="w-full h-full object-cover" alt={result.tag} src={result.image} />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-md md:p-lg w-full text-white">
                      <span className="text-xs uppercase tracking-widest text-on-primary-container bg-primary-container px-2 py-1 rounded font-bold">
                        {result.modernStyle}
                      </span>
                      <h3 className="font-headline-md text-[20px] mt-xs">Phong cách tương đồng:</h3>
                      <p className="font-display-md text-display-sm text-white font-bold leading-tight">{result.tag}</p>
                    </div>
                  </div>

                  {/* Quick stats box */}
                  <div className="bg-primary/5 p-md rounded-xl border border-primary/10">
                    <div className="text-xs text-primary font-bold uppercase tracking-wider mb-2">Giá trị cốt lõi</div>
                    <div className="font-serif text-headline-sm text-on-surface font-bold italic">"{result.coreValue}"</div>
                  </div>
                </div>

                {/* Result details and historical story */}
                <div className="lg:col-span-7 space-y-lg flex flex-col justify-between">
                  <div className="space-y-md">
                    <div className="space-y-sm">
                      <h4 className="font-headline-sm font-bold text-on-surface flex items-center gap-xs">
                        <span className="material-symbols-outlined text-primary text-xl font-bold">person</span>
                        Về lối sống của bạn:
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{result.description}</p>
                    </div>

                    <hr className="border-outline-variant/30" />

                    <div className="space-y-sm bg-secondary-container/30 p-md rounded-xl border border-outline-variant/40">
                      <h4 className="font-headline-sm font-bold text-primary flex items-center gap-xs">
                        <span className="material-symbols-outlined text-primary text-xl">history_edu</span>
                        Kết nối câu chuyện lịch sử của Bác:
                      </h4>
                      <h5 className="font-bold text-on-surface font-serif text-headline-sm italic mt-xs">{result.historyTitle}</h5>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed whitespace-pre-line mt-xs">
                        {result.historyStory}
                      </p>
                    </div>
                  </div>

                  <div className="pt-md flex flex-wrap gap-md border-t border-outline-variant/30 mt-lg">
                    <button
                      onClick={startQuiz}
                      className="bg-primary text-on-primary px-xl py-md font-label-md text-label-md rounded-lg flex items-center gap-sm hover:bg-primary-container transition-all shadow-md cursor-pointer"
                    >
                      <span className="material-symbols-outlined">refresh</span> Làm lại trắc nghiệm
                    </button>
                    <Link
                      to="/notebook"
                      className="border border-primary text-primary px-xl py-md font-label-md text-label-md rounded-lg flex items-center gap-sm hover:bg-primary/5 transition-all"
                    >
                      <span className="material-symbols-outlined">auto_stories</span> Khám phá di sản tư liệu
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-secondary-container py-xl mt-xl border-t border-outline-variant/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg max-w-container-max mx-auto px-gutter">
          <div className="space-y-md">
            <div className="font-headline-md text-headline-md text-primary">Ký Ức Văn Hóa</div>
            <p className="font-caption text-caption text-on-secondary-container/80">
              Dự án số hóa và lan tỏa tư tưởng văn hóa Hồ Chí Minh trong cộng đồng sinh viên hiện đại.
            </p>
          </div>
          <div className="flex flex-col gap-sm">
            <Link
              className="font-caption text-caption text-on-secondary-container/80 hover:text-primary underline underline-offset-4 transition-all"
              to="/"
            >
              Về dự án
            </Link>
            <Link
              className="font-caption text-caption text-on-secondary-container/80 hover:text-primary underline underline-offset-4 transition-all"
              to="/"
            >
              Chính sách bảo mật
            </Link>
          </div>
          <div className="text-right">
            <p className="font-caption text-caption text-on-secondary-container/80">© 2026 Ký Ức Văn Hóa - Hành trình Di sản Hồ Chí Minh</p>
          </div>
        </div>
      </footer>
      {/* QR Code Full-Screen Modal */}
      {showQR && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in p-md"
          onClick={() => setShowQR(false)}
        >
          <div
            className="bg-surface rounded-3xl p-md max-w-md w-full mx-auto text-center shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowQR(false)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-surface-variant/50 hover:bg-primary/10 flex items-center justify-center transition-colors cursor-pointer z-10"
            >
              <span className="material-symbols-outlined text-on-surface-variant text-lg">close</span>
            </button>

            {/* Header */}
            <div className="mb-sm">
              <span className="material-symbols-outlined text-primary text-3xl mb-xs block">qr_code_2</span>
              <h3 className="font-headline-md text-headline-md text-on-surface font-serif">Quét mã QR</h3>
            </div>

            {/* QR Code */}
            <div className="bg-white rounded-xl inline-block mb-sm shadow-inner">
              <QRCodeSVG
                value={quizUrl}
                size={Math.min(300, typeof window !== "undefined" ? window.innerWidth - 80 : 300)}
                level="M"
                includeMargin={false}
                fgColor="#1a1a1a"
                bgColor="#ffffff"
              />
            </div>

            {/* URL display */}
            <p className="font-caption text-caption text-on-surface-variant/70 break-all px-sm mb-xs">{quizUrl}</p>

            {/* Copy button */}
            <button
              onClick={() => {
                navigator.clipboard.writeText(quizUrl);
                alert("Đã sao chép liên kết!");
              }}
              className="inline-flex items-center gap-xs bg-primary text-on-primary px-lg py-sm rounded-full font-label-md text-label-sm cursor-pointer hover:bg-primary-container transition-all"
            >
              <span className="material-symbols-outlined text-base">content_copy</span>
              Sao chép liên kết
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
