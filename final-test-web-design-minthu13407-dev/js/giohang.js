document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.getElementById("cart-table-body");
    const emptyMessage = document.getElementById("cart-empty-message");
    const cartTable = document.querySelector(".cart-table");
    const cartSummaryBox = document.getElementById("cart-summary-box");
    const subtotalPriceEl = document.getElementById("subtotal-price");
    const totalPriceEl = document.getElementById("total-price");
    const btnCheckout = document.getElementById("btn-checkout");

    function displayCart() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        if (cart.length === 0) {
            cartTable.style.display = "none";
            cartSummaryBox.style.display = "none";
            emptyMessage.style.display = "block";
            updateCartCount(0);
            return;
        }

        cartTable.style.display = "table";
        cartSummaryBox.style.display = "block";
        emptyMessage.style.display = "none";

        let htmlContent = "";
        let finalTotal = 0;
        let totalItemsCount = 0;

        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            finalTotal += itemTotal;
            totalItemsCount += item.quantity;

            const correctImagePath = "../" + item.image;

            htmlContent += `
                <tr>
                    <td>
                        <div class="cart-item-info">
                            <img src="${correctImagePath}" alt="${item.name}" onerror="this.src='https://placehold.co/80x80?text=${item.name}'">
                            <div>
                                <span class="cart-item-cat">${item.category}</span>
                                <h4>${item.name}</h4>
                            </div>
                        </div>
                    </td>
                    <td class="txt-price">${item.price.toLocaleString('vi-VN')} đ</td>
                    <td>
                        <div class="cart-qty-ctrl">
                            <button class="btn-qty-minus" data-index="${index}">-</button>
                            <input type="number" value="${item.quantity}" min="1" readonly>
                            <button class="btn-qty-plus" data-index="${index}">+</button>
                        </div>
                    </td>
                    <td class="txt-total-item">${itemTotal.toLocaleString('vi-VN')} đ</td>
                    <td>
                        <button class="btn-delete-item" data-index="${index}">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </td>
                </tr>
            `;
        });

        tableBody.innerHTML = htmlContent;

        subtotalPriceEl.innerText = `${finalTotal.toLocaleString('vi-VN')} đ`;
        totalPriceEl.innerText = `${finalTotal.toLocaleString('vi-VN')} đ`;

        updateCartCount(totalItemsCount);

        assignCartEvents();
    }

    function assignCartEvents() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Nút giảm số lượng (-)
        document.querySelectorAll(".btn-qty-minus").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                if (cart[index].quantity > 1) {
                    cart[index].quantity -= 1;
                    localStorage.setItem("cart", JSON.stringify(cart));
                    displayCart();
                }
            });
        });

        document.querySelectorAll(".btn-qty-plus").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                cart[index].quantity += 1;
                localStorage.setItem("cart", JSON.stringify(cart));
                displayCart();
            });
        });

        document.querySelectorAll(".btn-delete-item").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                if (confirm(`Bạn chắc chắn muốn xóa "${cart[index].name}" khỏi giỏ hàng?`)) {
                    cart.splice(index, 1); 
                    localStorage.setItem("cart", JSON.stringify(cart));
                    displayCart();
                }
            });
        });
    }

    btnCheckout.addEventListener("click", function () {
        alert("Cảm ơn bạn đã đặt hàng tại Thiện Văn!\nYêu cầu đặt đơn hàng con giống của bạn đã được tiếp nhận thành công. Nhân viên kỹ thuật sẽ gọi điện xác nhận lại môi trường ao nuôi của bạn trong thời gian sớm nhất.");
        
        localStorage.removeItem("cart");
        displayCart();
    });

    function updateCartCount(count) {
        const cartCountElement = document.getElementById("cart-count");
        if (cartCountElement) {
            cartCountElement.innerText = count;
        }
    }

    displayCart();
});