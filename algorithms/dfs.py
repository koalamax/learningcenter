import sys
input = sys.stdin.readline
sys.setrecursionlimit(1000000) #재귀 최대깊이, dfs 사용 시 오류 방지

n, m = map(int, input().split())
graph = [[i] for i in range(n+1)]

for i in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

visited = [False]*(n+1)  # 방문 여부 
cnt = 0  # 연결 요소의 수

# dfs(탐색할 그래프, 시작 노드, 방문여부 리스트)
def dfs(graph, v, visited):
    visited[v] = True  # 시작 노드 방문
    for i in graph[v]:
        if not visited[i]:  # 방문하지 않은 노드라면
            dfs(graph, i, visited)  # 해당 노드를 시작 노드로 dfs


for i in range(1, n+1):
    if not visited[i]:  # 방문하지 않은 노드라면
        cnt += 1  #cnt에 1을 더함 연결요소.
        dfs(graph, i, visited)  # dfs탐색
print(cnt)
