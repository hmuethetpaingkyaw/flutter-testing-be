import PatientModel from '../models/patient_referral'
import { Op } from 'sequelize'

class PatientController {
  async store(req, res) {
    try {
      let {
        name,
        sex,
        age,
        refer_date,
        township,
        address,
        refer_from,
        refer_to,
        sign_and_symptom,
      } = req.body;

      const patient = await PatientModel.create({
        name,
        sex,
        age,
        refer_date,
        township,
        address,
        refer_from,
        refer_to,
        sign_and_symptom,
      });

      return res.status(200).json({ data: patient });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error saving patient referrel" });
    }
  }
  async index(req, res) {
    try {
      const result = await PatientModel.findAll();
      return res.status(200).json({ data: result });
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: error });
    }
  }
  async each(req, res) {
    try {
      const result = await PatientModel.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!result) {
        return res.status(404).json({ message: "patient referrel Not Found" });
      }

      return res.status(200).json({ data: result });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }
  async delete(req, res) {
    try {
      const result = await PatientModel.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!result) {
        return res.status(404).json({ message: "Patient Not Found" });
      }
      return res.status(200).json({ message: "Successfully Deleted" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "error" });
    }
  }
}

export default new PatientController()
