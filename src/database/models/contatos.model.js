module.exports = (sequelize, DataTypes) => {
    const Contato = sequelize.define(
        "Contato",
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            idUsuario: { type: DataTypes.INTEGER, allowNull: false },
            numeroTelefone: { type: DataTypes.STRING(30), allowNull: false }
        },
        {
            tableName: "contatos",
            timestamps: true
        }
    );
    Contato.associate = (models) => {
        Contato.belongsTo(models.Usuario, { foreignKey: "idUsuario", as: "usuario" });
    };
    return Contato;
};