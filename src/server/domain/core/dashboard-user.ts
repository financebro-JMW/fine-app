export type DashboardUser {
  years: {
    expense: number
    income: number
  }
  months: {
    income: number
    expense: {
      recurring: {
        name: string
        cost: number
      }
      occasional: {
        name: string
        cost: string
      }
    }
  }
  days: {
    income: {
      name: string
      cost: number
    }
  }
}
