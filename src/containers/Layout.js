import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import List from './components/List';
import InputFilter from './components/TodoInput&Filter';
import * as TodoActions from './actions.actions';

const Layout = ({ store, actions }) => (
    <main className="lg:bg-gray-800 bg-gray-900 items-center flex-col flex  text-center justify-center text-xl" >
        <h1 className="text-4xl text-white pt-8 pb-6 ">Todo App</h1>
        <InputFilter
        store={store}
        actions={actions}
         />
        <List
        store={store}
        actions={actions}
         />
    </main>
)


const mapStateToProps = state => ({
    store: state.todo
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Layout);
