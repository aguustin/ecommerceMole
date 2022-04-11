const products = [
    {
        id: '1',
        name: 'First Product',
        price: 2000,
        category: 'b',
        img: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/AVADirect-Custom-X99-Intel-Core-i7-gaming-cpu.png  ',
        stock: 25,
        description: 'c'
    },
    {
        id: '2',
        name: 'Second Product',
        price: 3000,
        category: 'f',
        img: 'https://http2.mlstatic.com/D_NQ_NP_642580-MLA49307288681_032022-W.jpg',
        stock: 35,
        description: 'f'
    },
    {
        id: '3',
        name: 'Third Product',
        price: 4000,
        category: 'e',
        img: 'https://pc-solucion.es/wp-content/uploads/2017/06/que-es-cpu.jpg',
        stock: 45,
        description: 'e'
    },
    {
        id: '4',
        name: 'Fourt Product',
        price: 3000,
        category: 'f',
        img: 'https://http2.mlstatic.com/D_NQ_NP_642580-MLA49307288681_032022-W.jpg',
        stock: 35,
        description: 'f'
    }
];

export const getProducts = () => { //manda el objeto de products a itemListContainer
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products)
        },2000)
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