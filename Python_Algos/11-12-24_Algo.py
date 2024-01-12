keys1 = ['abc', 3, 'yo!']
values1 = ['def', 5, 'whats up!']

def zip_arrays_into_map(keys, values):
    dict = {}
    index = 0
    while index < len(keys):
        key = keys[index]
        value = values[index]
        dict[key] = value
        index += 1
    return dict


print(zip_arrays_into_map(keys1, values1))