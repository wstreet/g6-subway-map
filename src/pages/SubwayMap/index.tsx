import React from 'react'
import G6 from '@antv/g6';
import data from './mock';

class index extends React.Component {

  private graph



  public componentDidMount() {

    // 创建graph
    this.initGraph()


    // 设置数据并画图
    this.draw()

  }
  /**
   * initGraph
   */
  private initGraph() {
    this.graph = new G6.Graph({
      container: 'map-root',
      height: 500,
      width: 500,
      renderer: 'svg', // canvas
      autoPaint: true
    })
  }


  private draw() {
    this.graph.read(data)
  }





  public render() {
    return (
      <div id="map-root" />
    )
  }
}

export default index