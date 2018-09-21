import switchPortIdentity from './switchPortIdentity'

export const fetchMembers = () => {
  console.log("Fetching members")
  return fetch('http://antid0te.fr:10043/api/memberApi/members')
  .then(value => value.json())
}

export const fetchLiveContractsNode = (port) => {
  console.log("Fetching Trades from Node")
  return fetch(`http://antid0te.fr:${port}/api/memberApi/liveCDMContracts`)
  .then(value => value.json())
}

export const fetchTerminatedContractsNode = (port) => {
  console.log("Fetching Terminated Trades from Node")
  return fetch(`http://antid0te.fr:${port}/api/memberApi/terminatedCDMContracts`)
  .then(value => value.json())
}

export const fetchIOUSNode = (port) => {
  console.log("Fetching IOUS from Node")
  console.log(`http://antid0te.fr:${port}/api/iou/ious`)
  return fetch(`http://antid0te.fr:${port}/api/iou/ious`)
  .then(value => value.json())
}

fetchContractHistory

export const fetchContractHistory = (port, id) => {
  console.log("Fetching History from Node")
  console.log("Fetching from ", port, "with the id: ", id)
  return fetch(`http://antid0te.fr:${port}/api/memberApi/allCDMContracts?id=${id}`)
  .then(value => value.json())
}
