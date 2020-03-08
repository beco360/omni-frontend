<template>
  <li class="message-left" hidden style="display: list-item;">
    <div class="sp">
      <span class="spinme-left">
        <div class="spinner">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
      </span>
    </div>
  </li>
</template>

<script>
export default {};
</script>

<style>
.message-left {
  text-align: left;
  margin-bottom: 16px;
}

.spinme-left {
  display: inline-block;
  padding: 15px 20px;
  font-size: 14px;
  color: var(--text-dark-grey);
  border-radius: 30px;
  line-height: 1.25em;
  font-weight: 100;
  opacity: 0.2;
}

.spinner {
  margin: 0;
  width: 30px;
  text-align: center;
}

.spinner > div {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: typing 1.4s infinite ease-in-out both;
  animation: typing 1.4s infinite ease-in-out both;
  background: rgba(0, 0, 0, 1);
}

.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes typing {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}

@keyframes typing {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>