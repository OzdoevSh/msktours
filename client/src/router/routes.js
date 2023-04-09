import CityList from "../pages/City/CityList"
import ExursionList from "../pages/Exursion/ExursionList"
import InfoProject from "../pages/InfoProject/InfoProject"
import AdminPanel from "../pages/AdminPanel/AdminPanel"
import OrderList from "../pages/Order/OrderList"
import Login from "../pages/Login/Login";
import Exursion from "../pages/Exursion/FullCard/Exursion";
import Verify from "../pages/Verify/Verify";
import CallPage from "../pages/CallPage/CallPage"


export const AuthRoutes = [
    {path: '/CityList', component: CityList, exact: true},
    {path: '/CityList/:id', component: ExursionList, exact: true},
    {path: '/Verify/:id', component: Verify, exact: true},
    {path: '/InfoProject', component: InfoProject, exact: true},
    {path: '/exursion/:id', component: Exursion, exact: true},
    {path: '/allOrder', exact: true, component: OrderList},
    {path: '/PagesEx', exact: true, component: Exursion},
    {path: '/CallCentre', exact: true, component: CallPage},
]

export const AdminAuthRoutes = [
    ...AuthRoutes,
    {path: '/CityList/:id', component: ExursionList, exact: true},
    {path: '/AdminPanel', component: AdminPanel, exact: true},
]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
    {path: '/Verify/:id', component: Verify, exact: true},
    {path: '/registration', component: Login, exact: true},
    {path: '/InfoProject', component: InfoProject, exact: true}
]