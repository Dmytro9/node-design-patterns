import { totalSales as totalSalesRaw } from './totalSales.js'

const runningRequests = new Map()

export function totalSales (product) {
  console.log("runningRequests ", runningRequests)
  if (runningRequests.has(product)) {
    console.log('Batching')
    return runningRequests.get(product)
  }

  console.log(1)

  const resultPromise = totalSalesRaw(product)
  runningRequests.set(product, resultPromise)
  resultPromise.finally(() => {
    runningRequests.delete(product)
  })

  return resultPromise
}
