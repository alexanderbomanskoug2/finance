import React from 'react'
import Tag from './tag'

export default class Cost extends React.Component {
    render() {
        return(
            <div className="w-100 border rounded p-1 row mb-2 bg-white mx-0">
				<div className="col-12 col-md-6 d-flex align-items-center pb-4 pb-md-0">
					<p className="mb-0 float-left text-uppercase">{this.props.name}</p>

                    <div className="d-flex flex-wrap justify-content-end">
                        {this.props.tags.map((item, key) =>
                            <Tag name={item} key={key}/>
                        )}
                    </div>
                    
				</div>

				<div className="col-4 col-md-2 d-flex align-items-center">
					{this.props.occurrence}
				</div>

				<div className="col-2 col-md-1 d-flex align-items-center">
					{this.props.cost}SEK
				</div>

				<div className="col-6 col-md-3 d-flex align-items-center justify-content-end">
					<button type="button" className="btn text-primary"><i className="far fa-edit"></i></button>
					<button type="button" className="btn text-danger"><i className="far fa-trash-alt"></i></button>
				</div>
      		</div>
        )
    }
}