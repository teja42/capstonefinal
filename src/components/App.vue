<template>
	<div id="app">
		<div id="head">
			<div class="title">Face Recognition</div>
			<div id="window-control">
				<img id="close-btn" src="../assets/close.svg"/>
			</div>
		</div>
		<router-view/>
	</div>
</template>

<script>
export default {
	name: "App",
	mounted(){
		let closeBtn = document.querySelector("#close-btn");
		closeBtn.onclick = ()=>{
		};
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

.title{
	text-align: center;
	background: linear-gradient(to right,blue,red);
	background-clip: text;
	font-weight: 500;
	font-size: 30px;
	-webkit-text-fill-color: transparent;
}

#head > * {
	display: inline-block;
}

#head {
	-webkit-app-region: drag;
	padding: 10px 20px;
	background-color: rgb(245, 245, 245);
	cursor:nw-resize;
}

#window-control{
	float: right;
}

#close-btn{
	width: 30px;
	margin: 5px;
	cursor: pointer;
}

</style>
