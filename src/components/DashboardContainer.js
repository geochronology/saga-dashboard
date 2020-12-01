import React from 'react'
import { connect } from "react-redux";
import { switchActiveTab } from "../redux";

function DashboardContainer(props) {

  const { activeTab, switchActiveTab } = props

  return (
    <div>
      <h2>Active Tab: {activeTab}</h2>
      <div>

        <button onClick={() => switchActiveTab(1)} >Tab 1</button>
        <button onClick={() => switchActiveTab(2)}>Tab 2</button>
        <button onClick={() => switchActiveTab(3)}>Tab 3</button>
        <button onClick={() => switchActiveTab(4)}>Tab 4</button>

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

// export default DashboardContainer

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer)