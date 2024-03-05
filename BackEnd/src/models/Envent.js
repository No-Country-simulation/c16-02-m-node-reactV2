const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Event', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.ARRAY(DataTypes.STRING(1000)),
      allowNull: true,
    },
    historia: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    redes: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: true,
    },
    integrantes: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: true,
    },
    eliminado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  }, {
    timestamps: false,
  });
};
