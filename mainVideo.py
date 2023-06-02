import cv2
import pickle
import cvzone
import numpy as np

# Video feed
cap = cv2.VideoCapture('carPark.mp4')


def load_parking_spaces(filename):
    try:
        with open(filename, 'rb') as file:
            spaces = pickle.load(file)
            return spaces
    except FileNotFoundError:
        return []


parking_spaces = load_parking_spaces('NewCarParkPosition')


def checkParkingSpace(imageProcess):

    imgCopy = img.copy()
    spaceCounter = 0

    for space in parking_spaces:
        (x1, y1), (x2, y2) = space
        imgCrop = imageProcess[y1: y2, x1: x2]
        cv2.imshow(str(x1), imgCrop)
        count = cv2.countNonZero(imgCrop)
        cvzone.putTextRect(img, str(count), (x1, y2), scale=1, thickness=2, offset=0)

        if count < 1000:
            color = (0, 255, 0)
            thickness = 5
            spaceCounter += 1
        else:
            color = (0, 0, 255)
            thickness = 2
        cv2.rectangle(img, (x1, y1), (x2, y2), color, thickness)

    cvzone.putTextRect(img, f'Free: {spaceCounter} / {len(parking_spaces)}', (100, 50), scale=3, thickness=5, offset=20, colorR=(0, 200, 0))


while True:
    if cap.get(cv2.CAP_PROP_POS_FRAMES) == cap.get(cv2.CAP_PROP_FRAME_COUNT):
        cap.set(cv2.CAP_PROP_POS_FRAMES, 0)

    success, img = cap.read()
    imgGray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    imgBlur = cv2.GaussianBlur(imgGray, (3, 3), 1)
    imgThreshold = cv2.adaptiveThreshold(imgBlur, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
                                         cv2.THRESH_BINARY_INV, 25, 16)
    imgMedian = cv2.medianBlur(imgThreshold, 5)
    kernel = np.ones((3, 3), np.int8)
    imgDilate = cv2.dilate(imgMedian, kernel, iterations=1)
    checkParkingSpace(imgDilate)

    cv2.imshow("Image", img)
    # cv2.imshow("imgDilate", imgDilate)

    key = cv2.waitKey(10)

    if key == 27:
        cv2.destroyAllWindows()
        break
