import { useCallback, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoute, Redirect } from "./Routes";
import routesData from './config';
import useWatcher from "@/hooks/useReactRouterWatch";

const Content = () => {
    const watcher = useWatcher();
    const onRouteChange = useCallback((context: any) => {
        if (context.location.pathname) {
            console.log(context.location.pathname)
        }
    }, []);

    useEffect(() => {
        watcher.addListener(onRouteChange);
        return () => {
            watcher.removeListener(onRouteChange);
        };
    }, [watcher, onRouteChange]);

    return (<div className="h-full">
        <Routes>
            {routesData?.map((route: any) => createRoute(route))}
            <Route path="/" element={<Redirect to={'/home'} />} />
            <Route path="*" element={<Redirect to={'/404'} />} />
        </Routes>
    </div>)
}

export const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Content />
        </BrowserRouter>
    );
};