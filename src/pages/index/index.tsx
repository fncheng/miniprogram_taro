import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton, AtInput } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

interface IProps {

}
interface IState {
  name: string
}
export default class Index extends Component<IProps,IState> {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    console.log(this.state)
    return (
      <>
      <View className='index'>
        <Text>Hello world!</Text>
        <AtButton type='primary'>I need Taro UI</AtButton>
        <Text>Taro UI 支持 Vue 了吗？</Text>
        <AtButton type='primary' circle>支持</AtButton>
        <Text>共建？</Text>
        <AtButton type='secondary' circle>来</AtButton>
        <AtButton type='primary' onClick={(e)=>{
          console.log(e);
        }}
        >确认</AtButton>
      </View>
      <View>
        <AtInput name='name' title='姓名' type='text' value={this.state.name} placeholder='请输入姓名' onChange={(value)=>{ 
          this.setState({
            name: 'ls'
          })
        }}
        ></AtInput>
        <View>{this.state.name}</View>
        <AtButton onClick={()=>{
          console.log(this.state.name);
          this.setState({
            name: 'zs'
          })
        }}
        >Click me</AtButton>
      </View>
      </>
    )
  }
}
