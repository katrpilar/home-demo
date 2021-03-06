import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';

import configureStore from '../store/homeStore';
import routes from '../routes/routes';

export default (props, railsContext) => {
  const store = configureStore(props);
  const { location } = railsContext;
  const context = {};

  return (
    <Provider store={store}>
      <StaticRouter location={location} context={context}>
        {routes}
      </StaticRouter>
    </Provider>
  );
};
