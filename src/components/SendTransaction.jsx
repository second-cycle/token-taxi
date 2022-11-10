import { useDebounce } from "use-debounce";
import { utils } from "ethers";
import {
    usePrepareSendTransaction,
    useSendTransaction,
    useWaitForTransaction,
} from "wagmi";
import { Stack } from "@mantine/core";

const SendTransaction = ({ recipient, amount }) => {
    const [debouncedRecipient] = useDebounce(recipient, 500);

    const [debouncedAmount] = useDebounce(amount, 500);

    const { config } = usePrepareSendTransaction({
        request: {
            to: debouncedRecipient,
            value: debouncedAmount
                ? utils.parseEther(debouncedAmount)
                : undefined,
        },
    });
    const { data, sendTransaction } = useSendTransaction(config);

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    });

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                sendTransaction?.();
            }}
        >
            <Stack align="center">
                <button
                    disabled={
                        isLoading || !sendTransaction || !recipient || !amount
                    }
                >
                    {isLoading ? "Sending..." : "Send"}
                </button>
                {isSuccess && (
                    <div>
                        <Stack align="center">
                            Successfully sent {amount} ether to {recipient}
                            <div>
                                <a
                                    href={`https://etherscan.io/tx/${data?.hash}`}
                                >
                                    Etherscan
                                </a>
                            </div>
                        </Stack>
                    </div>
                )}
            </Stack>
        </form>
    );
};

export default SendTransaction;
