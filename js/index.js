let products = [
    {product_id:'Corolla1998', product_name:'Corolla', product_price:'N20,000'}, 
    {product_id:'Ford200', product_name:'Ford', product_price:'N10,000'}, 
    {product_id:'MercedezE5', product_name:'Mercedez', product_price:'N30,000'}, 
    {product_id:'Ranger01', product_name:'Ranger', product_price:'N40,000'}, 
    {product_id:'Qlink09', product_name:'Qlink', product_price:'N12,000'}, 
    {product_id:'Mikano001', product_name:'Mikano', product_price:'N100,000'}, 
    {product_id:'Delllatitude', product_name:'Dell', product_price:'N50,000'}, 
    
];

let container = document.getElementById("box");
let html='';

for(let product of products){
    html = html + `
    <div class="prod_grp">
            <div class="product_id">${product.product_id}</div>
            <div class="product_name">${product.product_name}</div>
            <div class="product_price">${product.product_price}</div>
    </div>
    `;
};

box.innerHTML = html;