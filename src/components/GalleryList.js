import React, {Component} from 'react'


class GalleryList extends Component{

 render(){
  console.log(this.props)
  return (
   <div>
    GalleryList
    <h3>{this.props.match.params.name}</h3>
   </div>
  )
 }
}

export default GalleryList