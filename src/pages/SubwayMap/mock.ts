import config from './config'

const data = {
  nodes: [
    // 1号线站点
    {
      id: 'bright-top',
      label: '光明顶',
      shape: 'station',
      row: 4.5,
      col: 2.5,
      labelCfg: {
        position: 'bottom',
        offset: 6,
      }
    },
    {
      id: 'shaolin',
      label: '少林路',
      shape: 'station',
      row: 4.5,
      col: 3.5,
      labelCfg: {
        position: 'top',
        offset: 6,
      }
    },
    {
      id: 'hongxiang',
      label: '红翔高级技工学院',
      shape: 'station',
      row: 4.5,
      col: 3.5,
      labelCfg: {
        position: 'bottom',
        offset: 6,
      }
    }
  ],
  edges: [
    {
      source: 'bright-top',
      target: 'shaolin',
      shape: 'line',
      color: 'red',
    },
    {
      source: 'shaolin',
      target: 'hongxiang',
      shape: 'line',
      color: 'red',
    }
  ]
}

export default data