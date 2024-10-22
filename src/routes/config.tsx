import GlobalLoading from "@/components/global/Loading";
import { ComponentType, lazy, Suspense } from "react";

/**
 * 路径
 */
export enum Urls {
    PAGE_HOME = '/home', // 首页
    PAGE_404 = '/404', // 非法路径
}

export const tabPage = ['/home', '/me', '/repay'];

const tabsPage: { [key in string]: any } = {
    '/home': {
        path: '/app/home',
        exact: true,
        protected: false,
        tabBar: true,
        tabBarKey: 'home',
        sort: 1,
    },
    '/repay': {
        path: '/app/repay',
        exact: true,
        protected: false,
        tabBar: true,
        tabBarKey: 'repay',
        sort: 2,
    },
    '/me': {
        path: '/app/me',
        exact: true,
        protected: true,
        tabBar: true,
        tabBarKey: 'me',
        sort: 3,
    },
};

function wrapSuspense(importer: () => Promise<{ default: ComponentType }>) {
    if (!importer) {
        return undefined;
    }
    const Component = lazy(importer);
    console.log('🚀 ~ wrapSuspense ~ Component:', Component)
    return (
        <Suspense fallback={<GlobalLoading />}>
            <Component />
        </Suspense>
    );
}

function formateRoute(route: string) {
    const pathOrigin = route
        .replace('/src/pages', '')
        // 去除文件名后缀
        .replace(/\/index.tsx?/, '');
    return pathOrigin;
}

function generatePathConfig(): Record<string, any> {
    // 扫描 src/pages 下的所有具有路由文件
    const modules = import.meta.glob('/src/pages/**/index.{ts,tsx}');
    console.log('🚀 ~ generatePathConfig ~ modules:', modules)

    const pathConfig = Object.keys(modules)
        .map((item) => {
            return {
                path: modules[item],
                name: item,
            };
        });
    console.log(pathConfig)
    return pathConfig;
}

function mapPathConfigToRoute(cfg: Record<string, any>): any[] {
    // route 的子节点为数组
    return cfg.map((item: any) => {
        const pathname = formateRoute(item.name);
        // if (tabPage.includes(pathname)) {
        //     return {
        //         ...tabsPage[pathname],
        //         component: wrapSuspense(item.path),
        //     };
        // }
        return {
            path: pathname,
            component: wrapSuspense(item.path),
            protected: false,
            tabbar: false,
        };
    });
}

const routes = mapPathConfigToRoute(generatePathConfig());

export default routes;