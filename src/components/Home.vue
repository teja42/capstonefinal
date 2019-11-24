<template>
   <div id="home">

      <div id="details-modal" v-show="showModal">
         <div id="modal-contents">
            <h3> Details of the person</h3>

            <input type="text" placeholder="Full Name" v-model="person.name" />
            <input type="date" placeholder="Date of Birth" v-model="person.dob" />
            <input type="text" placeholder="Height" v-model="person.height" />
            <textarea type="text" placeholder="Other identifying information" v-model="person.others" />

            <button @click="ProceedWithDetails" class="btn">Proceed</button>
            <button @click="CloseModal" class="btn">Cancel</button>
         </div>
      </div>

      <div class="section">
         <div class="section-title">1. Get input faces</div>
         <div class="section-description">
            To train the machine learning algorithm to recognize faces, you need to first import 
            the images of person's face. This can be done by getting images from your camera or 
            importing a video with the person's face clearly visible in it.
         </div>
         <div class="section-action">
            <button v-promise-btn @click="GetFaces('camera')" class="btn">Use camera</button>
            <button v-promise-btn @click="GetFaces('video')" class="btn">Use video</button>
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
      data(){
      return {
         person: {
            name: "",
            dob: "",
            height: "",
            others: ""
         },
         showModal: false,
         from: "camera"
      }
   },
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
      GetFaces(from){
         this.showModal = true;
         this.from = from;
      },
      ProceedWithDetails(){
         let {person, from} = this;
         if(!person.name || !person.dob || !person.height) {
            return alert("Required fields are invalid");
         }
         let id = Date.now();
         fs.appendFile(
            `${BASE_DIR}/python/details.csv`,
            `\n${id},${person.name},${person.dob},${person.height},${person.others}`,
            (err) => {
               if(err) {
                  alert("An error occured while trying to write details to disk");
               }
               this.CloseModal();
               if(from=="camera"){
                  this.ImportViaCamera(id);
               } else {
                  this.ImportViaVideo(id);
               }
            }
         )
      },
      CloseModal(){
         this.showModal = false;
      },
      ImportViaCamera(id){
         return new Promise((resolve) => {
            let cmd = `python 1.c.py ${id}`;
            this.spawnProcess(cmd)
            .then(resolve)
            .catch(resolve);
         });
      },
      ImportViaVideo(id){
         return new Promise(resolve => {
            let file = this.promptForFile("Select a video file");
            if(!file){
               alert("No file selected!");
               return resolve();
            }

            this.spawnProcess(`python 1.b.py ${id} ${file}`)
            .then(resolve)
            .catch(()=>{
               alert("An error occured");
               resolve();
            });

         });
      },
      promptForFile(title){
         let files = electron.remote.dialog.showOpenDialog(
            electron.remote.getCurrentWindow(), {
               title: title,
               properties: ['openFile']
         });
         if(typeof files == 'undefined') return "";
         if(!files[0]) return "";

         return files[0];

      },
      Train(){
         return this.spawnProcess('python 2.py')
      },
      Detect(from){
         let cmd = "python ";
         if(from=="camera") {
            cmd += "3.c.py ";
         } else if (from == "image"){
            let file = this.promptForFile("Select an image");
            if(!file){
               alert("No file selected!");
               return new Promise.resolve();
            }
            cmd += `3.a.py ${file}`;
         } else {
            let file = this.promptForFile("Select a video");
            if(!file){
               alert("No file selected!");
               return new Promise.resolve();
            }
            cmd += `3.b.py ${file}`;
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
   background-color: rgb(244, 246, 255);
   border-radius: 2px;
   margin: 30px 20px;
}

#details-modal{
   display: flex;
   width: 100%;
   height: 100%;
   position: fixed;
   justify-content: center;
   align-items: center;
   top: 0;
   left: 0;
   background-color: rgba(0,0,0,0.2);
}

#modal-contents{
   background-color: white;
   padding: 5px 20px;
   border-radius: 10px;
}

.section-title{
   font-size: 20px;
}

.section-description{
   margin: 10px 0;
   font-size: 13px;
   color: rgb(95, 95, 95);
}

.section-input>h3 {
   font-size: 15px;
}

input, textarea {
   display: block;
   outline: none;
   padding: 5px;
   font-size: 14px;
   border: 0;
   border-bottom: 2px solid black;
   min-width: 300px;
   margin: 10px 0;
   transition: border-bottom 0.2s;
}

input:focus, textarea:focus{
   border-bottom: 2px solid blueviolet;
}

small{
   color: grey;
   font-size: 12px;
}

</style>