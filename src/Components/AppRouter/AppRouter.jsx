// // AppRouter.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavBar from '../NavBar/NavBar';
// import Home from '../../Pages/Home/Home';
// import IndlandSubLink from '../../Pages/Indland/IndlandSubLink';
// import IndlandSubLink2 from '../../Pages/Indland/IndlandSubLink2';
// import Indland from '../../Pages/Indland/Indland';
// import Udland from '../../Pages/Udland/Udland';
// import UdlandSubLink from '../../Pages/Udland/UdlandSubLink';
// import UdlandSubLink2 from '../../Pages/Udland/UdlandSubLink2';
// import Teknologi from '../../Pages/Teknologi/Teknologi';
// import TeknologiSubLink from '../../Pages/Teknologi/TeknologiSubLink';
// import Sport from '../../Pages/Sport/Sport';
// import SportSubLink from '../../Pages/Sport/SportSubLink';
// import Politik from '../../Pages/Politik/Politik';
// import PolitikSubLink from '../../Pages/Politik/PolitikSubLink';
// import Samfund from '../../Pages/Samfund/Samfund';
// import SamfundSubLink from '../../Pages/Samfund/SamfundSubLink';
// import Login from '../../Pages/Login/Login';
// import NoPage from '../../Pages/NoPage/NoPage';

// const AppRouter = () => { 
//     return (
//         <Router>
//             <NavBar />
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/indland" element={<Indland />} />
//                 <Route path="/indland/sublink" element={<IndlandSubLink />} />
//                 <Route path="/indland/sublink" element={<IndlandSubLink2 />} />

//                 <Route path="/udland" element={<Udland />} />
//                 <Route path="/udland/sublink" element={<UdlandSubLink />} /> 
//                 <Route path="/udland/sublink2" element={<UdlandSubLink2 />} /> 
                
//                 <Route path="/teknologi" element={<Teknologi />} />
//                 <Route path="/teknologi/sublink" element={<TeknologiSubLink />} />

//                 <Route path="/sport" element={<Sport />} />
//                 <Route path="/sport/sublink" element={<SportSubLink />} /> 

//                 <Route path="/politik" element={<Politik />} />
//                 <Route path="/politik/sublink" element={<PolitikSubLink />} />

//                 <Route path="/samfund" element={<Samfund />} />
//                 <Route path="/samfund/sublink" element={<SamfundSubLink />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="*" element={<NoPage />} />
//             </Routes>
//         </Router>
//     );
// };

// export default AppRouter;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Home from '../../Pages/Home/Home';
import IndlandSubLink from '../../Pages/Indland/IndlandSubLink';
import IndlandSubLink2 from '../../Pages/Indland/IndlandSubLink2';
import Indland from '../../Pages/Indland/Indland';
import Udland from '../../Pages/Udland/Udland';
import UdlandSubLink from '../../Pages/Udland/UdlandSubLink';
import UdlandSubLink2 from '../../Pages/Udland/UdlandSubLink2';
import Teknologi from '../../Pages/Teknologi/Teknologi';
import TeknologiSubLink from '../../Pages/Teknologi/TeknologiSubLink';
import TeknologiSubLink2 from '../../Pages/Teknologi/TeknologiSubLink2';
import Sport from '../../Pages/Sport/Sport';
import SportSubLink from '../../Pages/Sport/SportSubLink';
import Politik from '../../Pages/Politik/Politik';
import PolitikSubLink from '../../Pages/Politik/PolitikSubLink';
import Samfund from '../../Pages/Samfund/Samfund';
import SamfundSubLink from '../../Pages/Samfund/SamfundSubLink';
import Login from '../../Pages/Login/Login';
import NoPage from '../../Pages/NoPage/NoPage';

const generateEntryIdMapping = (routes) => {
    const entryIdMapping = {};

    routes.forEach(route => {
        // Extract the path and element from the route
        const { path, element } = route;

        // Skip routes with '*' as it's a catch-all route
        if (path !== "*") {
            // Use the path directly as the key and assign the corresponding link
            const link = `http://localhost:3000${path}`;
            entryIdMapping[path] = link;
            console.log(`Mapped path: ${path} to link: ${link}`);
        }
    });

    return entryIdMapping;
};


const AppRouter = () => {
    const routes = [
        { path: "/", element: <Home /> },
        { path: "/indland", element: <Indland /> },
        { path: "/indland/sublink", element: <IndlandSubLink /> },
        { path: "/indland/sublink2", element: <IndlandSubLink2 /> },
        { path: "/udland", element: <Udland /> },
        { path: "/udland/sublink", element: <UdlandSubLink /> },
        { path: "/udland/sublink2", element: <UdlandSubLink2 /> },
        { path: "/teknologi", element: <Teknologi /> },
        { path: "/teknologi/sublink", element: <TeknologiSubLink /> },
        { path: "/teknologi/sublink2", element: <TeknologiSubLink2 /> },
        { path: "/sport/sublink", element: <SportSubLink /> },
        { path: "/politik", element: <Politik /> },
        { path: "/politik/sublink", element: <PolitikSubLink /> },
        { path: "/sport", element: <Sport /> },
        { path: "/samfund", element: <Samfund /> },
        { path: "/samfund/sublink", element: <SamfundSubLink /> },
        { path: "/login", element: <Login /> },
        { path: "*", element: <NoPage /> }
    ];

    const entryIdMapping = generateEntryIdMapping(routes);

    return (
        <Router>
            <NavBar />
            <Routes>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} />
                ))}
            </Routes>
        </Router>
    );
};

export default AppRouter;
