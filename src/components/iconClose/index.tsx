/*
 * @Descripttion:
 * @version:
 * @Author: ZmSama
 * @Date: 2022-09-05 14:58:27
 */
import { FC } from 'react';
import styled from 'styled-components'
import { useState } from 'react';
import SvgClose from '../svgClose';
import SvgCloseCircle from '../svgCloseCircle';
export type IconProps = {
	/** 激活状态 */
	isActive?: boolean;
	/** 默认颜色 */
	defaultColor?: string;
	/** 激活时的颜色 */
	activeColor?: string;
}

const IconWrap = styled.div<IconProps>`
	position: relative;
	display: flex;
	justify-content: center;
	align-content: center;
	width: 18px;
	height: 18px;
	font-size: 14px;
	color: ${props => props.isActive ? props.activeColor : props.defaultColor};
`

const SvgCloseWrapper = styled(SvgClose)`
	position: absolute;
	width: 16px;
	height: 16px;
`
const SvgCloseCircleWrapper = styled(SvgCloseCircle)`
	position: absolute;
	width: 16px;
	height: 16px;
`

const IconClose: FC<IconProps> = ({
	isActive = false,
	defaultColor = "#9ca3af",
	activeColor = "#1890ff"
}) => {

	const [isHover, setIsHover] = useState(false);
	return <IconWrap
		isActive={isActive}
		activeColor={activeColor}
		defaultColor={defaultColor}
		onMouseEnter={() => setIsHover(true)}
		onMouseLeave={() => setIsHover(false)}
	>
		{
			isHover ? <SvgCloseCircleWrapper /> : <SvgCloseWrapper />
		}
	</IconWrap>
}


export default IconClose
