/*
 * @Descripttion: 
 * @version: 
 * @Author: ZmSama
 * @Date: 2022-09-05 14:20:14
 */
import { colord, extend } from "colord";
import { FC, useEffect } from "react"
import { useState } from 'react';
import mixPlugin from "colord/plugins/mix";
extend([mixPlugin]);
/** 填充颜色： [默认颜色, 暗黑主题颜色] */
type FillColor = [string, string];
/** 混合比例：[默认, 暗黑] */
type MixRatio = [number, number];
export type SvgRadiusbgProps = {
    /** 暗黑模式 */
    darkMode?: boolean;
    /** 激活状态 */
    isActive?: boolean;
    /** 鼠标悬浮状态 */
    isHover?: boolean;
    /** 主题颜色 */
    primaryColor?: string;
    /** 背景颜色 */
    bgColor?: FillColor;
    /** 悬浮时的背景颜色 */
    hoverBgColor?: FillColor;
    /** 激活状态时的混合颜色 */
    mixColor?: FillColor;
    /** 混合比例(主题颜色的占比) */
    mixRatio?: MixRatio;
}
const SvgRadiusbg: FC<SvgRadiusbgProps> = ({
    darkMode = false,
    isActive = false,
    isHover = false,
    primaryColor = "#1890ff",
    bgColor = ['#ffffff', '#18181c'],
    hoverBgColor = ['#dee1e6', '#333333'],
    mixColor = ['#ffffff', '#000000'],
    mixRatio = [0.2, 0.3]
}) => {
    const [fill, setFill] = useState("#ffffff");

    /**
     * @msg: 颜色混合
     * @param {string} firstColor 第一个颜色
     * @param {string} secondColor 第二个颜色
     * @param {number} ratio 第二个颜色占比
     * @return {*}
     */
    const mixColorFunc = (firstColor: string, secondColor: string, ratio: number) => {
        return colord(firstColor).mix(secondColor, ratio).toHex();
    }

    useEffect(() => {
        const index = Number(darkMode);
        let color = bgColor[index];
        if (isHover) {
            color = hoverBgColor[index];
        }
        if (isActive) {
            const ratio = mixRatio[index];
            color = mixColorFunc(mixColor[index], primaryColor, ratio);
        }
        setFill(color)
    }, [darkMode, isActive, isHover])
    return <div>
        <svg width="100%" height="100%">
            <defs>
                <symbol id="geometry-left" viewBox="0 0 214 36">
                    <path d="M17 0h197v36H0v-2c4.5 0 9-3.5 9-8V8c0-4.5 3.5-8 8-8z"></path>
                </symbol>
                <symbol id="geometry-right" viewBox="0 0 214 36">
                    <use xlinkHref="#geometry-left"></use>
                </symbol>
                <clipPath>
                    <rect width="100%" height="100%" x="0"></rect>
                </clipPath>
            </defs>
            <svg width="52%" height="100%">
                <use xlinkHref="#geometry-left" width="214" height="36" fill={fill}></use>
            </svg>
            <g transform="scale(-1, 1)">
                <svg width="52%" height="100%" x="-100%" y="0">
                    <use xlinkHref="#geometry-right" width="214" height="36" fill={fill}></use>
                </svg>
            </g>
        </svg>
    </div>
}


export default SvgRadiusbg