// ...existing code...
const products = [
  {
    id: 1,
    name: " Casual Round Neck T-Shirt",
    price: 100,
    description: "casual t shirt for cool hangouts .",
    colors: [
      {
        name: "Green",
        hex: "#22c55e",
        image: "images/product1_green_1.jpg",
        images: [
           "images/product1_green_1.jpg",
          "images/product1_green_2.jpg",
          "images/product1_green_3.jpg",
          "images/product1_green_4.jpg"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"],
        productRating: 0
      },
      {
        name: "Yellow",
        hex: "#eab308",
        image: "images/product1_yellow_1.jpg",
        images: [
          "images/product1_yellow_1.jpg",
          "images/product1_yellow_2.jpg",
          "images/product1_yellow_3.jpg",
          "images/product1_yellow_4.jpg"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"],
        productRating: 0
      },
      {
        name: "Red",
        hex: "#ef4444",
        image: "images/product1_red_1.jpg",
        images: [
           "images/product1_red_1.jpg",
          "images/product1_red_2.jpg",
          "images/product1_red_3.jpg",
          "images/product1_red_4.jpg"
        ],
        sizes: ["S", "L"],
        productRating: 0
      },
      {
        name: "White",
        hex: "#ffffff",
        image: "images/product1_white_1.jpg",
        images: [
          "images/product1_white_1.jpg",
          "images/product1_white_2.jpg",
          "images/product1_white_3.jpg",
          "images/product1_white_4.jpg"
        ],
        sizes: ["S", "L"],
        productRating: 0
      },
      {
        name: "Maroon",
        hex: "#991b1b",
        image: "images/product1_maroon_1.jpg",
        images: [
          "images/product1_maroon_1.jpg",
          "images/product1_maroon_2.jpg",
          "images/product1_maroon_3.jpg",
          "images/product1_maroon_4.jpg"
        ],
        sizes: ["M", "L", "XL"],
        productRating: 0
      }
    ]
  },
  {
    id: 2,
    name: " Slim Fit Turtleneck Sweater",
    price: 50,
    description: "slim fit tshirt for clasic hangouts .",
    colors: [
      {
        name: "Blue",
        hex: "#3b82f6",
        image: "images/product2_blue_1.jpg",
        images: [
          "images/product2_blue_1.jpg",
          "images/product2_blue_2.jpg",
          "images/product2_blue_3.jpg",
          "images/product2_blue_4.jpg"
        ],
        sizes: ["M", "L", "XL"],
        productRating: 0
      }
    ]
  },
  {
    id: 3,
    name: " cr7 oversized t-shirt",
    price: 150,
    description: "men cr7 oversized t shirt with front and back t shirt print",
    colors: [
      {
        name: "black",
        hex: "#000000",
        image: "images/cr7black face2.jpeg",
        images: ["images/cr7black face2.jpeg", "images/cr7black back.jpeg"],
        sizes: ["S", "M",  "XL", ], 
        productRating: 0
      },
      {
        name: "white",
        hex: "#ffffff",
        image: "images/cr7white face.jpeg",
        images: ["images/cr7white face.jpeg", "images/cr7white back.jpeg"],
        sizes: ["S", "M", "L",  "XXL"],
        productRating: 0
      },
      {
        name: "blue",
        hex: "#0707edff",
        image: "images/cr7blue face.jpeg",
        images: ["images/cr7blue face.jpeg", "images/cr7blue back.jpeg"],
        sizes: [ "M", "L", "XL", "XXL"],
        productRating: 0
      }
    ]
  },
  {
    id: 4,
    name: " Striped Polo Shirt",
    price: 20,
    description: " polo tshirt for both clasic and cool hangout.",
    colors: [
      {
        name: "Grey",
        hex: "#9ca3af",
        image: "images/product3_grey_1.jpg",
        images: ["images/product3_grey_1.jpg",],
        sizes: ["S", "M", "L", "XL", "XXL"],
        productRating: 0
      }
    ]
  },
  {
    id: 5,
    name: " Casual Long Sleeve Polo",
    price: 125,
    description: "casual long sleeve",
    colors: [
      {
        name: "Green",
        hex: "#22c55e",
        image: "images/product4_green_1.jpg",
        images: ["images/product4_green_1.jpg",],
        sizes: ["S", "M", "L", "XL", "XXL"],
        productRating: 0
      }
    ]
  },
  {
    id: 6,
    name: "Western Style Denim Shirt",
    price: 147,
    description: "denim tshirt.",
    colors: [
      {
        name: "Black",
        hex: "#000000",
        image: "images/product5_black_1.jpg",
        images: ["images/product5_black_1.jpg",],
        sizes: ["S", "M", "L", "XL", "XXL"],
        productRating: 0
      }
    ]
  },
  {
    id: 7,
    name: " Casual USA Print Tee",
    price: 80,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laborum aut explicabo molestias voluptas, eum nulla doloremque laboriosam. Accusantium omnis illum nulla architecto doloribus.",
    colors: [
      {
        name: "Brown",
        hex: "#92400e",
        image: "images/product6_brown_1.jpg",
        images: ["images/product6_brown_1.jpg",],
        sizes: ["S", "M", "L", "XL", "XXL"],
        productRating: 0
      }
    ]
  },
  {
    id: 8,
    name: " Casual Short Sleeve Polo",
    price: 62,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laborum aut explicabo molestias voluptas, eum nulla doloremque laboriosam. Accusantium omnis illum nulla architecto doloribus.",
    colors: [
      {
        name: "Blue",
        hex: "#3b82f6",
        image: "images/product7_blue_1.jpg",
        images: ["images/product7_blue_1.jpg"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        productRating: 0
  }]
  },
  {
    id: 9,
    name: " Summer Leaf Pattern T-Shirt",
    price: 70,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laborum aut explicabo molestias voluptas, eum nulla doloremque laboriosam. Accusantium omnis illum nulla architecto doloribus.",
    colors: [
      {
        name: "Green",
        hex: "#22c55e",
        image: "images/product8_green_1.jpg",
        images: ["images/product8_green_1.jpg"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        productRating: 0
      }
    ]
  },
  
];
// ...existing code...