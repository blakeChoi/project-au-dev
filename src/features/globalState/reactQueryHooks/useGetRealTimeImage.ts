import { useQuery } from "@tanstack/react-query";

const realTimeImageFetcher = async () => {
  const res = await fetch("http://croft-ai.iptime.org:50500/images/test1.png");
  // const res = await fetch(`${API_URL}/images/test1.png`);
  if (!res.ok) {
    throw new Error("이미지를 불러오는데 실패했습니다.");
  }
  return res.blob();
};

export default function useGetRealTimeImage() {
  return useQuery<Blob, Error>({
    queryKey: ["image"],
    queryFn: realTimeImageFetcher,
  });
}
