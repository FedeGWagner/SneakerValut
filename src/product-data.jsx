
const products = [
    {
        id: 1,
        name: 'Jordan 1 Retro High OG',
        imageSrc: '../public/img/aj1landf.png',
        imageAlt: 'Jordan 1 Retro High OG',
        price: '$429',
        color: 'Chicago Lost and Found',
        brand: 'Air Jordan',
        model: '1 Retro High',
        image0: 'https://i.shgcdn.com/8407b372-9f45-418f-abd4-89a813923f1d/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
        image1: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/11/16/16685974559923.jpg',
        image2: 'https://desempacados.com/wp-content/uploads/2022/09/Desempacados_air-jordan-1-chicago-lost-and-found-8.jpeg',
        image3: 'https://www.deadstock.de/wp-content/uploads/2022/03/Air-Jordan-1-Lost-And-Found-Release-Date-4.jpg-e1669923492231.webp',

        // sizes: [
        //     { name: '7', inStock: false },
        //     { name: '7.5', inStock: true },
        //     { name: '8', inStock: true },
        //     { name: '8.5', inStock: true },
        //     { name: '9', inStock: true },
        //     { name: '9.5', inStock: true },
        //     { name: '10', inStock: true },
        //     { name: '10.5', inStock: true },
        // ],
        description:'lorem ipsum dolor sit amet, consectet',
        details: 'lorem ipsum dolor sit amet, consect',
    },
    {
        id: 2,
        name: 'Nike Dunk Low Retro',
        href: '#',
        imageSrc: '../src/assets/img/dunkpanda.png',
        imageAlt: "Nike Dunk Low Retro",
        price: '$126',
        color: 'White Black Panda (2021)',
        brand: 'Nike',
        model: 'Dunk Low',
        stock: 5,
    },
    {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '../src/assets/img/adibadw.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '../src/assets/img/aj1unc.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 5,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '../src/assets/img/yzy700v2cream.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 6,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '../src/assets/img/yzy350vanta.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 7,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 8,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}
export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === +productId))
        }, 500)
    })
}
