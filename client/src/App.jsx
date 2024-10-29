import Navbar from './components/Navbar'
import UserAuth from './components/UserAuth'
import { Route,Routes } from "react-router-dom";
const App = () => {
    return (

        <Routes>
            <Route path="/" element = {<Navbar />} > {/* parent route */}
                {/* type is arg we passing to the function */}
                <Route path="signin" element = {<UserAuth type = "sign-in"/>} /> {/*childrean routes  */}
                <Route path="signup" element = {<UserAuth type = "sign-up"/>} />{/* / + signup => /signup */}
            </Route>
        </Routes>
    )
}

export default App;