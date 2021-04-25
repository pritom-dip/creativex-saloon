import { useContext } from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from "react-router-dom";
import { UserContext } from "../../../App";

const ProtectedRoute = ({ children, ...rest }) => {
    const [user, setUser] = useContext(UserContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default ProtectedRoute;