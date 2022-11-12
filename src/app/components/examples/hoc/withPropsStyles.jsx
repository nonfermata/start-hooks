import React from "react";
import CardWrapper from "../../common/Card";

const withPropsStyles = (Component) => (props) => {
    return (
        <CardWrapper>
            <Component {...props} name="New Name" />
        </CardWrapper>
    );
};

export default withPropsStyles;
