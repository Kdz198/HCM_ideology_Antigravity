# Ho Chi Minh Ideology - Ký Ức Văn Hóa

Một dự án web tương tác (Interactive Web Application) được xây dựng nhằm truyền tải những giá trị, tư tưởng và di sản văn hóa của Chủ tịch Hồ Chí Minh thông qua trải nghiệm kể chuyện bằng hình ảnh và hiệu ứng hiện đại.

## ✨ Tính năng nổi bật (Features)

- **Trải nghiệm kể chuyện đa phương tiện (Storytelling):**
  - **Hộp Thư Ký Ức:** Giao diện mô phỏng những bức thư tay giấy ố vàng đậm chất vintage, kết hợp hiệu ứng đóng dấu mộc đỏ mượt mà và animation mở thư độc đáo.
  - **Bản đồ số (Globe Map):** Khám phá hành trình theo chân Bác trên bản đồ tương tác.
  - **Trắc nghiệm (Quiz):** Hệ thống câu hỏi tương tác để củng cố kiến thức lịch sử.
- **True Dark Mode:** Tích hợp chế độ giao diện tối (Dark Mode) tối ưu riêng cho từng màn hình, chuyển đổi mượt mà và bảo toàn tính thẩm mỹ của thiết kế cổ điển.
- **Thiết kế Responsive & Animations:** Các hiệu ứng chuyển cảnh, sương mù, đốm sáng (spotlight), và hạt bụi bay (dust particles) được tối ưu hóa bằng CSS Thuần và Tailwind.

## 🛠 Công nghệ sử dụng (Tech Stack)

- **Frontend Framework:** [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & Vanilla CSS.
- **Routing:** React Router DOM.
- **DevOps & CI/CD:** 
  - Đóng gói ứng dụng với Multi-stage **Docker** (tích hợp **Nginx** cho SPA routing).
  - Tự động hóa quá trình Build & Push lên **Docker Hub** thông qua **GitHub Actions**.

## 🚀 Hướng dẫn cài đặt & Chạy cục bộ

1. **Clone repository:**
   ```bash
   git clone https://github.com/Kdz198/HCM_ideology_Antigravity.git
   cd HCM_ideology_Antigravity
   ```

2. **Cài đặt các gói phụ thuộc (Dependencies):**
   ```bash
   npm install
   ```

3. **Chạy server phát triển (Development):**
   ```bash
   npm run dev
   ```
   Ứng dụng sẽ chạy tại `http://localhost:5173/` (mặc định của Vite).

4. **Build bản Production:**
   ```bash
   npm run build
   ```

## 🐋 Chạy với Docker

Dự án đã có sẵn `Dockerfile` siêu nhẹ sử dụng Nginx. Bạn có thể tự build và chạy Docker container ngay trên máy:

```bash
# Build image
docker build -t hcm-ideology .

# Chạy container trên port 8080
docker run -d -p 8080:80 hcm-ideology
```
Truy cập `http://localhost:8080` để xem kết quả.

## ⚙️ Thiết lập CI/CD (GitHub Actions)

Dự án có sẵn luồng tự động hóa `.github/workflows/ci.yml`. Để nó hoạt động trơn tru:
1. Vào mục **Settings > Secrets and variables > Actions** của Repository này.
2. Thêm hai biến sau:
   - `DOCKERHUB_USERNAME`: Tên đăng nhập DockerHub của bạn.
   - `DOCKERHUB_TOKEN`: Access Token (hoặc mật khẩu) DockerHub.
3. Mỗi khi code được push lên nhánh `main`, hệ thống sẽ tự động build và push bản mới nhất lên DockerHub.

---

*Được thiết kế và lập trình với ❤️ bởi Antigravity Agent!*
