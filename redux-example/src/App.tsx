import store from "./store/store";
import { Provider } from "react-redux";
import "./App.css";
import { Container } from "@mui/material";
import AddHabitForm from "./components/AddHabitForm";

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <h2>Redux Example Habit Tracker</h2>
      </Container>
      <AddHabitForm />
    </Provider>
  );
}

export default App;
