export const VRF_COORDINATOR_ABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'prepayment',
        type: 'address'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'have',
        type: 'uint32'
      },
      {
        internalType: 'uint32',
        name: 'want',
        type: 'uint32'
      }
    ],
    name: 'GasLimitTooBig',
    type: 'error'
  },
  {
    inputs: [],
    name: 'IncorrectCommitment',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'have',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'want',
        type: 'uint256'
      }
    ],
    name: 'InsufficientPayment',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InvalidAccRequest',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'accId',
        type: 'uint64'
      },
      {
        internalType: 'address',
        name: 'consumer',
        type: 'address'
      }
    ],
    name: 'InvalidConsumer',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'keyHash',
        type: 'bytes32'
      }
    ],
    name: 'InvalidKeyHash',
    type: 'error'
  },
  {
    inputs: [],
    name: 'NoCorrespondingRequest',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'oracle',
        type: 'address'
      }
    ],
    name: 'NoSuchOracle',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'keyHash',
        type: 'bytes32'
      }
    ],
    name: 'NoSuchProvingKey',
    type: 'error'
  },
  {
    inputs: [],
    name: 'NotRequestOwner',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'have',
        type: 'uint32'
      },
      {
        internalType: 'uint32',
        name: 'want',
        type: 'uint32'
      }
    ],
    name: 'NumWordsTooBig',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'oracle',
        type: 'address'
      }
    ],
    name: 'OracleAlreadyRegistered',
    type: 'error'
  },
  {
    inputs: [],
    name: 'Reentrant',
    type: 'error'
  },
  {
    inputs: [],
    name: 'RefundFailure',
    type: 'error'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint32',
        name: 'maxGasLimit',
        type: 'uint32'
      },
      {
        indexed: false,
        internalType: 'uint32',
        name: 'gasAfterPaymentCalculation',
        type: 'uint32'
      },
      {
        components: [
          {
            internalType: 'uint32',
            name: 'fulfillmentFlatFeeKlayPPMTier1',
            type: 'uint32'
          },
          {
            internalType: 'uint32',
            name: 'fulfillmentFlatFeeKlayPPMTier2',
            type: 'uint32'
          },
          {
            internalType: 'uint32',
            name: 'fulfillmentFlatFeeKlayPPMTier3',
            type: 'uint32'
          },
          {
            internalType: 'uint32',
            name: 'fulfillmentFlatFeeKlayPPMTier4',
            type: 'uint32'
          },
          {
            internalType: 'uint32',
            name: 'fulfillmentFlatFeeKlayPPMTier5',
            type: 'uint32'
          },
          {
            internalType: 'uint24',
            name: 'reqsForTier2',
            type: 'uint24'
          },
          {
            internalType: 'uint24',
            name: 'reqsForTier3',
            type: 'uint24'
          },
          {
            internalType: 'uint24',
            name: 'reqsForTier4',
            type: 'uint24'
          },
          {
            internalType: 'uint24',
            name: 'reqsForTier5',
            type: 'uint24'
          }
        ],
        indexed: false,
        internalType: 'struct ICoordinatorBase.FeeConfig',
        name: 'feeConfig',
        type: 'tuple'
      }
    ],
    name: 'ConfigSet',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'oracle',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'keyHash',
        type: 'bytes32'
      }
    ],
    name: 'OracleDeregistered',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'oracle',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'keyHash',
        type: 'bytes32'
      }
    ],
    name: 'OracleRegistered',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'prepayment',
        type: 'address'
      }
    ],
    name: 'PrepaymentSet',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'requestId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'outputSeed',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'payment',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'success',
        type: 'bool'
      }
    ],
    name: 'RandomWordsFulfilled',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'keyHash',
        type: 'bytes32'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'requestId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'preSeed',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'uint64',
        name: 'accId',
        type: 'uint64'
      },
      {
        indexed: false,
        internalType: 'uint32',
        name: 'callbackGasLimit',
        type: 'uint32'
      },
      {
        indexed: false,
        internalType: 'uint32',
        name: 'numWords',
        type: 'uint32'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'isDirectPayment',
        type: 'bool'
      }
    ],
    name: 'RandomWordsRequested',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'requestId',
        type: 'uint256'
      }
    ],
    name: 'RequestCanceled',
    type: 'event'
  },
  {
    inputs: [],
    name: 'MAX_NUM_WORDS',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'requestId',
        type: 'uint256'
      }
    ],
    name: 'cancelRequest',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'oracle',
        type: 'address'
      }
    ],
    name: 'deregisterOracle',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'reqCount',
        type: 'uint64'
      },
      {
        internalType: 'uint8',
        name: 'numSubmission',
        type: 'uint8'
      },
      {
        internalType: 'uint32',
        name: 'callbackGasLimit',
        type: 'uint32'
      }
    ],
    name: 'estimateFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'reqCount',
        type: 'uint64'
      },
      {
        internalType: 'uint8',
        name: 'numSubmission',
        type: 'uint8'
      },
      {
        internalType: 'uint32',
        name: 'callbackGasLimit',
        type: 'uint32'
      },
      {
        internalType: 'uint64',
        name: 'accId',
        type: 'uint64'
      },
      {
        internalType: 'enum IAccount.AccountType',
        name: 'accType',
        type: 'uint8'
      }
    ],
    name: 'estimateFeeByAcc',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256[2]',
            name: 'pk',
            type: 'uint256[2]'
          },
          {
            internalType: 'uint256[4]',
            name: 'proof',
            type: 'uint256[4]'
          },
          {
            internalType: 'uint256',
            name: 'seed',
            type: 'uint256'
          },
          {
            internalType: 'uint256[2]',
            name: 'uPoint',
            type: 'uint256[2]'
          },
          {
            internalType: 'uint256[4]',
            name: 'vComponents',
            type: 'uint256[4]'
          }
        ],
        internalType: 'struct VRF.Proof',
        name: 'proof',
        type: 'tuple'
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'blockNum',
            type: 'uint256'
          },
          {
            internalType: 'uint64',
            name: 'accId',
            type: 'uint64'
          },
          {
            internalType: 'uint32',
            name: 'callbackGasLimit',
            type: 'uint32'
          },
          {
            internalType: 'uint32',
            name: 'numWords',
            type: 'uint32'
          },
          {
            internalType: 'address',
            name: 'sender',
            type: 'address'
          }
        ],
        internalType: 'struct IVRFCoordinatorBase.RequestCommitment',
        name: 'rc',
        type: 'tuple'
      },
      {
        internalType: 'bool',
        name: 'isDirectPayment',
        type: 'bool'
      }
    ],
    name: 'fulfillRandomWords',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'requestId',
        type: 'uint256'
      }
    ],
    name: 'getCommitment',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getConfig',
    outputs: [
      {
        internalType: 'uint32',
        name: 'maxGasLimit',
        type: 'uint32'
      },
      {
        internalType: 'uint32',
        name: 'gasAfterPaymentCalculation',
        type: 'uint32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getFeeConfig',
    outputs: [
      {
        internalType: 'uint32',
        name: 'fulfillmentFlatFeeKlayPPMTier1',
        type: 'uint32'
      },
      {
        internalType: 'uint32',
        name: 'fulfillmentFlatFeeKlayPPMTier2',
        type: 'uint32'
      },
      {
        internalType: 'uint32',
        name: 'fulfillmentFlatFeeKlayPPMTier3',
        type: 'uint32'
      },
      {
        internalType: 'uint32',
        name: 'fulfillmentFlatFeeKlayPPMTier4',
        type: 'uint32'
      },
      {
        internalType: 'uint32',
        name: 'fulfillmentFlatFeeKlayPPMTier5',
        type: 'uint32'
      },
      {
        internalType: 'uint24',
        name: 'reqsForTier2',
        type: 'uint24'
      },
      {
        internalType: 'uint24',
        name: 'reqsForTier3',
        type: 'uint24'
      },
      {
        internalType: 'uint24',
        name: 'reqsForTier4',
        type: 'uint24'
      },
      {
        internalType: 'uint24',
        name: 'reqsForTier5',
        type: 'uint24'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getPrepaymentAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getRequestConfig',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32'
      },
      {
        internalType: 'bytes32[]',
        name: '',
        type: 'bytes32[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256[2]',
        name: 'publicKey',
        type: 'uint256[2]'
      }
    ],
    name: 'hashOfKey',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'keyHash',
        type: 'bytes32'
      }
    ],
    name: 'keyHashToOracles',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'oracle',
        type: 'address'
      }
    ],
    name: 'oracleToKeyHash',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'consumer',
        type: 'address'
      },
      {
        internalType: 'uint64',
        name: 'accId',
        type: 'uint64'
      },
      {
        internalType: 'uint64',
        name: 'nonce',
        type: 'uint64'
      }
    ],
    name: 'pendingRequestExists',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'oracle',
        type: 'address'
      },
      {
        internalType: 'uint256[2]',
        name: 'publicProvingKey',
        type: 'uint256[2]'
      }
    ],
    name: 'registerOracle',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'keyHash',
        type: 'bytes32'
      },
      {
        internalType: 'uint32',
        name: 'callbackGasLimit',
        type: 'uint32'
      },
      {
        internalType: 'uint32',
        name: 'numWords',
        type: 'uint32'
      },
      {
        internalType: 'address',
        name: 'refundRecipient',
        type: 'address'
      }
    ],
    name: 'requestRandomWords',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'keyHash',
        type: 'bytes32'
      },
      {
        internalType: 'uint64',
        name: 'accId',
        type: 'uint64'
      },
      {
        internalType: 'uint32',
        name: 'callbackGasLimit',
        type: 'uint32'
      },
      {
        internalType: 'uint32',
        name: 'numWords',
        type: 'uint32'
      }
    ],
    name: 'requestRandomWords',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'sKeyHashes',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'sOracles',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'maxGasLimit',
        type: 'uint32'
      },
      {
        internalType: 'uint32',
        name: 'gasAfterPaymentCalculation',
        type: 'uint32'
      },
      {
        components: [
          {
            internalType: 'uint32',
            name: 'fulfillmentFlatFeeKlayPPMTier1',
            type: 'uint32'
          },
          {
            internalType: 'uint32',
            name: 'fulfillmentFlatFeeKlayPPMTier2',
            type: 'uint32'
          },
          {
            internalType: 'uint32',
            name: 'fulfillmentFlatFeeKlayPPMTier3',
            type: 'uint32'
          },
          {
            internalType: 'uint32',
            name: 'fulfillmentFlatFeeKlayPPMTier4',
            type: 'uint32'
          },
          {
            internalType: 'uint32',
            name: 'fulfillmentFlatFeeKlayPPMTier5',
            type: 'uint32'
          },
          {
            internalType: 'uint24',
            name: 'reqsForTier2',
            type: 'uint24'
          },
          {
            internalType: 'uint24',
            name: 'reqsForTier3',
            type: 'uint24'
          },
          {
            internalType: 'uint24',
            name: 'reqsForTier4',
            type: 'uint24'
          },
          {
            internalType: 'uint24',
            name: 'reqsForTier5',
            type: 'uint24'
          }
        ],
        internalType: 'struct ICoordinatorBase.FeeConfig',
        name: 'feeConfig',
        type: 'tuple'
      }
    ],
    name: 'setConfig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'typeAndVersion',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  }
]
