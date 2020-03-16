import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class ExampleComponent extends Component {
  static propTypes = {
    image: PropTypes.string
  }

  render() {
    const {
      image
    } = this.props

    return (
      <div className={styles.test}>
        <img src={image}/>
      </div>
    )
  }
}
