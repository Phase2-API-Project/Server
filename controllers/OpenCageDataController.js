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
        let lat = data.results[0].annotations.DMS.lat.split(' ')[2]
        let latslice = lat.slice(0, lat.length-2)
        let lng = data.results[0].annotations.DMS.lng.split(' ')[2]
        let lngslice = lng.slice(0, lng.length-2)
        res.status(200).json({lat: latslice, lng: lngslice})        
      })
      .catch(next)
  }
}

module.exports = OpenCageDataController