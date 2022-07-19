const bcryptjs = require('bcryptjs');

const encrypt = async(password) => {
    const salt = bcryptjs.genSaltSync();
    const passwordhash = bcryptjs.hashSync(password, salt);

    return passwordhash
}

const comparar = async(password, hasthPassword) => {
    return bcryptjs.compareSync(password, hasthPassword.trim())
}

module.exports = { encrypt, comparar }