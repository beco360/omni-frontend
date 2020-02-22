<template>
  <div id="wrapper">
    <div class="chat" id="chat">
      <div class="chat-listcontainer">
        <ul class="chat-message-list">
          <MessageRight />
          <SpinnerRight />
          <MessageLeft />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MessageRight from "@/components/chat/MessageRight.vue";
import MessageLeft from "@/components/chat/MessageLeft.vue";
import SpinnerRight from "@/components/chat/SpinnerRight.vue";
export default {
  components: {
    MessageRight,
    MessageLeft,
    SpinnerRight
  },
  data: function() {
    return {
      chatMessages: [
        {
          name: "ms1",
          msg: "Who are you?",
          delay: 1000,
          align: "right",
          showTime: true,
          time: "19:58"
        },
        {
          name: "ms2",
          msg:
            "We are young team of entrepreneurs, developers, designers and visionaries. We are based in Berlin and started working on Freedactics in early 2015.",
          delay: 6000,
          align: "left",
          showTime: true,
          time: "19:58"
        },
        {
          name: "ms3",
          msg: "Could you describe Freedactics in one sentence?",
          delay: 3000,
          align: "right",
          showTime: true,
          time: "19:58"
        },
        {
          name: "ms4",
          msg:
            "Everything from lecture to exam in your pocket: Freedactics is a cloud-based platform build for students needs.",
          delay: 7000,
          align: "left",
          showTime: true,
          time: "19:58"
        },
        {
          name: "ms5",
          msg: "And the longer version?",
          delay: 3000,
          align: "right",
          showTime: true,
          time: "19:58"
        },
        {
          name: "ms6",
          msg:
            "As students we use to organize all our daily life around web and mobile technology, except the actual studying part. For learning we still use huge amounts of paper, books and heavy backpacks.",
          delay: 11000,
          align: "left",
          showTime: false,
          time: "19:58"
        },
        {
          name: "ms7",
          msg:
            "Why? Because there is no solution out there to help students or teachers to easily digitalize their learning processes and contents. We think that learning should be fast, simple and effective. A platform for studying should give people the option to learn at their own scope, with their own contents integrated.",
          delay: 10000,
          align: "left",
          showTime: false,
          time: "19:58"
        },
        {
          name: "ms8",
          msg:
            "This is why we developed Freedactics – a cloud-based solution tailored to students needs.",
          delay: 8000,
          align: "left",
          showTime: true,
          time: "19:58"
        },
        {
          name: "ms9",
          msg: "What makes you different from other learning platforms?",
          delay: 4000,
          align: "right",
          showTime: true,
          time: "19:58"
        },
        {
          name: "ms10",
          msg:
            "We understand the needs of individual student. We don’t focus so much on content publishing or learning management but on learning. At the same time we acknowledge the need to integrate different perspectives, such as flash cards, content and task management.",
          delay: 8000,
          align: "left",
          showTime: false,
          time: "19:58"
        },
        {
          name: "ms11",
          msg:
            "So we end up with a unique mix of focus on User Experience and thrive towards integration.",
          delay: 4000,
          align: "left",
          showTime: true,
          time: "19:58"
        },
        {
          name: "ms12",
          msg: "What is your vision for the future?",
          delay: 4000,
          align: "right",
          showTime: true,
          time: "19:58"
        },
        {
          name: "ms14",
          msg:
            "We are releasing an App right now. But that’s only breaking ground. In fact, we have something much bigger in mind: a universe of education! Our vision is to connect people, connect tools and power learning through intelligent systems.",
          delay: 9000,
          align: "left",
          showTime: true,
          time: "19:58"
        },
        {
          name: "ms15",
          msg: "Thanks! Something you want to add?",
          delay: 3000,
          align: "left",
          showTime: true,
          time: "19:58"
        },
        {
          name: "ms16",
          msg: "You are welcome! Yes, check out freedactics.com!",
          delay: 9000,
          align: "left",
          showTime: true,
          time: "19:58"
        }
      ]
    };
  },
  methods: {
    goToEnd() {
      let chat = this.$el.querySelector("#chat");
      chat.scrollTop = chat.scrollHeight;
    }
  },
  mounted() {
    this.goToEnd();
  }
};
</script>

<style scoped>
#wrapper {
  width: auto;
  height: 100%;
  padding: 20px 7px;
  background: #fff;
  display: flex;
  align-content: center;
  justify-content: center;
}

.chat {
  width: 100%;
  height: 95%;
  border-radius: 0 8px 8px 0;
  padding: 10px;
  background: inherit;
  overflow-y: scroll;
}

.chat ul {
  margin: 0px;
  padding: 0px;
  list-style: none;
}

/* Scroll */

.chat::-webkit-scrollbar {
  -webkit-appearance: none;
}

.chat::-webkit-scrollbar:vertical {
  width: 10px;
}

.chat::-webkit-scrollbar-button:increment,
.chat::-webkit-scrollbar-button {
  display: none;
}

.chat::-webkit-scrollbar:horizontal {
  height: 10px;
}

.chat::-webkit-scrollbar-thumb {
  background-color: rgb(121, 121, 121, 0.5);
  border-radius: 20px;
}

.chat::-webkit-scrollbar-track {
  border-radius: 10px;
}
</style>