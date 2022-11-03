import { useEffect } from 'react'
import { useAccount, useBalance } from 'wagmi'


//--


const TokenBalance = ({contractAddress}) => {

    const { address } = useAccount()
    const erc20Address = contractAddress
    
    const { data, isError, isLoading } = useBalance({
        addressOrName: address,
        token: erc20Address
      })
     
    if (isLoading) return <div>Fetching balance…</div>
    if (isError) return <div>Error fetching balance</div>
    return (
        <div>
          Balance: {data?.formatted} {data?.symbol}
        </div>
    )
}

export default TokenBalance