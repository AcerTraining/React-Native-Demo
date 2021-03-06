import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions'
import { View } from 'react-native'

class App extends Component {
  render() {
    const { todos, actions } = this.props
    return (
      <View style={{
              backgroundColor: '#f5f5f5',
              paddingTop: 20,
              flex: 1,
            }}>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
      </View>
    )
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
