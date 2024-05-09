import ServerComponent from "@/components/serverComponent";
import ClientComponent from "@/components/clientComponent";

export default function Page() {
    return (
        <div className={"flex flex-col items-center mt-2"}>
            <div className={"space-x-8 flex"}>
                <ServerComponent noStoreEnabled={true}/>
                <ClientComponent noStoreEnabled={true}/>
            </div>
        </div>
    )
}
