import React from 'react'

const data = {
  1: ['bob', 'jane', 'jelly'],
  2: ['larry', 'walls', 'languid'],
  3: ['price', 'goo', 'arm'],
  4: ['stone', 'eggshells', 'torpor']
}

export const DashboardTable = ({ activeTab }) => {
  console.log(data[activeTab])

  return (
    <table style={{ marginTop: '40px' }}>
      <tr>
        {data[activeTab].map(kpi => (
          <td>{kpi}</td>
        ))}
      </tr>
    </table>
  )
}
