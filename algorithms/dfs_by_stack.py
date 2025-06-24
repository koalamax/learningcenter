def count_connected_components_stack(n, edges):
    graph = [[] for _ in range(n+1)]
    for u, v in edges:
        graph[u].append(v)
        graph[v].append(u)

    visited = [False] * (n+1)
    count = 0

    for i in range(1, n+1):
        if not visited[i]:
            stack = [i]
            visited[i] = True
            while stack:
                node = stack.pop()
                for neighbor in graph[node]:
                    if not visited[neighbor]:
                        visited[neighbor] = True
                        stack.append(neighbor)
            count += 1

    return count

# 입력 처리 및 실행
N, M = map(int, input().split())
edges = [tuple(map(int, input().split())) for _ in range(M)]
print(count_connected_components_stack(N, edges))
