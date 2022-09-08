/*
 * @Descripttion:
 * @version:
 * @Author: ZmSama
 * @Date: 2022-09-05 13:18:53
 */
import { FC } from "react";
import styled, { css } from "styled-components";
import IconClose from "../iconClose";
import SvgRadiusbg from "../svgRadiusbg";
import { useState } from 'react';

/** 填充颜色： [默认颜色, 暗黑主题颜色] */
type FillColor = [string, string];

/** 混合比例：[默认, 暗黑] */
type MixRatio = [number, number];

export type ChromeTabProps = {
	/** 暗黑模式 */
	darkMode?: boolean;
	/** 激活状态 */
	isActive?: boolean;
	/** 主题颜色 */
	primaryColor?: string;
	/** 是否显示关闭图标 */
	closable?: boolean;
	/** 背景颜色 */
	bgColor?: FillColor;
	/** 悬浮时的背景颜色 */
	hoverBgColor?: FillColor;
	/** 激活状态时的混合颜色 */
	mixColor?: FillColor;
	/** 混合比例(主题颜色的占比) */
	mixRatio?: MixRatio;
	/** 内部标签*/
	children: any;
	/** 关闭方法*/
	close: () => void;
	/** 点击方法*/
	onClick: () => void;
}

const ChromeTabWrap = styled.div<{
	isActive: boolean,
	isHover: boolean
}>`
	position: relative;
	display: inline-flex;
	align-items: center;
	height: 34px;
	padding-left: 24px;
	padding-right: 24px;
	margin-right: -18px;
	cursor: pointer;
	${p => p.isActive && css`z-index: 10;`};
	${p => p.isHover && css`z-index: 9;`};
`
const TabBgWrap = styled.div`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`
const TitleSlot = styled.span<{
	darkMode: boolean
}>`
	position: relative;
	z-index: 2;
	white-space: nowrap;
	color:${p => p.darkMode && '#fff'}
`
const TabIconWrap = styled.div`
	padding-left: 18px;
`
const TabDividerWrap = styled.div<{
	isHover: boolean,
	isActive: boolean,
	darkMode: boolean
}>`
	position: absolute;
	right: 7.5px;
	z-index: 2;
	width: 1px;
	height: 16px;
	background-color:${p => p.darkMode ? 'rgba(255,255,255,0.9) !important' : '#1f2225'} ;
	opacity: ${p => p.isActive || p.isHover ? 0 : 1};
	transition: ease-in-out 0.3s opacity;
`
const ChromeTab: FC<ChromeTabProps> = ({
	darkMode = false,
	isActive = false,
	primaryColor = '#1890ff',
	closable = true,
	bgColor = ['#ffffff', '#18181c'],
	hoverBgColor = ['#dee1e6', '#3f3c37'],
	mixColor = ['#ffffff', '#000'],
	mixRatio = [0.13, 0.35],
	children,
	close,
	onClick
}) => {

	const [isHover, setIsHover] = useState(false);

	// 关闭方法
	const closeHandler = (e: any) => {
		e.stopPropagation()
		close()
	}
	return <ChromeTabWrap
		isActive={isActive}
		isHover={isHover}
		onMouseEnter={() => setIsHover(true)}
		onMouseLeave={() => setIsHover(false)}
		onClick={onClick}
	>
		<TabBgWrap>
			<SvgRadiusbg darkMode={darkMode} isActive={isActive} isHover={isHover} primaryColor={primaryColor} mixColor={mixColor} mixRatio={mixRatio} hoverBgColor={hoverBgColor} bgColor={bgColor} />
		</TabBgWrap>
		<TitleSlot darkMode={darkMode}>
			{children}
		</TitleSlot>
		{
			closable && <TabIconWrap onClick={(e) => closeHandler(e)}>
				<IconClose isActive={isActive} activeColor={primaryColor} />
			</TabIconWrap>
		}

		<TabDividerWrap isActive={isActive} isHover={isHover} darkMode={darkMode} />
	</ChromeTabWrap>
}


export default ChromeTab
