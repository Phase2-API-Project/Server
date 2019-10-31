const OpenCageData = require('../api/openCageData')

class OpenCageDataController {
  static showAll (req, res, next) {
    let {place} = req.body
    OpenCageData({
      url: "/json",
      method: 'get',
      params: {
        q: `${place}`,
        key: "24c10dabfaf645b492da68ff2f4a04d3"
      }
    })
      .then(({data}) => {
        res.status(200).json(data)        
      })
      .catch(next)
  }
}

module.exports = OpenCageDataController