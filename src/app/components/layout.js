import React from 'react'
import { Header } from '../components/header'

export default class Layout extends React.Component {
  static propTypes = {
    location: React.PropTypes.any,
    children: React.PropTypes.any
  }

  render () {
    const { location } = this.props

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-10 col-xs-offset-1'>
            <Header location={location} />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-10 col-xs-offset-1'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
