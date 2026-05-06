import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"


function App() {
  return (
    <UserContextProvider>
    <div>hi i am  zaif and i am the world best coder in the world </div>
    <Login />
    <Profile/>
    </UserContextProvider>
  )
}

export default App
