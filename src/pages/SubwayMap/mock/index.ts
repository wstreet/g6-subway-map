import config from '../config'

import stationsOne from './stationsOne'
import stationsTwo from './stationsTwo'
import stationsThree from './stationsThree'
import stationsFour from './stationsFour'
import stationsFive from './stationsFive'

const generateRoad = (stations, index) => {
  const road = []
  for (let i = 0, len = stations.length; i < len - 1; i++) {
    const station = stations[i]
    const nextStation = stations[i + 1]
    road.push({
      source: station.id,
      target: nextStation.id,
      shape: 'line',
      color: config.COLOR[index - 1] || '#000',
      style: {
        lineWidth: config.edgeLineWidth
      }
    })
  }

  return road
}


const data = {
  nodes: [...stationsOne, ...stationsTwo, ...stationsThree, ...stationsFour, ...stationsFive]
    .map(cfg => ({
      ...cfg,
      shape: 'circle',
      size: config.nodeSize,
      x: cfg.col * config.xUnit + config.xOffset,
      y: cfg.row * config.yUnit + config.yOffset,
      style: config.nodeStyle,
      labelCfg: {
        ...cfg.labelCfg,
        offset: config.labelOffset,
      }
    }))
  ,
  edges: [
    ...generateRoad(stationsOne, 1),
    ...generateRoad(stationsTwo, 2),
    ...generateRoad(stationsThree, 3),
    ...generateRoad(stationsFour, 4),
    ...generateRoad(stationsFive, 5),
  ]

}




export default data