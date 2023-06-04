import pickle

# Открываем файл с данными Pickle в режиме чтения бинарного файла
with open('NewCarParkPosition', 'rb') as f:
    # Загружаем данные из файла в переменную
    data = pickle.load(f)

# Выводим содержимое переменной
print(data)