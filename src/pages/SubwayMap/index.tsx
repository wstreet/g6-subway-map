import React from 'react'
import G6 from '@antv/g6';
import data from './mock';
import config from './config'

class index extends React.Component {

  private graph



  public componentDidMount() {

    // 自定义节点，站点
    this.registerStation()

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
            ...cfg,
            r: 6,
            x: col * config.xSpan,
            y: row * config.ySpan,
            lineWidth: 2,
            fill: '#fff',
            stroke: '#ccc'
          }
        })

        if (cfg.label) { // 如果有文本
          // 如果需要复杂的文本配置项，可以通过 labeCfg 传入
          // const style = (cfg.labelCfg && cfg.labelCfg.style) || {};
          // style.text = cfg.label;
          group.addShape('text', {
            attrs: {
              x: 0, // 居中
              y: 0,
              textAlign: 'center',
              textBaseline: 'middle',
              text: cfg.label,
              fill: '#666'
            }
          });
        }
        return shape
      },

      // shapeType: 'circle', // group.addShape 时需要指定的类型
      // getShapeStyle(cfg) {
      //   const { row, col } = cfg
      //   return {
      //     ...cfg,
      //     r: 6,
      //     x: col * config.xSpan,
      //     y: row * config.ySpan,
      //     lineWidth: 2,
      //     fill: '#fff',
      //     stroke: '#ccc'
      //   }
      // }
    }, 'circle')
  }




  /**
   * initGraph
   */
  public initGraph() {
    this.graph = new G6.Graph({
      container: 'map-root',
      height: window.innerHeight,
      width: window.innerWidth,
      renderer: 'canvas', // canvas
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