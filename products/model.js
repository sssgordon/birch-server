const Sequelize = require("sequelize");
const db = require("../db");
const Category = require("../category/model");

const Product = db.define("product", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    inStock: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    price: {
        type: Sequelize.DECIMAL,
        allowNull: false
    }
});

Product.belongsTo(Category);
Category.hasMany(Product);

module.exports = Product;
