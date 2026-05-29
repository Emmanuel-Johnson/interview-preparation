import time

def execution_time(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"Execution time is {end - start}")
        return result
    return wrapper

@execution_time
def total(a, b):
    time.sleep(2)
    return a + b

print(total(5, 10))