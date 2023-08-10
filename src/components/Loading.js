import "../components/Loading.css"

export default function Loading() {
    return (
        <div className={"loading"}>
            <div className={"loading-text"}>
                fetching data...
            </div>
        </div>
    )
}