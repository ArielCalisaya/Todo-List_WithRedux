import React from 'react';
import { connect } from 'react-redux';

const List = ({list}) => (
<section>
    <div className="container-todo pt-10 pb-6">
        {
            list.map(l => {
                return(
                    <div
                    key={l.id}
                    className="max-w-sm w-full lg:max-w-full lg:flex pt-4">
                      <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${l.photo})`}} title={l.name}>
                      </div>
                      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <button>
                            <p className="text-sm text-gray-600 flex items-center">
                            Todo {l.id}
                            </p>
                            X to delete
                            </button>
                          <div className="text-gray-900 font-bold text-xl mb-2">Here's Todo Info</div>
                          <p className="text-gray-700 text-base">Some Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla</p>
                        </div>
                        <div className="flex items-center">
                          <img className="w-10 h-10 rounded-full mr-4" src={l.photo} alt="Avatar of Jonathan Reinink"/>
                          <div className="text-sm">
                            <p className="text-gray-900 leading-none">{l.name}</p>
                            <p className="text-gray-600">Aug 18 here is the date</p>
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
