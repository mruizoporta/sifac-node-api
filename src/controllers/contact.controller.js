const Contact = require('../models/basic/Contact.js');

async function createContact(req, res) {
    const {
        personid,
        inputtypeid,
        value,
        createdon,
        createdby,
        modifiedon,
        modifiedby
    } = req.body;

    console.log(req.body);
    try {
        let newContact = await Contact.create({
            personid,
            inputtypeid,
            value,
            createdon,
            createdby,
            modifiedon,
            modifiedby
        });

        if (newContact) {
            return res.json({
                message: "Contacto creada satisfactoriamente.",
                data: newContact
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error + "Error al registrar el contacto.",
            data: {}
        });

    }
}


async function updateContact(req, re) {
    const { id } = req.params;
    const { inputtypeid, value, modifiedon, modifiedby } = req.body;
    try {
        const contact = await Catalogvalue.findAll({
            attributes: ['inputtypeid', 'value', 'modifiedon', 'modifiedby'],
            where: {
                contactid: id
            }
        });

        if (contact.length > 0) {
            Contact.forEach(

                async Contact => {
                    await Contact.update({
                            inputtypeid,
                            value,
                            modifiedon,
                            modifiedby
                        }

                    );
                })
        }

        return res.json({
            message: 'Contacto actualizado satisfactoriamente',
            data: contact
        })

    } catch (error) {
        console.log(error);

    }
}


function deleteContact(req, res) {
    const { personid } = req.params;
    try {
        const deleteRowCount = Contact.destroy({
            where: {
                personid: personid
            }
        });
        res.json({
            message: "Contacto eliminado satisfactoriamente.",
            count: deleteRowCount
        })
    } catch (error) {
        console.log(error);
    }
}

async function getOneContactobyPerson(req, res) {
    const { id } = req.params;

    try {
        const contact = await Contact.findOne({
            where: {
                personid: id
            }
        });
        res.json({
            data: contact
        })
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    createContact,
    deleteContact,
    getOneContactobyPerson,
    updateContact
}