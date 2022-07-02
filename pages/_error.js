import Leyout from "../components/leyout";

const _error = ({statusCode}) => {
    return (
        <Leyout>
            {
                statusCode ? (
                <p className="tect-center">Could not load your page {statusCode}</p>
                ):(
                    <p>Cound not get this page</p>
                )
            }
        </Leyout>
    )
}
export default _error;