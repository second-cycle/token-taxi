import { Stack } from "@mantine/core";
import { useAccount, useBalance, useToken } from "wagmi";

//--

const TokenInfo = ({ contractAddress }) => {
    const { address } = useAccount();
    const erc20Address = contractAddress;

    const {
        data: tokenBalance,
        isError: isErrorBalance,
        isLoading: isErrorLoading,
    } = useBalance({
        addressOrName: address,
        token: erc20Address,
    });

    const {
        data: tokenName,
        isError: isErrorName,
        isLoading: isLoadingName,
    } = useToken({
        address: erc20Address,
    });

    if (isErrorLoading || isLoadingName) return <div>Fetching token…</div>;
    if (isErrorBalance || isErrorName)
        return <div>Error fetching token info</div>;
    return (
        <div>
            <Stack align="center">
                <div>{tokenName?.name}</div>
                Balance: {tokenBalance?.formatted} {tokenBalance?.symbol}
            </Stack>
        </div>
    );
};

export default TokenInfo;
