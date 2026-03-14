import math

a = int(input())
b = int(input())

start = math.ceil(math.sqrt(max(0, a)))
i = start
while True:
    square = i * i
    if square > b:
        break
    if square >= a:
        print(square, end=' ')
    i += 1
