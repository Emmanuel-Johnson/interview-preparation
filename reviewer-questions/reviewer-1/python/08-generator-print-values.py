def fibonacci():
    a, b = 0, 1
    while True:
        a, b = b, a + b
        yield a
        
f = fibonacci()

print(next(f))
print(next(f))
print(next(f))
print(next(f))
print(next(f))
print(next(f))
print(next(f))