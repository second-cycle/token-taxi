import Profile from "./Profile"
import SwitchNetwork from "./SwitchNetwork";
import "../App.css";
import "../index.css";

const Header = () => {
    return (
        <>
        <h1 className="text-3xl font-bold underline">token.taxi</h1>
        <Profile />
        {/* <SwitchNetwork /> */}
        </>
    )
}

export default Header