import { v } from "convex/values";
import { query } from "./_generated/server";

export const getAllBoards = query({
  args: {},
  handler: async (ctx) => {
    const boards = await ctx.db.query("board").order("desc").collect();
    return boards;
  },
});

export const getBoard = query({
  args: {boardId: v.id("board")},
  handler: async(ctx, args) => {
    const board = await ctx.db.get("board", args.boardId);
    return board
  }
})
