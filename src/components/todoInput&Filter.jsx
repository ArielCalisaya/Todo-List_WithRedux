import React from 'react';
import Filter from './filter';
import { connect } from 'react-redux';

const InputFilter = ({AddTodo}) => {
        return(
            <div className="lg:pl-64 lg:pr-64 flex lg:w-full  flex-col  lg:justify-between">
            <div className="">
                <button type="button" className="btn  mb-6 bg-blue-600 text-gray-200 rounded-full" data-toggle="modal" data-target="#Modal-Input">
                  +
                </button>
            </div>
            <div>
                <Filter/>
            </div>j

                <div className="modal fade" id="Modal-Input" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-header block">
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                      </button>
                        <h5 className="modal-title text-center" id="exampleModalCenterTitle">Añadir nuevo To do</h5>
                      </div>
                      <div className="modal-body flex flex-col">
                        <input className="mb-6 p-2 border-gray-700 rounded border-t border-b border-r border-l" type="text" placeholder="To do"/>
                        <textarea className="w-full p-2 h-48 border-gray-700 rounded border-t border-b border-r border-l" placeholder="Description"></textarea>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        <button
                        onClick={() =>(console.log("funciona"))}
                        type="button"
                        className="btn btn-success">Add to do</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

        )
}
const mapStateToProps = state => ({
    LisTodo: state.todo,
})
const mapDispatchToProps = dispatch => ({
    AddTodo(TodoId) {
        dispatch({
            type:"AGREGAR_TODO",
            TodoId
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(InputFilter)
