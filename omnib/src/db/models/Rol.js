/** Dependencies */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/** Relations */
const Permission = require("./Permission");

const rolSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    permissions: [
      {
        type: Schema.Types.ObjectId,
        ref: Permission.modelName
      }
    ]
  },
  { timestamps: true }
);

const Rol = mongoose.model("Rol", rolSchema);
module.exports = Rol;
