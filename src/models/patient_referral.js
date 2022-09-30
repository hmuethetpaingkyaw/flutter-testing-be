import DB_CONNECTION from '../database'
import { DataTypes } from 'sequelize';

const PatientModel = DB_CONNECTION.define("patient", {
  name: DataTypes.TEXT,
  sex: DataTypes.TEXT,
  age: DataTypes.INTEGER,
  refer_date: DataTypes.DATE,
  township: DataTypes.TEXT,
  address: DataTypes.TEXT,
  refer_from: DataTypes.TEXT,
  refer_to: DataTypes.TEXT,
  sign_and_symptom: DataTypes.TEXT,
});
;(async () => {
  await DB_CONNECTION.sync({ force: false })
})()



export default PatientModel;
