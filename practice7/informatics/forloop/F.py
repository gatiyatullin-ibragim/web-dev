
def reverse_num(n):
    reversedNum = 0

    sign = -1 if n<0 else 1

    num = abs(n)

    while num > 0:
        digit = num % 10
        reversedNum = reversedNum * 10 + digit
        num//=10

    return sign*reversedNum

number = 123
print(reverse_num(number))