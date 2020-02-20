const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Permission = require("../models").Permission;

const rolSchema = new Schema(
  {
    rol: {
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
