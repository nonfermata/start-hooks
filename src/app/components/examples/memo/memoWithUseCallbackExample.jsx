import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("Render button");
    });
    return (
        <button className="btn btn-primary" onClick={onLogOut}>
            Log Out
        </button>
    );
};
const areEqual = (prevState, nextState) => {
    return !(prevState.onLogOut !== nextState.onLogOut);
};

const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);
    return (
        <>
            <button
                className="btn btn-primary me-2"
                onClick={() => setState(!state)}
            >
                Initiate rerender
            </button>
            <MemoizedLogOutButton onLogOut={handleLogOut} />
        </>
    );
};
LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

export default MemoWithUseCallbackExample;
