export function formatMoney(val: any): string {
    if (!val) {
        return val;
    }
    const str = `${val.toFixed(2)}`;
    const intSum = str.substring(0, str.indexOf('.')).replace(/\B(?=(?:\d{3})+$)/g, ',');// 取到整数部分
    const dot = str.substring(str.length, str.indexOf('.'));// 取到小数部分搜索
    if (dot.match('^[\\.0]+$')) {
        return intSum;
    }
    return intSum + dot;
}