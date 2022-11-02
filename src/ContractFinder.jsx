import { useEffect } from 'react'
import { useContractRead, useAccount, erc20ABI } from 'wagmi'





const ContractFinder = (contractAddress) => {

    const { address } = useAccount()

    const { data: balance, isError, isLoading } = useContractRead({
        address: '0x27C70Cd1946795B66be9d954418546998b546634',
        abi: erc20ABI,
        functionName: 'balanceOf',
        args: [address]
      })

    // useEffect(() => {
    //     console.log(balance.toNumber() / 18)
    // }, [balance])



    return (
        <>This is it: {balance.toString() / 100000000000000000}</>
    )
}

export default ContractFinder