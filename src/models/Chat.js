const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");

const chatSchema = new Schema(
  {
    channel: {
      type: String,
      required: true,
      enum: ["Whatsapp", "Facebook Messenger", "Webchat"]
    },
    subscribers: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: User.modelName,
          required: true
        },
        subscription_date: {
          type: Date,
          required: true
        }
      }
    ]
  },
  { timestamps: true }
);

/** Middleware */
chatSchema.pre("save", function(next) {
  if (!this.subscription_date) {
    this.subscription_date = new Date();
  }
  next();
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
