import React from "react"

const Basket = ({beers}) => (
  <div className="media">
    <div className="media-left">
      <img className="media-object" style={{width:40}} src="https://img.saveur-biere.com/img/p/82-14662-thickbox_sb3.jpg"></img>
    </div>
    <div className="media-body">
      <h4 className="media-heading">Karmeliet Triple</h4>
    </div>
    <div className="media-right">
      <a className="fa-stack">
        <i className="fa fa-circle fa-stack-2x"></i>
        <i className="fa fa-trash fa-stack-1x fa-inverse"></i>
      </a>
    </div>
  </div>
)

export default Basket
