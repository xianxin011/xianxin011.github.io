import classnames from 'classnames';
import styles from './index.module.scss';
import ReactLoading from 'react-loading';

type LoadingType = "blank" | "balls" | "bars" | "bubbles" | "cubes" | "cylon" | "spin" | "spinningBubbles" | "spokes";

interface GlobalLoadingOptions {
    color?: string;
    height?: any;
    width?: any;
    delay?: number;
    type?: LoadingType;
    className?: string;
}
const GlobalLoading = (props: GlobalLoadingOptions) => {
    const { className, ...rest } = props;
    const GlobalLoadingDefaultConfig: GlobalLoadingOptions = {
        color: '#000000',
        height: '20%',
        width: '20%',
        delay: 0,
        type: 'spinningBubbles',
        ...rest
    }
    return (
        <div className={classnames('h-full', styles['loading'], className)}>
            <ReactLoading {...GlobalLoadingDefaultConfig} />
        </div>
    );
};
export default GlobalLoading;