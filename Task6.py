import RPi.GPIO as GPIO
import mysql.connector
import cv2
import numpy as np

# TODO: setup GPIO interface.

config = {
        # TODO: setup mysql connection configurations.
        }

def ledswitch():
        
        # TODO: query from database.

        # commit request.
        cnx.commit()
        
        # TODO: Interact with GPIO interface.

def buttonpush():
        # TODO: Interact with GPIO interface.

        # execute and write values into database.

def colordef(img):
        
        # TODO: Determine color of object.

        # execute and write values into database.


# cnx: connection object.
cnx = mysql.connector.connect(**config)
# cursor: navigate around database.
cursor = cnx.cursor()                   

# TODO: Capture camera image.
# Or use an example image first.
img = cv2.imread('./src/redball.png')

while 1:
        ledswitch()
        buttonpush()
        colordef(img)

cursor.close()
cnx.close()
