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
            <button @click="ImportViaCamera" class="btn">Use camera</button>
            <button @click="ImportViaVideo" class="btn">Use video</button>
         </div>
      </div>

      <div class="section">
         <div class="section-title">2. Train</div>
         <div class="section-description">
            Start training the machine learning alogrithm to detect imported faces.
         </div>
         <div class="section-action">
            <button @click="Train" class="btn">Start Training</button>
         </div>
      </div>

      <div class="section">
         <div class="section-title">3. Detect faces</div>
         <div class="section-description">
            Once the training has been completed you can start to detect faces. 
            You can detect faces from a video, image or directly from the camera feed.
         </div>
         <div class="section-action">
            <button @click="Detect('video')" class="btn">From video</button>
            <button @click="Detect('image')" class="btn">From Image</button>
            <button @click="Detect('camera')" class="btn">From Camera</button>
         </div>
      </div>

   </div>
</template>

<script>
export default {
   name: "Home",
   methods: {
      ImportViaCamera(){

      },
      ImportViaVideo(){

      },
      Train(){

      },
      Detect(from){

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

