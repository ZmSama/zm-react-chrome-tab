/*
 * @Descripttion: 
 * @version: 
 * @Author: ZmSama
 * @Date: 2022-09-06 15:33:10
 */
import { useState } from 'react'
import styled from 'styled-components'
import { ChromeTab } from "./components"
const AppWrap = styled.div`
	background:#f6f9f8;
	height:100vh;
	width:100vw;
	padding:24px;
	font-size:14px;
	overflow:hidden;
`

const TestDiv = styled.div`
	background:#fff;
	padding:16px;
`

function App() {
	
	const closeTab = ()=>{
		console.log("关闭方法")
	}
	const [index,setIndex] = useState(1);
	const [dark,setDark] = useState(false);
	const [tabs,setTabs] = useState([
		{
			name:'首页',
			id:1
		},
		{
			name:'用户管理',
			id:2
		},
		{
			name:'系统管理',
			id:3
		},
		{
			name:'仓库管理',
			id:4
		},
	]);
	const clickTab = (id:number)=>{
		setIndex(id)
		console.log(111)
	}
  return (
    <AppWrap>
	<TestDiv>
	{
		tabs.map(item=>(<ChromeTab closable={item.id==1?false:true}  isActive={item.id==index} darkMode={dark} onClick={()=>clickTab(item.id)} close={closeTab} key={item.id}>{item.name}</ChromeTab>))
	}
	</TestDiv>
    </AppWrap>
  )
}

export default App
