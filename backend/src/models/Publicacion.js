const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Publicacion', {
        publiacionId: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: UUIDV4
        },
        titular: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fechaPublicacion: {
            type: DataTypes.DATE,
            allowNull: false
        },
        imagen: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcionImg: {
            type: DataTypes.STRING,
            allowNull: false
        },
        autor: {
            type: DataTypes.STRING,
            allowNull: false
        },    
        urlSlug: {
            type: DataTypes.STRING,
            allowNull: false
        },        
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'publicado'
        },   
        destacadoPag: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        destacadoLateral: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        destacadoCat: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }

    })
}