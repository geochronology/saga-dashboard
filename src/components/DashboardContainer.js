import React from 'react'
import { connect } from "react-redux";
import { switchActiveTab } from "../redux";
import { DashboardTable } from './DashboardTable';
import { views } from "../config";

function DashboardContainer(props) {

  const { activeTab, switchActiveTab } = props

  return (
    <div>
      <h2>Active Tab: {activeTab}</h2>
      <div>

        {views.map((view, idx) => (
          <button key={view.id} onClick={() => switchActiveTab(idx + 1)}>{view.label}</button>
        ))}

        {/* <button onClick={() => switchActiveTab(1)}>Tab 1</button>
        <button onClick={() => switchActiveTab(2)}>Tab 2</button>
        <button onClick={() => switchActiveTab(3)}>Tab 3</button>
        <button onClick={() => switchActiveTab(4)}>Tab 4</button> */}

        <DashboardTable
          activeTab={activeTab}
        />

      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    activeTab: state.tabs.activeTab
  }
}
const mapDispatchToProps = dispatch => {
  return {
    switchActiveTab: (tab) => dispatch(switchActiveTab(tab))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer)