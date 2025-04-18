import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userInstance } from "@/app/_api/axios";

export const useToggleFollow = () => {
  const queryClient = useQueryClient();

  const follow = useMutation({
    mutationFn: (userIdx: string) => userInstance.post(`/${userIdx}/follow`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["followerList"] });
      queryClient.invalidateQueries({ queryKey: ["followingList"] });
      queryClient.invalidateQueries({ queryKey: ["myinfo"] });
    },
  });

  const unfollow = useMutation({
    mutationFn: (userIdx: string) => userInstance.delete(`/${userIdx}/follow`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["followerList"] });
      queryClient.invalidateQueries({ queryKey: ["followingList"] });
      queryClient.invalidateQueries({ queryKey: ["myinfo"] });
    },
  });

  return { follow, unfollow };
};
