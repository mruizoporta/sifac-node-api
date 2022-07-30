import Contact from '../models/basic/Contact.js';

async function createContact(req, res) {
    const {
        personaid,
        inputtypeid,
        value,
        createdon,
        createdby,
        modifiedon,
        modifiedby
    } = req.body;

    try {
        let newContact = await Contact.create({
            personaid,
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


module.exports = {
    createContact
}