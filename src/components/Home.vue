<template>
   <div id="home">

      <div class="section">
         <div class="section-title">1. Get input faces</div>
         <div class="section-description">
            To train the machine learning algorithm to recognize faces, you need to first import 
            the images of person's face. This can be done by getting images from your camera or 
            importing a video with the person's face clearly visible in it.
         </div>
         <div class="section-action">
            <button v-promise-btn @click="ImportViaCamera" class="btn">Use camera</button>
            <button v-promise-btn @click="ImportViaVideo" class="btn">Use video</button>
         </div>
      </div>

      <div class="section">
         <div class="section-title">2. Train</div>
         <div class="section-description">
            Start training the machine learning alogrithm to detect imported faces.
         </div>
         <div class="section-action">
            <button v-promise-btn @click="Train" class="btn">Start Training</button>
         </div>
      </div>

      <div class="section">
         <div class="section-title">3. Detect faces</div>
         <div class="section-description">
            Once the training has been completed you can start detecting faces. 
            You can detect faces from a video, image or directly from the camera feed.
         </div>
         <div class="section-action">
            <button @click="Detect('video')" class="btn">From video</button>
            <button @click="Detect('image')" class="btn">From Image</button>
            <button v-promise-btn @click="Detect('camera')" class="btn">From Camera</button>
         </div>
      </div>

   </div>
</template>

<script>

export default {
   name: "Home",
   methods: {
      spawnProcess(cmd){
         return new Promise((resolve,reject) => {
            let cwd = BASE_DIR + "/python";
            childProcess.exec(cmd,{
               windowsHide: true,
               cwd
            }, (err, stdout, stderr)=>{
               if(err || stderr){
                  alert("An error occured!");
                  console.log(err,stderr);
                  reject();
               } else resolve();
            })
         });
      },
      ImportViaCamera(){
         return new Promise((resolve) => {
            let cmd = `python 1.c.py 1`;
            this.spawnProcess(cmd)
            .then(resolve)
            .catch(resolve);
         });
      },
      ImportViaVideo(){
         return new Promise(resolve => {
            let files = electron.remote.dialog.showOpenDialog(electron.remote.getCurrentWindow(), {
               title: "Select a video file",
               properties: ['openFile']
            });
            
            if(!files[0]){
               alert("No file selected!");
               return resolve();
            }

            this.spawnProcess(`python 1.b.py 2 ${files[0]}`)
            .then(resolve)
            .catch(()=>{
               alert("An error occured");
               resolve();
            });

         });
      },
      Train(){
         return this.spawnProcess('python 2.py')
      },
      Detect(from){
         let cmd = "python ";
         if(from=="camera") {
            cmd += "3.c.py ";
         }

         return this.spawnProcess(cmd)

      }
   }
}
</script>


<style scoped>

#home{
   background-image: url(/public/background.svg);
}

.section {
   padding: 5px 10px;
   border-left: 5px solid blueviolet;
   background-color: rgb(241, 241, 241);
   margin: 20px 20px;
}

.section-title{
   font-size: 20px;
}

.section-description{
   margin: 10px 0;
   font-size: 13px;
   color: rgb(95, 95, 95);
}

</style>

