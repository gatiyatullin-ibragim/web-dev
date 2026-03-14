a = int(input())

arr = [int(input()) for _ in range(a)]

cnt = 0

for i in range(1,a-1):
    if arr[i] > arr[i-1] and arr[i] > arr[i+1]:
        cnt+=1
print(cnt) 