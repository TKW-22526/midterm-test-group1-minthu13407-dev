function searchProduct() {

    let keyword = document.getElementById("keyword").value.trim().toLowerCase();

    if (keyword === "") {
        document.getElementById("result").innerHTML = `
            <div class="alert alert-warning">
                Vui lòng nhập tên sản phẩm.
            </div>
        `;
        return;
    }

    let product = products.find(item =>
        item.tenSP.toLowerCase().includes(keyword)
    );

    if (product) {
        localStorage.setItem("product", JSON.stringify(product));
        window.location.href = "chi-tiet.html";
    } else {
        document.getElementById("result").innerHTML = `
            <div class="alert alert-danger">
                Không tìm thấy sản phẩm phù hợp.
            </div>
        `;
    }
}

function loadProduct() {

    let detail = document.getElementById("detail");

    if (!detail) return;

    let product = JSON.parse(localStorage.getItem("product"));

    if (!product) {
        detail.innerHTML = `
            <div class="alert alert-danger">
                Không có dữ liệu sản phẩm.
            </div>
        `;
        return;
    }

    window.currentProduct = product;

    let options = "";

    product.mauSac.forEach((item, index) => {
        options += `
            <option value="${index}">
                ${item.tenMau}
            </option>
        `;
    });

    detail.innerHTML = `
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card shadow">
                    <img id="productImage"
                        src="${product.mauSac[0].hinhAnh}"
                        class="card-img-top img-fluid">

                    <div class="card-body">
                        <h3>${product.tenSP}</h3>

                        <p><strong>Mã sản phẩm:</strong> ${product.maSP}</p>

                        <p><strong>Giá:</strong> ${product.giaSP.toLocaleString()} VNĐ</p>

                        <p><strong>Mô tả:</strong> ${product.moTa}</p>

                        <label class="form-label">
                            <strong>Chọn màu</strong>
                        </label>

                        <select id="colorSelect"
                            class="form-select"
                            onchange="changeColor()">

                            ${options}

                        </select>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function changeColor() {

    let index = document.getElementById("colorSelect").value;

    document.getElementById("productImage").src =
        currentProduct.mauSac[index].hinhAnh;
}

window.onload = function () {
    loadProduct();
};