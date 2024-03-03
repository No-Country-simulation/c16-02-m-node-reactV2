require("dotenv").config();
const { Sequelize } = require("sequelize")
const fs = require("fs")
const path = require("path")

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_DEPLOY } = process.env;

const sequelize = new Sequelize(
    DB_DEPLOY,

    //`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,

    {
        logging: false,
        native: false,
        dialectOptions: {
            ssl: {
                require: true
            }
        }
    }
)

const basename = path.basename(__filename)

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
    .filter(
        (file) =>
            file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    )
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, "/models", file)))
    })

modelDefiners.forEach((model) => model(sequelize));
let entries = Object.entries(sequelize.models)
let capsEntries = entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1],
])

sequelize.models = Object.fromEntries(capsEntries)

//*========================  Modelos Importados  ===========================//
const { User, Event } = sequelize.models
//*========================  Relaciones de las tablas  ===========================//
User.hasMany(Event, { as: 'Favoritos', foreignKey: 'userId' });

module.exports = {
    ...sequelize.models,
    conn: sequelize,
}