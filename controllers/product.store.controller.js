const { StoreProducts } = require('../models/inventory/StoreProducts');
const { Products } = require('../models/inventory/Products');

async function createProductStore(req, res) {
    const { productid, storeid, quantity, createdon, createdby, modifiedon, modifiedby, isactive, bsc_company_companyid } = req.body;

    try {
        let newStoreProducts = await StoreProducts.create({
            productid,
            storeid,
            quantity,
            createdon,
            createdby,
            modifiedon,
            modifiedby,
            isactive,
            bsc_company_companyid
        });

        if (newStoreProducts) {
            return res.json({
                message: "Producto creada satisfactoriamente.",
                data: newStoreProducts
            });
        }
    } catch (error) {

        res.status(500).json({

            message: error + "Error al registrar la bodega.",
            data: {}
        });

    }
}

async function addinventoryProduct(req, res) {
    const { id } = req.params;
    const { productid, storeid, quantitynew, modifiedon, modifiedby } = req.body;

    try {
        const storeproduct = await StoreProducts.findAll({
            attributes: ['storeproductsid', 'quantity'],
            where: {
                productid: productid,
                storeid: storeid
            }
        });


        if (storeproduct.length > 0) {
            storeproduct.forEach(
                async StoreProducts => {
                    await StoreProducts.update({
                        quantity: quantitynew,
                        modifiedon: modifiedon,
                        modifiedby: modifiedby
                    });
                })
        }

        return res.json({
            message: 'El producto se actualizo satisfactoriamente',
            data: storeproduct
        })

    } catch (error) {
        res.status(500).json({
            message: error + "Error al actualizar el producto.",
            data: {}
        });

    }

}

async function restinventoryProduct(req, res) {
    const { id } = req.params;
    const { productid, storeid, quantitynew, modifiedon, modifiedby } = req.body;

    try {
        const storeproducts = await StoreProducts.findOne({
            attributes: ['productid', 'storeid', 'quantity', 'storeid'],
            where: {
                productid: productid,
                storeid: storeid
            }
        });

        if (storeproducts.length > 0) {
            storeproducts.forEach(
                async StoreProducts => {
                    await StoreProducts.update({
                        quantity: quantitynew,
                        modifiedon: modifiedon,
                        modifiedby: modifiedby
                    });
                })
        }

        return res.json({
            message: 'El producto se actualizo satisfactoriamente',
            data: storeproducts
        })

    } catch (error) {
        res.status(500).json({
            message: error + "Error al actualizar el producto.",
            data: {}
        });

    }

}


async function updatequantityProduct(req, res) {
    const { id } = req.params;
    const { quantity, modifiedon, modifiedby } = req.body;
    console.log(req.body);
    try {
        const storeproduct = await StoreProducts.findAll({
            attributes: ['storeproductsid', 'quantity'],
            where: {
                productid: id
            }
        });


        if (storeproduct.length > 0) {
            storeproduct.forEach(
                async StoreProducts => {
                    await StoreProducts.update({
                        quantity: quantity,
                        modifiedon: modifiedon,
                        modifiedby: modifiedby
                    });
                })
        }

        return res.json({
            message: 'El producto se actualizo satisfactoriamente',
            data: storeproduct
        })

    } catch (error) {
        res.status(500).json({
            message: error + "Error al actualizar el producto.",
            data: {}
        });

    }

}

async function getProductStore(req, res) {
    const { companyid } = req.params;
    try {
        const productostore = await StoreProducts.findAll({
            order: [
                ["productid", "ASC"]
            ]
        });
        res.json(
            productostore
        );

    } catch (error) {

        res.status(500).json({
            message: error + "Error al obtener la zona.",
            data: {}
        });
    }
}


async function getProductStoreOne(req, res) {
    const { id } = req.params;
    let bodega = 0;
    try {
        //Buscamos de que compania es este producto
        const producto = await Products.findOne({
            attributes: ['bsc_company_companyid'],
            where: {
                productsid: id
            }
        })

        if (producto.bsc_company_companyid == 2) {
            bodega = 1;
        } else bodega = 2;

        const storeproduct = await StoreProducts.findOne({
            attributes: ['productid', 'storeid', 'storeproductsid', 'quantity'],
            where: {
                productid: id,
                storeid: bodega
            }
        });

        res.json(
            [storeproduct]
        );

    } catch (error) {

        res.status(500).json({
            message: error + "Error al obtener la existencia.",
            data: {}
        });
    }
}

module.exports = {
    getProductStore,
    createProductStore,
    addinventoryProduct,
    restinventoryProduct,
    getProductStoreOne,
    updatequantityProduct

}