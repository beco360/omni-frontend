<template>
  <li class="message-right" hidden style="display: list-item;">
    <div class="messageinner" hidden style="display: block;">
      <span class="message-text">Who are you?</span>
      <span class="message-time">19:58</span>
    </div>
  </li>
</template>

<script>
export default {};
</script>

<style scoped>
.message-right .message-time {
  display: block;
  font-size: 12px;
  text-align: right;
  padding-right: 20px;
  padding-top: 4px;
  color: #ccc;
  font-family: Courier;
}

.message-right {
  text-align: right;
  margin-bottom: 16px;
}

.message-right .message-text {
  line-height: 1.5em;
  display: inline-block;
  background: #007bff;
  padding: 15px;
  font-size: 14px;
  color: #fff;
  border-radius: 30px;
  line-height: 1.5em;
  font-weight: 100;
  text-align: left;
}

.messageinner {
  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 2s; /* Firefox < 16 */
  -ms-animation: fadein 2s; /* Internet Explorer */
  -o-animation: fadein 2s; /* Opera < 12.1 */
  animation: fadein 2s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Internet Explorer */
@-ms-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>