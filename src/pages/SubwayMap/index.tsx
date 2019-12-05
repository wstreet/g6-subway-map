import React from 'react'
import G6 from '@antv/g6';
import data from './mock/index';
import config from './config'

class index extends React.Component {

  private graph



  public componentDidMount() {

    // 自定义节点，站点
    // this.registerStation()

    // 创建graph
    this.initGraph()

    // 设置数据并画图
    this.draw()

  }


  public registerStation() {
    G6.registerNode('station', {
      draw(cfg, group) {
        const { row, col } = cfg
        const shape = group.addShape('circle', {
          attrs: {
            // ...cfg,
            r: 6,
            x: col * config.xUnit,
            y: row * config.xUnit,
            lineWidth: 2,
            fill: '#fff',
            stroke: '#ccc'
          }
        })
        if (cfg.label) { // 如果有文本
          group.addShape('text', {
            attrs: {
              x: 0, // 居中
              y: 0,
              textAlign: 'center',
              textBaseline: 'middle',
              text: cfg.label,
              fill: '#666',
              position: 'absolute'
            }
          });
        }
        return shape
      },
    }, 'circle')
  }

  /**
   * registerRoad
   */
  public registerRoad() {
    G6.registerEdge('road', {
      draw(cfg, group) {

      },
    }, 'line')
  }




  /**
   * initGraph
   */
  public initGraph() {
    this.graph = new G6.Graph({
      container: 'map-root',
      height: 550,
      width: document.body.clientWidth,
      renderer: 'svg', // canvas
      autoPaint: true,
    })
  }


  public draw() {
    this.graph.read(data)
  }





  public render() {
    return (
      <div id="map-root" />
    )
  }
}

export default index