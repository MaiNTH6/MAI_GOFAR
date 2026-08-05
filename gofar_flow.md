# GO FAR — Go Straight Ahead.
> *8-Agent System · Tác giả: Sửu nhi*

## Hệ thống điều hành

```mermaid
graph TB
    CEO["👑 CEO/COO\nTổng Điều Hành"]

    CEO --> B["✍️ B: Biên Tập Viên"]
    CEO --> C["🎨 C: Sáng Tạo Hình Ảnh"]
    CEO --> A["💻 A: DEV WEB"]
    CEO --> D["🚀 D: Người Đăng Bài"]
    CEO --> E["📢 E: SEO & Social"]
    CEO --> G["⚖️ G: Pháp Lý"]
    F["📊 F: Analytics"] --> CEO

    B --> G
    C --> G
    G -- "✅" --> D
    G -. "❌" .-> B
    D --> A
    D --> E
    E --> F

    style CEO fill:#fbbf24,color:#1a2235,stroke-width:3px
    style G fill:#f43f5e,color:#fff
    style A fill:#ff6b35,color:#fff
    style D fill:#22c55e,color:#fff
    style E fill:#a855f7,color:#fff
    style F fill:#ef4444,color:#fff
    style B fill:#fbbf24,color:#1a2235
    style C fill:#22d3ee,color:#1a2235
```

## Pipeline

```
👑 CEO → 📊 F gợi ý → ✍️ B viết → 🎨 C ảnh → ⚖️ G duyệt → 🚀 D đăng → 📢 E social → 📊 F báo cáo → 👑 CEO
```

## Bảng phân công

| Agent | Lệnh | Vai trò |
|-------|-------|---------|
| 👑 **CEO** | `/agent-ceo` | Tổng Điều Hành |
| 💻 **A** | `/agent-web-design` | DEV WEB |
| ✍️ **B** | `/agent-content-editor` | Biên Tập Viên Nội Dung |
| 🎨 **C** | `/agent-image-gen` | Người Sáng Tạo Hình Ảnh |
| 🚀 **D** | `/agent-publisher` | Người Đăng Bài |
| 📢 **E** | `/agent-seo-social` | SEO & Social Media |
| 📊 **F** | `/agent-analytics-qa` | Analytics & QA |
| ⚖️ **G** | `/agent-legal` | Chuyên Gia Pháp Lý |
