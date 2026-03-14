a = int(input())

k = 0
cur_pow = 1
while cur_pow < a:
    cur_pow *= 2
    k += 1    

print(k)