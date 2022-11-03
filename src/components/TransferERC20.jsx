import {usePrepareContractWrite, useContractWrite, useWaitForTransaction, erc20ABI} from 'wagmi'
   
  function TransferERC20() {
    const {config, error: prepareError, isError: isPrepareError, } = usePrepareContractWrite({
      address: "0x27c70cd1946795b66be9d954418546998b546634",
      abi: erc20ABI,
      functionName: 'transfer',
      args: ["trav.eth", 2000]
    })
    const { data, error, isError, write } = useContractWrite(config)
   
    const { isLoading, isSuccess } = useWaitForTransaction({
      hash: data?.hash,
    })
   
    return (
      <div>
        <button disabled={!write || isLoading} onClick={() => write()}>
          {isLoading ? 'Sending...' : 'Send'}
        </button>
        {isSuccess && (
          <div>
            Successfully sent ERC20!
            <div>
              <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
            </div>
          </div>
        )}
        {(isPrepareError || isError) && (
          <div>Error: {(prepareError || error)?.message}</div>
        )}
      </div>
    )
  }

export default TransferERC20