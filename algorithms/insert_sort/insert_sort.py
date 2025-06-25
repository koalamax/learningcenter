def insertion_sort(arr):
    """
    삽입 정렬을 사용하여 배열을 오름차순으로 정렬합니다.

    Args:
        arr: 정렬할 배열.

    Returns:
        정렬된 배열.
    """
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr


def calculate_min_time(times):
    """
    삽입 정렬을 사용하여 시간을 정렬하고 최소 인출 시간을 계산합니다.

    Args:
        times: 각 사람이 돈을 인출하는 데 걸리는 시간 목록.

    Returns:
        최소 인출 시간의 합.
    """
    sorted_times = insertion_sort(times)
    total_time = 0
    cumulative_time = 0
    for time in sorted_times:
        cumulative_time += time
        total_time += cumulative_time
    return total_time

if __name__ == "__main__":
    n = int(input())
    times = list(map(int, input().split()))

    min_time = calculate_min_time(times)
    print(min_time)
