import React from 'react';
import { connect } from 'react-redux';

const List = ({list}) => (
<section>
    <div className="container-todo lg:pt-0 pb-6 lg:ml-32 lg:mr-32">
        {
            list.map(l => {
                return(
                    <div key={l.id} className="max-w-sm w-full lg:max-w-full lg:flex pt-4">
                        <button className=" w-20 focus:outline-none focus:shadow-outline  bg-green-600 font-semibold hover:text-white py-1 lg:rounded-none md:rounded-full  md:rounded-b lg:rounded-l">
                            <i className="fa fa-refresh" aria-hidden="true"></i>
                        </button>
                        <div className="h-48 lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none  text-center overflow-hidden" style={{backgroundImage: `url(${l.photo})`}} title={l.name}>
                        </div>

                        <div className="border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white sm:rounded lg:rounded-l-none lg:rounded-b-none  lg:rounded-r p-4 flex flex-col justify-between leading-normal">
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
                                <div className="text-container lg:m-6">
                                    <p className="text-gray-700 text-base text-left lg:w-3/4">Some Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla ssssssssssssssss Some Description Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Voluptatibus quia, nulla ssssssssssssssss Some Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla ssssssssssssssss</p>
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
    list: state.list
})

const mapDispatchToProps = dispatch => ({})


export default connect(mapStateToProps, mapDispatchToProps)(List)

// TODO: button de estado de list va a ser 1 solo state el cual se podra seleccionar mediante un modal
// TODO: Falta Filtrado, abrir modal para todo, submit, delete, cambiar estado de todo y editar
