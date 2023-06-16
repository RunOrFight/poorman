import { useNavigate } from "react-router-dom";
import { Button, Input } from "../components";

const MenuPage = () => {
    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate("/game")
    }

    return <div className="flex justify-center items-center h-full">
        <Input/>
        <Button onClick={handleClick}>Join Lobby</Button>
    </div>
};

export default MenuPage;

