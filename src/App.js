import React from "react";
import Home from "./Components/Home";
import RootProvider from "./context_or_provider/RootProvider";

const App = () => {
    return (
        <RootProvider>
            <div>
                <div>
                    <Home/>
                </div>
            </div>
        </RootProvider>

    );
};

export default App;
