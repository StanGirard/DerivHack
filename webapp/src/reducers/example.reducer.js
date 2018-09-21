import {handleActions} from 'redux-actions'

export const initialState = {
  example: {
    text: '',
    members: [
      {
        "party": "O=CLIENT-C01, L=London, C=GB",
        "membershipMetadata": {
          "partyIdAndAccountPairs": {
            "5804431297704": "C01752319405",
            "7755090773988": "C01232409785",
            "3895466770349": "C01728346828"
          },
          "legalEntityId": ["521700C015DIKTCI1V98"],
          "role": "CLIENT",
          "name": "CLIENT-C01"
        }
      }
    ],
    pageDetailsNode: 'CCP-P01',
    ContractList: [],
    ContractId: '123',
    contractHistory: [],
    TerminatedContractList: [],
    changeIOUS: 'CCP-P01',
    listIOUS: [
      {
        "state": {
          "data": {
            "@class": "net.corda.training.state.IOUState",
            "amount": "400000000.00 EUR",
            "lender": "O=CCP-P01, L=New York, C=US",
            "borrower": "O=DEALER-D01, L=New York, C=US",
            "date": "2018-09-24",
            "contractIdentifier": "PG8NQNJP97",
            "paid": "0.00 EUR",
            "linearId": {
              "externalId": null,
              "id": "f6c12788-4a4e-40cc-970d-f86d1c23ecf3"
            }
          },
          "contract": "net.corda.training.contract.IOUContract",
          "notary": "O=Notary, L=London, C=GB",
          "encumbrance": null,
          "constraint": {
            "@class": "net.corda.core.contracts.WhitelistedByZoneAttachmentConstraint"
          }
        },
        "ref": {
          "txhash": "05E5F50750433037E9C62165151C46C020B0E27083BE89E905395F2C5E8450B9",
          "index": 0
        }
      }
    ]
  }
}

export default handleActions({
  EXAMPLE_CONSTANTS: (state, action) => {
    return {
      ...state,
      example: {
        ...state.example,
        text: action.payload
      }
    }
  },
  LOADING_MEMBER_LIST: (state, action) => {
    return {
      ...state,
      example: {
        ...state.example,
        members: action.payload
      }
    }
  },
  CHANGE_PAGE_NODE: (state, action) => {
    return {
      ...state,
      example: {
        ...state.example,
        pageDetailsNode: action.payload
      }
    }
  },
  ADD_LIVE_CONTRACT: (state, action) => {
    return {
      ...state,
      example: {
        ...state.example,
        ContractList: action.payload
      }
    }
  },
  DETAILS_CONTRACT: (state, action) => {
    return {
      ...state,
      example: {
        ...state.example,
        ContractId: action.payload
      }
    }
  },
  ADD_CONTRACT_HISTORY: (state, action) => {
    return {
      ...state,
      example: {
        ...state.example,
        contractHistory: action.payload
      }
    }
  },
  ADD_TERMINATED_CONTRACT: (state, action) => {
    return {
      ...state,
      example: {
        ...state.example,
        TerminatedContractList: action.payload
      }
    }
  },
  CHANGE_IOUS: (state, action) => {
    return {
      ...state,
      example: {
        ...state.example,
        changeIOUS: action.payload
      }
    }
  },
  ADD_IOUS: (state, action) => {
    return {
      ...state,
      example: {
        ...state.example,
        listIOUS: action.payload
      }
    }
  }

}, initialState)
