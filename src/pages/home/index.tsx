import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { Content } from '@/components/layout/content';
import { useRef } from 'react';
export interface IHomeProps { }

export default function Home() {
    const countUpRef = useRef(null);

    return (
        <div>
            <Header />
            <main>
                <Content className='pt-[120px] pb-[112px]' id="home-screen-first">
                    this is home page
                </Content>
                <Content className='pt-[120px] pb-[112px]' id="home-screen-second">
                    this is home page
                </Content>
                <Content className='pt-[120px] pb-[112px]' id="home-screen-third">
                    this is home page
                </Content>
                <Content className='pt-[120px] pb-[112px]' id="home-screen-fourth">
                    this is home page
                </Content>
            </main>
            <Footer />
        </div>
    );
}
