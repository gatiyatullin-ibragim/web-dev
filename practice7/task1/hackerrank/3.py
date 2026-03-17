a= int(input())
setik1 = set(int(input()) for i in range(a))
b = int(input())
setik2 = set(int(input()) for i in range(b))

print(len(setik1.union(setik2)))
