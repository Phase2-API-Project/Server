const OpenCageData = require('../api/openCageData')

class OpenCageDataController {
  static showAll (req, res, next) {
    let {place} = req.body
    OpenCageData({
      url: "/json",
      method: 'get',
      params: {
        q: `${place}`,
        key: process.env.OPEN_CAGE_DATA_API_KEY
      }
    })
      .then(({data}) => {
        if(data.results.length == 0){
          next({status: 400, message: "Location not found"})
        }
        else{
          let lat = data.results[0].bounds.northeast.lat
          let lng = data.results[0].bounds.northeast.lng
          res.status(200).json({lat, lng})        
        }
      })
      .catch(next)
  }
}

module.exports = OpenCageDataController