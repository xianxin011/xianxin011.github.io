import { cn } from '@/lib/utils';
import { ReactNode } from 'react'

interface BackgroundImageProps {
    image: string;
    children: ReactNode;
    className?: string;
    id?: string;
}
export default function BackgroundImage(props: BackgroundImageProps) {
    const { image, children, className } = props;
    return (
        <div className={cn("w-full", className)} style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            overflow: 'hidden',
            position: 'relative'
        }} id={props.id}>{children}</div>
    )
}
