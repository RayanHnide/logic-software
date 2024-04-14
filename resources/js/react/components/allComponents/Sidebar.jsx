import React, {useState} from 'react';
import {
    CDBSidebar,
    CDBSidebarContent, CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem
} from "cdbreact";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {withTranslation} from "react-i18next";
import {Api} from "../../utils/Api.ts";
import {AuthHelper} from "../../utils/AuthHelper.ts";

const sidebarMenu = [
    {
        to: "",
        icon: "home",
        label: "menu.items.home"
    },
    {
        to: "/latest-work/add",
        icon: "plus",
        label: "menu.items.addLatestWork"
    },
]

const Sidebar = ({...props}) => {
    const {pathname} = useLocation()
    const nav = useNavigate();
    const [toggled, setToggled] = useState(true)
    const t = props.t;
    const onLogout = () => {
        Api.post({path:"/logout", hideMessage: true})
        AuthHelper.logout();
        nav("/", {replace: true})
    }

    return (
        <div onMouseEnter={() => setToggled(false)} onMouseLeave={() => setToggled(true)} className="position-fixed" style={{
            display: 'flex',
            height: 'calc(70% - 100px)',
            top: "calc(15% + 100px)",
            overflow: 'scroll initial'
        }}>
            <CDBSidebar toggled={toggled} textColer="#fff" backgroundColor="rgba(37, 90, 122,0.1)">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    {t("menu.title")}
                </CDBSidebarHeader>
                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        {
                            sidebarMenu.map((m) => {
                                const isActive = `/dashboard${m.to}` === pathname;
                                return <NavLink key={m.label} to={`/dashboard${m.to}`}>
                                    <CDBSidebarMenuItem active={isActive} icon={m.icon}>
                                        {t(m.label)}
                                    </CDBSidebarMenuItem>
                                </NavLink>
                            })
                        }
                    </CDBSidebarMenu>
                </CDBSidebarContent>
                <CDBSidebarFooter style={{textAlign: 'center'}}>
                    <div onClick={onLogout}>
                        <CDBSidebarMenuItem className="btn btn-danger m-0 p-0 mb-1" icon="arrow-down">
                            {t("menu.logout")}
                        </CDBSidebarMenuItem>
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
};

export default withTranslation("dashboard")(Sidebar);
