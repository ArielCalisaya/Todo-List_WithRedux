import React from 'react';
import { connect } from 'react-redux';

const List = ({list}) => (
<section>
    <h2>List z-chil-init</h2>
    <div className="container-todo">
    {
        list.map(l => (
            <article className="todo-list">
                <img src={l.photo} alt={l.name} style={{width:"90px"}} />
                <h3>{l.name}</h3>
                <div>
                    <button> pendiente </button>
                    <button> atrasada </button>
                    <button> completada </button>
                </div>

            </article>
            )
        )
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
