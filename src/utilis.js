import ProductStar from "./components/Product/ProductStar"

export const product = [
    {
        id:1,
        offpercentage: '15% off',
        image: '/image/img-1 (1).jfif',
        slug:'product1',
        title: 'Product One',
        star: <ProductStar step1 step2 step3 step4 step5 ></ProductStar>,
        price: 30.04,
        priceoff: 60.00,
    },
    {
        id:2,
        offpercentage: '12% off',
        image: '/image/img-1 (6).jfif',
        slug:'product2',
        title: 'Product Two',
        star: <ProductStar step1 step2 step3 step4 ></ProductStar>,
        price: 60.58,
        priceoff: 110.00,
    },
    {
        id:3,
        offpercentage: '10% off',
        image: '/image/img-1 (8).jfif',
        slug:'product3',
        title: 'Product Three',
        star: <ProductStar step1 step2 step3 ></ProductStar>,
        price: 40.04,
        priceoff: 45.50,
    },
    {
        id:4,
        offpercentage: '5% off',
        image: '/image/img-1.jfif',
        slug:'product4',
        title: 'Product Four',
        star: <ProductStar step1 step2 step3 step4></ProductStar>,
        price: 95.04,
        priceoff: 120.00,
    },
    {
        id:5,
        offpercentage: '50% off',
        image: '/image/img-6.jfif',
        star: <ProductStar step1 step2 step3 step4 step5 step6></ProductStar>,
        slug:'product5',
        title: 'Product Five',
        price: 80.04,
        priceoff: 160.00,
    }
]

export const categoryItems = [
   {
       id:1,
       title:'Home',
       path: '/'
   },
   {
       id:2,
       title:'Mega Menu',
       path: '/megamenu'
   },
   {
       id:3,
       title:'Full Screen Menu',
       path: '/screenmenu'
   },
   {
       id:4,
       title:'Pages',
       path: '/pages'
   },
   {
       id:5,
       title:'User Account',
       path: '/useraccount'
   },
   {
       id:6,
       title:'Vendor Account',
       path: '/vendoraccount'
   },
]

export const HomehoverItems = [
    {
        id:11,
        path: '/superstore',
        title: 'Super Store'
    },
    {
        id:12,
        path: '/furniture',
        title: 'Furniture'
    },
    {
        id:13,
        path: '/grocery',
        title: 'Grocery'
    },
    {
        id:14,
        path: '/health',
        title: 'Health and Beauty'
    },
    {
        id:15,
        path: '/fashion',
        title: 'Fashion'
    },
    {
        id:16,
        path: '/giftStore',
        title: 'Gift Store'
    },
    {
        id:17,
        path: '/gadget',
        title: 'Gadget'
    },
]

export const navbarPagehover = [
  {
      id: 1,
      path: '/salespage',
      title: 'Sales Page'
  },
  {
      id: 2,
      path: '/vendor',
      title: 'Vendor'
  },
  {
      id: 3,
      path: '/shop',
      title: 'Shop'
  },
]