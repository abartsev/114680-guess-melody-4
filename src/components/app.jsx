import React from "react";

export const App = (props) => <WelcomeScreen {...props} />;

// eslint-disable-next-line react/prop-types
const WelcomeScreen = ({errors}) => <div>WelcomeScreen {errors}</div>;
