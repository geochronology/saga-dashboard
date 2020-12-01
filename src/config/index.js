import kpis from "../constants"

// destructure KPIs from constants
const {
  kpi1,
  kpi2,
  kpi3,
  kpi4,
  kpi5,
  kpi6,
  kpi7,
  kpi8,
  kpi9,
  kpi10,
} = kpis

export const views = [
  {
    id: 'view1',
    label: 'View 1',
    kpis: [kpi2, kpi4, kpi7, kpi10]
  },
  {
    id: 'view2',
    label: 'View 2',
    kpis: [kpi5, kpi3, kpi1]
  },
  {
    id: 'view3',
    label: 'View 3',
    kpis: [kpi2, kpi4, kpi4, kpi6]
  },
  {
    id: 'view4',
    label: 'View 4',
    kpis: [kpi8, kpi9, kpi7]
  },
]
