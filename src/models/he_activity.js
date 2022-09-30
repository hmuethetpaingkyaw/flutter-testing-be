import DB_CONNECTION from "../database";
import { DataTypes } from "sequelize";

const HeActivityModel = DB_CONNECTION.define("he_activity", {
  date: DataTypes.DATE,
  address: DataTypes.TEXT,
  he_attendees: DataTypes.TEXT,
  volunteer: DataTypes.TEXT,
  sex: DataTypes.TEXT,
});
(async () => {
  await DB_CONNECTION.sync({ force: false });
})();

export default HeActivityModel;
