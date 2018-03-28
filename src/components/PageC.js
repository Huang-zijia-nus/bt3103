import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class PageC extends React.Component {
  value = this.props.value;
  render() {
    return (
      <div>
        <h2>Instructor Page</h2>
        <text>yes</text>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { value: state.val }
}
const myPageC = connect(
  mapStateToProps, )(PageC)

export default myPageC