import NotFound from "@/app/+not-found";
import { usePathname, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
export default function Index() {
  const router = useRouter();
  const pathname = usePathname();

  if (
    ![
      "activity",
      "activity/follows",
      "activity/mentions",
      "activity/replies",
      "activity/quotes",
      "activity/reposts",
      "activity/verified",
    ].includes(pathname)
  ) {
    return <NotFound />;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <TouchableOpacity onPress={() => router.push(`/activity`)}>
          <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push(`/activity/follows`)}>
          <Text>Follows</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push(`/activity/mentions`)}>
          <Text>Replies</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push(`/activity/replies`)}>
          <Text>Mentions</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push(`/activity/quotes`)}>
          <Text>Quotes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push(`/activity/reposts`)}>
          <Text>Reposts</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push(`/activity/verified`)}>
          <Text>Verified</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
