import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Components/HomePage";
import ContactUs from "./Components/ContactUs";
import Courses from "./Components/Courses";
import Facilities from "./Components/Facilities";
import Toppers from "./Components/Toppers";
import LiveLectures from "./Components/LiveLectures";
import Notes from "./Components/Notes";
import Tawk from "./Shared/TalkTo";
import EnrollNow from "./Components/EnrollNow";



const App=()=>{
  const display=(
    <>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/facilities" element={<Facilities/>}/>
        <Route path="/toppers" element={<Toppers/>}/>
        <Route path="/notes" element={<Notes/>}/>
        <Route path="/live-lectures" element={<LiveLectures/>}/>
        <Route path="/enroll-now" element={<EnrollNow/>}/>
       </Routes>
       <Tawk/>
       </BrowserRouter>
    </>
  )
  return display;
}
export default App