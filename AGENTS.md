# GO FAR — Hướng Dẫn & Quy Chuẩn Phát Triển Nội Dung & Hình Ảnh

## 🏛️ Nguyên Tắc Cốt Lõi: Ưu Tiên Nét Đẹp Cổ Truyền & Bản Sắc Văn Hóa Dân Tộc

Mọi Agent và luồng xử lý nội dung, hình ảnh của dự án GO FAR phải tuân thủ nghiêm ngặt định hướng sau:

### 1. Định hướng Biên tập Nội dung (Content Direction)
- **Tôn vinh trầm tích văn hóa & làng bản di sản:** Ở mỗi điểm đến trên khắp Việt Nam, ngoài các danh thắng lớn, **luôn ưu tiên tìm tòi, khai mở và bổ sung các nội dung về bản làng cổ, làng nghề truyền thống lâu đời, kiến trúc cổ bản địa** (nhà trình tường đất nện, nhà rường Huế, nhà sàn gỗ cổ tích, bờ rào đá tai mèo, phố cổ, ngõ đá, cổng làng rêu phong).
- **Tránh xa góc nhìn thương mại hóa:** Hướng tới vẻ đẹp nguyên sơ, mộc mạc, nhịp sống văn hóa chân thực, thanh bình và những phong tục tập quán thiêng liêng giàu giá trị nhân văn của đồng bào các dân tộc.
- **Tích hợp thực tế vào cẩm nang:** Đưa bản làng di sản vào hệ thống thẻ điểm đến biểu tượng, khối bài viết chuyên sâu (special spotlight), thông tin giá vé bảo tồn và lịch trình trải nghiệm thực tế.

### 2. Định hướng Sáng tạo Hình ảnh AI (Visual & Image Aesthetics)
- **Đặc trưng bản sắc & cổ kính:** Hình ảnh phải lột tả được vẻ đẹp cổ kính, rêu phong, đậm đà bản sắc địa phương (ví dụ: hoa đào phai, hoa mận, hoa lê nở bên bờ rào đá và tường đất vàng; mái ngói âm dương rêu phong; nghệ nhân đúc chạm bạc; dệt thổ cẩm bên khung cửi cổ).
- **Chất lượng hình ảnh:** 100% ảnh AI chuẩn 16:9 WebP, màu sắc sống động (vibrant, saturated), ánh sáng vàng ấm ban mai hoặc hoàng hôn (golden hour, bright sunny day), độ nét cao chuẩn National Geographic / Travel Magazine.
- **Trực quan hóa bắt buộc:** Mỗi nội dung về bản làng cổ/danh lam di sản mới đều **bắt buộc phải có hình ảnh độc bản đi kèm**, được nhúng vào bài viết và hiển thị rõ ràng trực tiếp trong khung trò chuyện để người dùng thưởng lãm.

### 3. Nguyên Tắc Bắt Buộc: AI Tái Hiện Dựa Trên Hình Ảnh & Kiến Trúc Thực Tế (Reality-Grounded AI Art)
- **Tuyệt đối KHÔNG tự vẽ tưởng tượng viển vông:** Hình ảnh AI KHÔNG ĐƯỢC tự tạo cảnh chùa/đền/địa danh theo trí tưởng tượng ngẫu nhiên làm sai lệch địa hình thực tế, sai hướng phong thủy, hoặc sai lệch kiến trúc lịch sử của di tích.
- **Quy trình bắt buộc trước khi tạo ảnh (Visual Grounding Workflow):**
  1. **Nghiên cứu hình ảnh thực tế của di tích:** Trước khi viết prompt, phải tra cứu và xác định chính xác các yếu tố kiến trúc & địa lý thực tế của địa danh đó từ các nguồn chính thống và tư liệu ảnh thực địa:
     - **Địa thế & Hướng quay:** Tọa sơn hay hướng thủy? Quay mặt ra biển, sông gì, hồ gì, hay dựa lưng vào vách núi nào? (Ví dụ: Đền Cờn quay mặt ra cửa biển Lạch Cờn; Đền Chợ Củi nằm dưới chân núi Ngũ Mã nhìn ra dòng sông Lam; Đền Quan Hoàng Mười tọa bên bờ sông Cồn Mộc thế Mỏ Hạc Linh Từ).
     - **Kiến trúc nhận diện độc bản (DNA kiến trúc):** Hình dáng cổng Tam quan thực tế (tam quan cổ bằng đá/gạch, hay tam quan tứ trụ?), kết cấu mái ngói (mái đao cong rêu phong, ngói mũi hài, ngói âm dương), gian tiền tế, hậu cung, hoa văn điêu khắc truyền thống.
     - **Cảnh quan tự nhiên đặc hữu:** Có cây cổ thụ gì (cây gạo, cây bàng, cây đa, rặng trúc), suối nước tự nhiên nào (như Suối Sòng và 9 miệng giếng đá tự nhiên ở Đền Cô Chín), hay ghềnh đá sát mép nước (Đền Cờn Ngoài).
     - **Gian thờ & Pho tượng:** Ban thờ và tượng Phật/Thánh phải phản ánh đúng bài trí thực tế của ngôi đền/chùa đó, góc nhìn chính diện uy nghiêm, đúng trang phục và thần thái theo truyền thống tín ngưỡng văn hóa Việt Nam.
  2. **Prompt đặc tả chi tiết kiến trúc có thật:** Đưa trực tiếp các chi tiết nhận diện có thật vào câu lệnh để mô hình AI tái hiện lại chính xác diện mạo di tích với chất lượng mỹ thuật điện ảnh cao nhất.
  3. **Kiểm duyệt đối chiếu (Visual QA vs Reality):** So sánh trực tiếp sản phẩm ảnh AI sinh ra với tư liệu ảnh thực tế của di tích. Nếu sai lệch địa hình (ví dụ đền ven biển lại vẽ thành đồi núi nội địa; chùa gác chuông gỗ lại vẽ tháp chuông hiện đại), BẮT BUỘC phải tạo lại ngay cho đến khi đạt độ chân thực cao nhất.
