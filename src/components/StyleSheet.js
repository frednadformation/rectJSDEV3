import React from 'react'
import './css/myStyle.css'


function StyleSheet(props) {

    let couleur = props.primary ? 'primary' : ""

  return (
    <div className={couleur}>StyleSheet</div>
  )
}

export default StyleSheet