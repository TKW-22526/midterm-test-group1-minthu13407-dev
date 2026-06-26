# ĐỀ KIỂM TRA JAVASCRIPT & BOOTSTRAP 5

## Xây dựng trang web quản lý và tra cứu thông tin sản phẩm điện thoại

### Mô tả

Xây dựng một trang web cho phép người dùng tìm kiếm và xem thông tin chi tiết của các sản phẩm điện thoại bằng **JavaScript** và **Bootstrap 5**.

Dữ liệu sản phẩm được lưu trữ dưới dạng **mảng đối tượng JavaScript**, không sử dụng cơ sở dữ liệu.

---

## Yêu cầu dữ liệu

Sử dụng mảng đối tượng để lưu danh sách sản phẩm.

Mỗi sản phẩm gồm các thuộc tính:

| Thuộc tính | Mô tả             |
| ---------- | ----------------- |
| maSP       | Mã sản phẩm       |
| tenSP      | Tên sản phẩm      |
| giaSP      | Giá sản phẩm      |
| moTa       | Mô tả sản phẩm    |
| mauSac     | Danh sách màu sắc |

### Cấu trúc màu sắc

Mỗi màu sắc là một đối tượng gồm:

| Thuộc tính | Mô tả              |
| ---------- | ------------------ |
| maMau      | Mã màu             |
| tenMau     | Tên màu            |
| hinhAnh    | Hình ảnh tương ứng |

### Ví dụ dữ liệu

```javascript
{
    maSP: "SP001",
    tenSP: "iPhone 15 Pro",
    giaSP: 30000000,
    moTa: "Điện thoại cao cấp Apple",
    mauSac: [
        {
            maMau: "BLACK",
            tenMau: "Titan Đen",
            hinhAnh: "black.jpg"
        },
        {
            maMau: "BLUE",
            tenMau: "Titan Xanh",
            hinhAnh: "blue.jpg"
        }
    ]
}
```

---

# Yêu cầu chức năng

## Câu 1 (2 điểm)

### Tạo dữ liệu sản phẩm

Tạo file:

```text
data.js
```

Yêu cầu:

* Khai báo mảng chứa tối thiểu **5 sản phẩm**.
* Dữ liệu phải đúng theo cấu trúc đã cho.

---

## Câu 2 (2 điểm)

### Thiết kế giao diện tìm kiếm

Tạo giao diện cho phép:

* Nhập từ khóa tìm kiếm.
* Nhấn nút **Tìm kiếm** để thực hiện tra cứu.

Yêu cầu:

* Bắt sự kiện `onclick` cho nút tìm kiếm.
* Tìm kiếm theo **tên sản phẩm**.
* Không phân biệt chữ hoa và chữ thường.
* Hỗ trợ tìm kiếm gần đúng bằng hàm:

```javascript
includes()
```

Ví dụ:

* "iphone" tìm được "iPhone 15 Pro"
* "galaxy" tìm được "Samsung Galaxy S24"

---

## Câu 3 (3 điểm)

### Hiển thị thông tin sản phẩm

Khi tìm thấy sản phẩm:

Hiển thị đầy đủ:

* Mã sản phẩm
* Tên sản phẩm
* Giá sản phẩm
* Mô tả sản phẩm
* Hình ảnh sản phẩm

Yêu cầu:

* Sử dụng Bootstrap 5.
* Trình bày dưới dạng **Card**.

Ví dụ giao diện:

```text
+----------------------------+
|         Hình ảnh           |
+----------------------------+
| Tên sản phẩm               |
| Mã sản phẩm                |
| Giá sản phẩm               |
| Mô tả sản phẩm             |
+----------------------------+
```

Nếu không tìm thấy:

```text
Không tìm thấy sản phẩm phù hợp.
```

---

## Câu 4 (2 điểm)

### Hiển thị danh sách màu sắc

Sử dụng Combobox (`select`) để hiển thị các màu của sản phẩm.

Yêu cầu:

* Hiển thị tên màu để người dùng lựa chọn.
* Khi thay đổi màu:

  * Hình ảnh sản phẩm phải cập nhật tương ứng.
  * Dữ liệu lấy từ thuộc tính `mauSac`.

Ví dụ:

```text
[ Titan Đen ▼ ]
```

Người dùng đổi sang:

```text
[ Titan Xanh ▼ ]
```

→ Hình ảnh sản phẩm đổi sang phiên bản màu xanh.

---

## Câu 5 (1 điểm)

### Định dạng giao diện bằng Bootstrap 5

Yêu cầu:

* Có tiêu đề trang.
* Bố cục rõ ràng, dễ nhìn.
* Card có hiệu ứng shadow.
* Hình ảnh responsive.
* Giao diện hiển thị tốt trên màn hình máy tính.

---

# Kịch bản kiểm thử

## Trường hợp 1: Tìm kiếm sản phẩm

**Bước thực hiện**

1. Nhập tên sản phẩm.
2. Nhấn nút **Tìm kiếm**.

**Kết quả mong đợi**

* Hệ thống tìm thấy sản phẩm.
* Hiển thị đầy đủ thông tin trong Card Bootstrap.

---

## Trường hợp 2: Đổi màu sản phẩm

**Bước thực hiện**

1. Tìm kiếm một sản phẩm.
2. Chọn màu khác trong Combobox.

**Kết quả mong đợi**

* Hình ảnh sản phẩm thay đổi đúng theo màu được chọn.

---

# Gợi ý cấu trúc thư mục

```text
project/
│
├── index.html
├── css/
│   └── style.css
│
├── js/
│   ├── data.js
│   └── app.js
│
└── images/
    ├── iphone-black.jpg
    ├── iphone-blue.jpg
    ├── samsung-black.jpg
    └── ...
```

---

# Công nghệ sử dụng

* HTML5
* CSS3
* JavaScript (ES6)
* Bootstrap 5

---

# Thang điểm

| Nội dung      | Điểm        |
| ------------- | ----------- |
| Câu 1         | 2           |
| Câu 2         | 2           |
| Câu 3         | 3           |
| Câu 4         | 2           |
| Câu 5         | 1           |
| **Tổng cộng** | **10 điểm** |
