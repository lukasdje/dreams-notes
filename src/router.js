import React, { Route, Switch } from "react-router-dom"

import Content from "./components/Content"
import Projects from "./pages/Projects"
import Settings from "./pages/Settings"

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Content} />
            <Route path="/projects" component={Projects} />
            <Route path="/settings" component={Settings} />
        </Switch>

    )

}

export default Routes;