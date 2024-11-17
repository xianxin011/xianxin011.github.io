import { Route, Switch } from 'react-router'
import HomePage from './pages/home';
import { PublicUrls } from './define/Urls';
import './App.css'

function App() {
  return (
    <Switch>
      <Route component={HomePage} exact path={PublicUrls.HOME} />
    </Switch>
  )
}

export default App
