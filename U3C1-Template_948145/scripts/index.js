//store the products array in localstorage as "data"

var submitbtn =  document.querySelector("#submit");
    submitbtn.addEventListener("click",addproducts);
    function addproducts(){
        var dv = document.createElement("div");
        var brandname = document.createElement("p");
        var productname = document.createElement("p");
        var productprice =document.createElement("p");
        var image = document.createElement("img");
        brandname.innerText = document.querySelector("#product_brand");
        productname.innerText = document.querySelector("#product_name");
        productprice.innerText = document.querySelector("#product_price");
        image.src = document.querySelector("#product_img");
        dv.append(image,brandname,productname,productprice);
        document.querySelector("#products_data").append(dv);

    }