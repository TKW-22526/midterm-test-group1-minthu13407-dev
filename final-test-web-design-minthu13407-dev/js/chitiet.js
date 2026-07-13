document.addEventListener("DOMContentLoaded", function () {
    const detailWrapper = document.getElementById("product-detail-wrapper");
    const breadcrumbName = document.getElementById("breadcrumb-product-name");
    const breadcrumbCurrent = document.getElementById("breadcrumb-current");

    function getProductIdFromUrl() {
        const params = new URLSearchParams(window.location.search);
        return parseInt(params.get("id"));
    }

    const productId = getProductIdFromUrl();

    const product = products.find(p => p.id === productId);

    if (!product) {
        detailWrapper.innerHTML = `
            <div class="error-box" style="text-align: center; padding: 40px 0; width: 100%;">
                <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #e53e3e; margin-bottom: 15px;"></i>
                <h2>Sản phẩm không tồn tại!</h2>
                <p style="margin: 15px 0; color: #4a5568;">Vui lòng kiểm tra lại đường dẫn hoặc quay về danh sách sản phẩm.</p>
                <a href="san-pham.html" class="btn-view" style="display: inline-block; padding: 10px 20px; background: #3182ce; color: white; border-radius: 6px; text-decoration: none;">Quay lại cửa hàng</a>
            </div>
        `;
        return;
    }

    breadcrumbName.innerText = product.name;
    breadcrumbCurrent.innerText = product.name;

    const correctImagePath = "../" + product.image;

    detailWrapper.innerHTML = `
        <div class="detail-image">
            <img src="${correctImagePath}" alt="${product.name}" onerror="this.src='https://placehold.co/500x500?text=${product.name}'">
        </div>
        <div class="detail-info">
            <span class="detail-cat-tag">${product.category}</span>
            <h2>${product.name}</h2>
            <div class="detail-price">${product.price.toLocaleString('vi-VN')} đ <span class="unit">/ con giống</span></div>
            
            <div class="detail-desc">
                <h3>Đặc điểm con giống:</h3>
                <p>${product.description}</p>
                <ul class="quality-commit">
                    <li><i class="fas fa-check-circle"></i> Đã qua kiểm dịch Sạch bệnh (SPF).</li>
                    <li><i class="fas fa-check-circle"></i> Tỷ lệ sống và thích nghi môi trường cực cao.</li>
                    <li><i class="fas fa-check-circle"></i> Hỗ trợ tư vấn kỹ thuật thả nuôi miễn phí.</li>
                </ul>
            </div>

            <div class="quantity-selector-box">
                <span class="label">Số lượng mua:</span>
                <div class="quantity-controls">
                    <button id="btn-decrease">-</button>
                    <input type="number" id="input-quantity" value="1" min="1">
                    <button id="btn-increase">+</button>
                </div>
            </div>

            <button class="btn-add-to-cart-large" id="btn-add-cart">
                <i class="fas fa-cart-plus"></i> Thêm vào giỏ hàng
            </button>
        </div>
    `;

    const btnDecrease = document.getElementById("btn-decrease");
    const btnIncrease = document.getElementById("btn-increase");
    const inputQuantity = document.getElementById("input-quantity");
    const btnAddCart = document.getElementById("btn-add-cart");

    btnDecrease.addEventListener("click", function () {
        let currentVal = parseInt(inputQuantity.value);
        if (currentVal > 1) {
            inputQuantity.value = currentVal - 1;
        }
    });

    btnIncrease.addEventListener("click", function () {
        let currentVal = parseInt(inputQuantity.value);
        inputQuantity.value = currentVal + 1;
    });

    inputQuantity.addEventListener("change", function () {
        let currentVal = parseInt(this.value);
        if (isNaN(currentVal) || currentVal < 1) {
            this.value = 1;
        }
    });

    btnAddCart.addEventListener("click", function () {
        const buyQuantity = parseInt(inputQuantity.value);

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += buyQuantity; // Cộng dồn số lượng được chọn
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                category: product.category,
                quantity: buyQuantity
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        updateCartCount();

        alert(`Đã thêm thành công ${buyQuantity} ${product.name} vào giỏ hàng!`);
    });

    updateCartCount();
});

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