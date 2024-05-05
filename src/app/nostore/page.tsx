import ServerComponent from "@/components/serverComponent";
import ClientComponent from "@/components/clientComponent";

export default function Page() {
    return (
        <div className={"flex flex-col items-center mt-2"}>
            <div className={"space-y-8"}>
                <ServerComponent noStoreEnabled={true}/>
            </div>
        </div>
    )
}
