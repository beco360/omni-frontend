<template>
  <div class="home" style="height: 94vh;">
    <ChatList style="width: 20vw;" :chatList="chatList" />
    <Chat style="width: 74vw;" />
  </div>
</template>

<script>
// @ is an alias to /src
import Chat from "@/components/chat/Chat.vue";
import ChatList from "@/components/chat/ChatList.vue";

export default {
  name: "Home",
  components: {
    Chat,
    ChatList
  },
  data: function() {
    return {
      chatList: [
        {
          id: 1,
          picture:
            "https://www.pngkey.com/png/full/787-7874978_doug-headshot-circular-douglas-carnine.png",
          user: {
            name: "Santiago Espitia"
          },
          lastMessage: {
            message: "Hola, ¿Como estas?",
            hour: "4:53 pm"
          }
        },
        {
          id: 2,
          picture:
            "https://www.pngkey.com/png/full/787-7874978_doug-headshot-circular-douglas-carnine.png",
          user: {
            name: "Santiago Espitia Patiño"
          },
          lastMessage: {
            message: "Hola, ¿Como estas?",
            hour: "4:53 pm"
          }
        }
      ]
    };
  }
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
}
</style>
