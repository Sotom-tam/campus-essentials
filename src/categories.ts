
interface Categories{
    id:string
    name:string
    imgURL:string
    items:{
        id:string
        name:string
        description:string
        price:number
        imgURL:string
        alt:string
        quantity:string
        inStock:boolean
    }[]
}
function generateItemId(array:Categories[]){
  array.forEach((object)=>{
    object.items.map((item,index)=>{
      return item.id=`${object.id}-${index+1}`    })
  })
}

//const categoriesName=["beauty","school","food","snacks"]
const categories:Categories[] = [
   {
    id: "beauty",
    imgURL:"/img/Beauty .webp",
    name: "Beauty & Personal Care 💄",
    items: [
      {
        id: "",
        name: "Lipgloss",
        description: "Shiny lipgloss for any occasion.",
        price: 2500,
        imgURL: "/img/Beauty/Juicy Put Lip gloss.webp",
        alt: "Lipgloss",
        quantity:"1",
        inStock: true,
      },
      {
        id: "",
        name: "Makeup Bag",
        description: "Compact bag to carry makeup.",
        price: 4500,
        imgURL: "/img/Beauty/high-angle-toilet-bag-with-brushes.webp",
        alt: "Makeup Bag",
        quantity:"1",
        inStock: true,
      },
      {
        id: "",
        name: "Luxe Luxury Face Moisturizer",
        description: "Moisturizing face cream.",
        price: 5500,
        imgURL: "/img/Beauty/Moistureriser.jpg",
        alt: "Face Cream",
        quantity:"1",
        inStock: true,
      },
      {
        id: "",
        name: "Smart Collection Perfume",
        description: "Sweet-smelling perfume.",
        price: 10500,
        imgURL: "/img/Beauty/Smart Collection 359 Tom Ford Perfume 100ml.webp",
        alt: "Perfume",
        quantity:"1",
        inStock: true,
      },
    ],
  },
  {
    id: "school",
    imgURL:"img/School and Academica.webp",
    name: "School & Academic Supplies 🏫",
    items: [
      {
        id: "",
        name: "Notebook",
        description:"You need a notebook to write stuff!",
        price: 800,
        imgURL: "/img/School/top-view-notebooks-table.webp",
        alt:"A notebook",
        quantity:"1",
        inStock: true
      },
      {
        id: "",
        name: "Calculator",
        description:"A basic calculator for school",
        price: 5000,
        imgURL: "/img/School/calculator-black-background.webp",
        alt:"Calculator",
        quantity:"1",
        inStock: true
      },
      {
        id: "",
        name: "Pens",
        description:"A pack of smooth writing pens",
        price: 2000,
        imgURL: "/img/School/BiC Cristal Original Ball Point Pen Pack of 10.webp",
        alt:"Pens",
        quantity:"1",
        inStock: true
      },
      {
        id: "",
        name: "Usb Drive",
        description:"8GB USB flash drive.",
        price: 7000,
        imgURL: "/img/School/pendrive-isolated-white.webp",
        alt:"Usb Drive",
        quantity:"1",
        inStock: true
      },
    ]
  },
  {
    id: "food",
    imgURL:"/img/Food and Groceries.webp",
    name: "Food, Snacks & Groceries 🍜",
    items: [
      {
        id:"",
        name: "Chinchin",
        description: "Crunchy fried snack.",
        price: 2500,
        imgURL: "img/Food and snacks/grandmas-chinchin-vanilla.webp",
        alt: "Chinchin",
        quantity:"1",
        inStock: true,
      },
      {
        id:"",
        name: "Indomie",
        description: "Instant noodles pack.",
        price: 12000,
        imgURL: "/img/Food and snacks/Indomie Onion Chicken.webp",
        alt: "Indomie",
        quantity:"1",
        inStock: true,
      },
      {
        id:"",
        name: "Munch it",
        description: "Yummy snack to munch on.",
        price: 400,
        imgURL: "/img/Food and snacks/Munch it.webp",
        alt: "Munch it",
        quantity:"1",
        inStock: true,
      },
      {
        id:"",
        name: "Yale Choco King",
        description: "Tasty biscuits for tea time.",
        price: 600,
        imgURL: "img/Food and snacks/Yale choco king chocolate coated biscuits x4.webp",
        alt: "Biscuits",
        quantity:"1",
        inStock: true,
      },
    ],
  },
  {
    id: "clothing",
    imgURL:"/img/Clothing.webp",
    name: "Clothing, Accessories & Fashion 👕",
    items: [
      {
        id:"",
        name: "Fashion Bag",
        description: "Stylish bag for all occasions.",
        price: 5000,
        imgURL: "/img/Clothing/woman-fashion-hand-bag.webp",
        alt: "Fashion Bag",
        quantity:"1",
        inStock: true,
      },
      {
        id:"",
        name: "Women Bag",
        description: "Elegant bag for women.",
        price: 6000,
        imgURL: "/img/Clothing/woman-bag.webp",
        alt: "Women Bag",
        quantity:"1",
        inStock: true,
      },
      {
        id:"",
        name: "Shirt",
        description: "Casual shirt for everyday wear.",
        price: 3500,
        imgURL: "/img/Clothing/shirt-mockup-concept-with-plain-clothing.webp",
        alt: "Shirt",
        quantity:"1",
        inStock: true,
      },
      {
        id:"",
        name: "Tote Bag",
        description: "Comfortable bag for all needs.",
        price: 4000,
        imgURL: "/img/Clothing/black-toilet-bag-still-life.webp",
        alt: "Tote Bag",
        quantity:"1",
        inStock: true,
      },
    ],
  },
]
generateItemId(categories)
export  default categories