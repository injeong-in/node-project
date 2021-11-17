const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            userID: {
                type: Sequelize.STRING(10),
                allowNull: false,
                primaryKey: true,
            },
            userPW: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            userName: {
                type: Sequelize.STRING(5),
                allowNull: true,
            },
            email: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
            emailHash: {
                type: Sequelize.STRING(180),
                allowNull: true,
            },
            phonenumber: {
                type: Sequelize.STRING(13),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'User',
            tableName: 'user_inform',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.User.hasMany(db.Comment, { foreignKey: 'USER_ID', sourceKey: 'userID' });
    }
};