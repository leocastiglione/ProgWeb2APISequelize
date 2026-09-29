module.exports = (sequelize, DataTypes) => {
    const Endereco = sequelize.define(
        "Endereco",
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            idUsuario: { type: DataTypes.INTEGER, allowNull: false },
            cep: { type: DataTypes.STRING(20), allowNull: false },
            rua: { type: DataTypes.STRING(150), allowNull: false },
            numero: { type: DataTypes.STRING(20), allowNull: false },
            complemento: { type: DataTypes.STRING(100), allowNull: true },
            bairro: { type: DataTypes.STRING(100), allowNull: false },
            cidade: { type: DataTypes.STRING(100), allowNull: false },
            estado: { type: DataTypes.STRING(2), allowNull: false }
        },
        {
            tableName: "enderecos",
            timestamps: true
        }
    );
    Endereco.associate = (models) => {
        Endereco.belongsTo(models.Usuario, { foreignKey: "idUsuario", as: "usuario" });
    };
    return Endereco;
};