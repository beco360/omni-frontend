const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const permissionSchema = new Schema(
  {
    permission: {
      type: String,
      required: true,
      unique: true
    }
  },
  { timestamps: true }
);

const Permission = mongoose.model("Permission", permissionSchema);

module.exports = Permission;
