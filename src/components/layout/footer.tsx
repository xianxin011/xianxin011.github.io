import { Content } from './content';
import { useRouter } from '@/hooks/use-router';
import { PublicUrls } from '@/define/Urls';

export default function Footer() {
    const { push } = useRouter();

    return (<footer className="w-full bg-xx-muted">
        <Content className='container flex pt-[120px] pb-[127px] text-white'>
            footer
        </Content>
    </footer>)
}