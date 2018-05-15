// pages/common/cell/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      value: '标题',
      type: String
    },
    value: {
      value: '',
      type: String
    }
  },
  relations: {
    '../cell/group': {
      type: 'parent', // 关联的目标节点应为子节点
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
