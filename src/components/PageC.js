import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


import * as V from 'victory';
import { VictoryChart, VictoryBar, VictoryTheme, VictoryAxis, VictoryStack } from 'victory';
import { compose } from 'redux'


class PageC extends React.Component {
  value = this.props.value;
  render() {
    return (
      <div>
        <h2>Instructor Page</h2>
        <text>yes</text>

        <VictoryChart
          domainPadding={20}
          theme={VictoryTheme.material}
        >

          <VictoryAxis
            tickValues={[1, 2, 3, 4]}
            tickFormat={["School 1", "school 2", "school 3", "school 4"]}
          />

          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`${x} ppl`)}
          />

          <VictoryBar
            data={this.props.value.schools.Juniors}
            //x=""
            y="participants"
          />
        </VictoryChart>
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