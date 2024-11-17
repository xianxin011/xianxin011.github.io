import { Route, Switch } from 'react-router'
import HomePage from './pages/home';
import Page404 from './pages/page404';
import { PublicUrls } from './define/Urls';
import './App.css'

function App() {
  return (
    <Switch>
      <Route component={HomePage} exact path={PublicUrls.HOME} />
      <Route component={Page404} />
    </Switch>
  )
}

export default App
