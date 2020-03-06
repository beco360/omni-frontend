<template>
  <div class="chat-item">
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
    picture: String,
    user: Object,
    lastMessage: Object
  }
};
</script>

<style scoped>
@import url('../../assets/base.css');
.chat-item {
  background-color: #fff;
  height: 60px;
  display: flex;
  text-align: left;
  font-size: 14px;
  cursor: pointer;
  padding: 20px;
}
.chat-item:hover {
  background-color: #f5f7fa;
}
.last-message {
  display: flex;
}
.profile-name {
  font-weight: bolder;
}
.last-message {
  color: var(--secondary-color);
}
p {
  margin: 5px;
}
</style>