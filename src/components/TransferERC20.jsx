import {
    usePrepareContractWrite,
    useContractWrite,
    useWaitForTransaction,
    erc20ABI,
} from "wagmi";
import { Button, Stack } from "@mantine/core";

function TransferERC20({ tokenAddress, recipient, amount, decimals = 18 }) {
    const {
        config,
        error: prepareError,
        isError: isPrepareError,
    } = usePrepareContractWrite({
        address: tokenAddress,
        abi: erc20ABI,
        functionName: "transfer",
        args: [recipient, amount],
    });
    const { data, error, isError, write } = useContractWrite(config);

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    });

    return (
        <div>
            <Stack align="center">
                <div>Amount: {amount / 10 ** 18}</div>
                <div>Recipient: {recipient}</div>
                <Button disabled={!write || isLoading} onClick={() => write()}>
                    {isLoading ? "Sending..." : "Send"}
                </Button>
                {isSuccess && (
                    <div>
                        Successfully sent ERC20!
                        <div>
                            <a href={`https://etherscan.io/tx/${data?.hash}`}>
                                Etherscan
                            </a>
                        </div>
                    </div>
                )}
                {(isPrepareError || isError) && (
                    <div>ERROR : {(prepareError || error)?.message}</div>
                )}
            </Stack>
        </div>
    );
}

export default TransferERC20;
