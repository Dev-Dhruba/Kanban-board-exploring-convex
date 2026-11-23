import { query } from "./_generated/server";

export const getAllBoards = query({
  args: {},
  handler: async (ctx) => {
    const boards = await ctx.db.query("board").order("desc").collect();
    return boards;
  },
});
