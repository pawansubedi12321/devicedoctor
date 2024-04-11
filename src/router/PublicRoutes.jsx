// import LoginPage from '../components/LoginPage';
// import Dashboard from '../components/Dashboard';
// import CategoryPage from '../components/CategoryPage';
// import AddItems from '../components/addcategory/AddItems';
// import Addproblem from '../components/addproblem/Addproblem';
// import ProblemList from '../components/addproblem/ProblemList';
// import QuestionPage from "../components/QuestionPage";
// import AddQuesion from "../components/addquestion/AddQuesion";
// import Booking from "../components/Booking";
// import ShowPage from "../components/booking/ShowPage";
// import Edit from "../components/addcategory/Edit";
// import Trialpage from "../components/TrialPage";


// import  ProblemList'../components/addproblem/ProblemList';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import React from 'react'
import Loginpage from "../components/LoginPage"
import Dashboard from "../components/Dashboard";
import Category from "../components/Category";
import AddCategory from "../components/addcategory/AddCategory";
import ProblemList from "../components/problem/problemlist";
import Addproblem from "../components/problem/Addproblem";
import CreateBooking from "../components/createbooking/CreateBooking";
import Booking from "../components/Booking";
import ShowBooking from "../components/createbooking/ShowBooking";
import EditCategory from "../components/edit/EditCategory";
const PublicRoutes = () => {
    
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/'element={<Loginpage/>}></Route>
            <Route path='/dashboard'element={<Dashboard/>}></Route>
            <Route path='/category'element={<Category/>}></Route>
            <Route path='/addcategory'element={<AddCategory/>}></Route>
            <Route path='/problemlist'element={<ProblemList/>}></Route>
            <Route path='/addproblem'element={<Addproblem/>}></Route>
            <Route path='/createbooking'element={<CreateBooking/>}></Route>
            <Route path='/booking'element={<Booking/>}></Route>
            <Route path='/showbooking'element={<ShowBooking/>}></Route>
            <Route path='/editcategory'element={<EditCategory/>}></Route>
            {/* <Route path="/"element={<LoginPage/>}></Route>
            <Route path="/dashboard"element={<Dashboard/>}></Route> 
            <Route path="/CategoryPage"element={<CategoryPage/>}></Route> 
            <Route path="/additems"element={<AddItems/>}></Route>
            <Route path="/addproblem"element={<Addproblem/>}></Route>
            <Route path="/problemlist"element={<ProblemList/>}></Route>
            <Route path="/question"element={<QuestionPage/>}></Route>
            <Route path="/addquestion"element={<AddQuesion/>}></Route>
            <Route path="/booking"element={<Booking/>}></Route>
            <Route path='/showpage'element={<ShowPage/>}></Route>
            <Route path='/edit'element={<Edit/>}></Route>
            <Route path="/trialpage"element={<Trialpage/>}></Route> */}
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default PublicRoutes