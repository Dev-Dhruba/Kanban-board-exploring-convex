import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  board: defineTable({
    name: v.string(),
  }),

  task: defineTable({
    boardId: v.id("board"),
    title: v.string(),
    status: v.union(v.literal("todo"), v.literal('doing'), v.literal('done')),
    order: v.number()
  })
});