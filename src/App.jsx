import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearToast } from "./store/pokemonSlice";
import { store } from "./store/store";
import GlobalStyles from "./components/styles/GlobalStyles";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import Detail from "./pages/Detail";
import "react-toastify/dist/ReactToastify.css";

// 토스트 메시지를 처리하는 컴포넌트
const ToastHandler = () => {
  const dispatch = useDispatch();
  const toastState = useSelector((state) => state.pokemon.toast);

  useEffect(() => {
    if (toastState.show) {
      switch (toastState.type) {
        case "success":
          toast.success(toastState.message);
          break;
        case "error":
          toast.error(toastState.message);
          break;
        case "info":
          toast.info(toastState.message);
          break;
        default:
          toast(toastState.message);
      }
      dispatch(clearToast());
    }
  }, [toastState, dispatch]);

  return null;
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyles />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastHandler />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/pokemon/:id" element={<Detail />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
