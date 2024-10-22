
import { useEffect } from 'react';
import { Route, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useCustomRouter } from '@/hooks/useCustomRouter';

export interface RoutePage {
    /*** tabbar 菜单顺序 */
    sort?: number;
    /**
     * 显示的名称
     */
    localeKey?: string;
    /**
     * 未选择的样式图标
     */
    unselectedIcon?: string;
    /**
     * 选择的样式图标
     */
    selectedIcon?: string;
    /*** 是否是标签栏 */
    tabBar: boolean;
    /**
     * 路由url
     */
    readonly path: string;
    /**
     * 组件位置，默认从 pages 目录开始，例： '/login' (注意：string类型仅在 config.tsx 中使用)
     */
    readonly component?: any;
    /**
     * 是否精确匹配
     */
    readonly exact?: boolean;

    /**
     * 是否受保护的（需要授权登录才能访问），默认 true
     */
    readonly protected?: boolean;

    /**
     * 导航栏可以
     */

    readonly tabBarKey: string;
}

export type RoutesProps = {
    routes?: RoutePage[];
};

export function Redirect({ to }: any) {
    const { navigate } = useCustomRouter();
    useEffect(() => {
        navigate(to);
    }, [to]);
    return null;
}

export const withRouter = function withRouter(Component: any) {
    return function HOC() {
        const navigate = useNavigate(),
            location = useLocation(),
            params = useParams(),
            [usp] = useSearchParams();
        return <Component navigate={navigate} location={location} params={params} usp={usp} />;
    };
};

export const createRoute = (route: RoutePage) => {
    return <Route path={route.path} key={route.path} element={route.component} />
};

const Routes: React.FC<RoutesProps> = (props) => {
    const { routes } = props;
    return <>{routes?.map((route) => createRoute(route))}</>;
};

export default Routes;