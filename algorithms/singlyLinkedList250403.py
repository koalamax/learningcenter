class SList:
    class Node:
        def __init__(self, item, link):
            self.item = item
            self.next = link

    def __init__(self):
        print("난 SList의 생성자")
        self.head = None
        self.size = 0
    
    def isEmpty(self):
        return self.size == 0

    def insert_front(self, item):
        if self.isEmpty():
            self.head = self.Node(item , None)
        else:
            self.head= self.Node(item, self.head)
        self.size += 1

    def insert_after(self, item):
        """리스트의 맨 뒤에 새 노드(item)를 삽입"""
        if self.isEmpty():
            self.head = self.Node(item, None)
        else:
            p = self.head
            while p.next:
                p = p.next
            p.next = self.Node(item, None)
        self.size += 1
    
    def search(self, item):
        """특정 아이템의 인덱스를 반환 (없으면 -1)"""
        p = self.head
        index = 0
        while p:
            if p.item == item:
                return index
            p = p.next
            index += 1
        return -1
    
    def delete_front(self):
        """첫 번째 노드를 삭제"""
        if not self.isEmpty():
            self.head = self.head.next
            self.size -= 1
        else:
            print("삭제 실패: 리스트가 비어 있음")
    
    def delete_after(self):
        """리스트의 마지막 노드를 삭제"""
        if self.isEmpty():
            print("삭제 실패: 리스트가 비어 있음")
            return
        
        if self.head.next is None:  # 노드가 하나만 있는 경우
            self.head = None
        else:
            p = self.head
            while p.next.next:
                p = p.next
            p.next = None
        
        self.size -= 1
    
    def printList(self):
        p = self.head
        while p:
            if p.next:
                print(p.item, "=>", end=" ")
            else:
                print(p.item)
            p = p.next

if __name__ == "__main__":
	print("--- create SList s ---")
	s = SList()
	
	print("--- insert_front: apple ---")
	s.insert_front("apple")
	print("--- insert_front: orange ---")
	s.insert_front("orange")
	print("--- insert_front: banana ---")
	s.insert_front("banana")
	s.printList()
    
	print("--- insert_after: grape ---")
	s.insert_after("grape")
	s.printList()
    
	print("Search apple index = ", s.search("apple"))
	print("Search orange index = ", s.search("orange"))
	print("Search banana index = ", s.search("banana"))
	print("Search grape index = ", s.search("grape"))
	print("Search mango index = ", s.search("mango"))
		
	print("--- delete_front---");
	s.delete_front()
	s.printList()
		
	print("--- delete_after---");
	s.delete_after()
	s.printList()
