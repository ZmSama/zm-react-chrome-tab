## 一个react版本的谷歌风格tab组件，一般用于多页签设计，参考自soybean admin tab的Vue组件
### [soybean admin tab仓库地址](https://github.com/honghuangdc/soybean-admin-tab.git)

## Getting Started
### 第一步
> yarn add zm-react-chrome-tab 
----
> npm i zm-react-chrome-tab

### 第二步
```javascript
	import { ChromeTab } from "zm-react-chrome-tab"
	const Demo = ()=>{
		return <div>
			<ChromeTab ...若干属性>test</ChromeTab>
		</div>
	}
```

## API
|名字|作用|默认值|备注|
|:-|:-:|:-:|:-|
|isActive|是否激活|false||
|darkMode|是否暗黑模式|false||
|primaryColor|主题颜色|#1890ff||
|closable|是否显示关闭图标|true|| 
|bgColor|背景颜色|['#ffffff', '#18181c']|第一个是常态模式颜色、第二个是暗黑模式颜色|
|hoverBgColor|悬浮颜色|['#dee1e6', '#3f3c37']|第一个是常态模式颜色、第二个是暗黑模式颜色|
|close|关闭方法|()=>void||
|onClick|点击方法|()=>void||

