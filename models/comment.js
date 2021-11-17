const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            REPLY_ID: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
                primaryKey: true,
            },
            BOARD_ID: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
                primaryKey: true,
            },
            USER_ID: {
                type: Sequelize.STRING(15),
                allowNull: false,
            },
            REPLY_CONTENT: {
                type: Sequelize.STRING(1000),
                allowNull: false,
            },
            REPLY_DATE: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: Sequelize.NOW,
            },
        }, {
            sequelize,
            timestamps: false,
            modelName: 'Comment',
            tableName: 'reply_tb',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {
        db.Comment.belongsTo( db.User, { foreignKey: 'USER_ID', targetKey: 'userID'} );
    }
}