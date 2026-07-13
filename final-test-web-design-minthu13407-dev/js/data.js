const products = [
    {
        id: 1,
        name: "Tôm thẻ chân trắng",
        category: "Tôm giống",
        price: 120000,
        image: "assets/tom1.jpg",
        description: "Tôm thẻ giống sạch bệnh đột biến, tăng trưởng siêu tốc, tỷ lệ sống vượt trội trong môi trường độ mặn cao."
    },
    {
        id: 2,
        name: "Tôm sú",
        category: "Tôm giống",
        price: 150000,
        image: "assets/tom2.jpg",
        description: "Giống tôm sú Moana được thuần hóa sạch bệnh, đề kháng tự nhiên cực tốt, phù hợp mô hình quảng canh."
    },
    {
        id: 3,
        name: "Tôm càng xanh",
        category: "Tôm giống",
        price: 180000,
        image: "assets/tom3.jpg",
        description: "Tôm càng xanh toàn đực giống chuẩn, kích cỡ đồng đều, hạn chế phân đàn và đạt size lớn khi thu hoạch."
    },
    {
        id: 4,
        name: "Cá rô phi",
        category: "Cá giống",
        price: 3500,
        image: "assets/rophi.jpg",
        description: "Cá rô phi giống đơn tính dòng Đường Nghiệp, thịt săn chắc, hấp thụ thức ăn hiệu quả, lớn nhanh."
    },
    {
        id: 5,
        name: "Cá tra",
        category: "Cá giống",
        price: 2500,
        image: "assets/catra.jpg",
        description: "Cá tra giống sản xuất theo quy trình công nghệ cao, mình thon dài, chịu ngộp tốt khi vận chuyển xa."
    },
    {
        id: 6,
        name: "Cá lóc",
        category: "Cá giống",
        price: 4500,
        image: "assets/caloc.jpg",
        description: "Cá lóc nhím giống thế hệ mới, đã được tập ăn thức ăn công nghiệp hoàn toàn, không kén mồi."
    },
    {
        id: 7,
        name: "Cá chép",
        category: "Cá giống",
        price: 5000,
        image: "assets/cachep.jpg",
        description: "Cá chép giống lai V1 khỏe mạnh, vảy đều sáng bóng, sức chống chịu điều kiện thời tiết khắc nghiệt rất cao."
    },
    {
        id: 8,
        name: "Cua biển",
        category: "Cua giống",
        price: 9000,
        image: "assets/cua1.jpg",
        description: "Cua giống (cua hạt tiêu) nhanh nhẹn, đầy đủ càng chiếc, thích nghi tốt với biên độ mặn dao động."
    },
    {
        id: 9,
        name: "Cua đồng",
        category: "Cua giống",
        price: 7000,
        image: "assets/cua2.jpg",
        description: "Cua đồng giống tự nhiên được thuần dưỡng, mai cứng, bò khỏe, chuyên cung ứng cho mô hình nuôi xen canh ruộng lúa."
    },
    {
        id: 10,
        name: "Cua gạch",
        category: "Cua giống",
        price: 10000,
        image: "assets/cua3.jpg",
        description: "Giống cua biển chuyên gạch dòng tuyển chọn từ bố mẹ chất lượng cao, tăng tỷ lệ tạo gạch béo ngậy."
    },
    {
        id: 11,
        name: "Ếch Thái",
        category: "Ếch giống",
        price: 6000,
        image: "assets/ech2.jpg",
        description: "Ếch Thái Lan siêu nạc giống lớn nhanh, đùi to, da bóng mượt, đề kháng tốt với bệnh lở loét da."
    },
    {
        id: 12,
        name: "Ếch đồng",
        category: "Ếch giống",
        price: 5000,
        image: "assets/ech1.jpg",
        description: "Ếch đồng bản địa thuần chủng, thịt thơm ngon dai chắc, phù hợp với các hộ nuôi sinh thái tự nhiên."
    },
    {
        id: 13,
        name: "Lươn đồng",
        category: "Lươn giống",
        price: 25000,
        image: "assets/luon1.jpg",
        description: "Lươn đồng giống thuần nhân tạo sạch bệnh hoàn toàn, không hao hụt đầu con, da không bị trầy xước."
    },
    {
        id: 14,
        name: "Lươn không bùn",
        category: "Lươn giống",
        price: 28000,
        image: "assets/luon2.jpg",
        description: "Lươn giống chuyên dụng cho mô hình bể xi măng/bể bạt, ăn khỏe, tăng trưởng kích thước nhanh đồng đều."
    },
    {
        id: 15,
        name: "Lươn Nhật",
        category: "Lươn giống",
        price: 32000,
        image: "assets/luonnhat.jpg",
        description: "Lươn Nhật (Unagi) dòng xuất khẩu cao cấp, khả năng chuyển hóa thức ăn vượt trội, giá trị kinh tế thương phẩm cao."
    }
];