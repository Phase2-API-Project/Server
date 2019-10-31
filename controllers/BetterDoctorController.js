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
        user_key: "3a81ac35f5aef97580f9ea2b2c6606c0"
      }
    })
      .then(({data}) => {
        res.status(200).json(data)        
      })
      .catch(next)
  }
}

module.exports = BetterDoctorController