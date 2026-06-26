function createItem(obj)
{
    var danhsach=document.getElementById('products');
    danhsach.innerHTML+=`
    <div class="container mt-3 h-100">
    <div class="card">
    <div class="images">
    <img class="card-img-top ratio-1x1"src="${obj.mauSac[0].hinhAnh}"alt="${obj.tenSP}">
    </div>
    <div class="card-body">
    <h4 class ="card-title">${obj.tenSP}</h4>
    <p class="card-text">${obj.moTa}</p>
    <a href="#" class="btn btn-primary"> Chi tiet</a>
    </div>
    </div>
    </div>
    
    `
}
function create(Array){
let i=0;
while(i<Array.length)
{
    createItem(Arry[i]);
    i++;
}
}
