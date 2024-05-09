import ClientComponent from "@/components/clientComponent";
import ServerComponent from "@/components/serverComponent";

export default function Home() {
    return (
        <div className={"flex flex-col items-center mt-2"}>
            <div className={"space-x-8 flex"}>
                <ServerComponent noStoreEnabled={false}/>
                <ClientComponent noStoreEnabled={false}/>
            </div>
        </div>
    );
}
