export default function Container(props) {
    return (
        <div className="container py-5">
            {props.children}
        </div>
    )
}