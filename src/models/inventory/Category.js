import Sequelize from 'sequelize';
import {sequelize} from '../../database/database';

const Category= sequelize.define('category', {
    categoryid:
    {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name:
    {
        type: Sequelize.TEXT
    },
    description:
    {
        type: Sequelize.TEXT
    },
    isactive:
    {
        type: Sequelize.BOOLEAN
    },
    createdon:
    {
        type: Sequelize.DATE
    },
    createdby:
    {
        type: Sequelize.TEXT
    },
    modifiedon:
    {
        type: Sequelize.DATE
    },
    modifiedby:
    {
        type: Sequelize.TEXT
    }  
},{
    timestamps: false
});

export default Category;

