/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  NftMarketplace,
  NftMarketplaceInterface,
} from "../NftMarketplace";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nativeTokenPrice",
        type: "uint256",
      },
    ],
    name: "NftSellOrder_Completed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nativeTokenPrice",
        type: "uint256",
      },
    ],
    name: "NftSellOrder_CreatedOrUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
    ],
    name: "NftSellOrder_Deleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_orderId",
        type: "uint256",
      },
    ],
    name: "cancelSellNftOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_orderId",
        type: "uint256",
      },
    ],
    name: "completeSellNftOrder",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nativeTokenPrice",
        type: "uint256",
      },
    ],
    name: "createSellNftOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "nftSellOrders",
    outputs: [
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nativeTokenPrice",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610e94806100206000396000f3fe60806040526004361061009c5760003560e01c80635ae08764116100645780635ae087641461017657806391d1485414610196578063a217fddf146101b6578063bf38d9f2146101cb578063d547741f14610245578063eae8c8661461026557600080fd5b806301ffc9a7146100a1578063248a9ca3146100d65780632ecbfccd146101145780632f2ff15d1461013657806336568abe14610156575b600080fd5b3480156100ad57600080fd5b506100c16100bc366004610c35565b610278565b60405190151581526020015b60405180910390f35b3480156100e257600080fd5b506101066100f1366004610c5f565b60009081526065602052604090206001015490565b6040519081526020016100cd565b34801561012057600080fd5b5061013461012f366004610c8d565b6102af565b005b34801561014257600080fd5b50610134610151366004610cc2565b6104d7565b34801561016257600080fd5b50610134610171366004610cc2565b610501565b34801561018257600080fd5b50610134610191366004610c5f565b61057f565b3480156101a257600080fd5b506100c16101b1366004610cc2565b6106ec565b3480156101c257600080fd5b50610106600081565b3480156101d757600080fd5b5061021a6101e6366004610c5f565b60976020526000908152604090208054600182015460028301546003909301546001600160a01b0392831693919092169184565b604080516001600160a01b0395861681529490931660208501529183015260608201526080016100cd565b34801561025157600080fd5b50610134610260366004610cc2565b610717565b610134610273366004610c5f565b61073c565b60006001600160e01b03198216637965db0b60e01b14806102a957506301ffc9a760e01b6001600160e01b03198316145b92915050565b6040516331a9108f60e11b815260048101839052839033906001600160a01b03831690636352211e90602401602060405180830381865afa1580156102f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031c9190610cf2565b6001600160a01b0316146103705760405162461bcd60e51b8152602060048201526016602482015275165bdd48191bdb89dd081bdddb881d1a1a5cc813919560521b60448201526064015b60405180910390fd5b6040516323b872dd60e01b8152336004820152306024820152604481018490526001600160a01b038216906323b872dd90606401600060405180830381600087803b1580156103be57600080fd5b505af11580156103d2573d6000803e3d6000fd5b50506040516bffffffffffffffffffffffff19606088901b1660208201526034810186905260009250605401905060408051601f19818403018152828252805160209182012060808085018452338086526001600160a01b038b81168588018181528888018d81526060808b018e8152600089815260978b528b90209b518c549087166001600160a01b0319918216178d55935160018d018054919097169416939093179094555160028a015551600390980197909755855191825293810195909552928401889052908301869052925082917fbc198725860155a879eb1db8254d4fadbd7eb9a7c2be8d7ec369f6ae2cc6b0ab910160405180910390a25050505050565b6000828152606560205260409020600101546104f28161092d565b6104fc838361093a565b505050565b6001600160a01b03811633146105715760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610367565b61057b82826109c0565b5050565b6000818152609760205260409020546001600160a01b031633146105f35760405162461bcd60e51b815260206004820152602560248201527f596f7520617265206e6f74207468652063726561746f72206f6620746869732060448201526437b93232b960d91b6064820152608401610367565b6000818152609760205260409081902060018101548154600283015493516323b872dd60e01b81523060048201526001600160a01b0391821660248201526044810194909452919291169081906323b872dd90606401600060405180830381600087803b15801561066357600080fd5b505af1158015610677573d6000803e3d6000fd5b505050600084815260976020908152604080832080546001600160a01b031990811682556001820180549091169055600281018490556003019290925590513381528592507f4423241a8bdc066430cef030557cb9989d6662316034cc744a7adfbdb99e0bad910160405180910390a2505050565b60009182526065602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6000828152606560205260409020600101546107328161092d565b6104fc83836109c0565b600081815260976020526040902080546001600160a01b03166107b05760405162461bcd60e51b815260206004820152602660248201527f4f7264657220627920676976656e206f7264657220696420646f6573206e6f7460448201526508195e1a5cdd60d21b6064820152608401610367565b348160030154146108155760405162461bcd60e51b815260206004820152602960248201527f6f7264657220707269636520616e6420706179656420616d6f756e7420646f656044820152680e6dce840dac2e8c6d60bb1b6064820152608401610367565b600181015460028201546040516323b872dd60e01b815230600482015233602482015260448101919091526001600160a01b039091169081906323b872dd90606401600060405180830381600087803b15801561087157600080fd5b505af1158015610885573d6000803e3d6000fd5b50508354600185015460028601546003870154604080516001600160a01b0395861681523360208201529490931692840192909252606083015260808201528592507f51c8740838a5b65122dc34faec8b6f4b5c05145f542ec1302437b3b5f6266485915060a00160405180910390a25050600090815260976020526040812080546001600160a01b0319908116825560018201805490911690556002810182905560030155565b6109378133610a27565b50565b61094482826106ec565b61057b5760008281526065602090815260408083206001600160a01b03851684529091529020805460ff1916600117905561097c3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6109ca82826106ec565b1561057b5760008281526065602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b610a3182826106ec565b61057b57610a3e81610a80565b610a49836020610a92565b604051602001610a5a929190610d33565b60408051601f198184030181529082905262461bcd60e51b825261036791600401610da8565b60606102a96001600160a01b03831660145b60606000610aa1836002610df1565b610aac906002610e08565b67ffffffffffffffff811115610ac457610ac4610e1b565b6040519080825280601f01601f191660200182016040528015610aee576020820181803683370190505b509050600360fc1b81600081518110610b0957610b09610e31565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610b3857610b38610e31565b60200101906001600160f81b031916908160001a9053506000610b5c846002610df1565b610b67906001610e08565b90505b6001811115610bdf576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610b9b57610b9b610e31565b1a60f81b828281518110610bb157610bb1610e31565b60200101906001600160f81b031916908160001a90535060049490941c93610bd881610e47565b9050610b6a565b508315610c2e5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610367565b9392505050565b600060208284031215610c4757600080fd5b81356001600160e01b031981168114610c2e57600080fd5b600060208284031215610c7157600080fd5b5035919050565b6001600160a01b038116811461093757600080fd5b600080600060608486031215610ca257600080fd5b8335610cad81610c78565b95602085013595506040909401359392505050565b60008060408385031215610cd557600080fd5b823591506020830135610ce781610c78565b809150509250929050565b600060208284031215610d0457600080fd5b8151610c2e81610c78565b60005b83811015610d2a578181015183820152602001610d12565b50506000910152565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351610d6b816017850160208801610d0f565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351610d9c816028840160208801610d0f565b01602801949350505050565b6020815260008251806020840152610dc7816040850160208701610d0f565b601f01601f19169190910160400192915050565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176102a9576102a9610ddb565b808201808211156102a9576102a9610ddb565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600081610e5657610e56610ddb565b50600019019056fea2646970667358221220265d6a3294ea9a5327535d12670b753474d49c8cdfab6a18912f468e0596091664736f6c63430008110033";

export class NftMarketplace__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NftMarketplace> {
    return super.deploy(overrides || {}) as Promise<NftMarketplace>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NftMarketplace {
    return super.attach(address) as NftMarketplace;
  }
  connect(signer: Signer): NftMarketplace__factory {
    return super.connect(signer) as NftMarketplace__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NftMarketplaceInterface {
    return new utils.Interface(_abi) as NftMarketplaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NftMarketplace {
    return new Contract(address, _abi, signerOrProvider) as NftMarketplace;
  }
}