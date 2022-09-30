import HeActivityModel from '../models/he_activity'
import { Op } from 'sequelize'

class HeActivityController {
  async store(req, res) {
    try {
      let { date, address, he_attendees, volunteer, sex } = req.body;

      const he_activity = await HeActivityModel.create({
        date,
        address,
        he_attendees,
        volunteer,
        sex,
      });

      return res.status(200).json({ data: he_activity });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error saving HE activity" });
    }
  }
  async index(req, res) {
    try {
      const result = await HeActivityModel.findAll();
      return res.status(200).json({ data: result });
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: error });
    }
  }
  async each(req, res) {
    try {
      const result = await HeActivityModel.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!result) {
        return res.status(404).json({ message: "HE activity Not Found" });
      }

      return res.status(200).json({ data: result });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }
  async delete(req, res) {
    try {
      const result = await HeActivityModel.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!result) {
        return res.status(404).json({ message: "HE activity Not Found" });
      }
      return res.status(200).json({ message: "Successfully Deleted" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "error" });
    }
  }
}

export default new HeActivityController()
