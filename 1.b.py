import cv2
import os

face_detector = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

if not sys.argv[1]:
    exit(1)

face_id = sys.argv[1]

a=input('Enter the path : ')
cam = cv2.VideoCapture(a)

if (cam.isOpened()== False): 
  print("Error opening video stream or file")

print("\n [INFO] Initializing face capture. Look the camera and wait ...")
count = 0

while(cam.isOpened()) :
    ret, img = cam.read()
    if ret == True:
        gray = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)

        faces = face_detector.detectMultiScale(gray, 1.3, 5)

        for(x,y,w,h) in faces:

            cv2.rectangle(img, (x,y), (x+w,y+h), (255,0,0), 2)     
            count += 1

            cv2.imwrite("dataset/User." + str(face_id) + '.' + str(count) + ".jpg", gray[y:y+h,x:x+w])

            cv2.imshow('image', img)

        k = cv2.waitKey(10) & 0xff 
        if k == 27:
            break
    else:
        print("\n [INFO] Exiting Program and cleanup stuff")
        cam.release()
        cv2.destroyAllWindows() 