import cv2
import pickle

width, height = 107, 48

try:
    with open('CarParkPosition', 'rb') as dataPosition:
        posList = pickle.load(dataPosition)
except:
    posList = []


def mouseClick(events, x, y, flags, params):
    if events == cv2.EVENT_LBUTTONDOWN:
        posList.append((x, y))
    if events == cv2.EVENT_RBUTTONDOWN:
        for i, position in enumerate(posList):
            x1, y1 = position
            if x1 < x < x1 + width and y1 < y < y1 + height:
                posList.pop(i)

    with open('CarParkPosition', 'wb') as dataPosition:
        pickle.dump(posList, dataPosition)


while True:
    img = cv2.imread('carParkImg.png')
    for pos in posList:
        cv2.rectangle(img, pos, (pos[0] + width, pos[1] + height), (240, 0, 0), 2)
    cv2.imshow('Image', img)
    cv2.setMouseCallback('Image', mouseClick)
    key = cv2.waitKey(1)

    if key == 27:
        cv2.destroyAllWindows()
        break




