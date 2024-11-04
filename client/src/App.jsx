import Navbar from './components/Navbar';
import UserAuth from './components/UserAuth';
import { Route, Routes, Navigate } from "react-router-dom";
import Body from './components/Body';
import CaptureImage from './components/CaptureImage';

const App = () => {   

    return (
        <Routes>
            <Route path="/" element={<Navbar />} >
                <Route path='/' element={<Body />}/>
                <Route path="signin" element={<UserAuth type="sign-in" />} />
                <Route path="signup" element={<UserAuth type="sign-up" />} />
                <Route path="CaptureImage" element={<CaptureImage />} />
                <Route path="individual-auth" element={<CaptureImage buttonText = 'Search' buttonAction = 'searchImage'/>} />
            </Route>
        </Routes>
    
    );
}

export default App;
