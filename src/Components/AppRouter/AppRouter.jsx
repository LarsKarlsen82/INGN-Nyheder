// AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Home from '../../Pages/Home/Home';
import IndlandSubLink from '../../Pages/Indland/IndlandSubLink';
import Indland from '../../Pages/Indland/Indland';
import Udland from '../../Pages/Udland/Udland';
import UdlandSubLink from '../../Pages/Udland/UdlandSubLink';
import UdlandSubLink2 from '../../Pages/Udland/UdlandSubLink2';
import Teknologi from '../../Pages/Teknologi/Teknologi';
import TeknologiSubLink from '../../Pages/Teknologi/TeknologiSubLink';
import Sport from '../../Pages/Sport/Sport';
import SportSubLink from '../../Pages/Sport/SportSubLink';
import Politik from '../../Pages/Politik/Politik';
import PolitikSubLink from '../../Pages/Politik/PolitikSubLink';
import Samfund from '../../Pages/Samfund/Samfund';
import SamfundSubLink from '../../Pages/Samfund/SamfundSubLink';
import Login from '../../Pages/Login/Login';

const AppRouter = () => { 
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/indland" element={<Indland />} />
                <Route path="/indland/sublink" element={<IndlandSubLink />} />

                <Route path="/udland" element={<Udland />} />
                <Route path="/udland/sublink" element={<UdlandSubLink />} /> 
                <Route path="/udland/sublink2" element={<UdlandSubLink2 />} /> 
                
                <Route path="/teknologi" element={<Teknologi />} />
                <Route path="/teknologi/sublink" element={<TeknologiSubLink />} />

                <Route path="/sport" element={<Sport />} />
                <Route path="/sport/sublink" element={<SportSubLink />} /> 

                <Route path="/politik" element={<Politik />} />
                <Route path="/politik/sublink" element={<PolitikSubLink />} />

                <Route path="/samfund" element={<Samfund />} />
                <Route path="/samfund/sublink" element={<SamfundSubLink />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
