import { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useCustomRouter } from './useCustomRouter';

const useWatcher = () => {
    const location = useLocation();
    const { navigate: history } = useCustomRouter();
    //const match = useRouteMatch();
    const [pathname, setPathname] = useState('');
    const listeners = useRef<any[]>([]);

    const addListener = useCallback((listener: any) => {
        listeners.current.push(listener);
    }, []);

    const removeListener = useCallback((listener: any) => {
        const index = listeners.current.findIndex((item) => item === listener);
        if (index >= 0) {
            listeners.current.splice(index, 1);
        }
    }, []);

    const execListeners = useCallback(() => {
        listeners.current.forEach((func) => {
            func({
                history,
                // match,
                location,
            });
        });
    }, [history, location]);

    useEffect(() => {
        if (pathname !== location.pathname) {
            execListeners();
            setPathname(pathname);
        }
    }, [location, execListeners, pathname]);

    const watcher = useMemo(() => {
        return {
            removeListener,
            addListener,
        };
    }, [removeListener, addListener]);

    return watcher;
};

export default useWatcher;
