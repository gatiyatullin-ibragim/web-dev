cube = lambda x: pow(x,3)

def fibonacci(n):
    a = 0 
    b = 1
    arr=[a,b]
    for i in range(2, n):
        next = a + b
        a = b
        b = next
        arr.append(next)
    return arr[:n]

if __name__ == '__main__':
    n = int(input())
    print(list(map(cube, fibonacci(n))))