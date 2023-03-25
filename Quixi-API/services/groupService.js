const groupSchema = require("../schema/group")
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userSchema = require("../schema/user");


exports.createGroup = async (groupData, token) => {
    groupData._id = new mongoose.mongo.ObjectId();
    groupData.members = JSON.parse(groupData.members);
    console.log(groupData.members)
    groupData.createdBy = jwt.decode(token, {complete: true}).payload.userId;
    const group = new groupSchema(groupData);
    await group.save();
    return group;
}

exports.findByGroupId = async (groupId) => {
    const group = await groupSchema.findById(groupId);
    return group;
}

exports.fetchAllGroups = async () => {
    const groups = await groupSchema.find();
    return groups;
}

exports.updateGroupById = async (id, groupData) => {
    const updatedGroup = await groupSchema.findByIdAndUpdate(id, groupData, {
        new: true,
        runValidators: true
    })
    return updatedGroup;
}

exports.deleteGroupById = async (groupId) => {
    const deletedGroup = await groupSchema.findByIdAndDelete(groupId);
    return deletedGroup;
};