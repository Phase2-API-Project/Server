const BetterDoctor = require('../api/betterDoctor')

class BetterDoctorController {
  static showAll (req, res, next) {
    let {lat, long, specialty_uid, gender} = req.body
    BetterDoctor({
      url: "/doctors",
      method: 'get',
      params: {
        location: `${lat},${long},100`,
        specialty_uid,
        gender,
        skip: "0",
        limit: "10",
        user_key: process.env.BETTER_DOCTOR_API_KEY
      }
    })
      .then(({data}) => {
        res.status(200).json(data)        
      })
      .catch(next)
  }
}

module.exports = BetterDoctorController