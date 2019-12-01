import React from 'react';
import Filter from './filter';
import { connect } from 'react-redux';

class InputFilter extends React.Component {

    render(){
        return(

            <div className="lg:pl-64 lg:pr-64 flex lg:w-full  flex-col  lg:justify-between">
            <div className="">
                <button type="button" className="btn  mb-6 btn-primary rounded-full" data-toggle="modal" data-target="#exampleModalCenter">
                  +
                </button>
            </div>
            <div>
                <Filter/>
            </div>

                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        ...
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

        )
    }

}
const mapStateToProps = state => ({
    LisTodo: state.todo,
})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(InputFilter)
