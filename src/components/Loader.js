import { TailSpin } from "react-loader-spinner";

const Loader = () => {
    return(
        <div className="loader h-100 d-flex align-items-center">
            <TailSpin color="#FFF" height={60} width={60} />
        </div>
    )
}

export default Loader;