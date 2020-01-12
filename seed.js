const Products = require("./products/model");
const Categories = require("./category/model");

const seed = () => {
    // CATEGORY
    Categories.findOrCreate({ where: { weather: "Desert" }, defaults: {} });
    Categories.findOrCreate({ where: { weather: "Snow" }, defaults: {} });
    Categories.findOrCreate({ where: { weather: "Rainforest" }, defaults: {} });

    // PRODUCT
    Products.findOrCreate({
        where: {
            categoryId: 1,
            name: "Daniel",
            description: "Hedgehog cactus",
            imageUrl:
                "https://images.unsplash.com/photo-1551888419-7b7a520fe0ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
            inStock: true,
            price: "45"
        },
        defaults: {}
    });
    Products.findOrCreate({
        where: {
            categoryId: 1,
            name: "Francine",
            description: "Aloe vera",
            imageUrl:
                "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
            inStock: false,
            price: "75"
        },
        defaults: {}
    });
    Products.findOrCreate({
        where: {
            categoryId: 1,
            name: "Wilfred",
            description: "Succulent",
            imageUrl:
                "https://images.unsplash.com/photo-1521503862198-2ae9a997bbc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
            inStock: false,
            price: "45"
        },
        defaults: {}
    });
    Products.findOrCreate({
        where: {
            categoryId: 1,
            name: "Annabelle",
            description: "Bougainvillea",
            imageUrl:
                "https://images.unsplash.com/photo-1550962568-3f67f4ba5988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            inStock: true,
            price: "25"
        },
        defaults: {}
    });
    Products.findOrCreate({
        where: {
            categoryId: 1,
            name: "Roan",
            description: "Palm frond",
            imageUrl:
                "https://images.unsplash.com/photo-1498735599329-ed6e3798cdcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            inStock: true,
            price: "25"
        },
        defaults: {}
    });
    Products.findOrCreate({
        where: {
            categoryId: 2,
            name: "Atticus",
            description: "Conifer",
            imageUrl:
                "https://images.unsplash.com/photo-1547413839-59e73be55ce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
            inStock: true,
            price: "225"
        },
        defaults: {}
    });
    Products.findOrCreate({
        where: {
            categoryId: 2,
            name: "Campbell",
            description: "Scots pine",
            imageUrl:
                "https://images.unsplash.com/photo-1577845396984-03cbb990e230?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            inStock: false,
            price: "175"
        },
        defaults: {}
    });
    Products.findOrCreate({
        where: {
            categoryId: 2,
            name: "Bertie",
            description: "Cotton flower",
            imageUrl:
                "https://images.unsplash.com/photo-1549278003-929edc7af616?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            inStock: false,
            price: "35"
        },
        defaults: {}
    });
    Products.findOrCreate({
        where: {
            categoryId: 2,
            name: "Harold",
            description: "Dandelion",
            imageUrl:
                "https://images.unsplash.com/photo-1578546371939-5124eb382c82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
            inStock: false,
            price: "25"
        },
        defaults: {}
    });
    Products.findOrCreate({
        where: {
            categoryId: 2,
            name: "Annie",
            description: "Holly berries",
            imageUrl:
                "https://images.unsplash.com/photo-1481450112092-f00a4c77e381?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=714&q=80",
            inStock: false,
            price: "75"
        },
        defaults: {}
    });
    Products.findOrCreate({
        where: {
            categoryId: 3,
            name: "Lance",
            description: "Swiss cheese",
            imageUrl:
                "https://images.unsplash.com/photo-1510505751526-76254482fd38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=651&q=80",
            inStock: true,
            price: "45"
        },
        defaults: {}
    });
    Products.findOrCreate({
        where: {
            categoryId: 3,
            name: "Gandalf",
            description: "Spathiphyllum",
            imageUrl:
                "https://images.unsplash.com/photo-1567465645848-b765281eca3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=652&q=80",
            inStock: true,
            price: "30"
        },
        defaults: {}
    });
    Products.findOrCreate({
        where: {
            categoryId: 3,
            name: "Jonas",
            description: "Fan palm",
            imageUrl:
                "https://images.unsplash.com/photo-1526262779955-2cc2306057c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1343&q=80",
            inStock: true,
            price: "25"
        },
        defaults: {}
    });
    Products.findOrCreate({
        where: {
            categoryId: 3,
            name: "Orlando",
            description: "Vine variant",
            imageUrl:
                "https://images.unsplash.com/photo-1536837289209-12ad2b8b43bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
            inStock: false,
            price: "40"
        },
        defaults: {}
    });
    Products.findOrCreate({
        where: {
            categoryId: 3,
            name: "Morgan",
            description: "Orchid",
            imageUrl:
                "https://images.unsplash.com/photo-1562133558-4a3906179c67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
            inStock: false,
            price: "35"
        },
        defaults: {}
    });

    console.log("Database seeded");
};

seed();

// seed().then(() => {
//     console.log("database seeded");
//     // process.exit(); // run this when seeding only once
// });

// const categories = [
//     {
//         weather: "Desert"
//     },
//     {
//         weather: "Snow"
//     },
//     {
//         weather: "Rainforest"
//     }
// ];

// const products = [
//     {
//         categoryId: 1,
//         name: "Daniel",
//         description: "Hedgehog cactus",
//         imageUrl:
//             "https://images.unsplash.com/photo-1551888419-7b7a520fe0ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
//         inStock: true,
//         price: "45"
//     },
//     {
//         categoryId: 1,
//         name: "Francine",
//         description: "Aloe vera",
//         imageUrl:
//             "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
//         inStock: false,
//         price: "75"
//     },
//     {
//         categoryId: 1,
//         name: "Wilfred",
//         description: "Succulent",
//         imageUrl:
//             "https://images.unsplash.com/photo-1521503862198-2ae9a997bbc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
//         inStock: false,
//         price: "45"
//     },
//     {
//         categoryId: 1,
//         name: "Annabelle",
//         description: "Bougainvillea",
//         imageUrl:
//             "https://images.unsplash.com/photo-1550962568-3f67f4ba5988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
//         inStock: true,
//         price: "25"
//     },
//     {
//         categoryId: 1,
//         name: "Roan",
//         description: "Palm frond",
//         imageUrl:
//             "https://images.unsplash.com/photo-1498735599329-ed6e3798cdcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//         inStock: true,
//         price: "25"
//     },
//     {
//         categoryId: 2,
//         name: "Atticus",
//         description: "Conifer",
//         imageUrl:
//             "https://images.unsplash.com/photo-1547413839-59e73be55ce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
//         inStock: true,
//         price: "225"
//     },
//     {
//         categoryId: 2,
//         name: "Campbell",
//         description: "Scots pine",
//         imageUrl:
//             "https://images.unsplash.com/photo-1577845396984-03cbb990e230?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
//         inStock: false,
//         price: "175"
//     },
//     {
//         categoryId: 2,
//         name: "Bertie",
//         description: "Cotton flower",
//         imageUrl:
//             "https://images.unsplash.com/photo-1549278003-929edc7af616?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
//         inStock: false,
//         price: "35"
//     },
//     {
//         categoryId: 2,
//         name: "Harold",
//         description: "Dandelion",
//         imageUrl:
//             "https://images.unsplash.com/photo-1578546371939-5124eb382c82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
//         inStock: false,
//         price: "25"
//     },
//     {
//         categoryId: 2,
//         name: "Annie",
//         description: "Holly berries",
//         imageUrl:
//             "https://images.unsplash.com/photo-1481450112092-f00a4c77e381?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=714&q=80",
//         inStock: false,
//         price: "75"
//     },
//     {
//         categoryId: 3,
//         name: "Lance",
//         description: "Swiss cheese",
//         imageUrl:
//             "https://images.unsplash.com/photo-1510505751526-76254482fd38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=651&q=80",
//         inStock: true,
//         price: "45"
//     },
//     {
//         categoryId: 3,
//         name: "Gandalf",
//         description: "Spathiphyllum",
//         imageUrl:
//             "https://images.unsplash.com/photo-1567465645848-b765281eca3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=652&q=80",
//         inStock: true,
//         price: "30"
//     },
//     {
//         categoryId: 3,
//         name: "Jonas",
//         description: "Fan palm",
//         imageUrl:
//             "https://images.unsplash.com/photo-1526262779955-2cc2306057c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1343&q=80",
//         inStock: true,
//         price: "25"
//     },
//     {
//         categoryId: 3,
//         name: "Orlando",
//         description: "Vine variant",
//         imageUrl:
//             "https://images.unsplash.com/photo-1536837289209-12ad2b8b43bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
//         inStock: false,
//         price: "40"
//     },
//     {
//         categoryId: 3,
//         name: "Morgan",
//         description: "Orchid",
//         imageUrl:
//             "https://images.unsplash.com/photo-1562133558-4a3906179c67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
//         inStock: false,
//         price: "35"
//     }
// ];
