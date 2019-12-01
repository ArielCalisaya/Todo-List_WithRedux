import React from 'react';
import { connect } from 'react-redux';


const List = ({LisTodo}) => (

<section>
    <div className="container-todo lg:pt-0 pb-6 lg:ml-64 lg:mr-64">
        {
            LisTodo.map(l => {
                return(
                    <div key={l.id} className="max-w-sm w-full lg:max-w-full pt-4">
                        <button className="sm:w-20 lg:w-full focus:outline-none focus:shadow-outline  bg-green-600 font-semibold hover:text-white py-0 lg:rounded-none w-20 rounded-b rounded-full md:rounded-full  md:rounded-b lg:rounded-t">
                            <i className="fa fa-refresh" aria-hidden="true"></i>
                        </button>


                        <div className="border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white sm:rounded lg:rounded-t-none lg:rounded-b-none  lg:rounded-b pl-4 pb-4 pr-4 lg:pt-1 flex flex-col justify-between leading-normal">
                            <div className="mb-6 text-webkit-center">
                                <div className="flex justify-between">
                                    <p className="text-sm text-gray-600 flex items-center">
                                        todo n° {l.id}
                                    </p>

                                    <button className="focus:outline-none focus:shadow-outline">
                                        <i className="fa fa-times fa-lg" aria-hidden="true"></i>
                                    </button>
                                </div>
                                <div className="text-gray-900 font-bold text-2xl mb-6">Here's Todo Info</div>
                                <div className="text-container lg:m-6 lg:mb-1 ">
                                    <p className=" text-gray-700 text-base text-left lg:w-3/4">{l.description} aa</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <img className="w-10 h-10 rounded-full mr-4" src={l.photo} alt="Avatar of Jonathan Reinink" />
                                <div className="text-sm">
                                    <p className="text-gray-900 leading-none text-left">{l.name}</p>
                                    <p className="text-gray-600 text-left">Aug 18 here is the date</p>
                                </div>

                            </div>
                        </div>

                    </div>

                )
            })
        }
    </div>
</section>
)


const mapStateToProps = state => ({
    LisTodo: state.todo
})

const mapDispatchToProps = dispatch => ({})


export default connect(mapStateToProps, mapDispatchToProps)(List)

// TODO: button de estado de list va a ser 1 solo state el cual se podra seleccionar mediante un modal
// TODO: Falta Filtrado, abrir modal para todo, submit, delete, cambiar estado de todo y editar
