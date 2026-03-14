a = int(input())

arr = [int(input()) for _ in range(a)]

cnt = 0

for i in range(a-1):
    if arr[i-1] > 0 & arr[i+1] > 0 or arr[i-1] < 0 & arr[i+1] < 0:
        cnt+=1
    else:
        cnt-=1


if cnt>0:
    print("YES")
else:
    print("NO")
