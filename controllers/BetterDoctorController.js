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
        if (data.data.length == 0){
          next({status: 400, message: "Doctor not found"})
        }
        else {
          let arr = []
          data.data.forEach(element => {
            let specialll= []
            element.specialties.forEach(specialty => {
              specialll.push({
                name : specialty.name,
                description : specialty.description
              })
            })
            arr.push({
              name : `${element.profile.first_name} ${element.profile.last_name}, ${element.profile.title}`,
              gender : element.profile.gender,
              bio: element.profile.bio,
              specialties : specialll
            })
          });
          res.status(200).json(data)        
        }
      })
      .catch(next)
  }
}

module.exports = BetterDoctorController