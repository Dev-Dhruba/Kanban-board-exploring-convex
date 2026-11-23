import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar.tsx";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export function AppSidebar() {
  const boards = useQuery(api.board.getAllBoards);
  console.log(boards);

  return (
    <Sidebar>
      <SidebarHeader className="pl-5">Orange Kanban board</SidebarHeader>
      <SidebarMenu className="pl-10">
        {boards === undefined ? (
          <div>Boards are loading ....</div>
        ) : (
          <div>
            {boards.map((board) => (
              <SidebarMenuItem key={board._id} className="cursor-pointer">
                {board.name}
              </SidebarMenuItem>
            ))}
          </div>
        )}
      </SidebarMenu>
      <SidebarFooter />
    </Sidebar>
  );
}
