const { products } = require('../db.json');

module.exports = {
    getProducts: (req, res) => {
        res.json({products: products});
    },
    addProduct: (req, res) => {
        console.log(req.body.name);
        const { name } = req.body;
        products.push({
            name,
            id: products.length
        });

        res.json({
            "success": true,
            "msg": "Agregado correctamente"
        });
    },
    updateProduct: (req, res) => {
        console.log(req.params.id);
        
        const { id } = req.params;
        const { name } = req.body;

        products.forEach((product, i) => {
            if (product.id === Number(id)) {
                product.name = name;
            }
        });

        res.json({
            "success": true,
            "msg": "Actualizado correctamente"
        });

    },
    deleteProduct: (req, res) => {
        console.log(req.params.id);
        const { id } = req.params;

        products.forEach((product, i) => {
            if (product.id === Number(id)) {
                products.splice(i, 1);
            }
        });

        res.json({
            "success": true,
            "msg": "Eliminado correctamente"
        });

    }
}