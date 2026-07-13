// Đợi cho toàn bộ DOM được tải xong mới xử lý
document.addEventListener("DOMContentLoaded", function () {
    const productsGrid = document.getElementById("shop-products");
    const productsCountText = document.getElementById("products-count");
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");
    const categoryButtons = document.querySelectorAll(".cat-btn");
    const sortSelect = document.getElementById("sort-select");

    // Biến lưu trạng thái bộ lọc hiện tại
    let currentCategory = "all";
    let currentSearchQuery = "";
    let currentSortOrder = "default";

    // Hàm khởi tạo và hiển thị sản phẩm
    function renderProducts() {
        // 1. Lọc sản phẩm theo Danh mục và Tìm kiếm
        let filteredProducts = products.filter(product => {
            const matchesCategory = (currentCategory === "all" || product.category === currentCategory);
            const matchesSearch = product.name.toLowerCase().includes(currentSearchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        // 2. Sắp xếp sản phẩm theo Giá
        if (currentSortOrder === "low-to-high") {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (currentSortOrder === "high-to-low") {
            filteredProducts.sort((a, b) => b.price - a.price);
        }
        // Nếu là 'default', thứ tự sẽ giữ nguyên theo file data.js (theo ID)

        // 3. Cập nhật số lượng sản phẩm tìm thấy
        if (filteredProducts.length === 0) {
            productsCountText.innerText = "Không tìm thấy sản phẩm nào phù hợp.";
            productsGrid.innerHTML = "";
            return;
        } else {
            productsCountText.innerText = `Tìm thấy ${filteredProducts.length} sản phẩm`;
        }

        // 4. Tạo chuỗi HTML để đổ vào Grid hiển thị
        let htmlContent = "";
        filteredProducts.forEach(product => {
            // Sửa lại đường dẫn ảnh vì file html/san-pham.html nằm trong thư mục con html/
            // Ảnh gốc trong data.js là "assets/images/..." -> cần đổi thành "../assets/images/..."
            const correctImagePath = "../" + product.image;

            htmlContent += `
                <div class="product-card">
                    <div class="product-img-box">
                        <img src="${correctImagePath}" alt="${product.name}" onerror="this.src='https://placehold.co/300x300?text=${product.name}'">
                    </div>
                    <div class="product-info-box">
                        <span class="product-cat">${product.category}</span>
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-price">${product.price.toLocaleString('vi-VN')} đ</p>
                        <div class="product-actions">
                            <a href="chi-tiet.html?id=${product.id}" class="btn-view">Xem chi tiết</a>
                            <button class="btn-add-cart" onclick="addToCartFromShop(${product.id})">
                                <i class="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });

        productsGrid.innerHTML = htmlContent;
    }

    // --- SỰ KIỆN LỌC THEO DANH MỤC ---
    categoryButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Xóa class active ở nút cũ, thêm vào nút vừa bấm
            categoryButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            // Cập nhật danh mục hiện tại và vẽ lại danh sách
            currentCategory = this.getAttribute("data-category");
            renderProducts();
        });
    });

    // --- SỰ KIỆN TÌM KIẾM ---
    // Tìm khi bấm nút Kính lúp
    searchBtn.addEventListener("click", function () {
        currentSearchQuery = searchInput.value.trim();
        renderProducts();
    });

    // Tìm khi nhấn phím Enter trong ô input
    searchInput.addEventListener("keyup", function (e) {
        if (e.key === "Enter") {
            currentSearchQuery = searchInput.value.trim();
            renderProducts();
        }
    });

    // --- SỰ KIỆN SẮP XẾP GIÁ ---
    sortSelect.addEventListener("change", function () {
        currentSortOrder = this.value;
        renderProducts();
    });

    // Khởi chạy hiển thị lần đầu tiên khi vào trang
    renderProducts();
    updateCartCount();
});

// Hàm thêm nhanh vào giỏ hàng ngay tại trang danh sách sản phẩm
function addToCartFromShop(productId) {
    // Tìm thông tin sản phẩm dựa vào ID trong mảng 'products' (từ data.js)
    const productToAdd = products.find(p => p.id === productId);
    if (!productToAdd) return;

    // Lấy giỏ hàng từ localStorage hoặc tạo mảng rỗng nếu chưa có
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Kiểm tra xem sản phẩm này đã có trong giỏ hàng chưa
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1; // Có rồi thì tăng số lượng lên 1
    } else {
        // Chưa có thì thêm mới đối tượng vào mảng
        cart.push({
            id: productToAdd.id,
            name: productToAdd.name,
            price: productToAdd.price,
            image: productToAdd.image, // Giữ nguyên đường dẫn gốc để trang giỏ hàng tự xử lý
            category: productToAdd.category,
            quantity: 1
        });
    }

    // Lưu lại vào localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Cập nhật lại số hiển thị trên icon giỏ hàng ở header
    updateCartCount();

    // Thông báo nhanh cho người dùng biết
    alert(`Đã thêm "${productToAdd.name}" vào giỏ hàng thành công!`);
}

// Hàm cập nhật số lượng hiển thị trên Badge giỏ hàng
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