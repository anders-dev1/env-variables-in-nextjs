import ClientComponent from "@/app/clientComponent";
import ServerComponent from "@/app/serverComponent";

export default function Home() {
    return (
        <div className={"flex flex-col items-center mt-2"}>
            <div className={"space-y-8"}>
                <p className={"text-3xl"}>Env variables in different scenarios</p>
                <ServerComponent noStoreEnabled={false}/>
                <ServerComponent noStoreEnabled={true}/>
                <ClientComponent/>
            </div>
        </div>
    );
}
