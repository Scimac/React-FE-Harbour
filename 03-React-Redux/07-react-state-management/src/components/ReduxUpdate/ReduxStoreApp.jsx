import { Provider } from "react-redux";
import store from "../../redux/store";
import StoreAppParent from "./StoreAppParent";

const ReduxStoreApp = () => {
  return (
    <>
      <Provider store={store}>
        <StoreAppParent />
      </Provider>
    </>
  );
};

export default ReduxStoreApp;