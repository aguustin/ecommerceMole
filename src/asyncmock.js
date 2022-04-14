const products = [
    {
        id: '1',
        name: 'First Product',
        price: 2000,
        category: 'computer',
        img: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/AVADirect-Custom-X99-Intel-Core-i7-gaming-cpu.png  ',
        stock: 25,
        description: 'c'
    },
    {
        id: '2',
        name: 'Second Product',
        price: 3000,
        category: 'computer',
        img: 'https://http2.mlstatic.com/D_NQ_NP_642580-MLA49307288681_032022-W.jpg',
        stock: 35,
        description: 'f'
    },
    {
        id: '3',
        name: 'Third Product',
        price: 4000,
        category: 'computer',
        img: 'https://pc-solucion.es/wp-content/uploads/2017/06/que-es-cpu.jpg',
        stock: 45,
        description: 'e'
    },
    {
        id: '4',
        name: 'Fourt Product',
        price: 3000,
        category: 'computer',
        img: 'https://http2.mlstatic.com/D_NQ_NP_642580-MLA49307288681_032022-W.jpg',
        stock: 35,
        description: 'f'
    },
        {
        id: '5',
        name: 'Five Product',
        price: 2000,
        category: 'phone',
        img: 'https://www.cetrogar.com.ar/media/catalog/product/t/e/te2761-1.jpg?width=500&height=500&canvas=500:500&quality=80&bg-color=255,255,255&fit=bounds',
        stock: 25,
        description: 'c'
    },
    {
        id: '6',
        name: 'phone',
        price: 3000,
        category: 'phone',
        img: 'https://http2.mlstatic.com/D_NQ_NP737893-MLA42638542149_072020-B.jpg',
        stock: 35,
        description: 'f'
    },
    {
        id: '7',
        name: 'phone',
        price: 4000,
        category: 'phone',
        img: 'https://elcomercio.pe/resizer/OdrQW5T7FxdgRh0V-g7uTFPaOZk=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/X7DW3VH3FRD27BMJMCPBMSLVII.jpg',
        stock: 45,
        description: 'e'
    },
    {
        id: '8',
        name: 'phone',
        price: 3000,
        category: 'phone',
        img: 'https://gestion.pe/resizer/yj6fF1EmscR8lUBh38P7yZyVpPg=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/UUPID3O2EZGNBCKGD3EQPYGUNU.jpg',
        stock: 35,
        description: 'f'
    }
];

const categories = [
    {id:'computer', description:'Computer'},
    {id:'phone', description:'Phone'}
    //{id:'watch', description:'Watch'}
]

export const getCategories = () => {
    return new Promise(resolve => {
        resolve(categories)
    })
}

export const getProducts = (categoryId) => { //manda el objeto de products a itemListContainer
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        },500)
    })
}

export const getProductsById = (id) => { //manda el objeto de products a itemListContainer
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        },2000)
        console.log(id)
    })
}
