const Products = require('../models/inventory/Products');
const StoreProducts = require('../models/inventory/StoreProducts');
const { sequelize } = require('../database/database.js');

async function createProduct(req, res) {
    let bodega = 0;
    const {
        name,
        code,
        model,
        categoryid,
        minimumquantity,
        utilitymargin_credit,
        utilitymargin_cash,
        averagecost,
        creditprice,
        cashprice,
        createdon,
        createdby,
        modifiedon,
        modifiedby,
        isactive,
        psr,
        brandid,
        bsc_company_companyid,
        quantity,
    } = req.body;

    try {
        let newProducts = await Products.create({
            name,
            code,
            model,
            inv_category_categoryid: categoryid,
            bsc_brand_brandid: brandid,
            minimumquantity,
            utilitymargin_credit,
            utilitymargin_cash,
            averagecost,
            creditprice,
            cashprice,
            createdon,
            createdby,
            modifiedon,
            modifiedby,
            isactive,
            psr,
            bsc_company_companyid
        });

        if (newProducts) {

            //Buscamos de que compania es este producto
            const productocompania = await Products.findOne({
                attributes: ['bsc_company_companyid'],
                where: {
                    productsid: newProducts.dataValues.productsid
                }
            })

            if (productocompania.bsc_company_companyid == 2) {
                bodega = 1;
            } else bodega = 2;


            //Procedemos a insertar la existencia
            let newStoreProducts = await StoreProducts.create({
                productid: newProducts.dataValues.productsid,
                storeid: bodega,
                quantity,
                createdon,
                createdby,
                modifiedon,
                modifiedby
            });

            //Si es psr actualizamos el codigo
            if (psr) {
                const productcode = await Products.findAll({
                    attributes: ['productsid'],
                    where: {
                        productsid: newProducts.dataValues.productsid
                    }
                });

                if (productcode.length > 0) {
                    productcode.forEach(
                        async Products => {
                            await Products.update({
                                code: "PSR0" + newProducts.dataValues.productsid
                            });
                        })
                }
            }


            return res.json({
                message: "Producto creada satisfactoriamente.",
                data: newProducts
            });



        }
    } catch (error) {

        res.status(500).json({
            message: error + "Error al registrar el producto.",
            data: { error }
        });

    }
}

async function getProduct(req, res) {
    const { companyid } = req.params;
    try {

        const result = await sequelize.query('select * from public.inv_productview WHERE bsc_company_companyid= (:vcompanyid)', { replacements: { vcompanyid: companyid, } });

        res.json(result[0]);
    } catch (error) {

        console.log(error);
    }
}

async function getProductStore(req, res) {
    const { id } = req.params;
    try {

        const result = await sequelize.query('select * from public.inv_soreproductsview WHERE productid= (:vproductid)', { replacements: { vproductid: id, } });
        res.json(result[0]);
    } catch (error) {

        console.log(error);
    }
}

async function updateProduct(req, res) {
    const { id } = req.params;
    const {
        name,
        code,
        categoryid,
        minimumquantity,
        utilitymargin_credit,
        utilitymargin_cash,
        averagecost,
        creditprice,
        cashprice,
        modifiedon,
        modifiedby,
        brandid,
        quantity,
        psr,
    } = req.body;
    try {
        const products = await Products.findAll({
            attributes: ['productsid', 'name', 'code', 'inv_category_categoryid', "bsc_brand_brandid",
                'minimumquantity', 'utilitymargin_credit', 'utilitymargin_cash',
                'averagecost', 'creditprice', 'cashprice', 'modifiedon', 'modifiedby', 'isactive'
            ],
            where: {
                productsid: id
            }
        });

        if (products.length > 0) {
            products.forEach(

                async Products => {
                    await Products.update({
                            name,
                            code,
                            inv_category_categoryid: categoryid,
                            bsc_brand_brandid: brandid,
                            minimumquantity,
                            utilitymargin_credit,
                            utilitymargin_cash,
                            averagecost,
                            creditprice,
                            cashprice,
                            psr,
                            modifiedon,
                            modifiedby

                        }

                    );
                })

            //Actualizamos la cantidad
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

            //Si es psr actualizamos el codigo
            if (psr) {
                const productcode = await Products.findAll({
                    attributes: ['productsid'],
                    where: {
                        productsid: id
                    }
                });

                if (productcode.length > 0) {
                    productcode.forEach(
                        async Products => {
                            await Products.update({
                                code: "PSR0" + id
                            });
                        })
                }
            }

        }

        return res.json({
            message: 'Producto actualizada satisfactoriamente',
            data: products
        })

    } catch (error) {

        res.status(500).json({
            message: error + "Error al actualizar el producto.",
            data: {}
        });

    }

}

async function inactivarProduct(req, res) {
    const { id } = req.params;
    try {
        const product = await Products.findAll({
            attributes: ['productsid'],
            where: {
                productsid: id
            }
        });

        if (product.length > 0) {
            product.forEach(
                async Products => {
                    await Products.update({
                        isactive: false
                    });
                })
        }

        return res.json({
            message: 'El producto se inactivo satisfactoriamente',
            data: product
        })

    } catch (error) {
        res.status(500).json({
            message: error + "Error al actualizar el producto.",
            data: {}
        });

    }

}

async function getOneProduct(req, res) {
    const { id } = req.params;

    try {

        const result = await sequelize.query('select * from public.inv_productviewedit WHERE productsid= (:vproductsid)', { replacements: { vproductsid: id, } });

        res.json(result[0][0]);

    } catch (error) {
        res.status(500).json({
            message: error + "Error al obtener el producto.",
            data: {}
        });
    }
}


module.exports = {
    createProduct,
    getProduct,
    updateProduct,
    inactivarProduct,
    getOneProduct,
    getProductStore

}