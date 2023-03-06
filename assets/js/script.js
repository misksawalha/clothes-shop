
let card = document.getElementById('card');
let width;

let buttonName="";
let myButtonName=""
let value;
let j=0;
let itr="";
let flag=0 ;
let i = 0 ;
let key = -1
let products = {
    "results": [
        {
            "productID": "KL2432",
            "productName": "Hugo Boss men's suit",
            "productPrice": 2500,
            "productPriceFormatted": "DKK 2.500,00",
            "inStock": true,
            "productImg": "https://akamai-scene7.garnethill.com/is/image/garnethill/49187_SADD?&defaultImage=49187_main",
            "href": "/riley-heeled-buckle-boots/shoes-accessories/new-arrivals/572383?uniqueId=572383",
            "swatches": [
                {
                    "swatchDefAttCode": "BLCK",
                    "swatchName": "Black",
                    "swatchAttrName": "color",
                    "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
                },
                {
                    "swatchDefAttCode": "BLCK",
                    "swatchName": "Black",
                    "swatchAttrName": "color",
                    "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
                },
                {
                    "swatchDefAttCode": "BLCK",
                    "swatchName": "Black",
                    "swatchAttrName": "color",
                    "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
                },
                {
                    "swatchDefAttCode": "BLCK",
                    "swatchName": "Black",
                    "swatchAttrName": "color",
                    "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
                },
                {
                    "swatchDefAttCode": "BLCK",
                    "swatchName": "Black",
                    "swatchAttrName": "color",
                    "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
                },
                {
                    "swatchDefAttCode": "BLCK",
                    "swatchName": "Black",
                    "swatchAttrName": "color",
                    "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
                },
                {
                    "swatchDefAttCode": "BLCK",
                    "swatchName": "Black",
                    "swatchAttrName": "color",
                    "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
                },
                {
                    "swatchDefAttCode": "BLCK",
                    "swatchName": "Black",
                    "swatchAttrName": "color",
                    "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
                },
                
            ]
        },
        {
            "productID": "KL2432",
            "productName": "Hugo Boss men's suit",
            "productPrice": 2500,
            "productPriceFormatted": "DKK 2.500,00",
            "inStock": true,
            "productImg": "https://akamai-scene7.garnethill.com/is/image/garnethill/49187_SADD?&defaultImage=49187_main",
            "href": "/riley-heeled-buckle-boots/shoes-accessories/new-arrivals/572383?uniqueId=572383",
            "swatches": [
                {
                    "swatchDefAttCode": "BLCK",
                    "swatchName": "Black",
                    "swatchAttrName": "color",
                    "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
                },
                {
                    "swatchDefAttCode": "BLCK",
                    "swatchName": "Black",
                    "swatchAttrName": "color",
                    "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
                },
                {
                    "swatchDefAttCode": "BLCK",
                    "swatchName": "Black",
                    "swatchAttrName": "color",
                    "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
                },
                {
                    "swatchDefAttCode": "BLCK",
                    "swatchName": "Black",
                    "swatchAttrName": "color",
                    "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
                },{
                    "swatchDefAttCode": "BLCK",
                    "swatchName": "Black",
                    "swatchAttrName": "color",
                    "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
                },
                {
                    "swatchDefAttCode": "BLCK",
                    "swatchName": "Black",
                    "swatchAttrName": "color",
                    "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
                },
                
            ]
        },
        {
            "productID": "KL2432",
            "productName": "Hugo Boss men's suit",
            "productPrice": 2500,
            "productPriceFormatted": "DKK 2.500,00",
            "inStock": true,
            "productImg": "https://akamai-scene7.garnethill.com/is/image/garnethill/49187_SADD?&defaultImage=49187_main",
            "href": "/riley-heeled-buckle-boots/shoes-accessories/new-arrivals/572383?uniqueId=572383",
            "swatches": [
                {
                    "swatchDefAttCode": "BLCK",
                    "swatchName": "Black",
                    "swatchAttrName": "color",
                    "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
                },
                {
                    "swatchDefAttCode": "BLCK",
                    "swatchName": "Black",
                    "swatchAttrName": "color",
                    "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
                },
                {
                    "swatchDefAttCode": "BLCK",
                    "swatchName": "Black",
                    "swatchAttrName": "color",
                    "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
                },
                {
                    "swatchDefAttCode": "BLCK",
                    "swatchName": "Black",
                    "swatchAttrName": "color",
                    "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
                },{
                    "swatchDefAttCode": "BLCK",
                    "swatchName": "Black",
                    "swatchAttrName": "color",
                    "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
                },
                
            ]
        },
        {
            "productID": "KL2432",
            "productName": "Hugo Boss men's suit",
            "productPrice": 2500,
            "productPriceFormatted": "DKK 2.500,00",
            "inStock": true,
            "productImg": "https://akamai-scene7.garnethill.com/is/image/garnethill/49187_SADD?&defaultImage=49187_main",
            "href": "/riley-heeled-buckle-boots/shoes-accessories/new-arrivals/572383?uniqueId=572383",
            "swatches": [
                {
                    "swatchDefAttCode": "BLCK",
                    "swatchName": "Black",
                    "swatchAttrName": "color",
                    "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
                },
                {
                    "swatchDefAttCode": "BLCK",
                    "swatchName": "Black",
                    "swatchAttrName": "color",
                    "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
                },
                {
                    "swatchDefAttCode": "BLCK",
                    "swatchName": "Black",
                    "swatchAttrName": "color",
                    "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
                },
                {
                    "swatchDefAttCode": "BLCK",
                    "swatchName": "Black",
                    "swatchAttrName": "color",
                    "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
                },{
                    "swatchDefAttCode": "BLCK",
                    "swatchName": "Black",
                    "swatchAttrName": "color",
                    "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
                },
                
            ]
        },
        {
            "productID": "KL2432",
            "productName": "Hugo Boss men's suit",
            "productPrice": 2500,
            "productPriceFormatted": "DKK 2.500,00",
            "inStock": true,
            "productImg": "https://akamai-scene7.garnethill.com/is/image/garnethill/49187_SADD?&defaultImage=49187_main",
            "href": "/riley-heeled-buckle-boots/shoes-accessories/new-arrivals/572383?uniqueId=572383",
            "swatches": [
                {
                    "swatchDefAttCode": "BLCK",
                    "swatchName": "Black",
                    "swatchAttrName": "color",
                    "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
                },
                {
                    "swatchDefAttCode": "BLCK",
                    "swatchName": "Black",
                    "swatchAttrName": "color",
                    "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
                },
                {
                    "swatchDefAttCode": "BLCK",
                    "swatchName": "Black",
                    "swatchAttrName": "color",
                    "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
                },
                {
                    "swatchDefAttCode": "BLCK",
                    "swatchName": "Black",
                    "swatchAttrName": "color",
                    "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
                },{
                    "swatchDefAttCode": "BLCK",
                    "swatchName": "Black",
                    "swatchAttrName": "color",
                    "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
                },
                
            ]
        },
    ]
};



displayData(key,1024,flag);
$(window).resize(function() {
    width=window.innerWidth
  //  console.log('window was resized');
    displayData(key,width,flag);
   // //console.log(window.innerWidth);
  });
  function displayData(key, width, flag) {
    let buttonName = flag == 0 ? "Less" : "More";
    console.log(key);
    let res = ``;
    let len = products.results.length;
    for (i = 0; i < len; i++) {
        let swatchRes = ``;
        let lent = products.results[i].swatches.length;
        for (j = 0; j < 5; j++) {
            swatchRes += `
                <div class="small-items">
                    <img src=${products.results[i].swatches[j].img.src}>
                </div>
            `;
        }
        if (key == i && flag == 0) { //more
            for (j = 0; j < lent; j++) {
                swatchRes += `
                    <div class="small-items">
                        <img src=${products.results[i].swatches[j].img.src}>
                    </div>
                `;
            }
        }
        if (key == i && flag == 1) {
            swatchRes = ``;
            buttonName="More"
            for (j = 0; j < 3; j++) {
                console.log("j" + j);
                swatchRes += `
                    <div class="small-items">
                        <img src=${products.results[i].swatches[j].img.src}>
                    </div>
                `;
            }
        }
        res += `
            <div class="card-items">
                <img class="image" src=${products.results[i].productImg}>
                <div class="small-items">
                    <p>${products.results[i].productName}</p>
                    ${swatchRes}
                    <button onclick="toggle(${i},${width},${flag})" id="textButton${i}">
                        ${buttonName}
                    </button>
                    <p>${products.results[i].productPrice}$</p>
                    <p>${products.results[i].productPriceFormatted}</p>
                </div>
            </div>
        `;
    }

    card.innerHTML = res;
}

function toggle(i, width, flag) {
    flag = !flag;
    let buttonElem = document.getElementById(`textButton${i}`);
    buttonElem.textContent = flag == 0 ? "Less" : "More";
    displayData(i, width, flag);
}
