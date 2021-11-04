import React from 'react'

class Character extends React.Component {
	render() {
		return(
			<div className= "col-xl-4 col-md-6 col-sm-12 mb-4">
                <div className="card characterGot">
                    <div className="card-img-top img-fluid p-1 characterGot-img" style={{backgroundImage: `url(${this.props.image})`}} alt="GoT's character"></div>
                    <div className="card-body">
                        <h5 className="card-title text-center fw-bold">{this.props.name}</h5>
                        <p className="card-text text-center">{this.props.title}</p>
                        <div className="d-flex justify-content-end">
                            <button type="button" className="btn btn-success"><i class="far fa-star"></i></button>
                        </div>
                    </div>
                </div>
            </div>
		)
	}
}

export default Character

