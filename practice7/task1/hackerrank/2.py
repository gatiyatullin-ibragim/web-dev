
n = int(input())
m = int(input())

happiness = 0
arr = []
arr2 = set() 
arr3 = set()

for i in range(n):
    el = int(input())
    arr.append(el)

for i in range(m):
    a = int(input())
    arr2.add(a)

for i in range(m):
    b = int(input())
    arr3.add(b)

for item in arr:
    if item in arr2:
        happiness += 1
    elif item in arr3:
        happiness -= 1

print(happiness)
