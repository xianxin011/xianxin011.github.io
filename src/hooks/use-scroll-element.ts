import { getScrollParent } from "@/utils/get-scroll-parent";
import { useThrottleFn } from "ahooks";
import { RefObject, useEffect, useState } from "react";

/**
* @description useScrollElement
* @param ref
* @return isScroll
**/
export function useScrollElement(ref?: RefObject<Element>) {
    const [isScroll, setIsScroll] = useState(false);
    // 抖动处理
    const { run: check } = useThrottleFn(() => {
        if (ref) {
            const element = ref.current;
            if (!element) return;
            const parent = getScrollParent(element) as any;

            if (!parent) return;
            if (parent?.scrollY) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        } else {
            const scrollHeight = window.scrollY;
            if (scrollHeight) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        }
    }, {
        wait: 100,
        trailing: true,
        leading: true,
    })
    // 监听滚动的方法
    function onScroll() {
        check()
    }
    // 处理滚动条
    useEffect(() => {
        document.addEventListener('scroll', onScroll)
        return () => {
            document.removeEventListener('scroll', onScroll)
        }
    }, [])

    return {
        isScroll
    }
}