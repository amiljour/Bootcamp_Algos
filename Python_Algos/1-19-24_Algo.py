str = "Hello World";

rotateAmnt1 = 0;
expected1 = "Hello World";

rotateAmnt2 = 1;
expected2 = "dHello Worl";

rotateAmnt3 = 2;
expected3 = "ldHello Wor";

rotateAmnt4 = 4;
expected4 = "orldHello W";

rotateAmnt5 = 13;
expected5 = "ldHello Wor";

def rotateStr(str, amnt):
    if len(str) == 0 or amnt == 0 or amnt % len(str) == 0:
        return str
    amnt = amnt % len(str)
    return str[-amnt:] + str[: -amnt]

print(rotateStr(str, 13))
print(rotateStr(str, 10))
print(rotateStr(str, 8))
print(rotateStr(str, 2))