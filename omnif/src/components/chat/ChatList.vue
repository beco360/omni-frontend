<template>
  <ul id="chat-list">
    <li style="padding-bottom: 15px; padding-top: 15px;">
      <Search style="display: flex; justify-content: center;" />
    </li>
    <li v-for="chat in chatList" :key="chat.idConversation">
      <ChatListItem
        :id="chat.id"
        :picture="chat.picture"
        :user="chat.user"
        :lastMessage="chat.lastMessage"
      />
    </li>
  </ul>
</template>

<script>
import ChatListItem from "@/components/chat/ChatListItem.vue";
import Search from "@/components/utils/Search.vue";
export default {
  components: {
    ChatListItem,
    Search
  },
  props: {
    chatList: Array
  }
};
</script>

<style scoped>
#chat-list {
  list-style: none;
  margin: 0;
  padding: 0;
  border-right: 1px solid var(--primary-color-inactive);
}
</style>