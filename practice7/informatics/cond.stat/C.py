a = int(input())
b = int(input())

if(reversed(a) == a and b == 1):
    print("YES")
elif(reversed(a) != a and b == 1 or reversed(a) == a and b != 1):
    print("NO")