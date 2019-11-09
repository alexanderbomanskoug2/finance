import React from 'react';

const TAGS = {
    'car': {
        'color': 'primary',
        'name': 'Car'
    },
    'insurance': {
        'color': 'success',
        'name': 'Insurance'
    }
}

export default class AddExpense extends React.Component {
    render() {
        return (
            <div class="collapse mb-2" id="collapseExample">
                <div class="card card-body">
                    <form>
                        <div class="form-group row">
                            <label for="inputName" class="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputName" placeholder="Name" />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="inputAmount" class="col-sm-2 col-form-label">Amount</label>
                            <div class="col-sm-10">
                                <input type="number" class="form-control" id="inputAmount" placeholder="Amount" />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="inputAmount" class="col-sm-2 col-form-label">Occurrence</label>
                            <div class="col-sm-10">
                            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="inputAmount" class="col-sm-2 col-form-label">Occurrence</label>
                            <div class="col-sm-10 d-flex align-items-center">
                                {Object.keys(TAGS).map((keyName, i) => (
                                    <React.Fragment>
                                        <label className="u-checkbox__container" key={i}>
                                            <input type="checkbox" className="u-checkbox--hidden" key={i}></input>
                                            <span className={`badge badge-pill badge-${TAGS[keyName].color} ml-1 float-left d-block`} key={i}>{TAGS[keyName].name}</span>
                                        </label>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary float-right">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}