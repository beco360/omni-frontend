<template>
  <div class="chat-item" @click="setActiveChat()" :class="{active: $store.state.activeChat === id}">
    <div class="profile-picture">
      <img :src="picture" height="60" width="60" />
    </div>
    <div>
      <div class="profile-name">
        <p>{{user.name}}</p>
      </div>
      <div class="last-message">
        <div class="message">
          <p>{{lastMessage.message}} -</p>
        </div>
        <div class="hour">
          <p>{{lastMessage.hour}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    picture: String,
    user: Object,
    lastMessage: Object
  },
  methods: {
    setActiveChat() {
      this.$store.commit('setActiveChat', this.id)
    }
  }
};
</script>

<style scoped>
@import url("../../assets/base.css");
.chat-item {
  background-color: white;
  height: 60px;
  display: flex;
  text-align: left;
  font-size: 14px;
  cursor: pointer;
  padding: 20px;
}
.active {
  background-color: var(--primary-color-active);
  color: white;
}
.last-message {
  display: flex;
}
.profile-name {
  font-weight: bolder;
}
p {
  margin: 5px;
}
</style>