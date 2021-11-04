import React from 'react'

class Character extends React.Component {
	render() {
		return(
			<div className= "col-4 mb-4">
                <div className="card">
                    <img className="card-img-top p-1" src={this.props.image} alt="GoT's character"/>
                    <div className="card-body">
                        <h5 className="card-title text-center fw-bold">{this.props.name}</h5>
                        <p className="card-text text-center">{this.props.title}</p>
                    </div>
                </div>
            </div>
		)
	}
}

export default Character

