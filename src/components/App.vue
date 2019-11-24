<template>
	<div id="app">
		<div id="head">
			<div class="title-container">
				<div class="title">Face Recognition</div>
			</div>
			<div id="window-control">
				<img @click="minimize" class="wc-icon" id="wc-minimize" src="../assets/minimize.png"/>
				<img @click="maximize" class="wc-icon" id="wc-maximize" src="../assets/maximize.svg"/>
				<img @click="close" class="wc-icon" id="wc-close" src="../assets/close.svg"/>
			</div>
		</div>
		<router-view id="router-view"/>
	</div>
</template>

<script>
export default {
	name: "App",
	methods: {
		minimize(){
			electron.remote.getCurrentWindow().minimize();
		},
		maximize(){
			let isMaximized = electron.remote.getCurrentWindow().isMaximized();
			if(isMaximized) {
				electron.remote.getCurrentWindow().unmaximize();
			} else 
				electron.remote.getCurrentWindow().maximize();
		},
		close(){
			electron.remote.getCurrentWindow().close();
		}
	}
}
</script>

<style scoped>

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}

.title-container{
	flex-grow: 1;
	font-weight: 500;
	font-size: 25px;
	-webkit-app-region: drag;
}

.title{
	background: linear-gradient(to right,blue,red);
	background-clip: text;
	display: inline-block;
	margin-left: 20px;
	-webkit-text-fill-color: transparent;
}

#head > * {
	display: inline-block;
}

#head {
	width: 100vw;
	background-color: rgb(245, 245, 245);
	box-shadow: 1px 0 10px 1px rgba(0,0,0,0.1);
	position: fixed;
	display: flex;
	justify-content: baseline;
	align-items: center;
	top: 0;
	left: 0;
}

#window-control{
	float: right;
	top: 0;
	right: 0;
}

#close-btn{
	width: 30px;
	margin: 5px;
	cursor: pointer;
}

.wc-icon{
	width: 30px;
	padding: 5px;
	margin: 0 5px;
	cursor: pointer;
	transition: transform 0.2s;
}

.wc-icon:hover{
	transform: scale3d(0.9);
}

#router-view{
	margin-top: 70px;
}

</style>
