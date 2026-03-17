def power(num, a):
    res = 0
    for i in range(a):
        res = num*num

    return res

a = int(input())
n = int(input())
print(power(a,n))
