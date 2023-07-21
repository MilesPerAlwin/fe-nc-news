import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const SignedInAs = () => {

    const { user, setUser } = useContext(UserContext);


    return (
        <div>
            Signed in as {user}
        </div>
    )
}

export default SignedInAs;