const products = [  // musu objektas
    { 
        id: 1, 
        name: 'Laptop', 
        category: 'Electronics', 
        price: 1200 
    },  
    { 
        id: 2, 
        name: 'Smartphone', 
        category: 'Electronics', 
        price: 800 
    },  
    { 
        id: 3, 
        name: 'Shirt', 
        category: 'Clothing', 
        price: 40
     },  
     { 
        id: 4, 
        name: 'Jeans', 
        category: 'Clothing', 
        price: 60
     },  
     { 
        id: 5, 
        name: 'Coffee Maker', 
        category: 'Appliances',
        price: 150 
    },  
    { 
        id: 6, 
        name: 'Blender', 
        category: 'Appliances', 
        price: 120 
    },  
    { 
        id: 7, 
        name: 'TV', 
        category: 'Electronics', 
        price: 600 
    },  
    { 
        id: 8, 
        name: 'Socks', 
        category: 'Clothing', 
        price: 10 
    },  
    { 
        id: 9, 
        name: 'Microwave', 
        category: 'Appliances', 
        price: 180 
    },  
    { 
        id: 10, 
        name: 'Smart Watch', 
        category: 'Electronics', 
        price: 250 
    }
]; 

let filteredProducts=[];

function filterProductsByCategory(products, cate){ // filtruoja pagal kategorija
    for(const key of products){
        if(key.category == cate){
            filteredProducts.push(key);
            console.log(key);
        }
    }
};
console.log(`Filtered by Category: `)
filterProductsByCategory(products, 'Clothing');

function sortByPriceAsc(filteredProducts){ // rusiuoja mazejanciai
    let filteredArray = Object.values(filteredProducts); // convertuoja objekta i masyva, reikejo visur ieskoti man sito, nes neleido "filteredProducts" prideti su .sort
    let newProducts=filteredArray.sort((a,b)=>{
        if(a.price<b.price)return -1;
        if(a.price>b.price)return 1;
        return 0;
    })
    console.log(newProducts);
};

function sortByPriceDesc(filteredProducts){ // rusiuoja didejanciai
    let filteredArray = Object.values(filteredProducts); // ta pati situacija, kaip ir virsuj
    let newProducts=filteredArray.sort((a,b)=>{
        if(a.price<b.price)return 1;
        if(a.price>b.price)return -1;
        return 0;
    })
    console.log(newProducts);
};
console.log(`Sorted by ascending prices: `) // paprastas spausdinimas
sortByPriceAsc(filteredProducts);
console.log(`Sorted by descending prices: `)
sortByPriceDesc(filteredProducts);