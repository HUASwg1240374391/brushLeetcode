var deleteDuplicates = function(head) {
  if (!head || !head.next) {
    return head
  }
  let tem = head
  while (tem && tem.next) {
    if (tem.val === tem.next.val) {
      tem.next = tem.next.next
    } else {
      tem = tem.next
    }
  }
  return head
}
