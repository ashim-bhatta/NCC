import Web3 from 'web3'

const getLibrary = (provider: any) => {
  return new Web3(provider)
}

export default getLibrary
