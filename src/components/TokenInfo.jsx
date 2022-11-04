import { useEffect } from 'react'
import { useAccount, useBalance, useToken } from 'wagmi'


//--


const TokenInfo = ({contractAddress}) => {

    const { address } = useAccount()
    const erc20Address = contractAddress
    
    const { data : tokenBalance, isError : isErrorBalance, isLoading : isErrorLoading } = useBalance({
        addressOrName: address,
        token: erc20Address
      })

    const { data : tokenName, isError : isErrorName, isLoading : isLoadingName } = useToken({
        address: erc20Address,
      })
     
    if (isErrorLoading || isLoadingName ) return <div>Fetching token…</div>
    if (isErrorBalance || isErrorName ) return <div>Error fetching token info</div>
    return (
        
        <div>
          <div>{tokenName?.name}</div>
          Balance: {tokenBalance?.formatted} {tokenBalance?.symbol}
        </div>
    )
}

export default TokenInfo