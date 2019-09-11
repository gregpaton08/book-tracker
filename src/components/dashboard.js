import React from 'react'
import InProgress from '../containers/in_progress'
import BackLog from '../containers/back_log'

export class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <InProgress />
        <BackLog />
      </div>
    )
  }
}
