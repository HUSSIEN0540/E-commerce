//el products elgya mn product.js
let productsToDisplay = products; 

// estna el html yload el2wr(instalization)
// bt7dd enta feen (homepage,productdetail,cart)
//bt48l el main functions . elmain functions gwaha small functions bs gi el25r kolo fi el block di
document.addEventListener("DOMContentLoaded", () => {
   //34an el messege di t5tfi
sessionStorage.removeItem('IsThisFirstTime_Log_From_LiveServer');
 
    // by3mle installation ll local storage lw mafeesh users aw cart
    initLocalStorage();
   
// t3reef el pages gwa const
    const homepage = document.querySelector(".product-list"); 
    const productdetail = document.querySelector(".product-detail");
    const cart = document.querySelector(".cart-items");

    //ta48el el functions 3la 7asab el saf7a elly enta 3aleha
    if (homepage) {
        //3rd el products fi el homepage
        displayProducts();

        setupProductControls(); 
    }
     // 3rd elproducts fi el productdetail
        else if (productdetail) displayProductDetail();
   
     // 3rd elproducts fi el cart 
       else if (cart) displayCartItems(); 

    //tgheez el forms bta3t el login
        const loginForm = document.getElementById("loginForm");
    if (loginForm) loginForm.addEventListener("submit", login); 
    
    //tgheez el forms bta3t el register
       const registerForm = document.getElementById("registerForm");
    if (registerForm) registerForm.addEventListener("submit", register);

    // ta48el el cartcount we el product rating 
    productRating();
    updateCartCount();
}  );

//elfunction el bt3ml register 
function register(event) {
    event.preventDefault(); 
    
    
    // by3ml elelements we ya5od el value bta3thom
    const usernameEl = document.getElementById("reg-username");
    const passwordEl = document.getElementById("reg-password");
    const confirmEl = document.getElementById("reg-confirm");


    // check 3la el fields
    if (!usernameEl || !passwordEl || !confirmEl) {
        alert("Registration form fields not found. Please check the HTML IDs.");
        console.error("Form fields not found!"); 
        return;
    }

    // bya5od el values mn el elements 
    const username = usernameEl.value.trim();
    const password = passwordEl.value.trim();
    const confirm = confirmEl.value.trim();

    // Check lw fi field fdya
    if (!username || !password || !confirm) {
        alert("Please fill in all fields.");
        return;
    }

    // Check 3la el passwords match
    if (password !== confirm) {
        alert("❌ Passwords do not match");
        return;
    }

    // bya5od el users mn el local storage
    let users = [];

    try { 
        const storedUsers = localStorage.getItem("users");
        users = storedUsers ? JSON.parse(storedUsers) : defaultUsers.slice();
 
    } catch(e) { 
        console.error("Error loading users:", e); 
         alert("Error 403")
        users = defaultUsers.slice(); 
    }

    // by4of lw el username da mawgood aslan wla la
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        alert("❌ Username already exists");
        console.log("Username already taken"); // DEBUG
        return;
    }

    // byd5l user gdeed
    const newUser = { username, password };
    users.push(newUser);
    
    try {
        localStorage.setItem("users", JSON.stringify(users));
        console.log("User registered successfully:", newUser); // DEBUG
        console.log("Updated users list:", users); // DEBUG
    } catch(e) {
        console.error("Error saving to localStorage:", e); // DEBUG
        alert("❌ Error saving user. Please try again.");
        return;
    }

    alert("✅ Registration successful!");
    
    // 7ywdeek li ellogin page b3d ma y3ml save fi ellocal s
    setTimeout(() => {  
        window.location.href = "login.html";
    }, 100);
}

//bya5od el users mn el local storage lw s7 7yd5lk lw 8lt 7ydeek error
function login(event) {
    event.preventDefault();
    //by3ml el elements wya5odlha value 
    const usernameEl = document.getElementById("username");
    const passwordEl = document.getElementById("password");
        //bycheck 3la el fields html mlho4 d3wa bel user
    if (!usernameEl || !passwordEl) {
        alert("Login fields not found);. Please check the HTML.");
        console.error("Login form fields not found!"); 
        return;
    }
    
    const username = usernameEl.value.trim();
    const password = passwordEl.value.trim();
    
    //by5li el password kda (***)
    console.log("Login values:", { username, password: "***" }); 
    // da el check bta3 el user 
    if (!username || !password) {
        alert("Please enter both username and password );.");
        return;
    }
    
    //bygeeb el users mn el local storage
    let users = [];
    try { 
        const storedUsers = localStorage.getItem("users");
        users = storedUsers ? JSON.parse(storedUsers) : defaultUsers.slice();
    } catch(e) { 
        console.error("Error loading users:", e); 
        alert("error ")
        users = defaultUsers.slice(); 
    }
    //gwa da elusers we elpasswords 34an ydwar lw fi match wla la
    const user = users.find(u => u.username === username && u.password === password);
    
    //by3ml check lw el input da mwgood fi users wla la
    if (user) {
        alert("✅ Login successful!");
        localStorage.setItem('loggedIn', 'true',);
        localStorage.setItem('user',`${username}`)
     
        
        // 7ystna 1 sec wb3deen ywadeek 34an ntfada el errors
        setTimeout(() => {
            window.location.href = "index.html";
        }, 100);
        //lw me4 mwgood 7ydeek error
    } else {
              alert("❌ Invalid username or password");
    }
}

// by5ly el loggedin false we ywadeek llogin
function logout() {
 localStorage.removeItem('loggedIn');
 localStorage.setItem('user','none')
    window.location.href = "login.html";
}

// el default users 34an 34an a54 mn 8er regester +el users el gdida 7ttsave fiha
const defaultUsers = [
    { username: "moki", password: "2010" },
    { username: "mokh", password: "1984" }
];
 
let users = []; 
// grb lw lakeet users a3mlohom save mlakt4 elm3 save ll3ndk fi ellocal storage
try {
    const storedUsers = localStorage.getItem("users");
    users = storedUsers ? JSON.parse(storedUsers) : defaultUsers.slice();
    if (!storedUsers) {
        localStorage.setItem("users", JSON.stringify(users));
    }
}
//lw 7sl mo4kla fi el try a3ml save ll data we etb3 error messeage 
catch (error) {
    console.error("Error parsing users from localStorage:");
    users = defaultUsers.slice();
    localStorage.setItem("users", JSON.stringify(users));
}    

// bt3ml search bar w sort 3la el homepage
function setupProductControls() {
    // bydwar 3la el product collection el fi el html
    const productCollection = document.querySelector(".product-collection");
    if (!productCollection) return;

    // lw el product controle aslan mwgoda bt48l4 bakeet el funtion
    if (document.querySelector(".product-controls")) return;

    // by3ml el div bta3hom 34an el html
    const controlsDiv = document.createElement("div");
    
    // by3ml class ll div 34an el css
    controlsDiv.className = "product-controls";
    
    // el html bta3t el search w el sort
    controlsDiv.innerHTML = `
        <input type="text" id="search-input" placeholder="Search products...">
        <select id="sort-select">
            <option value="">Sort By</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A-Z</option>
            <option value="name-desc">Name: Z-A</option>
        </select>
    `;
    
    // 34an kolo yb2a bnfs el theme bta3 el page
    const h1 = productCollection.querySelector("h1");
    // 7ystna el dom el2wl 
    h1.after(controlsDiv);
    
    // by5mli el elements elly fe el html mwgooda as a valibile
    const searchInput = document.getElementById("search-input");
    const sortSelect = document.getElementById("sort-select");
    //7ystna input 34an el search y4t8l
    searchInput.addEventListener("input", (e) => {
        searchProducts(e.target.value);
    });
    //7ystnak t5tar 7aga 34an y4t8l
    sortSelect.addEventListener("change", (e) => {
        sortProducts(e.target.value);
    });
}


//elfunction bta3t el display products  fi el homepage34an a3rd el products fel homepage
function displayProducts() {

    // lw mafeesh products to display o5rog mn el function
    if(!Array.isArray(productsToDisplay)) {
        return;
    }
    const container = document.querySelector(".product-list");
    if (!container){ 
        return;
    }

    //34an ad5l html odam
    container.innerHTML = "";
    
    //lw mafee4 products t3ml no products found
    if (productsToDisplay.length === 0) {
        container.innerHTML = "<p style='text-align:center; grid-column: 1/-1;'>No products found.</p>";
        return;
    }
    
    
    //product da gy mn products.js
    // by3ml loop 3la kol product w by3rdha
    productsToDisplay.forEach((product) => {

        // by3ml div 34an y3ml el product card b html
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        const color = product.colors[0];
        const default_img = color ? color.image : "images/defaultimage.jpg";
        
            // bydwar 3la el searchbar fi el html 
    //by7ot el balue el 7ttktb fi const 34an y3rf y8ir lonha
    const searchInput = document.getElementById("search-input");
    const searchTerm = searchInput ? searchInput.value.trim() : "";
       
      // by3ml varible 34an y7ot fi el product name 
        let displayName = product.name;
        //lw el user katab 7aga ...
        if (searchTerm) {
            // by3ml const 34an ylaki el text 
            // el gi di 34an t3ml select 3la kol el 7orof el bt3ml mach 7ta lw fi product mo5talif 
            // ,we t4of lw el7arf da mwgood uppercase aw maktoob uppercaser
            // el $1 di temp m3mola 34an lma tlaki product t3ml hilight 
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            displayName = product.name.replace(regex, '<span style="color: red; font-weight: bold;">$1</span>');
        }
        
        // el html bta3t el product card (el div el 3rfnaha fok)
        productCard.innerHTML = `
        <div class="img-box" style="cursor:pointer;" data-id="${product.id}" >
            <img src="${default_img}" alt="${product.name}">
        </div>
        <h3 class="title">${displayName}</h3>
        <p class="price">$${product.price}</p>
        <button class="btn view-btn" data-id="${product.id}">View Details</button>
        `;
        
        // dol hy5lo el products tzhr wkman kol lma tzwed product mn products.js yzhr
        // ya3ni by3mlohom trteeb be el id low homa  8 7ytl3a 8 lw 9 7ytl3a 9
        const imgBox = productCard.querySelector(".img-box");
        imgBox.addEventListener("click", () => viewProductDetail(product.id));
        const viewBtn = productCard.querySelector(".view-btn");
        viewBtn.addEventListener("click", () => viewProductDetail(product.id));
        container.appendChild(productCard);
    });
}

//elfunction bta3t el view product fi el productdetail 34an lama ados 3la view details yro7 l saf7t el product detail w y3rd el product elly edos 3leh
function viewProductDetail(id) {
    //lw mafeesh products o5rog mn el function
    if (!Array.isArray(products)) {
        alert("Product data not available.");
        return;
    }

    //7yft7 el saf7t el product 3la 7sab el id elly enta edos 3leh
    const product = products.find(p => p.id === id);
    
    //lw d5lt be id me4 mwgood masalan 20934 ydeek error
    if (!product) {
        alert("Product not found.");
        return;
    }
    // by3ml save ll priduct id,name ,color,we el description fel session storage 34an a3rdha fel product detail page
    sessionStorage.setItem("selectedProduct", JSON.stringify(product));
    window.location.href = "product-detail.html";
}

//elfunction bta3t el display product detail 34an el products tzhr
function displayProductDetail() { 

    //bygeeb el product data mn el session storage
    let productData;
    try { 
        productData = JSON.parse(sessionStorage.getItem("selectedProduct")); 
    }
    catch (error) {
        productData = null;
        alert("Error loading product details.");
        return;
    }
    if (!productData) {
        alert("Product not found.");
        window.location.href = "index.html";
        return;
    }

    // el product detail elements
    const titleEl = document.querySelector(".title");
    const priceEl = document.querySelector(".price");
    const descriptionEl = document.querySelector(".description");
    const mainImageContainer = document.querySelector(".main-img");
    const thumbnailContainer = document.querySelector(".thumbnail-list");
    const colorContainer = document.querySelector(".color-options");
    const sizeContainer = document.querySelector(".size-options");
    const addToCartBtn = document.querySelector("#add-cart-btn");

    //el sowar el 7tt7t 3la el product detail page
    let colors = productData.colors || [];
    let selectedColor = colors[0] || null;
    let selectedSize = (selectedColor?.sizes?.[0]) || "";

        // function bt3ml update ll product display 3la 7sab el color el ent m5taro
    function updateProductDisplay(colorData) {
        
        //lw mafee4 7aga o5rog mn el function
        if (!colorData) return;

        //b3rd el sowar elly mwgooda 34an el color elly enta m5taro
        if (mainImageContainer) mainImageContainer.innerHTML = `<img src="${colorData.image}" alt="Product">`;

        // bt3ml el thumbnails w b5ly el awl thumbnail howa el selected image by default
        if (thumbnailContainer) {
            thumbnailContainer.innerHTML = "";
            (colorData.images || []).forEach(img => {
                const thumb = document.createElement("img");
                thumb.src = img;
                thumb.className = "thumbnail";
                thumb.addEventListener("click", () => { 
                    mainImageContainer.innerHTML = `<img src="${img}" alt="Product">`; 
                });
                thumbnailContainer.appendChild(thumb);
            });
        }

        //  bt3ml el size buttons 
        if (sizeContainer) {
            sizeContainer.innerHTML = "";
            (colorData.sizes || []).forEach((size, index) => {
                const sizeBtn = document.createElement("button");
                sizeBtn.textContent = size;
                sizeBtn.className = "size-btn";
               
                // b5ly el awl size selected by default
                if (index === 0) {
                    sizeBtn.classList.add("active");
                    selectedSize = size;
                }

                //btstna el click 34an t5tar el size
                sizeBtn.addEventListener("click", () => {
                    document.querySelectorAll(".size-btn").forEach(btn => btn.classList.remove("active"));
                    
                    // b7ot el active 3la el button el m5tar
                    sizeBtn.classList.add("active");
                    selectedSize = size;
                });
                sizeContainer.appendChild(sizeBtn);
            });
        }
    }

    //bt8ir el text 3la 7sab el produt aw el id el mogood 
    //b3rd el title w el price w el description (el basics info)
    if (titleEl) titleEl.textContent = productData.name;
    if (priceEl) priceEl.textContent = `$${productData.price}`;
    if (descriptionEl) descriptionEl.textContent = productData.description;

    // n4a8al elfuncton b2a 3la 7asab el color elly enta m5taro
    updateProductDisplay(selectedColor);

    //  bt3ml el color options w bt7ot active class 3la el awl color
    if (colorContainer) {
        colorContainer.innerHTML = "";
        colors.forEach((color, index) => {
            const colorBtn = document.createElement("button");
            colorBtn.className = "color-btn";
            colorBtn.style.background = color.hex;
            
            // b5ly el awl color selected by default
            if (index === 0) colorBtn.classList.add("active");
            // btstak tdos 3la ay color 34an t5tar el color
            colorBtn.addEventListener("click", () => {
               
                // b4el el active mn kol el buttons
                document.querySelectorAll(".color-btn").forEach(btn => btn.classList.remove("active"));
                
                // b7ot el active 3la el button el m5tar
                colorBtn.classList.add("active");
                selectedColor = color;
                //bt3ml update l main img ,el thumnails,el text
                updateProductDisplay(color);
            });
            colorContainer.appendChild(colorBtn);
        });
    }

    //el add to cart button
    if (addToCartBtn) {
        addToCartBtn.addEventListener("click", () => {
            if (!selectedColor) { alert("Please select a color"); return; }
            if (!selectedSize) { alert("Please select a size"); return; }
            addToCart(productData, selectedColor, selectedSize);
        });
    }
}

// function bta3t el add to cart 34an a5od el product elly enta m5taro we ad5lo fel cart
function addToCart(product, color, size) {
    //lw 7aga naksa ydeek alert
    if (!product || !color || !size) {
        alert("Incomplete product selection.");
        return;
    }
    
    //by3ml array fadi 34an ad5l feh el cart items
    let cart = [];
    try {
        cart = JSON.parse(localStorage.getItem("cart")) || [];
    } catch (error) {
        cart = [];
    }
    
    // by7wel el string li number (float)
    let cleanPrice = typeof product.price === "string" ? parseFloat(product.price) : product.price || 0;
    
    //y4of el product mtkrr wla la
    // lw mtkrr yzwd el quantity bs
    const existingItem = cart.find(item => item.id === product.id && item.color === color.name && item.size === size);
    if (existingItem) {
        existingItem.quantity += 1;
    }
    //trteeb el product details fel cart
    else cart.push({
        id: product.id,
        name: product.name,
        price: cleanPrice,
        color: color.name,
        colorHex: color.hex, 
        size: size,
        quantity: 1,
        image: color.image || product.colors?.[0]?.image || "images/defaultimage.jpg"
    });

// by3ml save ll product id, name ,color ,size ,we el description fel local storage 34an y3rdha fel cart page
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert("✅ Product added to cart!");
}

//  b3rd el cart items bi shakl monzm w b7sb el totals sa7
function displayCartItems() {
    //by3ml array fadi 34an ad5l feh el cart items el fok
    let cart = [];
    try { cart = JSON.parse(localStorage.getItem("cart")) || []; } catch(e) { cart = []; }

    const cartContainer = document.querySelector(".cart-items");
    //le fi mo4kla yo5rog
    if (!cartContainer) return;

    cartContainer.innerHTML = "";

    // lw el cart fadya y3ml no items found
    if (cart.length === 0) {
        cartContainer.innerHTML = "<p style='text-align:center;'>Your cart is empty.</p>";
        updateCartSummary();
        return;
    }
    // by3ml loop 3la kol item fel cart w by3rdha
    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";

        //  b3rd el item b shakl monzm m3 el price w el quantity w el total w el color
        //+ by3ml el buttons el fi el cart remove,increase, decrease,quantity 
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>Color: <span style="display:inline-block; width:20px; height:20px; background:${item.colorHex || '#ccc'}; border-radius:3px; vertical-align:middle;"></span> ${item.color}</p>
                <p>Size: ${item.size}</p>
            </div>
            <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            <div class="quantity-controls">
                <button class="decrease">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="increase">+</button>
            </div>
            <div class="cart-item-total">$${(item.price * item.quantity).toFixed(2)}</div>
            <button class="remove-btn">Remove</button>
        `;
        //7y3ml el class bta3 el buttons 34an el css
        const decreaseBtn = cartItem.querySelector(".decrease");
        const increaseBtn = cartItem.querySelector(".increase");
        const removeBtn = cartItem.querySelector(".remove-btn");
        //7y48l el events bta3t el buttons
        decreaseBtn.addEventListener("click", () => changeQuantity(item, -1));
        increaseBtn.addEventListener("click", () => changeQuantity(item, 1));
        removeBtn.addEventListener("click", () => removeFromCart(item));

        cartContainer.appendChild(cartItem);
    });

    updateCartSummary(); //b3ml update ll summary b3d ma a3rd el items
}

//  by7sb el subtotal w el tax w el grand total sa7(el calculator bta3 el project)
function updateCartSummary() {

    //y7d5l el cart mn el local storage gi valible
    let cart = [];
    try { cart = JSON.parse(localStorage.getItem("cart")) || []; } catch(e) { cart = []; }

     //7y3rf el clases
    const subtotalEl = document.querySelector(".subtotal");
    const grandTotalEl = document.querySelector(".grand-total");

    let subtotal = 0;
    // b7sb el subtotal mn kol el items
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
    });

    // by7sb el 10% taxes
    const tax = subtotal * 0.1; 
    
    // by7sb el grand total b3d eltaxes
    const grandTotal = subtotal + tax;

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (grandTotalEl) grandTotalEl.textContent = `$${grandTotal.toFixed(2)}`;
}

//  by3d el items el mawgoda fel cart w by7otha fel cart icon fel nav bar
function updateCartCount() {

    //7ygeeb el cart mn el local storage gi valible
    let cart = [];
    try { cart = JSON.parse(localStorage.getItem("cart")) || []; } catch(e) { cart = []; }

    // b7sb el total count mn kol el items
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    //  b3ml update l kol el cart number fel saf7a
    const cartBadges = document.querySelectorAll(".cart-icon .cart-item");
    cartBadges.forEach(badge => {
        badge.textContent = totalCount;
    });
}

function changeQuantity(item, delta) {
    //bygeeb el cart mn el local storage gi valible (nfs om elcomment el fo2)
    let cart = [];
    try { cart = JSON.parse(localStorage.getItem("cart")) || []; } catch(e) { cart = []; }

    // bygeeb el items mn el cart 34an y4yr el quantity
    const cartItem = cart.find(i => i.id === item.id && i.color === item.color && i.size === item.size);
  
    //lw mafeesh 7aga o5rog mn el function
    if (!cartItem) return;
    
    //lw fi byzwd el quantity 
    cartItem.quantity += delta;
    if (cartItem.quantity <= 0) {
        cart = cart.filter(i => !(i.id === item.id && i.color === item.color && i.size === item.size));
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
    
    //  b3ml update ll cart count b3d ay change
    updateCartCount(); 
}

//elfunction el bt3ml remove lay item mn el cart w bt3mll decrease ll cart count b3d el remove
function removeFromCart(item) {
    let cart = [];
    try { cart = JSON.parse(localStorage.getItem("cart")) || []; } catch(e) { cart = []; }

    cart = cart.filter(i => !(i.id === item.id && i.color === item.color && i.size === item.size));
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
    //  b3ml update ll cart count b3d el remove
    updateCartCount(); 
}


// bt3ml search fel products by name aw description
function searchProducts(keyword) {
    if (!Array.isArray(products)) return;

    // law el search fadya, a3rd kol el products
    if (!keyword.trim()) {
        
        productsToDisplay = products;

         // law fe search, a3ml filter 3la el products
    } else {
       
        const filtered = products.filter(p =>
            // 7y7ol ay 7aga tktbha l lower case 34an el search yb2a ashal
            p.name.toLowerCase().includes(keyword.toLowerCase()) ||
            p.description.toLowerCase().includes(keyword.toLowerCase())
        );
        productsToDisplay = filtered;
    }
    
    displayProducts();
}


//  bt3ml sort ll products 3la 7sb el price aw el name
function sortProducts(method) {
  
    //lw mafee4 o5rog mn el function
    if (!Array.isArray(productsToDisplay)) return;
 // by3ml copy ll products to display 34an ma yy3ml4 modify ll original array
 
    let sorted = [...productsToDisplay];// destructure {... spreed operator}
    
    // sort by price
    if (method === "price-asc") sorted.sort((a,b) => a.price - b.price);
    else if (method === "price-desc") sorted.sort((a,b) => b.price - a.price);
   //sort by name
    else if (method === "name-asc") sorted.sort((a,b) => a.name.localeCompare(b.name));
    else if (method === "name-desc") sorted.sort((a,b) => b.name.localeCompare(a.name));
    else {
        // law m5tarsh 7aga, arga3 ll products el asleya
        sorted = products;
    }

    productsToDisplay = sorted;
    displayProducts();
}

// by3mle installation ll local storage lw mafeesh users aw cart
function initLocalStorage() {

    if (!localStorage.getItem("users")) localStorage.setItem("users", JSON.stringify(defaultUsers));
    if (!localStorage.getItem("cart")) localStorage.setItem("cart", JSON.stringify([]));
}


// bt3ml el rating bta3 el product
function productRating(){ 
    
    // bygeeb el container bta3 el rating
    const ratingContainer = document.getElementById("product-rating"); 
    if (!ratingContainer) return; // lw mafeesh container o5rog

    // bya5od el product elly enta m5taro
    let productData; 
    try { 
        productData = JSON.parse(sessionStorage.getItem("selectedProduct")); 
    } catch(e) { 
        productData = null; 
    } 

    if (!productData) return; // lw mafeesh product m5tar o5rog

    // el ratings el ma7foza abl kda
    const ratingsRaw = localStorage.getItem("product_ratings"); 
    const ratings = ratingsRaw ? JSON.parse(ratingsRaw) : {}; 

    // el rating el mawgood ll product
    let currentRating = 0; 
    if (typeof ratings[productData.id] !== "undefined") 
        currentRating = parseInt(ratings[productData.id]) || 0; 

    // el stars el bttzhr fel html
    const stars = ratingContainer.querySelectorAll("i"); 

    // bt3ml update ll stars 34an t8yr lonhom 3la 7sab el rating
    function updateStars(rating) { 
        stars.forEach((star, index) => { 
            if (index < rating) { 
                star.classList.remove("ri-star-line"); 
                star.classList.add("ri-star-fill"); 
            } else { 
                star.classList.remove("ri-star-fill"); 
                star.classList.add("ri-star-line"); 
            }
        });
    }

    // el click 34an t3ml select ll rating el enta 3ayzo
    stars.forEach((star, index) => { 
        star.style.cursor = "pointer"; 

        star.addEventListener("click", () => { 
            currentRating = index + 1; 
            updateStars(currentRating); 
            ratings[productData.id] = currentRating; 
            localStorage.setItem("product_ratings", JSON.stringify(ratings)); 

            // update ll number el zher gamb el stars
            const ratingCount = document.getElementById("rating-count"); 
            if (ratingCount) ratingCount.textContent = `(${currentRating})`;
        });

        // hover 34an y3ml preview bsoor3a
        star.addEventListener("mouseenter", () => { 
            updateStars(index + 1); 
        });
    });

    // lama t5rog b el mouse yrg3 el rating el asasi
    ratingContainer.addEventListener("mouseleave", () => { 
        updateStars(currentRating); 
    });

    // by3rd el rating el mat7foz
    updateStars(currentRating); 

    // by3rd el number el mawgod abl ma tdos
    const ratingCount = document.getElementById("rating-count"); 
    if (ratingCount) ratingCount.textContent = `(${currentRating})`; 
}

/**
 * 
 * {
 *  productID: [{
 *      userId: 5,
 *      rating: 4
 * },
 * {
 *      userId: 2,
 *      rating: 2
 * },
 * ]
 * },
 * 
 * 
 * {
 * userName: shehab,
 * rating: [{
 * ratingId: 1, rating: 3},
 * ]
 * 
 * }
 */