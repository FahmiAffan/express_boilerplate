import { Table, Column, Model, HasMany, CreatedAt, PrimaryKey, NotNull, AllowNull, UpdatedAt } from 'sequelize-typescript';
import { StringDataTypeConstructor, EnumDataTypeConstructor, DateDataTypeConstructor, AbstractDataTypeConstructor, INTEGER, DataType, DataTypes } from 'sequelize';

@Table({
    modelName: "Users",
    tableName: "user",
    timestamps: true,
})

class Users extends Model {
    @Column({
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    })
    declare id_user: number

    @Column({
        type: DataTypes.ENUM('admin', 'guest', 'master_data')
    })
    declare role: String

    @Column({
        type: DataTypes.STRING,
    })
    declare username: String

    @Column({
        type: DataTypes.STRING
    })
    declare password: String

    @CreatedAt
    createdAt?: Date;

    @UpdatedAt
    updatedAt?: Date;
}

export default Users
// export class Users extends Model {
//     @PrimaryKey
//     @Column
//     id_user: AbstractDataTypeConstructor = DataType.UUID

//     @Column
//     role = DataType.ENUM({
//         values: ['kasir', 'pelanggan']
//     })

//     @Column
//     username: StringDataTypeConstructor = DataType.STRING

//     @Column
//     password: StringDataTypeConstructor = DataType.STRING

//     @CreatedAt
//     createdAt?: DateDataTypeConstructor = DataType.DATE;

//     @UpdatedAt
//     updatedOn?: DateDataTypeConstructor = DataType.DATE;

// }