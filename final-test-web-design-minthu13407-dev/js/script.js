document.addEventListener("DOMContentLoaded", function () {
    const homeProducts = document.getElementById("home-products");

    // 1. Kiểm tra nếu đang đứng ở Trang chủ thì render 8 sản phẩm nổi bật
    if (homeProducts) {
        let htmlContent = "";
        
        // Trích xuất lấy 8 sản phẩm đầu tiên từ mảng products (lấy từ file data.js)
        const featuredItems = products.slice(0, 8);

        featuredItems.forEach(product => {
            // Do index.html ở ngoài gốc nên giữ nguyên đường dẫn "assets/..." từ data.js
            htmlContent += `
                <div class="product">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='https://placehold.co/300x200?text=${product.name}'">
                    <div class="product-info">
                        <p>${product.category}</p>
                        <h3>${product.name}</h3>
                        <div class="price">${product.price.toLocaleString('vi-VN')} đ</div>
                        <a class="btn" href="html/chi-tiet.html?id=${product.id}">Xem chi tiết</a>
                    </div>
                </div>
            `;
        });

        homeProducts.innerHTML = htmlContent;
    }

    // Khởi động hàm tính toán số lượng đơn hàng trên thanh Header badge
    updateCartCount();
});

// 2. Hàm đọc dữ liệu từ localStorage để hiển thị số lượng giỏ hàng
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalQuantity = 0;

    cart.forEach(item => {
        totalQuantity += item.quantity;
    });

    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
        cartCountElement.innerText = totalQuantity;
    }
}