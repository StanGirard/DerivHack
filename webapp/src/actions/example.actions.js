import * as constants from '../constants/example.constants'
import { createActions } from 'redux-actions'
import {notify} from 'reapop'
import axios from 'axios'
import {initAsynchronous} from '../tools/jsonReader'
import {fetchMembers, fetchLiveContractsNode, fetchContractHistory, fetchTerminatedContractsNode, fetchIOUSNode} from '../functions/apiCall'
import {switchPortIdentity} from '../functions/switchPortIdentity'

export const {
  exampleConstants,
  loadingMemberList,
  changePageNode,
  addLiveContract,
  detailsContract,
  addContractHistory,
  addTerminatedContract,
  changeIous,
  addIous
} = createActions({},
  constants.EXAMPLE_CONSTANTS,
  constants.LOADING_MEMBER_LIST,
  constants.CHANGE_PAGE_NODE,
  constants.ADD_LIVE_CONTRACT,
  constants.DETAILS_CONTRACT,
  constants.ADD_CONTRACT_HISTORY,
  constants.ADD_TERMINATED_CONTRACT,
  constants.CHANGE_IOUS,
  constants.ADD_IOUS
)

// Async function call
export const uploadDocumentRequest = (file) => {
  return initAsynchronous(file)
}

export const loadMembers = () => {
  return (dispatch) => {
    fetchMembers()
    .then(value => dispatch(loadingMemberList(value)))
  }
}
export const loadLiveContractsNode = (name) => {
  return (dispatch) => {
    fetchLiveContractsNode(switchPortIdentity(name))
    .then(value => dispatch(addLiveContract(value)))
  }
}
export const loadTerminatedContractsNode = (name) => {
  return (dispatch) => {
    fetchTerminatedContractsNode(switchPortIdentity(name))
    .then(value => dispatch(addTerminatedContract(value)))
  }
}
export const loadIOUSNode = (name) => {
  return (dispatch) => {
    fetchIOUSNode(switchPortIdentity(name))
    .then(value => dispatch(addIous(value)))
  }
}

export const loadContractHistory = (name, id) => {
  return (dispatch) => {
    fetchContractHistory(switchPortIdentity(name), id)
    .then(value => dispatch(addContractHistory(value)))
  }
}


export const fetchAPI = () => ({
  type: constants.API,
  payload: {
    url: 'http://whatthecommit.com/index.txt',
    success: exampleConstants

  }
})
