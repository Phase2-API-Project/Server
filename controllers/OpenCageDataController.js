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
        res.status(200).json(data)        
      })
      .catch(next)
  }
}

module.exports = OpenCageDataController