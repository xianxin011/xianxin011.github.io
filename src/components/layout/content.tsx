import { cn } from "@/lib/utils";
import { ReactNode } from "react"

interface ContentProps {
    children?: ReactNode
    className?: string;
    id?: string;
}
export function Content(props: ContentProps) {
    const { children, className } = props;
    return (
        <div className={cn("mx-auto max-w-[82.5rem] px-4 py-12", className)} id={props.id}>
            {children}
        </div>
    )
}