a = int(input())

arr = [int(input()) for _ in range(a)]

print(*[x for x in arr if x%2==0])