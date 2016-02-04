"use strict";

module.exports = function(sequelize, DataTypes) {
    var Server = sequelize.define('Server', {
        hostname: {
            type: DataTypes.STRING
        },
        ip : {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true,
        force: true
    });

  return Server;
};


