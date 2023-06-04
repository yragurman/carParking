import cv2
import pickle


def saveParkingSpaces(spaces, filename):
    with open(filename, 'wb') as file:
        pickle.dump(spaces, file)


def loadParkingSpace(filename):
    try:
        with open(filename, 'rb') as file:
            spaces = pickle.load(file)
            return spaces
    except FileNotFoundError:
        return []


def mouseClick(events, x, y, flags, params):
    global current_space, drawing

    if events == cv2.EVENT_LBUTTONDOWN:
        drawing = True
        current_space = [(x, y), (x, y)]

    elif events == cv2.EVENT_LBUTTONUP:
        if drawing:
            drawing = False
            current_space = (current_space[0], (x, y))
            parking_spaces.append(current_space)
            current_space = None
            saveParkingSpaces(parking_spaces, 'CarParkPosition')

    elif events == cv2.EVENT_MOUSEMOVE:
        if drawing:
            current_space = (current_space[0], (x, y))

    elif events == cv2.EVENT_RBUTTONDOWN:
        for space in parking_spaces:
            (x1, y1), (x2, y2) = space
            if x1 <= x <= x2 and y1 <= y <= y2:
                parking_spaces.remove(space)
                saveParkingSpaces(parking_spaces, 'CarParkPosition')
                break


img = cv2.imread('carParkImg.png')


current_space = None
drawing = False
parking_spaces = loadParkingSpace('CarParkPosition')


while True:
    img_copy = img.copy()

    for space in parking_spaces:
        if len(space) == 2:
            (x1, y1), (x2, y2) = space
            cv2.rectangle(img_copy, (x1, y1), (x2, y2), (0, 255, 0), 2)

    if drawing and current_space:
        (x1, y1), (x2, y2) = current_space
        cv2.rectangle(img_copy, (x1, y1), (x2, y2), (0, 0, 255), 2)

    cv2.imshow('Image', img_copy)
    cv2.setMouseCallback('Image', mouseClick)
    key = cv2.waitKey(1)

    if key == 27:
        saveParkingSpaces(parking_spaces, 'CarParkPosition')
        cv2.destroyAllWindows()
        break
