str1 = "Y(3(p)p(3)r)s"

str2 = "N(0(p)3"

str3 = "N(0)t ) 0(k"

str4 = "a(b))(c"

str5 = "(y)l(jjkjk)jjkfjd)"

str6 = "(y)l(jjkjk)jj()"

def parensValid(str):
    split_str = str.split()
    return split_str , str


print(parensValid(str1))
print(parensValid(str2))
print(parensValid(str3))
print(parensValid(str4))
print(parensValid(str5))
print(parensValid(str6))